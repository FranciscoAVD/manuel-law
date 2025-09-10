import type { Metadata } from "next";
import { Quattrocento, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getDictionay } from "@/lib/dictionaries/get-dictionary";

const inter = Inter({
  variable: "--font-geist-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const quattrocento = Quattrocento({
  variable: "--font-quattrocento",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Manuel Alejandro Law Firm",
  description: "Attorney at law in the state of Florida.",
  keywords: [
    "South Florida Attorney",
    "South Florida Lawyer",
    "Miami Attorney",
    "Miami Lawyer",
    "Florida Attorney",
    "Florida Lawyer",
    "Federal Attorney",
    "Federal Lawyer",
    "Criminal Attorney",
    "Criminal Lawyer",
    "Civil Attorney",
    "Civil Lawyer",
    "Family Attorney",
    "Family Lawyer",
    "Appellate Attorney",
    "Appellate Lawyer",
  ],
};

/**
abogado en Florida
abogado en Miami
abogado federal
abogado penal
abogado civil
abogado de familia
abogado de apelaciones 
*/

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "es" }>;
}>) {
  const lang = (await params).lang;
  const dict = await getDictionay(lang);
  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} ${quattrocento.variable} antialiased`}
      >
        <Header content={dict.layout.header}/>
        {children}
        <Footer lang={lang} content={dict.layout.footer} services={dict.pages.services.services}/>
      </body>
    </html>
  );
}
