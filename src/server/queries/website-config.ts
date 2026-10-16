
import {
  type CardDisplayConfig,
  DEFAULT_CARD_DISPLAY,
  resolveCardDisplay,
} from "~/lib/card-display";
// Sólo el tipo: `listings.ts` importa de aquí en tiempo de ejecución, y un
// import de valor cerraría el ciclo.
import type { SortOption } from "./listings";
import {
  isAccount139,
  ACCOUNT_139_DESCRIPTION_ALIGN,
} from "~/lib/account-overrides/139";
import {
  isAccount155,
  ACCOUNT_155_FEATURED_MODE,
  ACCOUNT_155_FEATURED_GRID_COUNT,
} from "~/lib/account-overrides/155";
import { parseGoogleTag } from "~/lib/google-tag";
import {
  resolveVideoFeatures,
  type ResolvedVideoFeatures,
  type VideoFeatures,
} from "~/lib/video-features";

export type LinkItem = {
  title: string;
  url: string;
};

export type LinkCategory = {
  name: string;
  links: LinkItem[];
};

export const getLinksProps = (_accountIdArg?: bigint): LinkCategory[] => {
  return [];
}

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  questions: FaqItem[];
};

export const getFaqsProps = (_accountIdArg?: bigint): FaqCategory[] => {
  return [{
  "category": "Comprar una Propiedad",
  "questions": [{
  "question": "¿Qué documentación necesito para comprar una propiedad?",
  "answer": "Para comprar una propiedad en España necesitará: NIE (Número de Identificación de Extranjero) si no es ciudadano español, prueba de ingresos (nóminas, declaración de la renta), extractos bancarios de los últimos 3 meses, y pre-aprobación hipotecaria si necesita financiación. También recomendamos contar con un abogado especializado en derecho inmobiliario."
}, {
  "question": "¿Cuánto dinero necesito para las arras o señal?",
  "answer": "Las arras o señal suelen representar entre el 5% y 10% del precio de venta de la propiedad, siendo el 10% lo más habitual. Este dinero se entrega al firmar el contrato de arras y se descontará del precio final en la escritura pública. Es importante especificar el tipo de arras (confirmatorias, penitenciales o penales) en el contrato."
}, {
  "question": "¿Qué gastos adicionales debo considerar al comprar?",
  "answer": "Los gastos adicionales incluyen: Impuesto de Transmisiones Patrimoniales (ITP) del 6-10% para propiedades usadas o IVA del 10% más AJD (0.5-1.5%) para obra nueva, gastos de notaría (0.1-0.5%), registro de la propiedad (0.1-0.3%), tasación (300-600€), gestoría (300-800€), y abogado (0.5-1% del precio). En total, calcule entre 10-15% del precio de compra."
}, {
  "question": "¿Cuánto tiempo toma el proceso de compra?",
  "answer": "El proceso completo suele tomar entre 6-12 semanas desde la oferta hasta la firma de la escritura. Esto incluye: negociación y firma de arras (1-2 semanas), solicitud y aprobación de hipoteca (3-6 semanas), y preparación de documentación legal (2-3 semanas). Los plazos pueden variar según la complejidad de la operación."
}]
}, {
  "category": "Vender una Propiedad",
  "questions": [{
  "question": "¿Qué documentos necesito para vender mi propiedad?",
  "answer": "Necesitará: escritura pública de la propiedad, nota simple del registro de la propiedad (actualizada), certificado energético vigente, recibo del IBI (último pagado), recibos de gastos de comunidad al corriente, cédula de habitabilidad (si es requerida en su comunidad autónoma), y planos de la vivienda si están disponibles."
}, {
  "question": "¿Cómo se determina el precio de venta de mi propiedad?",
  "answer": "El precio se determina mediante un análisis comparativo de mercado que considera: ubicación, tamaño, estado de conservación, características especiales, precios de propiedades similares vendidas recientemente, tendencias del mercado local, y mejoras realizadas. Ofrecemos una valoración gratuita y profesional de su propiedad."
}, {
  "question": "¿Cuáles son los gastos de venta para el propietario?",
  "answer": "Como vendedor, normalmente pagará: comisión inmobiliaria (3-6% + IVA), plusvalía municipal si corresponde (variable según años de tenencia y valor catastral), certificado energético (100-300€), y posibles reparaciones menores recomendadas. En algunos casos también impuestos sobre ganancias patrimoniales."
}]
}, {
  "category": "Alquilar una Propiedad",
  "questions": [{
  "question": "¿Qué documentación se requiere para alquilar?",
  "answer": "Los inquilinos típicamente necesitan: DNI/NIE, nóminas de los últimos 3 meses, contrato de trabajo, declaración de la renta del año anterior, referencias de arrendadores anteriores si las hubiera, y aval bancario o avalista (persona física que garantice el pago). Los ingresos deben ser al menos 3 veces el alquiler mensual."
}, {
  "question": "¿Cuánto se paga de fianza y cuándo se devuelve?",
  "answer": "La fianza legal es de 1 mensualidad para vivienda y 2 para uso diferente. Se deposita en el organismo autonómico correspondiente. Se devuelve al finalizar el contrato, descontando posibles daños o deudas pendientes. En Madrid y otras comunidades también puede requerirse una fianza adicional equivalente a 1-2 mensualidades."
}, {
  "question": "¿Cuál es la duración mínima de un contrato de alquiler?",
  "answer": "Para vivienda habitual, la duración mínima es de 5 años (7 años si el propietario es persona jurídica) según la LAU. El inquilino puede desistir a partir del sexto mes con 30 días de preaviso. Para alquileres de temporada, la duración se pacta libremente según la necesidad temporal acreditada (estudios, trabajo, etc.), sin un límite fijo por ley."
}]
}, {
  "category": "Legal y Administrativo",
  "questions": [{
  "question": "¿Qué es el NIE y cómo lo obtengo?",
  "answer": "El NIE (Número de Identificación de Extranjero) es obligatorio para extranjeros que realicen actividades en España, incluyendo compra de propiedades. Se solicita en: comisarías de policía especializadas, oficinas de extranjería, o consulados españoles en el extranjero. Necesitará: formulario EX-15, pasaporte, justificación del motivo (contrato de arras o certificado de interés de compra), y el pago de la tasa correspondiente."
}, {
  "question": "¿Necesito un abogado para comprar una propiedad?",
  "answer": "Aunque no es legalmente obligatorio, es altamente recomendable, especialmente para compradores extranjeros. Un abogado especializado le ayudará con: revisión de contratos, verificación de cargas sobre la propiedad, asesoramiento fiscal, representación en la compraventa, y resolución de posibles problemas legales. Los honorarios suelen ser del 0.5-1% del precio de compra."
}, {
  "question": "¿Qué es una nota simple y por qué es importante?",
  "answer": "La nota simple es un documento emitido por el Registro de la Propiedad que muestra la situación legal actual de una propiedad: propietario actual, cargas, hipotecas, embargos, o cualquier limitación sobre la propiedad. Es fundamental solicitarla antes de comprar para verificar que el vendedor es el legítimo propietario y que no existen cargas ocultas."
}]
}];
}

