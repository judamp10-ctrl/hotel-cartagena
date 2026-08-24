export const WA_HOTEL = "573122592014";
export const WA_EVENTOS = "573046194844";

export const CONTACTO = {
  hotel: { tel: "(312) 259-2014", email: "hotelcartagenacomfort@hotmail.com", wa: WA_HOTEL },
  eventos: { tel: "(304) 619-4844", email: "eventoscartagenacomfort@hotmail.com", wa: WA_EVENTOS },
  direccion: "Troncal de Occidente, Transversal 31 #85-95, Barrio Ternera, Cartagena",
  instagram: "https://instagram.com/hotelcartagenacomfort1",
  instagramHandle: "@hotelcartagenacomfort1",
  facebook: "https://www.facebook.com/eventoscartagenacomfort",
  // Resuelto desde el shortlink que compartió la clienta
  // (maps.app.goo.gl/df5SJmksZ8Y73i2X8), coordenadas exactas del pin:
  // 10.382839, -75.4665448. Se usa un link limpio (sin tokens de sesión
  // ni parámetros de rastreo) para no depender de un redirect.
  mapsUrl: "https://www.google.com/maps/place/Hotel+%26+Eventos+Cartagena+Comfort/@10.382839,-75.4665448,17z",
};

export const NOSOTROS = {
  texto: [
    "En Cartagena Comfort Hotel & Eventos ofrecemos soluciones integrales de hospedaje y eventos para empresas, grupos, organizaciones y visitantes que buscan comodidad, atención personalizada y espacios funcionales en Cartagena.",
    "Contamos con 36 habitaciones y 5 salones para eventos con capacidad hasta para 600 asistentes, diseñados para adaptarse a diferentes necesidades, desde estadías corporativas y grupos turísticos hasta reuniones empresariales, capacitaciones, congresos y celebraciones especiales.",
    "Nos distinguimos por brindar una experiencia cercana, eficiente y confiable, respaldada por un equipo comprometido con la calidad del servicio y el bienestar de nuestros huéspedes y clientes.",
  ],
};

export const SERVICIOS_COMPLEMENTARIOS = [
  {
    titulo: "Desayuno Incluido",
    texto: "Disfruta cada mañana de nuestro desayuno incluido en la tarifa de alojamiento.",
  },
  {
    titulo: "Wi-Fi de Alta Velocidad",
    texto: "Mantente conectado en todo momento con acceso a internet en habitaciones, salones de eventos y espacios comunes.",
  },
  {
    titulo: "Ascensor",
    texto: "Acceso cómodo y seguro a las diferentes áreas y niveles de nuestras instalaciones.",
  },
  {
    titulo: "Planta Eléctrica",
    texto: "Respaldo energético para garantizar la continuidad de nuestros servicios ante cualquier eventualidad.",
  },
  {
    titulo: "Tanques Elevados",
    texto: "Sistema de almacenamiento de agua que asegura el suministro permanente para huéspedes y eventos.",
  },
  {
    titulo: "Parqueadero Privado",
    texto: "Espacios de estacionamiento para brindar mayor comodidad y seguridad durante tu estadía o evento.",
  },
];

export const VALORES = [
  {
    titulo: "Atención Personalizada",
    texto: "Un equipo dedicado que acompaña cada reserva y cada montaje de principio a fin.",
  },
  {
    titulo: "Ubicación Estratégica",
    texto: "Sobre la Troncal de Occidente, conectados con las principales vías de la ciudad.",
  },
  {
    titulo: "Soluciones Integrales",
    texto: "Hospedaje, salones y catering coordinados bajo un mismo techo y un mismo interlocutor.",
  },
  {
    titulo: "Tarifas Corporativas",
    texto: "Convenios y condiciones especiales para empresas con viajeros frecuentes.",
  },
  {
    titulo: "Flexibilidad para Grupos",
    texto: "Capacidad para acomodar desde comités pequeños hasta convenciones de 500 personas.",
  },
  {
    titulo: "Experiencia en Eventos",
    texto: "Bodas, congresos y celebraciones sociales ejecutadas con logística probada.",
  },
];

export const HOTEL_CAPACIDAD = "36 habitaciones equipadas";

export const HABITACIONES = [
  { nombre: "Sencilla", pax: "1 persona", precio: "$185.000" },
  { nombre: "Doble", pax: "2 personas", precio: "$230.000", destacada: true },
  { nombre: "Triple", pax: "3 personas", precio: "$270.000" },
];

