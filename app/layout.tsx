import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const fkscreamer = localFont({
  src: "../public/typography/FKScreamer.woff2",
  display: "swap",
  variable: "--font-fkscreamer",
  weight: "900",
});

const macan = localFont({
  src: "../public/typography/Macan-Bold.woff2",
  display: "swap",
  variable: "--font-macan",
  weight: "700",
});

const suisse = localFont({
  src: "../public/typography/SuisseIntl-Medium-WebM.woff2",
  display: "swap",
  variable: "--font-suisse",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${fkscreamer.variable} 
          ${macan.variable} 
          ${suisse.variable} 
          overflow-x-hidden antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
