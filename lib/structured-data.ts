import { getBaseUrl, siteConfig } from "@/lib/site-config";
import { companyRequisites } from "@/lib/site-content";

export function organizationJsonLd() {
  const url = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: companyRequisites.shortLegalName,
    url,
    email: "hello@mail-flow-crm.ru",
    taxID: companyRequisites.inn,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyRequisites.legalAddress,
      addressCountry: "RU"
    },
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "ОГРН/ОГРНИП",
        value: companyRequisites.ogrnip
      },
      {
        "@type": "PropertyValue",
        propertyID: "Расчетный счет",
        value: companyRequisites.checkingAccount
      }
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@mail-flow-crm.ru",
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
