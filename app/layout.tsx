import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";

import { PoppinsFont, cn } from "@/Utils";
import Footer from "@/Components/Footer";

import { Analytics } from "@vercel/analytics/react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={cn(PoppinsFont.className, "flex w-full flex-col")}>
        <Header />
        <main className="mb-4 min-h-full w-full flex-auto">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
