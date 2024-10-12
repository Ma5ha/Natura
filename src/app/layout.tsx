import type { Metadata } from "next";
import "./globals.css";
import Nav from "./nav";

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
      <body className="font-inter ">
        <Nav />
        <main className="bg-primary/250 h-screen w-full pt-[64px]">
          {children}
        </main>
      </body>
    </html>
  );
}
