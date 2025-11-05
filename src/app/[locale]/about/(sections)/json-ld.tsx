import { getLocale, getTranslations } from "next-intl/server";

export default async function JsonLD() {
  const t = await getTranslations();
  const locale = await getLocale();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `${t("nav.about")} | Natura`,
    url: `https://www.domnatura.com/${locale}/about`,
    mainEntity: {
      "@type": "Nursing",
      name: "Natura",
      description: t("meta.description"),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
