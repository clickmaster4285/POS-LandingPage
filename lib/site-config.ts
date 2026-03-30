/** Canonical marketing site */
export const CLICKMASTERS_SITE_URL = "https://clickmasters.pk" as const

/** Software / services subsite (forms, broader offerings) */
export const CLICKMASTERS_SOFTWARE_URL = "https://software.clickmasters.pk" as const

export const COMPANY = {
  name: "ClickMasters",
  shortDescription:
    "Custom software, web applications, mobile apps, and ERP solutions for growing businesses.",
  phoneDisplay: "+92 332 5394285",
  phoneE164: "923325394285",
  address: {
    street: "PWD Housing Society",
    locality: "Islamabad",
    region: "Punjab",
    postalCode: "45700",
    country: "Pakistan",
  },
  hours: "Monday–Saturday, 9:00–18:00",
} as const

export function companyAddressLines(): string[] {
  const { street, locality, region, postalCode, country } = COMPANY.address
  return [`${street}`, `${locality}, ${region} ${postalCode}`, country]
}
