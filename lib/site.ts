/** Site copy and links migrated from https://jasadallc.godaddysites.com */

export const SITE = {
  title: "JASADA, LLC",
  heroHeading: "Experienced Consulting",
  heroSubheading: "Helping you design success!",
  /** Set `NEXT_PUBLIC_CONTACT_EMAIL` in Vercel to override the default. */
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@jasadallc.com",
} as const;

const HISTORY_P1 =
  "James A. Sanders and Diversified Associates (JASADA) was started in 1983 with the goal to deliver value to our customers. The long term goal is to make any JASADA venture the measurement by which other businesses measure their competition. Ventures have included wholesaling, software with a Jeopardy controller for Desert Shadows Elementary School in Arizona, Inventory control for Hazelwood Enterprises in New Mexico, and in January 1989, JASADA, Inc. was created to become an IBM Application Specialist Firm with their first customer being Futures for Children.";

const HISTORY_P2 =
  "As an IBM Application Specialist Firm, JASADA, Inc. did work for the New Mexico Horse Racing Commission. This package was sold to Washington State's Horse Racing Commission. JASADA, Inc. became an IBM Authorized Marketing Assistant with the contract and sale to Washington State.";

const HISTORY_P3 =
  "The JASADA logo represents a diversified approach with unified operating entities. JASADA Trucking, Inc. was the first member of the 2012 renewed direction of the original JASADA partnership followed by JASADA Venture Capital, LLC. The JASADA emblem was originally registered with the State of New Mexico's Secretary of State in February, 1989.";

/** Short preview shown before expanding (matches the original “show more” teaser style). */
export const HISTORY_TEASER = `${HISTORY_P1.slice(0, 268).trim()}…`;

/** Full history shown when expanded. */
export const HISTORY_FULL: readonly string[] = [HISTORY_P1, HISTORY_P2, HISTORY_P3];
