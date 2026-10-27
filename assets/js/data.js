/* =====================================================================
   Configuración del sitio y catálogo de seguros
   Edita aquí los datos de contacto y las fichas de producto.
   ===================================================================== */

window.SITE = {
  brand: 'Jennifer Villegas · Broker de Seguros',
  // Número en formato internacional sin "+" ni espacios (Perú = 51)
  whatsapp: '51999999999',
  whatsappDisplay: '+51 999 999 999',
  waMessage: 'Hola, quisiera cotizar un seguro con Jennifer Villegas Broker',
  email: 'contacto@jennifervillegas.pe',
  city: 'Huancayo, Junín, Perú',
  hours: 'Lunes a Viernes de 8:30 AM a 6:30 PM · Sábados de 9:00 AM a 1:00 PM',
  // Endpoint opcional para envío real de correo (Formspree, Getform, backend propio…)
  // Ejemplo: 'https://formspree.io/f/xxxxxxxx'. Si queda vacío se usa mailto + WhatsApp.
  formEndpoint: ''
};

window.CATEGORIES = {
  empresas: {
    name: 'Seguros para Empresas',
    short: 'Empresas',
    desc: 'Coberturas corporativas obligatorias y de protección patrimonial.'
  },
  personales: {
    name: 'Seguros Personales',
    short: 'Personales',
    desc: 'Protección para ti, tu familia y tus bienes.'
  },
  ingenieria: {
    name: 'Seguros de Ingeniería',
    short: 'Ingeniería y Obras',
    desc: 'Pólizas para proyectos, montaje y maquinaria.'
  }
};

