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
    email: "davritsevich1@gmail.com",
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
        email: "davritsevich1@gmail.com",
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