/**
 * Per-account website feature flags + light config. Stored as a JSON string in
 * `website_config.features_props`. Every field is optional; when undefined the
 * caller falls back to the historical default, so a null column = today's behavior.
 */
export type FeaturesProps = {
  pages?: {
    promociones?: boolean;
    servicios?: boolean;
    nosotros?: boolean;
  };
  sections?: {
    socialFamily?: boolean;
    /**
     * Show `about_props.image` beside the homepage "Sobre Nosotros" text, with
     * the services grid moved under it. Default false: the section stays
     * text-only, as it is for every account that never set this.
     */
    aboutImage?: boolean;
    /**
     * Where the social-family (Instagram) section renders on the homepage:
     * "top" (default, right below the hero) or "bottom" (just above Contacto).
     */
    socialFamilyPosition?: "top" | "bottom";
    /**
     * Subtitle under the social-family heading. Set to "" to hide it, mirroring
     * the menuLabels convention. Unset → the historical default copy.
     */
    socialFamilySubtitle?: string;
    /**
     * Which networks appear as cards in the social-family section. Unset → all
     * configured networks. The navbar/footer always show everything, so an
     * account can run four icons but feature only three as cards.
     */
    socialFamilyPlatforms?: (
      | "facebook"
      | "twitter"
      | "instagram"
      | "linkedin"
      | "youtube"
      | "tiktok"
    )[];
    /** Show the "Sobre Nosotros" section (services + mission + KPIs) on the homepage. Default true. */
    about?: boolean;
  };
  menuLabels?: {
    segundaMano?: string;
    alquilar?: string;
    inversion?: string;
    inversionSubtitle?: string;
    inversionHref?: string;
    vender?: string;
    /** Label for the navbar Nosotros link (e.g. "Sobre GO4"). Default "Nosotros". */
    nosotros?: string;
    /** Label for the contact CTA / titles (e.g. "Contacto"). Default "Contáctanos". */
    contacto?: string;
  };
  /** Hero shows direct-access buttons instead of the search bar. */
  heroDirectAccess?: boolean;
  /**
   * Copy and destination of each direct-access button. Read and validated by
   * `getHeroDirectButtons`, not from here — an empty or absent list falls back
   * to the two built-in Venta/Alquiler pills.
   */
  heroDirectButtons?: unknown[];
  /**
   * Placeholder inside the hero search bar. Unset → "¿Dónde quieres vivir?".
   * Only read when `heroDirectAccess` is off.
   */
  heroSearchPlaceholder?: string;
  /** Navbar Venta/Alquiler are direct links (no property-type mega-menu). */
  navDirectLinks?: boolean;
  /**
   * Order of the navbar entries, as keys ("venta", "alquiler", …), dragged from
   * the CRM. Unset → the order this template ships with. An entry the list
   * doesn't mention keeps its place; see `~/lib/nav-order`.
   */
  navOrder?: string[];
  /**
   * Show the navbar "Busca" search box (free text: reference, address, city,
   * title). Kept under the original key so existing site configs keep working.
   * Default true.
   */
  referenceSearch?: boolean;
  /** Show the bottom call-to-action on the /servicios page. Default true. */
  serviciosCta?: boolean;
  /**
   * Show the Servicios link in the navbar. Default true. Set false to keep the
   * /servicios page reachable (e.g. via a promo card) without a top-nav link.
   */
  serviciosInNav?: boolean;
  /**
   * Declared so the generated literal type-checks, not because the site reads
   * it: the CRM stores a `serviciosLayout` that this template never
   * implemented. Anything `features_props` holds has to exist here — the baked
   * literal is checked against this interface, and an undeclared key fails the
   * whole build. Account 122 could not publish at all because of this one.
   */
  serviciosLayout?: string;
  /**
   * "icons": services on the homepage and /servicios as an even two-column
   * list (brand-colour icon, title, description) instead of cards. Unset →
   * "cards", the look every existing site has.
   */
  servicesStyle?: "cards" | "icons";
  /**
   * Show the Contacto link in the navbar. Default true. Set false to drop the
   * top-nav entry while /contacto stays reachable (footer, CTAs, direct link) —
   * same split as `serviciosInNav`, for agencies whose bar ends elsewhere.
   */
  contactoInNav?: boolean;
  /** Contact CTA shows only the button (no heading/blurb). Default false. */
  contactCtaMinimal?: boolean;
  /** Navbar logo size. Unset → "standard". */
  logoSize?: "standard" | "medium" | "large" | "xlarge";
  /** Invert the logo colors on light backgrounds (navbar when scrolled) — for white logos. */
  logoInvertOnLight?: boolean;
  /** Darkness of the overlay over the hero background (0–1). Default 0.35. */
  heroOverlayOpacity?: number;
  /**
   * Dark-to-transparent gradient behind the navbar on the hero, so white nav
   * links stay legible over bright skies without dimming the whole media.
   */
  heroTopScrim?: boolean;
  /** Hero section height: "standard" (~88vh) or "full" (fills the screen). */
  heroSize?: "standard" | "full";
  /**
   * Hero banner height on the inner pages (/servicios, /nosotros):
   * "short" (~50vh) | "standard" (~75vh, default) | "full" (fills the screen).
   */
  pageHeroSize?: "short" | "standard" | "full";
  /**
   * "minimal" hides the small uppercase kicker above section titles and the
   * subtitle below them, site-wide, for a cleaner look. Defaults to "standard".
   */
  headerStyle?: "standard" | "minimal";
  /**
   * Site-wide look. "editorial": left-aligned hero over a primary-colour tint
   * with two buttons instead of the search bar, headings in the heading font,
   * and (when contact_props.image is set) a brand-coloured "Ven a vernos"
   * panel above the contact form. Unset → "standard", the look every existing
   * site has.
   */
  siteStyle?: "standard" | "editorial";
  /**
   * Paint the footer with the account's primary colour instead of the fixed
   * dark navy. Default false. Only for dark primaries: the text stays white.
   */
  footerBrand?: boolean;
  /** When true, footer navigation renders as cards and the property-types column is hidden. */
  footerCards?: boolean;
  /**
   * /nosotros page layout. "default" (centered origins → values grid → team
   * grid) | "split" (origins left, values cards right, compact team below).
   * Unset → "default". Both variants render entirely from about_props.
   */
  nosotrosLayout?: "default" | "split";
  /**
   * Text alignment for description/paragraph blocks (service-card descriptions,
   * About/Nosotros body, property descriptions). Unset → keep each block's
   * existing alignment; "justify"/"center" override it site-wide.
   */
  descriptionAlign?: "justify" | "center";
  /**
   * Property-detail "Características" section layout.
   * "sections" (default) → grouped with section titles and the
   * "Ver más características" toggle. "flat" → every detail row in one block
   * and every feature chip in another, with no section titles or toggle.
   */
  characteristicsLayout?: "sections" | "flat";
  /**
   * Visual style of the property-detail characteristics.
   * "default" (today) | "boxed" (stat cards) | "emphasized" (stacked rows with
   * stronger hierarchy) | "twotone" (filled panel with alternating row shading).
   */
  characteristicsStyle?: "default" | "boxed" | "emphasized" | "twotone";
  /**
   * Homepage "Propiedades destacadas" behavior.
   * "grid" (default) → the full card grid, button navigates to the search page.
   * "feed" → a short teaser grid whose button opens the full-screen vertical
   * property feed (TikTok style) in place, without leaving the homepage.
   */
  featuredMode?: "grid" | "feed";
  /**
   * How many cards the "Propiedades destacadas" grid shows. Unset → every
   * listing fetched (12) in "grid" mode, 3 in "feed" mode.
   */
  featuredGridCount?: number;
  /**
   * ES/EN switcher in the header, backed by GTranslate. Kit Digital requires
   * the site in at least one other language. Unset/false → no switcher. Set in
   * the DB (not an account override): generated sites inline features_props.
   */
  languageSwitcher?: boolean;
  /** How property videos are shown. See ~/lib/video-features. */
  video?: VideoFeatures;
};

