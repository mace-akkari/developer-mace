import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Mace",
  description: "Mace Akkari's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
