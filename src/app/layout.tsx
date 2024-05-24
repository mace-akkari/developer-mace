import type { Metadata } from "next";

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