/** Read the legacy `metadata.modules.promotions` flag (older accounts gated /promociones here). */
function readLegacyPromotions(
  metadata: string | null | undefined,
): boolean | undefined {
  if (!metadata) return undefined;
  try {
    const raw =
      typeof metadata === "string"
        ? (JSON.parse(metadata) as unknown)
        : metadata;
    const modules =
      raw && typeof raw === "object" && "modules" in raw
        ? (raw as { modules?: { promotions?: unknown } }).modules
        : undefined;
    return modules?.promotions === true ? true : undefined;
  } catch {
    return undefined;
  }
}

export const getFeaturesProps = (_accountIdArg?: bigint): FeaturesProps => {
  return {
  "pages": {
  "servicios": true,
  "nosotros": false,
  "promociones": true
},
  "menuLabels": {
  "vender": "",
  "contacto": "Localización y contacto",
  "segundaMano": "Venta",
  "inversion": "",
  "alquilar": "Alquiler"
},
  "logoSize": "xlarge",
  "heroSize": "full",
  "pageHeroSize": "standard",
  "navDirectLinks": true,
  "headerStyle": "standard",
  "serviciosInNav": false,
  "sections": {
  "aboutImage": true
},
  "footerBrand": true,
  "siteStyle": "editorial",
  "navOrder": ["venta", "alquiler", "promociones", "inversion", "vender", "nosotros", "servicios", "blog", "contacto", "enlaces"],
  "video": {

},
  "ctaBand": {

}
};
}

