import { Metadata } from "next";
import SessionWrapper from "./sesion";

export const metadata: Metadata = {
  icons: { icon: "/natura.svg" },
  title: "Admin",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-h-screen">
      <body className="font-inter h-screen bg-gray-50 bg-linear-to-tl from-gray-200/50 from-50%">
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