/* Cada ficha responde: ¿Qué cubre? · ¿Para quién? · Cotizar */
window.PRODUCTS = [
  /* ---------------- EMPRESAS ---------------- */
  {
    id: 'carta-fianza', cat: 'empresas', icon: 'doc',
    name: 'Carta Fianza', tag: 'Licitaciones',
    summary: 'Garantías de fiel cumplimiento y adelantos para licitaciones públicas y privadas.',
    covers: ['Fiel cumplimiento de contrato', 'Adelanto directo y de materiales', 'Seriedad de oferta', 'Garantía por prestaciones accesorias'],
    who: 'Contratistas, consultores y proveedores que participan en licitaciones con el Estado (OSCE) o con empresas privadas.'
  },
  {
    id: 'sctr', cat: 'empresas', icon: 'helmet',
    name: 'SCTR (Salud y Pensión)', tag: 'Obligatorio', required: true,
    summary: 'Emisión y adendas para ingresos a mina, construcción e industria.',
    covers: ['Atención médica por accidente de trabajo o enfermedad profesional', 'Pensión de invalidez y sobrevivencia', 'Gastos de sepelio', 'Emisión inmediata de constancias para ingreso a obra'],
    who: 'Obligatorio para empresas con trabajadores en actividades de alto riesgo: construcción, minería, industria, transporte, servicios en campo.'
  },
  {
    id: 'vida-ley', cat: 'empresas', icon: 'heart',
    name: 'Vida Ley (D.L. 688)', tag: 'Obligatorio', required: true,
    summary: 'Cobertura obligatoria por muerte e invalidez total para planilla desde el primer día.',
    covers: ['Muerte natural: 16 remuneraciones', 'Muerte accidental: 32 remuneraciones', 'Invalidez total y permanente por accidente: 32 remuneraciones'],
    who: 'Obligatorio para todos los empleadores con trabajadores en planilla, desde el primer día de labores.'
  },
  {
    id: 'eps', cat: 'empresas', icon: 'medical',
    name: 'EPS', tag: 'Salud',
    summary: 'Cobertura de salud privada ambulatoria y hospitalaria para empresas y dependientes.',
    covers: ['Atención ambulatoria y hospitalaria en clínicas privadas', 'Maternidad, emergencias y oncología según plan', 'Cobertura para cónyuge e hijos', 'Crédito del 25% del aporte a EsSalud'],
    who: 'Empresas que quieren mejorar el beneficio de salud de su planilla y retener talento.'
  },
  {
    id: 'seguro-credito', cat: 'empresas', icon: 'bank',
    name: 'Seguro de Crédito', tag: 'Comercial',
    summary: 'Protección ante morosidad prolongada o insolvencia de clientes comerciales.',
    covers: ['Impago por insolvencia declarada', 'Mora prolongada de clientes', 'Ventas al crédito nacionales y de exportación', 'Gestión de cobranza y recupero'],
    who: 'Empresas que venden al crédito a otras empresas y desean proteger su flujo de caja.'
  },
  {
    id: 'multiriesgo', cat: 'empresas', icon: 'building',
    name: 'Seguro Multiriesgo', tag: 'Patrimonial',
    summary: 'Protección contra incendios, robos y catástrofes para almacenes, oficinas y locales.',
    covers: ['Incendio, explosión y daños por agua', 'Robo y asalto', 'Terremoto y riesgos de la naturaleza', 'Lucro cesante y responsabilidad civil (opcional)'],
    who: 'Negocios con local propio o alquilado, almacenes, oficinas, tiendas y plantas.'
  },

  /* ---------------- PERSONALES ---------------- */
  {
    id: 'soat', cat: 'personales', icon: 'car',
    name: 'SOAT Digital', tag: 'Obligatorio', required: true,
    summary: 'Envío del certificado electrónico a tu correo y WhatsApp en minutos.',
    covers: ['Gastos médicos hasta 5 UIT por persona', 'Muerte e invalidez permanente', 'Incapacidad temporal y gastos de sepelio', 'Cobertura para ocupantes y terceros'],
    who: 'Obligatorio para todo vehículo que circula en el Perú. Emisión 100% digital.'
  },
  {
    id: 'vehicular', cat: 'personales', icon: 'car',
    name: 'Seguro Vehicular', tag: 'Todo riesgo',
    summary: 'Cobertura todo riesgo: choque, vuelco, robo, daño malicioso, asistencia de grúa y auxilio mecánico.',
    covers: ['Daño propio por choque, vuelco o incendio', 'Robo total y parcial', 'Responsabilidad civil frente a terceros', 'Grúa, auxilio mecánico y chofer de reemplazo'],
    who: 'Propietarios de autos, camionetas y vehículos comerciales que desean protección integral.'
  },
  {
    id: 'accidentes-personales', cat: 'personales', icon: 'shield',
    name: 'Accidentes Personales', tag: 'Protección',
    summary: 'Reembolso de gastos médicos, renta hospitalaria e indemnización por invalidez temporal o permanente.',
    covers: ['Muerte accidental', 'Invalidez temporal o permanente', 'Gastos de curación y reembolso médico', 'Renta diaria por hospitalización'],
    who: 'Profesionales independientes, deportistas, estudiantes y trabajadores que no cuentan con SCTR.'
  },
  {
    id: 'salud', cat: 'personales', icon: 'medical',
    name: 'Seguro de Salud', tag: 'Salud',
    summary: 'Planes de salud privada con cobertura ambulatoria, hospitalaria y oncológica.',
    covers: ['Consultas y exámenes ambulatorios', 'Hospitalización y cirugías', 'Maternidad y oncología según plan', 'Red de clínicas a nivel nacional'],
    who: 'Familias y personas que buscan atención privada rápida y cobertura ante enfermedades graves.'
  },
  {
    id: 'vida-devolucion', cat: 'personales', icon: 'heart',
    name: 'Vida Devolución', tag: 'Ahorro',
    summary: 'Seguro de vida que reembolsa el 100% (o más) del fondo acumulado al finalizar el periodo contratado.',
    covers: ['Indemnización por fallecimiento a tus beneficiarios', 'Devolución del 100% o más de lo aportado al vencimiento', 'Coberturas adicionales por invalidez o enfermedad grave'],
    who: 'Personas que quieren proteger a su familia y a la vez ahorrar con un objetivo a largo plazo.'
  },
  {
    id: 'transporte-carga', cat: 'personales', icon: 'truck',
    name: 'Seguro de Transporte de Carga', tag: 'Logística',
    summary: 'Protección de mercadería nacional o importada contra pérdidas y accidentes durante el flete.',
    covers: ['Daños y pérdida de mercadería en tránsito', 'Transporte terrestre, marítimo y aéreo', 'Robo, volcadura y colisión', 'Pólizas por viaje o flotantes anuales'],
    who: 'Importadores, comerciantes y empresas que movilizan mercadería propia o de terceros.'
  },

  /* ---------------- INGENIERÍA ---------------- */
  {
    id: 'car', cat: 'ingenieria', icon: 'crane',
    name: 'Seguro CAR (Todo Riesgo Construcción)', tag: 'Obligatorio en obra', required: true,
    summary: 'Cobertura obligatoria para proyectos de edificación, pistas, canales y obras civiles.',
    covers: ['Daños a la obra durante la ejecución', 'Materiales, equipos y maquinaria en obra', 'Riesgos de la naturaleza: lluvias, huaycos, sismos', 'Responsabilidad civil frente a terceros'],
    who: 'Contratistas y propietarios de proyectos de construcción civil, públicos o privados. Exigido en la mayoría de contratos.'
  },
  {
    id: 'trec', cat: 'ingenieria', icon: 'machine',
    name: 'Seguro TREC (Maquinaria de Contratistas)', tag: 'Maquinaria',
    summary: 'Cobertura de maquinaria pesada, excavadoras y retroexcavadoras dentro y fuera de faena.',
    covers: ['Daños por volcadura, colisión e incendio', 'Robo total de la maquinaria', 'Operación dentro y fuera de la obra', 'Traslado entre faenas'],
    who: 'Empresas y personas con maquinaria pesada propia o alquilada: excavadoras, cargadores, retroexcavadoras, rodillos.'
  },
  {
    id: 'ear', cat: 'ingenieria', icon: 'bolt',
    name: 'Seguro EAR (Todo Riesgo Montaje)', tag: 'Montaje',
    summary: 'Todo riesgo para montaje de líneas eléctricas, subestaciones y estructuras metálicas.',
    covers: ['Daños durante el montaje e instalación', 'Pruebas y puesta en marcha', 'Equipos y estructuras a instalar', 'Responsabilidad civil'],
    who: 'Empresas de montaje electromecánico, instalación de plantas, líneas eléctricas y estructuras.'
  },
  {
    id: 'responsabilidad-civil', cat: 'ingenieria', icon: 'scale',
    name: 'Responsabilidad Civil Extracontractual', tag: 'Legal',
    summary: 'Respaldo legal e indemnizatorio ante daños a predios vecinos o terceros durante la ejecución del proyecto.',
    covers: ['Daños materiales a terceros y predios vecinos', 'Lesiones o muerte de terceros', 'Gastos de defensa legal', 'Responsabilidad patronal (opcional)'],
    who: 'Contratistas, empresas de servicios y cualquier negocio cuya operación pueda generar daños a terceros.'
  }
];

