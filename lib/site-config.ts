import type { Metadata } from "next";

const fallbackUrl = "https://mail-flow-crm.ru";

export const siteConfig = {
  name: "MailFlow",
  domain: fallbackUrl,
  description:
    "MailFlow помогает сетям, франшизам и маркетинговым командам планировать промо-акции, бюджеты, задачи, интеграции и результаты в одном MPC-контуре.",
  keywords: [
    "MailFlow",
    "Enterprise Marketing Planning",
    "Marketing Planning Control",
    "MPC система для маркетинга",
    "промо-календарь",
    "бюджетирование маркетинга",
    "контроль маркетингового бюджета",
    "маркетинговые активности",
    "маркетинговые задачи",
    "интеграции маркетинга",
    "единая система маркетинга сети",
    "пилот SaaS"
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
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