/**
 * Video display settings with every unset option at its original behaviour.
 * A plain function on purpose: getFeaturesProps is already request-cached, and
 * the site generator's static transform only rewrites `cache(async () => {…})`
 * with a block body — an expression-bodied `cache(...)` survived it while its
 * `cache` import was stripped, and every generated site failed to build.
 */
export async function getVideoFeatures(
  accountIdArg?: bigint,
): Promise<ResolvedVideoFeatures> {
  return resolveVideoFeatures((await getFeaturesProps(accountIdArg)).video);
}

export type ModulesConfig = {
  promotionsEnabled: boolean;
};

// Thin wrapper kept for existing callers; promotions now lives in features_props
// (with legacy metadata.modules.promotions folded in by getFeaturesProps).
export const getModulesConfig = (): ModulesConfig => {
  return {
  "promotionsEnabled": false
};
}

export type PropertiesConfig = {
  title: string;
  subtitle: string;
  buttonText: string;
  itemsPerPage?: number;
  // Ya traducido al vocabulario de esta app por `resolveDefaultSort`: el CRM
  // guarda el suyo (`date-desc`, `date-asc`) y aquí nunca existió.
  defaultSort: SortOption;
  showDescription?: boolean;
  showReference?: boolean;
  // Días que un Vendido/Alquilado sigue en la web tras cerrarse. 0 (el valor
  // por defecto, y el que aplica a cualquier cuenta sin configurar) = sale al
  // instante. Lo consume `visibleStatusCondition` en queries/filters.ts.
  soldVisibilityDays: number;
  cardDisplay: CardDisplayConfig;
};

