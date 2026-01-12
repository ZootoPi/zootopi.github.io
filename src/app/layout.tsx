import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
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
    <html className="light" lang="en">
      <body
        className={`${inter.variable} flex min-h-screen flex-col bg-linear-to-b from-zinc-50 to-white antialiased dark:from-zinc-950 dark:to-zinc-900`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
