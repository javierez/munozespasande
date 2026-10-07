

export type ContactProps = {
  /** Photo of the premises for the editorial "Ven a vernos" panel. */
  image?: string;
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Optional hero banner for /contacto page. Absent => no hero rendered.
  heroImage?: string;
  heroVideo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Optional dedicated WhatsApp number for the floating button. When set (and a
  // valid Spanish mobile), it overrides the default-office phone. Lets the
  // WhatsApp line differ from any single office's displayed number.
  whatsappNumber?: string;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (_accountIdArg?: bigint): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "Estamos aquí para ayudarte",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": true,
  "map": true,
  "offices": [{
  "id": "office-1",
  "name": "Oficina Gijón — Avenida del Llano",
  "address": {
  "street": "Avda. del Llano, 14",
  "city": "Gijón",
  "state": "Asturias",
  "country": "España"
},
  "phoneNumbers": {
  "main": "984 485 585"
},
  "emailAddresses": {
  "info": "inmobiliaria@munozespasande.com"
},
  "scheduleInfo": {
  "weekdays": "Lunes a Viernes: 9:00 - 19:00",
  "saturday": "Sábado: 10:00 - 14:00",
  "sunday": "Domingo: Cerrado"
},
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Avda.%20del%20Llano%2C%2014%2C%20Gij%C3%B3n%2C%20Asturias%2C%2033205",
  "isDefault": true
}],
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/180/website/oficina/fachada.jpg"
};
}

