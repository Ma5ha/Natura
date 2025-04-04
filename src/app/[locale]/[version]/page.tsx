import { getTranslations, setRequestLocale } from "next-intl/server";
import Home from "../home";
import { home } from "@/constants/seo";
import { tVersion } from "@/util/t-version";
import { Metadata } from "next";
export function generateStaticParams() {
  return home.map(({ version }) => ({ version }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: "sr" | "en";
    version?: string;
  }>;
}) {
  const { locale, version } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    icons: { icon: "/natura.svg" },
    title: t(tVersion("title", version)),
    description: t(tVersion("description", version)),
  } as Metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "sr" | "en"; version: string }>;
}) {
  const { locale, version } = await params;

  setRequestLocale(locale);
  return <Home locale={locale} version={version} />;
}
