import { setRequestLocale } from "next-intl/server";
import Home from "./home";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "sr" | "en" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Home locale={locale} />;
}
