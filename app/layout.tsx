import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ClientStarCanvas from "@/components/main/ClientStarCanvas";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space Protfolio",
  description: "This is the My Space Protfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <ClientStarCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
