import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  subsets: ["latin"], // Spécifiez le jeu de caractères (latin est le standard)
  weight: ["400", "500", "600", "700"], // Choisissez les graisses dont vous avez besoin
  variable: "--font-montserrat", // Créez une variable CSS pour Tailwind
});

export const metadata: Metadata = {
  title: "Columno",
  description: "Collaborative project management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}
