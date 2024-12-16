import Footer from "./(sections)/footer";
import Nav from "../components/nav";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const messages = await getMessages({ locale: params.locale });

  return (
    <html lang={params.locale}>
      <body className="font-inter h-screen bg-gray-50 bg-gradient-to-tl from-gray-200/50 from-50% !pt-[64px]">
        <NextIntlClientProvider messages={messages} locale={params.locale}>
          <Nav />
          <main className="bg-primary/250 h-full w-full snap-y snap-mandatory overflow-scroll ">
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
