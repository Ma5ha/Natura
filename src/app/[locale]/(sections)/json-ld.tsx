import { getLocale } from "next-intl/server";
import logo from "@public/natura.svg";

export default async function JsonLD() {
  const dayOfWeekEn = [
    "Sunday",
    "Saturday",
    "Friday",
    "Thursday",
    "Wednesday",
    "Tuesday",
    "Monday",
  ];

  const dayOfWeekSr = [
    "Nedjelja",
    "Subota",
    "Petak",
    "Četvrtak",
    "Srijeda",
    "Četvrtak",
    "Ponedjeljak",
  ];
  const locale = await getLocale();

  const dayOfWeek = locale === "sr" ? dayOfWeekSr : dayOfWeekEn;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Nursing",
    name: "Natura",
    image: logo.src,
    "@id": "https://www.domnatura.com",
    url: "https://www.domnatura.com",
    telephone: "+387 57 223 945",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pribanjska",
      addressLocality: "Istočno Sarajevo",
      postalCode: "71420",
      addressCountry: "BA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.8201,
      longitude: 18.5526,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek,
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: [
      "https://www.facebook.com/domzastarijalicaNatura",
      "https://www.instagram.com/dom_za_starija_lica_natura",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
