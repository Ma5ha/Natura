import Footer from "./(sections)/footer";
import Nav from "../components/nav";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";

import { Inter, EB_Garamond } from "next/font/google";
import { redirect } from "next/navigation";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});
const garamond = EB_Garamond({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-garamond",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: "sr" | "en";
  }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    icons: { icon: "/natura.svg" },
    title: t("title"),
    description: t("description"),
  } as Metadata;
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{
      locale: "sr" | "en";
    }>;
  }>
) {
  const params = await props.params;
  if (["sr", "en", "sitemap.xml"].includes(params.locale) === false)
    redirect("/sr");

  const { children } = props;

  const messages = await getMessages({ locale: params.locale });
  setRequestLocale(params.locale);

  return (
    <html
      lang={params.locale}
      className={`${inter.variable} ${garamond.variable}`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="2NTVpHl-NzR08ZK4suxTCX__s2L5NyxdToMyxVrEP7Q"
        />
        <link rel="icon" href="/natura.ico" />
      </head>
      <body className="font-inter h-screen bg-gray-50 bg-linear-to-tl from-gray-200/50 from-50% pt-[64px]!">
        <NextIntlClientProvider messages={messages}>
          <Nav />

          <main className="bg-primary/250 h-full w-full snap-y snap-mandatory overflow-auto ">
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
