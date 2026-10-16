import { GeistSans } from "geist/font/sans";
import {
  Roboto,
  Roboto_Condensed,
} from "next/font/google";
import type { FontFamilyKey } from "~/lib/data";

const roboto = Roboto({ subsets: ["latin"], display: "swap", variable: "--font-roboto", weight: ["300", "400", "500", "700"] });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], display: "swap", variable: "--font-roboto-condensed" });

type FontEntry = { loader: { variable: string; className: string }; cssVar: string };

export const fontCatalog: Partial<Record<FontFamilyKey, FontEntry>> = {
  geist: { loader: GeistSans, cssVar: "var(--font-geist-sans)" },
  roboto: { loader: roboto, cssVar: "var(--font-roboto)" },
  robotoCondensed: { loader: robotoCondensed, cssVar: "var(--font-roboto-condensed)" },
};

export const allFontVariables = Object.values(fontCatalog)
  .filter((entry): entry is FontEntry => Boolean(entry))
  .map((entry) => entry.loader.variable)
  .join(" ");
