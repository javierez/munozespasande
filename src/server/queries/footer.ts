
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (_accountIdArg?: bigint): FooterProps | null => {
  return {
  "companyName": "Muñoz Espasande SL",
  "description": "Inmobiliaria y administración de fincas en Gijón, con más de 15 años cuidando de tu tranquilidad.",
  "socialLinks": {
  "facebook": "https://www.facebook.com/p/Dobleese-Multigestion-100063586771892/",
  "instagram": "https://www.instagram.com/dobleese_inmobiliaria/"
},
  "officeLocations": [{
  "name": "Oficina Gijón — Avenida del Llano",
  "address": ["Avda. del Llano, 14", "Gijón, Asturias"],
  "phone": "984 485 585",
  "email": "inmobiliaria@munozespasande.com"
}],
  "copyright": "© 2026 Muñoz Espasande SL. Todos los derechos reservados."
};
}
