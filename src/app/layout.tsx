import type { Metadata } from "next";
import "@fontsource/eb-garamond/400.css";
import "@fontsource/eb-garamond/500.css";
import "@fontsource/eb-garamond/600.css";
import "@fontsource/eb-garamond/700.css";
import "./globals.css";
import Nav from "./nav";
import Footer from "./footer";

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
      <body className="font-inter h-screen bg-gray-50 bg-gradient-to-tl from-gray-200/50 from-50% pt-[64px]">
        <Nav />
        <main className="bg-primary/250 h-full w-full snap-y snap-mandatory overflow-scroll ">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
