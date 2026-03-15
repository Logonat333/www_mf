import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBaseUrl, siteConfig } from "@/lib/site-config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

import "../styles.css";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  ...buildMetadata({
    title: "MailFlow | Контент-план и рассылки для B2B-команд",
    description: siteConfig.description,
    path: "/"
  }),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  category: "business",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/icon.svg"
  }
};

const themeScript = `
  (function () {
    var storageKey = "mailflow-theme";
    var stored = window.localStorage.getItem(storageKey);
    var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    var theme = stored === "dark" || stored === "light" ? stored : systemTheme;
    document.documentElement.setAttribute("data-theme", theme);
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <StructuredData data={[organizationJsonLd(), websiteJsonLd()]} />
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
