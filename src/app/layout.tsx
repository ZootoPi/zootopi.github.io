import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zootopi - Share what we love!",
  description:
    "Discover stories, insights, and knowledge from the Zootopi team. Join us on a journey of learning and sharing.",
  openGraph: {
    title: "Zootopi - Share what we love!",
    description:
      "Discover stories, insights, and knowledge from the Zootopi team.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