export const HABITACION_INCLUYE = [
  "Colchón semi ortopédico",
  "Aire acondicionado",
  "Baño privado",
  "Televisión",
  "Wi-Fi de alta velocidad",
  "Desayuno incluido en tarifa",
];

export const BENEFICIOS_CORPORATIVOS = [
  "Convenios empresariales con tarifas preferenciales",
  "Condiciones especiales para grupos y delegaciones",
  "Planes con alimentación incluida",
  "Estudio de crédito para empresas aliadas",
];


// Precios confirmados por la clienta. La columna "Valor" se conserva en los
// datos (la usa Cotizar/CotizarModal) pero ya no se muestra en la tabla
// pública, por pedido de la clienta.
//
// "partes" describe cómo se divide un salón en espacios más chicos. El
// total de la fila SIEMPRE es el dato principal en la tabla; las partes se
// muestran como detalle expandible.
//
// Aula de JeanPaul y Stephanie: la clienta resolvió la diferencia entre el
// total y la suma de las partes — quedó el número mayor en cada caso
// (JeanPaul: 82, la suma de las partes; Stephanie: 150, el total que ella
// ya había confirmado).
export const SALONES = [
  {
    nombre: "Galeón",
    auditorio: 100,
    aula: 40,
    tipoU: 35,
    social: "Pendiente",
    valor: "$300.000",
    distintivo: "Práctico · Funcional · Versátil",
  },
  {
    nombre: "JeanPaul",
    auditorio: 130,
    aula: 82,
    tipoU: 60,
    social: 70,
    valor: "$400.000",
    distintivo: "Privado · Acogedor · Dinámico — incluye Ante Sala, divisible en 2 espacios",
    partes: [
      { nombre: "Parte A", auditorio: 30, aula: 12, tipoU: 20 },
      { nombre: "Parte B", auditorio: 100, aula: 70, tipoU: 40 },
    ],
  },
  {
    nombre: "Olimpo",
    auditorio: 250,
    aula: 80,
    tipoU: 65,
    social: "Pendiente",
    valor: "$470.000",
    distintivo: "Amplio · Accesible · Estratégico",
  },
  {
    nombre: "Cartagena Comfort",
    auditorio: 600,
    aula: 150,
    tipoU: 100,
    social: "Pendiente",
    valor: "$800.000",
    distintivo: "Imponente · Multifuncional — Video Beam + Tarima",
  },
  {
    nombre: "Stephanie",
    auditorio: 190,
    aula: 150,
    tipoU: 120,
    social: 120,
    valor: "Consultar",
    distintivo: "Versátil · Flexible — divisible en 3 espacios",
    partes: [
      { nombre: "Parte A", auditorio: 30, aula: 8, tipoU: 20 },
      { nombre: "Parte B", auditorio: 80, aula: 70, tipoU: 50 },
      { nombre: "Parte C", auditorio: 80, aula: 70, tipoU: 50 },
    ],
  },
];

export const EVENTOS_TOTAL = "5 salones versátiles · hasta 600 asistentes";

export const CATEGORIAS_EVENTO = [
  {
    nombre: "Eventos Corporativos",
    texto: "Congresos, capacitaciones y lanzamientos con iluminación LED, pantallas y sonido profesional.",
  },
  {
    nombre: "Bodas Elegantes",
    texto: "Montajes dorados, mesa principal DKP y menaje de lujo con coordinación integral.",
  },
  {
    nombre: "Quinceañeros & Sociales",
    texto: "Temáticas personalizadas, pistas de baile, luces robóticas y efectos (humo bajo, volcanes).",
  },
  {
    nombre: "Eventos Temáticos",
    texto: "Conceptos decorativos a medida, animación y producción escénica completa.",
  },
];


export const SALON_BASE = [
  "Mesa principal y recepción",
  "Estación de agua y café",
  "Parqueadero privado",
  "Sonido y micrófono",
  "Aire acondicionado",
  "Sillas tipo Rimax",
  "Wi-Fi",
];

