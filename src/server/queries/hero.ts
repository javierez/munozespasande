import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (_accountIdArg?: bigint): string[] => {
  return ["Gijón"];
}

// Using React cache to memoize the query
export const getHeroProps = (_accountIdArg?: bigint): HeroProps | null => {
  return {
  "title": "Nos preocupamos por tu tranquilidad y satisfacción",
  "subtitle": "Inmobiliaria y administración de fincas en Gijón. Compra, venta y alquiler de inmuebles en toda Asturias, con más de 15 años de experiencia.",
  "backgroundMedia": [{
  "url": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/website/oficina/hero-recepcion.jpg",
  "type": "image"
}],
  "backgroundImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/website/oficina/hero-recepcion.jpg",
  "backgroundVideo": "",
  "backgroundType": "image",
  "findPropertyButton": "Explorar Propiedades",
  "contactButton": "Contáctanos"
};
}
