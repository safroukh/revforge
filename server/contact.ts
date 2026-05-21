import type { Express, Request, Response } from "express";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@revforge.fr";
const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "RevForge <contact@revforge.fr>";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  arr?: string;
  message?: string;
  language?: string;
};

type NewsletterPayload = {
  email?: string;
  language?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(payload: Required<Omit<ContactPayload, "message">> & { message: string }) {
  const rows = [
    ["Nom", payload.name],
    ["Email", payload.email],
    ["Entreprise", payload.company],
    ["ARR", payload.arr],
    ["Langue", payload.language],
    ["Message", payload.message || "-"],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
      <h2>Nouvelle demande d'audit RevForge</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border: 1px solid #e5e7eb; padding: 10px; font-weight: 700; width: 160px;">${label}</td>
                <td style="border: 1px solid #e5e7eb; padding: 10px;">${escapeHtml(value).replace(/\n/g, "<br />")}</td>
              </tr>
            `
          )
          .join("")}
      </table>
    </div>
  `;
}

export function registerContactRoutes(app: Express) {
  app.post("/api/contact", async (req: Request, res: Response) => {
    const payload = req.body as ContactPayload;
    const data = {
      name: text(payload.name),
      email: text(payload.email),
      company: text(payload.company),
      arr: text(payload.arr),
      message: text(payload.message),
      language: text(payload.language) || "fr",
    };

    if (!data.name || !data.email || !data.company || !data.arr) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!isValidEmail(data.email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: "Email service is not configured" });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: CONTACT_EMAIL,
        reply_to: data.email,
        subject: "Nouvelle demande d'audit Stripe - RevForge",
        html: buildEmailHtml(data),
        text: [
          "Nouvelle demande d'audit RevForge",
          "",
          `Nom : ${data.name}`,
          `Email : ${data.email}`,
          `Entreprise : ${data.company}`,
          `ARR : ${data.arr}`,
          `Langue : ${data.language}`,
          `Message : ${data.message || "-"}`,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", errorText);
      return res.status(502).json({ error: "Unable to send email" });
    }

    return res.status(200).json({ ok: true });
  });

  app.post("/api/newsletter", async (req: Request, res: Response) => {
    const payload = req.body as NewsletterPayload;
    const email = text(payload.email);
    const language = text(payload.language) || "fr";

    if (!email) {
      return res.status(400).json({ error: "Missing email" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: "Email service is not configured" });
    }

    const subject = "demande d'inscription à la newsletter";
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: CONTACT_EMAIL,
        reply_to: email,
        subject,
        html: `
          <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
            <h2>Demande d'inscription à la newsletter</h2>
            <p><strong>Email renseigné par le visiteur :</strong> ${escapeHtml(email)}</p>
            <p><strong>Langue :</strong> ${escapeHtml(language)}</p>
          </div>
        `,
        text: [
          "Demande d'inscription à la newsletter",
          "",
          `Email renseigné par le visiteur : ${email}`,
          `Langue : ${language}`,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", errorText);
      return res.status(502).json({ error: "Unable to send email" });
    }

    return res.status(200).json({ ok: true });
  });
}
