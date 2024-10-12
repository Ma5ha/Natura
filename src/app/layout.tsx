import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natura",
  description: "Natura is old people care centar",
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
