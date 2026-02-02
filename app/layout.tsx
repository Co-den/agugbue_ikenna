import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agugbue Ikenna - Full-Stack Developer | React, Next.js, Node.js",
  description:
    "Full-Stack Developer specializing in scalable web applications, fintech systems, and secure APIs. 4+ years experience with React, Next.js, Node.js, and TypeScript.",
  openGraph: {
    title: "Agugbue Ikenna - Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in scalable web applications, fintech systems, and secure APIs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
