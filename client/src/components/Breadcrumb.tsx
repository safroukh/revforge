import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

export default function Breadcrumb({ items, currentPage }: BreadcrumbProps) {
  const { language } = useTranslation();

  // Generate JSON-LD schema for breadcrumb
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        ...items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.label,
          "item": `https://revforge.io${item.href}`
        })),
        {
          "@type": "ListItem",
          "position": items.length + 1,
          "name": currentPage
        }
      ]
    };

    // Add or update breadcrumb schema
    let schemaScript = document.querySelector('script[data-breadcrumb="true"]');
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.setAttribute("type", "application/ld+json");
      schemaScript.setAttribute("data-breadcrumb", "true");
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(breadcrumbSchema);
  }, [items, currentPage]);

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link href={item.href}>
              <a className="hover:text-primary transition-colors">
                {item.label}
              </a>
            </Link>
            {index < items.length - 1 && (
              <ChevronRight size={16} className="text-border" />
            )}
          </li>
        ))}
        {items.length > 0 && (
          <ChevronRight size={16} className="text-border" />
        )}
        <li className="text-foreground font-medium">{currentPage}</li>
      </ol>
    </nav>
  );
}
