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
      <body className="font-inter pt-[64px]  h-screen">
        <Nav />
        <main className="bg-primary/250 h-full w-full snap-y snap-mandatory overflow-scroll  ">
          {children}
        </main>
      </body>
    </html>
  );
}
