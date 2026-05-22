import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import { getBlogArticleBySlug } from "../../client/src/lib/blog-data";
import viteConfig from "../../vite.config";

const SITE_URL = "https://www.revforge.fr";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildMetaTag(attributes: Record<string, string>) {
  const serialized = Object.entries(attributes)
    .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
    .join(" ");
  return `<meta ${serialized} />`;
}

function getArticleMetaTags(url: string) {
  const pathname = url.split("?")[0] || "/";
  const match = pathname.match(/^\/blog\/([^/]+)\/?$/);

  if (!match) return "";

  const slug = decodeURIComponent(match[1]);
  const article =
    getBlogArticleBySlug(slug, "fr") || getBlogArticleBySlug(slug, "en");

  if (!article) return "";

  const title = `${article.title} | RevForge Blog`;
  const description = article.excerpt;
  const canonical = `${SITE_URL}/blog/${article.slug}`;

  return [
    `<title>${escapeHtml(title)}</title>`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    buildMetaTag({ name: "description", content: description }),
    buildMetaTag({ property: "og:title", content: title }),
    buildMetaTag({ property: "og:description", content: description }),
    buildMetaTag({ property: "og:type", content: "article" }),
    buildMetaTag({ property: "og:url", content: canonical }),
    buildMetaTag({ property: "og:site_name", content: "RevForge" }),
    buildMetaTag({ property: "og:locale", content: "fr_FR" }),
    buildMetaTag({ property: "og:image", content: article.image }),
    buildMetaTag({ property: "og:image:secure_url", content: article.image }),
    buildMetaTag({ property: "og:image:type", content: "image/webp" }),
    buildMetaTag({ property: "og:image:width", content: "1200" }),
    buildMetaTag({ property: "og:image:height", content: "630" }),
    buildMetaTag({ property: "og:image:alt", content: article.title }),
    buildMetaTag({ property: "article:published_time", content: article.date }),
    buildMetaTag({ name: "twitter:card", content: "summary_large_image" }),
    buildMetaTag({ name: "twitter:title", content: title }),
    buildMetaTag({ name: "twitter:description", content: description }),
    buildMetaTag({ name: "twitter:image", content: article.image }),
  ].join("\n");
}

function injectRouteMeta(html: string, url: string) {
  const routeMeta = getArticleMetaTags(url);
  if (!routeMeta) return html;

  return html
    .replace(/<title>.*?<\/title>/i, "")
    .replace(/<meta\s+name="description"[^>]*>\s*/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "")
    .replace(/<meta\s+(?:property|name)="(?:og:[^"]+|twitter:[^"]+|article:[^"]+)"[^>]*>\s*/gi, "")
    .replace("</head>", `${routeMeta}\n</head>`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = injectRouteMeta(await vite.transformIndexHtml(url, template), url);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", async (req, res, next) => {
    try {
      const indexPath = path.resolve(distPath, "index.html");
      const html = await fs.promises.readFile(indexPath, "utf-8");
      res
        .status(200)
        .set({ "Content-Type": "text/html" })
        .end(injectRouteMeta(html, req.originalUrl));
    } catch (error) {
      next(error);
    }
  });
}
