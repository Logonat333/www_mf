import { getBaseUrl, siteConfig } from "@/lib/site-config";

export function organizationJsonLd() {
  const url = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url,
    email: "hello@mail-flow-crm.ru",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@mail-flow-crm.ru",
        telephone: "+7-495-000-00-00",
        availableLanguage: ["Russian"]
      }
    ]
  };
}

export function websiteJsonLd() {
  const url = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url,
    inLanguage: "ru-RU",
    description: siteConfig.description
  };
}
