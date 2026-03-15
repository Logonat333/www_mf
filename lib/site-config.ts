import type { Metadata } from "next";

const fallbackUrl = "https://mail-flow-crm.ru";

export const siteConfig = {
  name: "MailFlow",
  domain: fallbackUrl,
  description:
    "MailFlow помогает B2B-командам управлять контент-планом, рассылками, ролями и мультипроектным контуром в едином интерфейсе.",
  keywords: [
    "MailFlow",
    "управление рассылками",
    "контент-план",
    "B2B маркетинг",
    "email operations",
    "control plane",
    "multi-project"
  ]
};

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl;
}

export function buildMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, getBaseUrl());
  const image = new URL("/og-image.svg", getBaseUrl());

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: url.toString()
    },
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: siteConfig.name,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: image.toString(),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.toString()]
    }
  };
}
