import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}
