import { Metadata } from "next";
import { getServerSession } from "next-auth";

import SessionWrapper from "./sesion";

export const metadata: Metadata = {
  icons: { icon: "/natura.svg" },
  title: "Admin",
  description: "...",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en" className="max-h-screen">
      <body className="font-inter h-screen bg-gray-50 bg-gradient-to-tl from-gray-200/50 from-50%">
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
