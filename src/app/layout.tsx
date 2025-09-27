import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina Model Academy",
  description: "Elite modeling education for children and teenagers. Professional training in runway, posing, and confidence building.",
  openGraph: {
    title: "Lumina Model Academy",
    description: "Elite modeling education for children and teenagers. Professional training in runway, posing, and confidence building.",
    url: "https://luminaacademy.com",
    siteName: "Lumina Model Academy",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Lumina Model Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Model Academy",
    description: "Elite modeling education for children and teenagers.",
    images: ["/og.jpg"],
  },
  metadataBase: new URL("https://luminaacademy.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Gelasio&family=Readex+Pro&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}