/** Rango que acepta el formulario del CRM; sanea JSON manipulado o antiguo. */
function resolveSoldVisibilityDays(raw: unknown): number {
  if (typeof raw !== "number" || !Number.isFinite(raw)) return 0;
  return Math.min(365, Math.max(0, Math.trunc(raw)));
}

/**
 * El selector "Orden por defecto" del CRM guarda su propio vocabulario
 * (`date-desc`, `date-asc`), que nunca existió aquí: el valor se leía, no se
 * traducía y no lo consumía ningún ORDER BY, así que la elección de la agencia
 * no llegaba a la web. Esta tabla es el único punto donde los dos vocabularios
 * se encuentran, y es la misma que usa v1 (`vestawebpage`).
 *
 * `price-desc` —el valor por defecto del CRM— cae en `"default"` a propósito:
 * el orden agrupado por tipo ya es precio descendente dentro de cada grupo, y
 * mapearlo al `price-desc` plano cambiaría el listado de las cuentas que nunca
 * tocaron el selector.
 */
const CRM_SORT_ALIASES: Record<string, SortOption> = {
  "price-desc": "default",
  "price-asc": "price-asc",
  "date-desc": "newest",
  "date-asc": "oldest",
};

const VALID_SORTS: readonly SortOption[] = [
  "default",
  "newest",
  "oldest",
  "price-asc",
  "price-desc",
  "size-asc",
  "size-desc",
];

// No se exporta: este módulo lleva "use server" y ahí sólo pueden exportarse
// funciones async. Exportar este helper síncrono hace que Next se niegue a
// compilar el módulo entero ("Server Actions must be async functions"), lo que
// tumba todas las páginas que leen website_config. No tiene llamantes fuera de
// este fichero.
function resolveDefaultSort(raw: unknown): SortOption {
  if (typeof raw !== "string") return "default";
  return (
    CRM_SORT_ALIASES[raw] ??
    (VALID_SORTS.includes(raw as SortOption) ? (raw as SortOption) : "default")
  );
}

export const getPropertiesConfig = (_accountIdArg?: bigint): PropertiesConfig => {
  return {
  "title": "Propiedades Destacadas",
  "subtitle": "Descubre nuestra selección de propiedades disponibles",
  "buttonText": "Ver Todas las Propiedades",
  "cardDisplay": {
  "cardTitle": "listing",
  "cardEyebrow": "location",
  "cardLocationField": "province"
},
  "soldVisibilityDays": 0,
  "defaultSort": "default"
};
}

export type SEOConfig = {
  title: string;
  description: string;
  name?: string;
  image?: string;
  url?: string;
  telephone?: string;
  email?: string;
  keywords?: string[] | string; // Support both array and string formats
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  /** Per-account Google Analytics 4 measurement ID (e.g. "G-XXXXXXXXXX"). */
  gaMeasurementId?: string;
};

/**
 * Pull the Google tag id out of `head_props`, the blob the website editor
 * writes. `parseGoogleTag` accepts the whole snippet Google hands out, not just
 * a bare id — see its own notes for why that matters.
 */
function readGoogleAnalyticsId(raw: string | null | undefined): string | undefined {
  if (!raw) return undefined;
  try {
    const parsed = JSON.parse(raw) as { googleAnalytics?: unknown };
    return parseGoogleTag(
      typeof parsed?.googleAnalytics === "string" ? parsed.googleAnalytics : null,
    )?.id;
  } catch {
    return undefined;
  }
}

export const getSEOConfig = (_accountIdArg?: bigint): SEOConfig => {
  return {
  "title": "Muñoz Espasande Inmobiliaria | Inmobiliaria en Gijón",
  "description": "Inmobiliaria y administración de fincas en Gijón. Compra, venta y alquiler de inmuebles en toda Asturias, con más de 25 años de experiencia a tu lado.",
  "keywords": "Compraventa de viviendas, Alquiler y gestión de carteras de inmuebles, locales, garajes, oficinas y terrenos, Herencias, donaciones y sucesiones, Tasaciones judiciales y periciales, Gijón, Asturias",
  "name": "Muñoz Espasande Inmobiliaria",
  "email": "inmobiliaria@munozespasande.com",
  "telephone": "984 485 585",
  "url": "https://www.munozespasande.com",
  "ogTitle": "Muñoz Espasande Inmobiliaria",
  "ogDescription": "Inmobiliaria y administración de fincas en Gijón. Compra, venta y alquiler de inmuebles en toda Asturias, con más de 15 años de experiencia a tu lado.",
  "ogImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/hero/background-poster_VmRV0tSf.jpg",
  "ogType": "website",
  "ogUrl": "",
  "ogLocale": "es_ES",
  "ogSiteName": "Muñoz Espasande Inmobiliaria"
};
}
