import type { AboutProps } from "../../lib/data";

// NOTE: resolveTeamPhotos lives in ./team-photos.ts (imported directly by
// callers). Keeping it out of this file lets the static-site transformer
// hardcode getAboutProps and strip this file's DB imports without breaking the
// runtime team-photo helper.

export const getAboutProps = (_accountIdArg?: bigint): AboutProps | null => {
  return {
  "title": "Sobre Nosotros",
  "subtitle": "Nos preocupamos por tu tranquilidad y satisfacción",
  "content": "Somos Muñoz Espasande, un equipo de profesionales con amplia experiencia contrastada dedicado a la compraventa y alquiler de inmuebles, la administración de fincas y el asesoramiento empresarial en Gijón y el resto de Asturias. Nos distinguimos por nuestra profesionalidad, cercanía y dedicación real a cada cliente que confía en nosotros.",
  "content2": "Analizamos el mercado, promocionamos tu inmueble, captamos clientes, negociamos y gestionamos todo el proceso administrativo de principio a fin. Estamos inscritos en el Colegio Oficial nº 684 y contamos con el API nº 270, garantía de un trabajo riguroso, transparente y orientado a tu tranquilidad y satisfacción.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/website/oficina/sobre-nosotros.jpg",
  "services": [{
  "title": "Compra y venta",
  "icon": "Home"
}, {
  "title": "Gestión de alquiler",
  "icon": "Key"
}, {
  "title": "Administración de fincas",
  "icon": "Building2"
}, {
  "title": "Tasaciones y valoraciones",
  "icon": "Calculator"
}, {
  "title": "Financiación",
  "icon": "Banknote"
}, {
  "title": "Cotización de seguros",
  "icon": "ShieldCheck"
}, {
  "title": "Asesoría de empresas",
  "icon": "Briefcase"
}],
  "maxServicesDisplayed": 6,
  "servicesSectionTitle": "Nuestros Servicios",
  "aboutSectionTitle": "Nuestra Misión",
  "buttonName": "Contacta a Nuestro Equipo",
  "showKPI": false,
  "kpi1Name": "Años de experiencia",
  "kpi1Data": "15+",
  "kpi3Name": "Zonas de actuación",
  "kpi3Data": "5",
  "originsTitle": "De dónde venimos",
  "originsContent": "En Muñoz Espasande le damos un enfoque diferente al trabajo de gestión de propiedades. Para nosotros, un gestor es una herramienta humana que escucha, gestiona y soluciona los problemas que se planteen. Con más de 15 años de experiencia, hoy gestionamos más de 4.900 viviendas en Gijón y acompañamos a nuestros clientes en la compra, la venta y el alquiler de su inmueble.",
  "values": [{
  "title": "Escuchar y resolver",
  "description": "Damos un enfoque diferente a la gestión de propiedades: somos una herramienta humana que escucha, gestiona y soluciona los problemas que se planteen.",
  "icon": "Ear"
}, {
  "title": "Transparencia",
  "description": "Transparencia total en la gestión económica: cada propietario sabe en todo momento en qué se emplea su dinero.",
  "icon": "Eye"
}, {
  "title": "Cumplimiento",
  "description": "Cumplimiento estricto de los compromisos adquiridos, observando los más altos estándares de calidad.",
  "icon": "CheckCircle"
}, {
  "title": "Disponibilidad 24 h",
  "description": "Servicio de atención 24 horas para incidencias y urgencias.",
  "icon": "Clock"
}, {
  "title": "Atención personalizada",
  "description": "Asesoramiento personalizado en cada operación y acompañamiento en todos los trámites, de principio a fin.",
  "icon": "Users"
}],
  "team": [{
  "name": "Silvia Canteli Casado",
  "role": "Socia Fundadora — Administradora de Fincas Colegiada nº 684",
  "photo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/team/silvia-canteli-casado.png"
}, {
  "name": "Sergio García Muñoz",
  "role": "Socio Fundador — Administrador de Fincas Colegiado nº 843 y Agente de la Propiedad Inmobiliaria Colegiado nº 270",
  "photo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/team/sergio-garci-a-mun-oz.jpeg"
}, {
  "name": "Fernando Ariza Álvarez",
  "role": "Gestor Inmobiliario",
  "phone": "684 625 674"
}, {
  "name": "Eva Castaño Cuesta",
  "role": "Gestora Inmobiliaria — Responsable de Marketing",
  "photo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/team/eva-castan-o-cuesta.jpeg",
  "phone": "722 250 711"
}, {
  "name": "Pablo Catoira Casal",
  "role": "Responsable de Gestión Económica de Comunidades de Propietarios",
  "photo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/team/pablo-catoira-casal.png"
}, {
  "name": "Javier Abello Gonzalo",
  "role": "Administrador de Comunidades — Gestor de Siniestros y Seguros"
}, {
  "name": "Bruno Márquez Sánchez",
  "role": "Atención al Cliente — Gestor de Incidencias",
  "photo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/team/bruno-ma-rquez-sa-nchez.png"
}, {
  "name": "Luis López Álvarez",
  "role": "Responsable de Asesoría de Empresas",
  "photo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/team/luis-lo-pez-a-lvarez.jpeg"
}, {
  "name": "Carolina Santos Muñiz",
  "role": "Responsable de Facturación",
  "photo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/team/carolina-santos-mun-iz.png"
}],
  "extendedServices": [{
  "title": "Compra y venta",
  "description": "Asesoramiento personalizado y gestión de todos los trámites de principio a fin: compraventas, herencias, donaciones y sucesiones, con publicación y seguimiento del inmueble hasta la firma.",
  "icon": "Home"
}, {
  "title": "Gestión de alquiler",
  "description": "Elaboración de contratos conforme a la legislación vigente, constitución y gestión de la fianza, publicidad específica del inmueble y gestión de su cartera con la máxima profesionalidad y eficacia.",
  "icon": "Key"
}, {
  "title": "Administración de fincas",
  "description": "Administración integral de comunidades de propietarios: gestión económica transparente, cumplimiento estricto de los compromisos y disponibilidad 24 horas ante incidencias.",
  "icon": "Building2"
}, {
  "title": "Tasaciones y valoraciones",
  "description": "Valoraciones inmobiliarias para procedimientos judiciales, reparto de herencias, embargos y garantías societarias, además del análisis de mercado previo a la venta.",
  "icon": "Calculator"
}, {
  "title": "Financiación",
  "description": "Soluciones de financiación personalizadas cuando la entidad bancaria no cubre la necesidad, siempre con entidades de crédito autorizadas por el Banco de España. Nos encargamos de todos los trámites administrativos.",
  "icon": "Banknote"
}, {
  "title": "Cotización de seguros",
  "description": "Comparativa y contratación de seguros para su vivienda, su comunidad o su negocio, con gestión de siniestros incluida.",
  "icon": "ShieldCheck"
}, {
  "title": "Asesoría de empresas",
  "description": "Asesoramiento fiscal, laboral y contable para propietarios, autónomos y sociedades vinculadas a la actividad inmobiliaria.",
  "icon": "Briefcase"
}],
  "nosotrosPageTitle": "Sobre Nosotros",
  "nosotrosPageSubtitle": "Más de 15 años de experiencia al servicio de tu tranquilidad y satisfacción",
  "servicesPageTitle": "Nuestros Servicios",
  "servicesPageSubtitle": "Todo lo que necesitas para comprar, vender, alquilar o gestionar tu inmueble en Asturias",
  "servicesHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/hero/servicios-hero-poster_lSxjqq53.jpg",
  "servicesHeroVideo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/hero/servicios-hero_djCSrkRo.mp4",
  "nosotrosHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/hero/nosotros-hero-poster_XBD8pe7Y.jpg",
  "nosotrosHeroVideo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/hero/nosotros-hero_k0sP3qO8.mp4",
  "kpi2Name": "Viviendas gestionadas",
  "kpi2Data": "4.900+"
};
}