export const PAQUETES = [
  {
    nombre: "Básico",
    incluye: [
      "Salón por 6 horas con aire acondicionado",
      "Sonido, 2 micrófonos y 15 luces LED",
      "Coordinadora, operador logístico y meseros",
      "Mobiliario y montaje completo",
      "Menaje y menú con cena de 1 proteína y postre",
    ],
  },
  {
    nombre: "Special",
    incluye: [
      "Todo lo del paquete Básico",
      "Cena de 2 proteínas",
      "Cóctel de bienvenida",
      "Mesa principal",
      "Mesa DKP",
    ],
  },
  {
    nombre: "Premium",
    incluye: [
      "Todo lo del paquete Special",
      "Maestro de ceremonia",
      "Material decorativo completo (mesa lluvia de sobres, baúl, silla Luis XV, identificadores)",
      "Menaje de lujo: 3 cubiertos dorados, plato base y plato entrada",
      "Entrada especial",
    ],
  },
];

export const SERVICIOS_EXTRA = [
  {
    titulo: "Catering y gastronomía",
    texto:
      "Cóctel de bienvenida (Infusión Caribe, Fruit Punch, Mimosa, Mojito), entradas, Menú Tropical, Mediterráneo, Cartagenero (posta negra, arroz con coco titoté), Gourmet, Bienestar, pastas al gusto y postre Petit. Pasabocas, fritos típicos, caldo de media noche y menú infantil.",
  },
  {
    titulo: "Bar",
    texto:
      "Mezcladores y servicio de descorche de champaña, aguardiente, ron, whisky y cerveza.",
  },
  {
    titulo: "Animación",
    texto:
      "DJ, sonido profesional, maestro de ceremonia, efectos especiales, orquesta, saxofonista, mariachi, hora loca, parranda vallenata, banda papayera, cabina fotográfica y plataforma 360°.",
  },
  {
    titulo: "Decoración",
    texto: "Tres niveles de decoración, del más esencial al diseño exclusivo a medida.",
    paquetes: [
      {
        nombre: "Clasic",
        texto: "Decoración esencial para eventos íntimos y funcionales.",
        incluye: [
          "Centros de mesa bajos",
          "Identificadores de mesa",
          "Estructuras decorativas",
          "Arco en globos",
          "Mesas decorativas",
          "Número 15 iluminado o palabra LOVE iluminada",
          "Silla Luis XV",
        ],
      },
      {
        nombre: "Elegance",
        texto: "Decoración sofisticada con mayor nivel de detalle y ambientación.",
        incluye: [
          "Centros de mesa altos",
          "Identificadores de mesa",
          "Estructuras decorativas",
          "Arco floral",
          "Mesas decorativas",
          "Número 15 iluminado o palabra LOVE iluminada",
          "Silla Luis XV",
        ],
      },
      {
        nombre: "Temático",
        texto: "Diseño exclusivo adaptado a la temática, gustos y necesidades del cliente.",
        incluye: [
          "Diseño exclusivo según temática, colores y requerimientos",
          "Selección personalizada de flores, mobiliario y elementos decorativos",
          "Propuesta única adaptada al evento",
        ],
      },
    ],
  },
  {
    titulo: "Producción e iluminación",
    texto: "Tres niveles de producción técnica e iluminación escénica.",
    paquetes: [
      {
        nombre: "Oro",
        texto: "La máxima experiencia en producción y entretenimiento.",
        incluye: [
          "Maestro de ceremonia",
          "DJ profesional",
          "Pantalla LED",
          "Tarima",
          "4 luces robóticas",
          "Truss",
          "Pista de baile",
          "Humo bajo",
          "2 volcanes",
          "Ventury",
        ],
      },
      {
        nombre: "Plata",
        texto: "Una experiencia más impactante con iluminación y efectos especiales mejorados.",
        incluye: [
          "Maestro de ceremonia",
          "DJ profesional",
          "Tarima",
          "Pista de baile",
          "Cámara de humo",
          "2 volcanes",
          "Ventury",
        ],
      },
      {
        nombre: "Bronce",
        texto: "Producción esencial para eventos con estilo, diversión y excelente ambientación.",
        incluye: ["Maestro de ceremonia", "DJ profesional", "Pista de baile", "Tarima"],
      },
    ],
  },
  {
    titulo: "Corporativo",
    texto:
      "Desayunos, coffee break, brunch, almuerzos ejecutivos, video beam, papelógrafo, micrófonos inalámbricos, pantallas LED y pendones.",
  },
];

export const TIPOS_EVENTO = ["Boda", "Corporativo", "Social", "Temático", "Otro"];