/* Iconos SVG (vectoriales, sin dependencias) */
window.ICONS = {
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>',
  helmet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15a9 9 0 0 1 18 0"/><path d="M2 15h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/><path d="M12 6V3M9 7l-1-3M15 7l1-3"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.6 12 20l-7.5-7.4a5 5 0 1 1 7.5-6.6 5 5 0 1 1 7.5 6.6z"/></svg>',
  medical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M12 10v6M9 13h6M9 5V3h6v2"/></svg>',
  bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10 12 4l9 6"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11"/><path d="M3 11h18v6h-2M5 17H3v-6"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  crane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21h16M6 21V9l6-4 6 4v12"/><path d="M10 21v-6h4v6M12 5V2M9 2h6"/></svg>',
  machine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17h10v3H3zM13 17l-2-6h4l3-5 3 1-3 6v4"/><circle cx="6" cy="20" r="1"/><circle cx="10" cy="20" r="1"/><path d="M5 11h6l1 6"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
  scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 21h14M3 7h18"/><path d="m6 7-3 7a3 3 0 0 0 6 0zM18 7l-3 7a3 3 0 0 0 6 0z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 15.5a5 5 0 0 1 5.5 4.5"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/></svg>',
  compare: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="7" height="16" rx="1.5"/><rect x="14" y="4" width="7" height="16" rx="1.5"/><path d="M6.5 9v6M17.5 9v6"/></svg>',
  support: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13a8 8 0 0 1 16 0"/><rect x="3" y="12" width="4" height="6" rx="1.5"/><rect x="17" y="12" width="4" height="6" rx="1.5"/><path d="M19 18a3 3 0 0 1-3 3h-3"/></svg>',
  handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1.5 1.5 0 0 0 2.1-2.1l-3.6-3.5"/><path d="m14 14 2.5 2.5a1.5 1.5 0 0 0 2.1-2.1L13 8.8a4 4 0 0 0-5.6 0L5 11.2"/><path d="m2 9 4-4 4 1 3-1 4 4"/><path d="m5 12-3-3M8 15l-2.5-2.5"/></svg>'
};
