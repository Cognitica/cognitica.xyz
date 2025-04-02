import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/ui/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cognitica | Experimental AI Products",
  description:
    "Cognitica creates cutting-edge experimental AI products that push the boundaries of what's possible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
