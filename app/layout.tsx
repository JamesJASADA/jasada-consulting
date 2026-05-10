import type { Metadata } from "next";
import "@carbon/styles/css/styles.css";
import "./globals.css";
import { CarbonProviders } from "@/components/CarbonProviders";

export const metadata: Metadata = {
  title: {
    default: "JASADA, LLC | Experienced Consulting",
    template: "%s | JASADA, LLC",
  },
  description:
    "Helping you design success. Experienced consulting from JASADA, LLC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CarbonProviders>{children}</CarbonProviders>
      </body>
    </html>
  );
}
