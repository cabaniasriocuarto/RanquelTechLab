// =====================
// Ranquel Tech Lab - JavaScript
// Archivo: script.js
// =====================

const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre',
    'nav.services': 'Servicios',
    'nav.ai': 'IA aplicada',
    'nav.marketing': 'Marketing',
    'nav.method': 'Método',
    'nav.options': 'Opciones de Desarrollo',
    'nav.booking': 'Reserva / Videollamada',

    // HERO + LOCAL SEO
    'hero.badge': 'Desarrollo web, apps e IA en Río Cuarto',
    'hero.title': 'Creamos software inteligente en Río Cuarto que<br>impulsa tu negocio.',
    'hero.subtitle': 'Desarrollo web, tiendas online, apps Android/iOS y software con IA para empresas, agro y supermercados de Córdoba y toda Argentina.',

    'hero.chatbot': 'Chatbot',
    'hero.whatsapp': 'WhatsApp',
    'hero.options': 'Opciones de Desarrollo',
    'hero.booking': 'Reservar videollamada',

    // SOBRE NOSOTROS – FOCO RÍO CUARTO / CÓRDOBA / ARGENTINA + AGRO + RETAIL
    'about.title': 'Sobre nosotros',
    'about.p1': 'En Ranquel Tech Lab, desde Río Cuarto (Córdoba), diseñamos y desarrollamos sitios web, tiendas online, apps Android/iOS y sistemas integrados con IA. Unimos diseño, código y automatización para convertir ideas en productos reales, medibles y escalables.',
    'about.p2': 'Porque todo se puede <strong>codificar</strong>, creamos software a medida para empresas, agro y retail (supermercados) de Río Cuarto, Córdoba y toda Argentina. Nos contás dónde está tu cuello de botella, analizamos la situación y proponemos soluciones concretas.',
    'about.cta': 'Conocé Opciones de Desarrollo',

    // SERVICIOS – WEB, E-COMMERCE, APPS, SOFTWARE A MEDIDA
    'services.title': 'Servicios',
    'services.web.title': 'Desarrollo Web',
    'services.web.desc': 'Resolvemos posicionamiento web y marca, performance, e-commerce (tiendas online) y landings rápidas para empresas de Río Cuarto, Córdoba y toda Argentina.',
    'services.domains.title': 'Dominios',
    'services.domains.desc': 'Nos encargamos de tu hosting y el dominio que necesitás para tu página web.',
    'services.apps.title': 'Apps Multi dispositivos',
    'services.apps.desc': 'Generamos apps móviles Android y iOS optimizadas para todos los dispositivos (Java/Kotlin/React Native), con publicación en Play Store y App Store.',
    'services.systems.title': 'Sistemas a medida',
    'services.systems.desc': 'Porque cada empresa es única, generamos soluciones a la altura de tu negocio en Río Cuarto y Córdoba: Java/Node.js, dashboards, microservicios y mucho más.',
    'services.seo.title': 'SEO + Ads',
    'services.seo.desc': 'Publicitá en los principales buscadores y apps del momento (Google, Bing, Meta) con medición y experimentos. Hacemos que tu web/app sea reconocible en el mundo.',
    'services.analytics.title': 'Analítica',
    'services.analytics.desc': 'Conectamos tu App/Web a todo el ecosistema digital: Google Analytics, Google Tag Manager, Google Search Console, Meta y Bing Webmaster, para obtener datos fidedignos y tomar mejores decisiones publicitarias, comerciales y de marca.',

    // IA APLICADA – ESPECÍFICA PARA EMPRESAS, AGRO Y SUPERMERCADOS
    'ia.title': 'IA aplicada',
    'ia.subtitle': 'En Ranquel Tech Lab la IA no es un extra: es parte del producto. Aplicamos IA a procesos de empresas, agro y supermercados de Córdoba y toda Argentina, con métricas claras y foco en ROI.',
    'ia.consulting.title': 'Asesoramiento',
    'ia.consulting.desc': 'Auditamos procesos y datos, medimos tu madurez digital y detectamos "quick wins". Entregamos un plan 30-60-90 días con casos de uso priorizados, costos, métricas y ROI estimado para acelerar resultados.',
    'ia.gpts.title': 'GPTs a medida',
    'ia.gpts.desc': 'Creamos asistentes con el contexto de tu negocio (documentos, políticas, catálogos) y reglas propias. Se conectan a tus sistemas (ERP/CRM/AFIP/Sheets) para automatizar tareas, responder con trazabilidad y ejecutar flujos end-to-end.',
    'ia.bots.title': 'Bots conversacionales',
    'ia.bots.desc': 'Web/WhatsApp/Instagram que atienden, reservan, cobran y escalan a un humano cuando corresponde. Entrenados con tu contenido, con analytics de conversaciones y mejoras continuas para elevar la experiencia del cliente.',
    'ia.cta': 'Conocé Opciones de Desarrollo',

    // RESTO IGUAL QUE TENÍAS
    'marketing.title': 'Marketing',
    'marketing.subtitle': 'Con 13 años de experiencia en Marketing digital, hacemos que el dinero de tu inversión en publicidad digital rinda como Nunca Antes.',
    'method.title': 'Nuestro Método Ganador',
    'method.subtitle': 'Te mostramos el paso a paso del ÉXITO.',
    'method.step1.title': '1 Escuchamos las Necesidades del Cliente.',
    'method.step1.desc': 'Para poder arrancar con cualquier proyecto necesitamos saber cuales son las necesides de nuestro clientes y el modo operandi de su negocio, solicitamos toda la información que nos puedan brindar...y ahora es cuando estamos en condiciones de seguir al próximo paso.',
    'method.step2.title': '2- Analizamos la competencia.',
    'method.step2.desc': 'Comparamos los standares de la competencia para superarlos o saber buscar las estrategias adecuadas para ganar el mercado.',
    'method.step3.title': '3- Estudiamos el Proyecto',
    'method.step3.desc': 'Con la información recopilada, buscamos las mejores estrategias tecnológicas que se adecúen a las necesidades y objetivos de nuestro clientes.',
    'method.step4.title': '4- Materealizando Objetivos.',
    'method.step4.desc': 'Ponemos Marcha y hacemos maqueta previa según  todo la información obtenida y analizada. Se presenta una primera muestra de lo Trabajado y se abona un 50% del presupuesto.',
    'method.step5.title': '5- Conexión con Buscadores y SEO',
    'method.step5.desc': 'Conectamos la web a Google Ads, Google Tag Manager, Google Analytics, Google Search Console, Meta (Facebook + Instagram + WhatsApp), Bing y Bing Ads. Optimización e Indexación de la Página para reconocimiento prioritario en buscadores.',
    'method.step6.title': '6- Entrega de la web, Puesta a punto y seguimiento mensual.',
    'method.step6.desc': 'Ultimamos detalles. Se Abona el 50% del presupuesto restante. Hacemos entrega de la Página Web y hacemos un segumiento mensual para la implementación de nuevas tecnologías.',
    'options.title': 'Opciones de Desarrollo',
    'options.subtitle': 'Porque todo se puede <strong>Codificar</strong>. Contanos tu idea y armamos un plan de trabajo acorde a tus necesidades.',
    'options.industry.title': 'Industria (manufactura)',
    'options.industry.list': '<li>• Mantenimiento predictivo – Sensores (vibración/temperatura/consumo), modelo ML que anticipe fallas y genere órdenes en tu ERP/MES; alertas en Android.</li><li>• Control de calidad por visión – Cámaras + modelos de visión (defectos, soldaduras, etiquetas) con registro y trazabilidad; OK/NO-OK directo al SCADA.</li><li>• Planificación y OEE inteligente – IA que secuencia órdenes minimizando setups y cuellos de botella; tablero OEE con causas automáticas.</li>',
    'options.finance.title': 'Finanzas (PyMEs)',
    'options.finance.list': '<li>• Lectura de comprobantes + AFIP – OCR + validación online, categorización contable y conciliación bancaria automática; banderas rojas por discrepancias.</li><li>• Scoring de riesgo y mora – Modelos con variables contables/comerciales para priorizar cobranza, cupos y condiciones; semáforos y workflows.</li><li>• Detección de fraude/anomalías – Gastos atípicos, proveedores duplicados, desvíos de caja; reglas + ML con auditoría y evidencia exportable.</li>',
    'options.hotel.title': 'Hotelería',
    'options.hotel.list': '<li>• Precios dinámicos (revenue) – Ajuste tarifario por demanda, clima y eventos locales; restricciones y upsells automáticos.</li><li>• Chatbot omnicanal (Web/WhatsApp) – Disponibilidad, reservas, cobros y upgrades; integra PMS/Channel Manager.</li><li>• Housekeeping asistido por visión – App Android que reconoce estado de habitación/amenities y optimiza turnos.</li>',
    'options.restaurant.title': 'Restaurants',
    'options.restaurant.list': '<li>• Forecast de demanda por plato – Predice ventas por franja y día; sugiere compras y mise en place para reducir quiebres/merma.</li><li>• Upselling inteligente en POS – Sugerencias de combos y extras según historial y hora; A/B testing de menús y precios.</li><li>• Control de porciones/mermas por visión – Cámaras + básculas conectadas para estandarizar raciones y detectar desvíos.</li>',
    'options.agro.title': 'Agro',
    'options.agro.list': '<li>• Detección temprana de plagas/nutrientes – Móvil/dron con visión que clasifica estrés y recomienda correctivos (se enlaza con FertiCalc).</li><li>• Riego y fertilización prescriptiva – Modelos con clima/ET0/fenología que calculan lámina, EC/pH objetivo y dosis.</li><li>• Logística de cosecha y rutas – Optimiza turnos, ventanas de descarga y fletes; integra precios y humedad/mermas.</li>',
    'options.mining.title': 'Minería',
    'options.mining.list': '<li>• Mantenimiento predictivo de flota pesada – Telemetría para anticipar fallas en palas/camiones; plan de repuestos.</li><li>• Seguridad por visión (EPP/áreas) – Detección de casco/chaleco, zonas restringidas y proximidad a equipos; alertas.</li><li>• Blend y recuperación en planta – Predice ley/recuperación y ajusta mezcla para maximizar producción y energía.</li>',
    'options.gov.title': 'Gobierno (sector público)',
    'options.gov.list': '<li>• Trámites inteligentes + validación automática – OCR de formularios y DNI; verificación en padrones; turnos y notificaciones.</li><li>• Compras públicas y control del gasto con IA – Sobreprecios, proveedores vinculados y fraccionamiento; monitoreo y alertas.</li><li>• Gestión urbana predictiva – Baches, alumbrado, residuos; ruteo óptimo de cuadrillas y modelos de riesgo de inundaciones/incendios.</li>',
    

    // RESERVA + VIDEOLLAMADA
    'booking.title': 'Reserva online + Videollamada',
    'booking.subtitle': 'Elegí un horario en el turnero y después entrá a la videollamada desde la misma web.',
    'booking.step1.badge': 'Paso 1',
    'booking.step1.title': 'Reservá tu turno',
    'booking.step1.desc': 'Elegí día y hora disponibles. Si no ves el turnero, abrilo en otra pestaña.',
    'booking.openAgenda': 'Abrir agenda en nueva pestaña',
    'booking.step2.badge': 'Paso 2',
    'booking.step2.title': 'Entrá a la videollamada',
    'booking.step2.desc': 'Por seguridad, la videollamada se habilita con un <strong>link/código de acceso</strong> que te llega por email después de reservar.',
    'booking.room.label': 'Link / Código de acceso',
    'booking.room.placeholder': 'Pegá acá el link o el código que te llegó por email',
    'booking.room.btn': 'Entrar',
    'booking.room.help': 'Sin link/código de acceso no se puede ingresar. Si no te llegó, pedinoslo por WhatsApp.',
    'booking.placeholder.title': 'La videollamada se abre acá',
    'booking.placeholder.desc': 'Presioná “Entrar” para cargar la sala dentro de la web.',
    'booking.openSeparate': 'Abrir en página dedicada',
    'cta.title': '¿Consultas? Para Mayor Información Usá el ChatBot',
    'cta.subtitle': 'Para presupuestos o Reuniones usá el ChatBot.',
    'footer.copy': '<a href="https://www.linkedin.com/in/walter-valdivieso" target="_blank" rel="noopener noreferrer">© 2026 Ranquel Tech Lab</a>',
  },

  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.ai': 'Applied AI',
    'nav.marketing': 'Marketing',
    'nav.method': 'Method',
    'nav.options': 'Development options',
    'nav.booking': 'Booking / Video call',

    // HERO + LOCAL SEO (EN)
    'hero.badge': 'Web, apps & AI from Río Cuarto, Argentina',
    'hero.title': 'We build intelligent software in Río Cuarto that<br>boosts your business.',
    'hero.subtitle': 'Web development, online stores, Android/iOS apps and AI-powered software for companies, farms and retailers across Argentina.',

    'hero.chatbot': 'Chatbot',
    'hero.whatsapp': 'WhatsApp',
    'hero.options': 'Development options',

    // ABOUT (EN) – MISMO FOCO
    'about.title': 'About us',
    'about.p1': 'At Ranquel Tech Lab in Río Cuarto, Córdoba (Argentina), we design and build websites, online stores, Android/iOS apps and systems integrated with AI. We blend design, code and automation to turn ideas into real, measurable and scalable products.',
    'about.p2': 'Because everything can be <strong>coded</strong>, we build custom software for companies, agriculture and retail (supermarkets) in Río Cuarto, Córdoba and across Argentina. Tell us where your bottleneck is, we analyze it and deliver concrete solutions.',
    'about.cta': 'See development options',

    'services.title': 'Services',
    'services.web.title': 'Web development',
    'services.web.desc': 'We take care of brand positioning, performance, e-commerce and fast landing pages.',
    'services.domains.title': 'Domains',
    'services.domains.desc': 'We manage your hosting and the domain your site needs.',
    'services.apps.title': 'Multi-device apps',
    'services.apps.desc': 'Optimized apps for every device in Java/Kotlin, published to Play Store and App Store.',
    'services.systems.title': 'Custom systems',
    'services.systems.desc': 'Every company is unique—we build solutions at your level with Java/Node.js, dashboards, microservices and more.',
    'services.seo.title': 'SEO + Ads',
    'services.seo.desc': 'Advertise on the main search engines and apps (Google, Bing, Meta) with measurement and experiments. Make your web/app recognizable worldwide.',
    'services.analytics.title': 'Analytics',
    'services.analytics.desc': 'We connect your app/site to Google Analytics, GTM, Search Console, Meta and Bing to get reliable data for better marketing and sales decisions.',

    'ia.title': 'Applied AI',
    'ia.subtitle': 'At Ranquel Tech Lab AI is not an add-on: it is part of the product. We apply AI to business, farming and retail processes across Argentina, with clear metrics and ROI focus.',
    'ia.consulting.title': 'Consulting',
    'ia.consulting.desc': 'We audit processes and data, measure your digital maturity and detect quick wins. We deliver a 30-60-90 day plan with prioritized use cases, costs, metrics and estimated ROI to accelerate results.',
    'ia.gpts.title': 'Custom GPTs',
    'ia.gpts.desc': 'We build assistants with your business context (documents, policies, catalogs) and custom rules. They connect to your systems (ERP/CRM/AFIP/Sheets) to automate tasks, respond with traceability and run end-to-end flows.',
    'ia.bots.title': 'Conversational bots',
    'ia.bots.desc': 'Web/WhatsApp/Instagram bots that serve, book, collect payments and escalate to a human when needed. Trained with your content, with analytics and continuous improvements.',
    'ia.cta': 'See development options',

    'marketing.title': 'Marketing',
    'marketing.subtitle': 'With 13 years of digital marketing experience, we make your ad investment work harder than ever.',
    'method.title': 'Our winning method',
    'method.subtitle': 'We guide you through the step-by-step to success.',
    'method.step1.title': '1 We listen to client needs.',
    'method.step1.desc': 'To start any project we need to know the needs of our clients and how their business operates. We gather as much information as possible to move to the next step.',
    'method.step2.title': '2 We analyze competitors.',
    'method.step2.desc': 'We compare industry standards to outperform them.',
    'method.step3.title': '3 We study the project',
    'method.step3.desc': 'With the collected information we find the best tech strategies that fit the needs and objectives of our clients.',
    'method.step4.title': '4 Turning objectives into reality.',
    'method.step4.desc': 'We start building and create a first mockup with all the analyzed information. We present the first deliverable and collect 50% of the estimate.',
    'method.step5.title': '5 Search engine connection & SEO',
    'method.step5.desc': 'We connect the site to Google Ads, Google Tag Manager, Google Analytics, Google Search Console, Meta (Facebook + Instagram + WhatsApp), Bing and Bing Ads. Optimization and indexing for priority recognition.',
    'method.step6.title': '6 Delivery, tuning and monthly follow-up.',
    'method.step6.desc': 'We finalize details, collect the remaining 50%, deliver the website and run monthly follow-ups to add new technology.',
    'options.title': 'Development options',
    'options.subtitle': 'Because what you dream of we can <strong>code</strong>. Pick a vertical or tell us your idea and we will build the plan.',
    'options.industry.title': 'Industry (manufacturing)',
    'options.industry.list': '<li>• Predictive maintenance – Sensors (vibration/temperature/consumption) and ML models to anticipate failures and create work orders in your ERP/MES; Android alerts.</li><li>• Vision-based quality control – Cameras + vision models (defects, welding, labels) with logging and traceability; OK/NOT-OK directly into SCADA.</li><li>• Smart planning & OEE – AI that sequences orders minimizing setups and bottlenecks; OEE board with automatic causes.</li>',
    'options.finance.title': 'Finance (SMEs)',
    'options.finance.list': '<li>• Invoice reading + AFIP – OCR + online validation, automatic accounting categorization and bank reconciliation; red flags for discrepancies.</li><li>• Risk and delinquency scoring – Models with accounting/commercial variables to prioritize collections, limits and terms; traffic lights and workflows.</li><li>• Fraud/anomaly detection – Atypical expenses, duplicate suppliers, cash deviations; rules + ML with audit trail and exportable evidence.</li>',
    'options.hotel.title': 'Hospitality',
    'options.hotel.list': '<li>• Dynamic pricing (revenue) – Rate adjustment by demand, weather and local events; automatic restrictions and upsells.</li><li>• Omnichannel chatbot (Web/WhatsApp) – Availability, bookings, payments and upgrades; integrates PMS/Channel Manager.</li><li>• Vision-assisted housekeeping – Android app recognizing room/amenity status and optimizing shifts.</li>',
    'options.restaurant.title': 'Restaurants',
    'options.restaurant.list': '<li>• Menu item demand forecast – Predicts sales by time slot and day; suggests purchasing and prep to cut waste.</li><li>• Intelligent POS upselling – Combo and add-on suggestions by history and time; menu and price A/B testing.</li><li>• Portion/waste control by vision – Cameras + connected scales to standardize servings and detect deviations.</li>',
    'options.agro.title': 'Agro',
    'options.agro.list': '<li>• Early detection of pests/nutrients – Mobile/drone vision to classify stress and recommend corrections (integrates with FertiCalc).</li><li>• Prescriptive irrigation & fertilization – Models with weather/ET0/phenology to calculate water volume, target EC/pH and doses.</li><li>• Harvest logistics and routing – Optimizes shifts, unloading windows and freight; integrates prices and moisture/shrink.</li>',
    'options.mining.title': 'Mining',
    'options.mining.list': '<li>• Predictive maintenance for heavy fleet – Telemetry to anticipate failures in shovels/trucks; spare parts planning.</li><li>• Vision safety (PPE/areas) – Detects helmets/vests, restricted zones and proximity to equipment; alerts.</li><li>• Plant blending & recovery – Predicts grade/recovery and adjusts mix to maximize production and energy.</li>',
    'options.gov.title': 'Government (public sector)',
    'options.gov.list': '<li>• Smart procedures + automatic validation – OCR for forms and IDs; registry checks; appointments and notifications.</li><li>• Public procurement & spend control with AI – Overpricing, related suppliers and fractioning; monitoring and alerts.</li><li>• Predictive urban management – Potholes, lighting, waste; optimal routing of crews and risk models for floods/fires.</li>',
    

    // BOOKING + VIDEO CALL
    'booking.title': 'Online booking + Video call',
    'booking.subtitle': 'Pick a slot in the scheduler and then join the video call from the same website.',
    'booking.step1.badge': 'Step 1',
    'booking.step1.title': 'Book your slot',
    'booking.step1.desc': 'Choose an available day and time. If the scheduler does not load, open it in a new tab.',
    'booking.openAgenda': 'Open scheduler in a new tab',
    'booking.step2.badge': 'Step 2',
    'booking.step2.title': 'Join the video call',
    'booking.step2.desc': 'For security, the video call is enabled with an access link/code sent by email after booking.',
    'booking.room.label': 'Access link / code',
    'booking.room.placeholder': 'Paste the link or access code you received by email',
    'booking.room.btn': 'Join',
    'booking.room.help': 'Without an access link/code you cannot join. If you did not receive it, contact us on WhatsApp.',
    'booking.placeholder.title': 'The video call opens here',
    'booking.placeholder.desc': 'Press “Join” to load the room inside the website.',
    'booking.openSeparate': 'Open dedicated page',
'cta.title': 'Questions? Use the ChatBot for more info',
    'cta.subtitle': 'For quotes or meetings, use the ChatBot.',
    'footer.copy': '<a href="https://www.linkedin.com/in/walter-valdivieso" target="_blank" rel="noopener noreferrer">© 2026 Ranquel Tech Lab</a>',
  }
};

function applyTranslations(lang = 'es') {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (!value) return;

    if (['INPUT', 'TEXTAREA'].includes(el.tagName)) {
      el.placeholder = value;
    } else {
      el.innerHTML = value;
    }
  });
}

function ensureNoopener(link) {
  if (!link) return;
  const rel = link.getAttribute('rel') || '';
  const tokens = new Set(rel.split(/\s+/).filter(Boolean));
  tokens.add('noopener');
  tokens.add('noreferrer');
  link.setAttribute('rel', Array.from(tokens).join(' '));
}

function hardenExternalLinks(root = document) {
  if (!root || typeof root.querySelectorAll !== 'function') return;
  root.querySelectorAll('a[target="_blank"]').forEach(ensureNoopener);
}

// --- EmailJS + Google Ads helpers ---
const EMAILJS_DEFAULTS = {
  publicKey: 'TU_PUBLIC_KEY',
  serviceId: 'service_xxxxxx',
  templateLead: 'template_presupuesto',
  templateVideollamada: 'template_videollamada',
};

function getEmailJsConfig() {
  return {
    ...EMAILJS_DEFAULTS,
    ...(window.EMAILJS_CONFIG || {}),
  };
}

function isEmailJsReady(config) {
  const cfg = config || getEmailJsConfig();
  return typeof emailjs !== 'undefined' && cfg.publicKey && cfg.serviceId && cfg.templateLead;
}

const GOOGLE_ADS_ID = 'AW-958141767';
const CONVERSION_LABEL_WHATSAPP = 'wsp_click';
const CONVERSION_LABEL_PRESUPUESTO_EMAIL = 'bgv6CNz5mcUbEMeq8MgD';
const CONVERSION_LABEL_VIDEOLLAMADA = 'videollamada_agendada';
const CONVERSION_LABEL_LLAMADA = 'llamada_click';

function trackGoogleAdsConversion(label, value = 1) {
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${label}`,
      value,
    });
  }
}

function trackContactChannel(channel = 'email', origin = 'desconocido') {
  if (typeof gtag === 'function') {
    gtag('event', `${channel}_click`, {
      event_category: 'engagement',
      event_label: origin,
      value: 1,
    });
  }

  const labelMap = {
    whatsapp: CONVERSION_LABEL_WHATSAPP,
    email: CONVERSION_LABEL_PRESUPUESTO_EMAIL,
    videollamada: CONVERSION_LABEL_VIDEOLLAMADA,
    llamada: CONVERSION_LABEL_LLAMADA,
  };

  const label = labelMap[channel];
  if (label) {
    trackGoogleAdsConversion(label, 1);
  }
}

// --- Métricas: click en WhatsApp ---
function trackWhatsAppClick(location = 'desconocido') {
  if (typeof gtag === 'function') {
    // Evento para GA4 / Google Ads antes de abrir WhatsApp
    gtag('event', 'click_whatsapp', {
      event_category: 'engagement',
      event_label: location,
      value: 1,
    });
  }

  trackGoogleAdsConversion(CONVERSION_LABEL_WHATSAPP, 1);
}

function attachContactTracking(link, channel, origin = 'desconocido') {
  if (!link || link.dataset.contactTracked === 'true') return;

  link.addEventListener('click', (event) => {
    const href = link.href;
    trackContactChannel(channel, origin);

    if (link.href.startsWith('mailto:') || link.href.startsWith('tel:') || link.target === '_blank') {
      event.preventDefault();
      setTimeout(() => {
        window.open(href, link.target || '_self', link.target ? 'noopener' : undefined);
      }, 120);
    }
  });

  link.dataset.contactTracked = 'true';
}

function setupWhatsAppTracking(root = document) {
  const whatsappLinks = root.querySelectorAll('a[href^="https://wa.me/"], a[href^="https://api.whatsapp.com/"]');

  whatsappLinks.forEach((link) => {
    if (link.dataset.whatsappTracked === 'true') return;

    link.addEventListener('click', (event) => {
      const location = link.dataset.whatsappLocation || 'desconocido';
      trackWhatsAppClick(location);

      // Abrimos WhatsApp en otra pestaña después de disparar el evento
      event.preventDefault();
      const href = link.href;
      setTimeout(() => {
        window.open(href, link.target || '_blank', 'noopener');
      }, 120);
    });

    link.dataset.whatsappTracked = 'true';
  });
}

function updateLangFlag(langSelector, lang) {
  if (!langSelector) return;
  const supported = ['es', 'en'];
  const next = supported.includes(lang) ? lang : 'es';
  langSelector.dataset.flag = next;
}


// ===== HERO CAROUSEL (video + imágenes) =====
function initHeroCarousel() {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
  if (slides.length <= 1) return;

  let idx = 0;
  const show = (i) => {
    slides.forEach((s, k) => {
      s.classList.toggle('active', k === i);
      const vid = s.querySelector('video');
      if (vid) {
        if (k === i) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      }
    });
  };

  show(idx);

  // Auto-play
  const intervalMs = 6500;
  let timer = setInterval(() => {
    idx = (idx + 1) % slides.length;
    show(idx);
  }, intervalMs);

  // Controles manuales (flechas)
  const prevBtn = carousel.querySelector('.hero-arrow.prev');
  const nextBtn = carousel.querySelector('.hero-arrow.next');
  const bump = (dir) => {
    // reinicia el timer para que no "salte" a los segundos
    if (timer) clearInterval(timer);
    idx = (idx + dir + slides.length) % slides.length;
    show(idx);
    timer = setInterval(() => {
      idx = (idx + 1) % slides.length;
      show(idx);
    }, intervalMs);
  };

  prevBtn?.addEventListener('click', () => bump(-1));
  nextBtn?.addEventListener('click', () => bump(1));
}
document.addEventListener('DOMContentLoaded', () => {
  // ===== HERO (Video + Imágenes) =====
  // Inicializa el carrusel automático. Si no se llama, queda fija la primera slide.
  initHeroCarousel();
  
  // ===== NAVEGACIÓN =====
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const vistaInicio = document.getElementById('vistaInicio');
  const vistaOpciones = document.getElementById('vistaOpciones');
  const vistaReservas = document.getElementById('vistaReservas');
  const langSelector = document.getElementById('langSelector');

  hardenExternalLinks();

  let menuOpen = false;
  
  // Toggle menú móvil
  menuToggle?.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.style.display = menuOpen ? 'block' : 'none';
    menuToggle.setAttribute('aria-expanded', menuOpen);
    
    // Cambiar icono
    if (menuOpen) {
      menuIcon.innerHTML = '<path d="M18 6L6 18M6 6l12 12"/>';
    } else {
      menuIcon.innerHTML = '<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>';
    }
  });
  
  // Navegación entre vistas
  function navegarA(vista, anchor = null) {
    menuOpen = false;
    mobileMenu.style.display = 'none';
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuIcon.innerHTML = '<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>';
    
    if (vista === 'inicio') {
      if (vistaInicio) vistaInicio.style.display = 'block';
      if (vistaOpciones) vistaOpciones.style.display = 'none';
      if (vistaReservas) vistaReservas.style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      if (anchor) {
        setTimeout(() => {
          const elemento = document.querySelector(anchor);
          if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } else if (vista === 'opciones') {
      if (vistaInicio) vistaInicio.style.display = 'none';
      if (vistaOpciones) vistaOpciones.style.display = 'block';
      if (vistaReservas) vistaReservas.style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (vista === 'reservas') {
      if (vistaInicio) vistaInicio.style.display = 'none';
      if (vistaOpciones) vistaOpciones.style.display = 'none';
      if (vistaReservas) vistaReservas.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  // Manejadores de navegación
  document.querySelectorAll('[data-nav="inicio"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navegarA('inicio');
    });
  });
  
  document.querySelectorAll('[data-nav="opciones"], .btn-opciones').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navegarA('opciones');
    });
  });

  document.querySelectorAll('[data-nav="reservas"], .btn-reservas').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navegarA('reservas');
    });
  });

  
  document.querySelectorAll('[data-anchor]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const anchor = el.getAttribute('data-anchor');
      navegarA('inicio', `#${anchor}`);
    });
  });

  // Idiomas
  const savedLang = localStorage.getItem('rtl-lang') || 'es';

  if (langSelector) {
    langSelector.value = savedLang;
    updateLangFlag(langSelector, savedLang);
  }

  applyTranslations(savedLang);

  langSelector?.addEventListener('change', (event) => {
    const nextLang = event.target.value;
    localStorage.setItem('rtl-lang', nextLang);
    updateLangFlag(langSelector, nextLang);
    applyTranslations(nextLang);
  });
  
  // Botones específicos
  document.getElementById('btnOpciones')?.addEventListener('click', () => {
    navegarA('opciones');
  });

  // Botón reservas
  document.getElementById('btnReservas')?.addEventListener('click', () => {
    navegarA('reservas');
  });

  // ===== RESERVA + DAILY (embed) =====
  // V6 Seguridad: se entra SOLO con un link/código de acceso (recibido por email).
  const btnJoinDaily = document.getElementById('btnJoinDaily');
  const dailyRoomInput = document.getElementById('dailyRoom');
  const dailyContainer = document.getElementById('dailyContainer');

  function extractAccess(value) {
    const raw = (value || '').trim();
    if (!raw) return '';

    // Si pega URL completa
    try {
      if (/^https?:\/\//i.test(raw)) {
        const u = new URL(raw);
        const a = u.searchParams.get('access');
        if (a) return a;
      }
    } catch (_) {}

    // Si pega "access=..."
    const m = raw.match(/access=([^&\s]+)/i);
    if (m && m[1]) return decodeURIComponent(m[1]);

    // Si pega el token directo
    if (raw.includes('.') && raw.length > 20) return raw;

    return raw;
  }

  async function resolveDailyUrlFromAccess(access) {
    const resp = await fetch(`/api/daily/token?access=${encodeURIComponent(access)}`, { cache: 'no-store' });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok || !data || !data.url) {
      const msg = (data && (data.details || data.error)) ? `${data.error || 'Error'}: ${data.details || ''}` : `Error ${resp.status}`;
      throw new Error(msg);
    }
    return data.url;
  }

  async function renderDailyFromAccess(accessOrLink) {
    if (!dailyContainer) return;
    dailyContainer.innerHTML = `<div class="muted">Cargando videollamada…</div>`;

    const access = extractAccess(accessOrLink);
    if (!access) {
      dailyContainer.innerHTML = `
        <div class="card" style="padding:16px">
          <strong>Necesitás el link/código de acceso.</strong><br>
          <div class="muted">Reservá un turno y revisá tu email. Sin acceso no se puede ingresar.</div>
        </div>
      `;
      return;
    }

    try {
      const url = await resolveDailyUrlFromAccess(access);
      dailyContainer.innerHTML = `
        <iframe
          title="Videollamada"
          src="${url}"
          allow="camera; microphone; fullscreen; speaker; display-capture"
          style="width: 100%; height: 600px; border: 0; border-radius: 12px;"
        ></iframe>
      `;
    } catch (err) {
      console.error(err);
      dailyContainer.innerHTML = `
        <div class="card" style="padding:16px">
          <strong>No se pudo habilitar la videollamada.</strong><br>
          <div class="muted">${String(err).replace(/^Error:\s*/,'')}</div>
          <div class="muted" style="margin-top:8px">Tip: probá más cerca del horario del turno. Si no te llegó el email, escribinos por WhatsApp.</div>
        </div>
      `;
    }
  }

  btnJoinDaily?.addEventListener('click', () => {
    const v = dailyRoomInput && 'value' in dailyRoomInput ? dailyRoomInput.value : '';
    renderDailyFromAccess(v);
  });

  dailyRoomInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const v = dailyRoomInput.value;
      renderDailyFromAccess(v);
    }
  });

  // Deep link: /?view=reservas&access=xxx
  try {
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view');
    const access = params.get('access');
    if (view === 'reservas') {
      navegarA('reservas');
      if (access) {
        if (dailyRoomInput) dailyRoomInput.value = access;
        renderDailyFromAccess(access);
      }
    }
  } catch (_) {}

  
  
  // ===== CHATBOT =====
  const btnChatbot = document.getElementById('btnChatbot');

  btnChatbot?.addEventListener('click', () => {
    window.ranquelChatbot?.open();
  });
  
  
  // ===== ANIMACIONES SCROLL (REVEAL) =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observar todos los elementos con data-reveal
  document.querySelectorAll('[data-reveal]').forEach(el => {
    observer.observe(el);
  });

  // Vinculamos medición de clics de WhatsApp en todos los enlaces estáticos
  setupWhatsAppTracking();

  // Seguimiento de llamadas telefónicas
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    const origin = link.dataset.callLocation || 'telefono';
    attachContactTracking(link, 'llamada', origin);
  });

  // Seguimiento de mails directos
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    attachContactTracking(link, 'email', link.dataset.emailLocation || 'mailto');
  });

  });

// Utilizar en el submit final del flujo de presupuesto (después de validar y enviar los datos)
// Ejemplo: onSuccess -> redirectToBudgetThankYou();
function redirectToBudgetThankYou() {
  window.location.href = '/gracias-presupuesto';
}

// Ejemplo para flujos que quieran derivar a la página de gracias de WhatsApp
function redirectToWhatsAppThankYou() {
  window.location.href = '/gracias-whatsapp';
}

function redirectToVideollamadaThankYou() {
  window.location.href = '/gracias-videollamada.html';
}

// === Chatbot Ranquel Tech Lab ===
(function () {
  const CALENDAR_LINK = "https://calendar.app.google/6Hw6eKqgXFk7o3qu5";
  const WHATSAPP_OWNER = "5493584118722";
  const EMAIL_OWNER = "ranqueltechlab@gmail.com";
  let state = {
    step: "intro",
    budget: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      details: "",
      budgetAmount: "",
      budgetDetails: "",
      contact: "whatsapp",
    },
  };

  function trackBudgetRequest(source = 'chatbot', contactType = 'email') {
    if (typeof gtag === 'function') {
      gtag('event', 'presupuesto_solicitado', {
        event_category: 'conversion',
        event_label: `${source}_${contactType}`,
        value: 1,
      });
    }

    const labelMap = {
      whatsapp: CONVERSION_LABEL_WHATSAPP,
      email: CONVERSION_LABEL_PRESUPUESTO_EMAIL,
      videollamada: CONVERSION_LABEL_VIDEOLLAMADA,
    };

    trackGoogleAdsConversion(labelMap[contactType] || CONVERSION_LABEL_PRESUPUESTO_EMAIL, 1);
  }

  async function enviarLeadPorFormSubmit(datos) {
    const observaciones = `${datos.message} | Canal: ${datos.channel} | Calendario: ${datos.calendar_link || 'N/A'}`;

    const formData = new FormData();
    formData.append('nombre', datos.name || '');
    formData.append('whatsapp', datos.phone || '');
    formData.append('email', datos.email || '');
    formData.append('presupuesto', datos.projectType || '');
    formData.append('observaciones', observaciones);
    formData.append('_subject', 'Nuevo presupuesto desde el chatbot');
    formData.append('_next', 'https://www.ranquel.com.ar/gracias');
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    const urlencodedPayload = new URLSearchParams({
      nombre: datos.name || '',
      whatsapp: datos.phone || '',
      email: datos.email || '',
      presupuesto: datos.projectType || '',
      observaciones,
      _subject: 'Nuevo presupuesto desde el chatbot',
      _next: 'https://www.ranquel.com.ar/gracias',
      _captcha: 'false',
      _template: 'table',
    });

    const primaryRequest = fetch('https://formsubmit.co/ajax/ranqueltechlab@gmail.com', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    // Enviamos un respaldo adicional en modo no-cors para evitar bloqueos por CORS u orígenes no permitidos.
    const fallbackRequest = fetch('https://formsubmit.co/ranqueltechlab@gmail.com', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlencodedPayload,
    });

    return Promise.allSettled([
      primaryRequest.catch((error) => {
        console.error('No se pudo enviar el lead por FormSubmit (AJAX)', error);
      }),
      fallbackRequest.catch((error) => {
        console.error('No se pudo enviar el lead por FormSubmit (no-cors)', error);
      }),
    ]);
  }

  async function enviarLeadAlAdmin(datos) {
    const config = getEmailJsConfig();
    const params = {
      name: datos.name,
      email: datos.email,
      phone: datos.phone,
      project_type: datos.projectType,
      message: datos.message,
      channel: datos.channel,
      calendar_link: datos.calendar_link,
    };

    // Siempre enviamos por FormSubmit para garantizar recepción en ranqueltechlab@gmail.com
    const formSubmitPromise = enviarLeadPorFormSubmit({
      ...datos,
      message: `${datos.message} | Copia enviada automáticamente`,
    });

    if (!isEmailJsReady(config)) {
      console.warn('EmailJS no está configurado correctamente. Solo se usará FormSubmit.');
      return formSubmitPromise;
    }

    // EmailJS se envía en paralelo y no bloquea el fallback
    const emailJsPromise = emailjs
      .send(config.serviceId, config.templateLead, params, config.publicKey)
      .catch((error) => {
        console.error('No se pudo enviar el lead por EmailJS, se mantiene FormSubmit como respaldo.', error);
      });

    return Promise.allSettled([formSubmitPromise, emailJsPromise]);
  }

  async function enviarMailVideollamadaAlUsuario(datos) {
    const config = getEmailJsConfig();

    const calendarLink = datos.calendar_link || CALENDAR_LINK;

    const observaciones =
      `${datos.message || ''} | Canal: ${datos.channel || 'videollamada'} | ` +
      `Calendario: ${calendarLink}`;

    const formData = new FormData();
    formData.append('nombre', datos.name || '');
    formData.append('whatsapp', datos.phone || '');
    formData.append('email', datos.email || '');
    formData.append('presupuesto', datos.projectType || 'Videollamada');
    formData.append('observaciones', observaciones);
    formData.append('_subject', 'Tu videollamada con Ranquel Tech Lab');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    const urlencodedPayload = new URLSearchParams({
      nombre: datos.name || '',
      whatsapp: datos.phone || '',
      email: datos.email || '',
      presupuesto: datos.projectType || 'Videollamada',
      observaciones,
      _subject: 'Tu videollamada con Ranquel Tech Lab',
      _template: 'table',
      _captcha: 'false',
    });

    const primaryRequest = fetch(`https://formsubmit.co/ajax/${encodeURIComponent(datos.email)}`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    const fallbackRequest = fetch(`https://formsubmit.co/${encodeURIComponent(datos.email)}`, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlencodedPayload,
    });

    const emailJsPromise =
      isEmailJsReady(config) && config.templateVideollamada
        ? emailjs.send(
            config.serviceId,
            config.templateVideollamada,
            { ...datos, calendar_link: calendarLink },
            config.publicKey,
          )
        : Promise.resolve();

    return Promise.allSettled([
      primaryRequest.catch((error) => {
        console.error('No se pudo enviar recordatorio de videollamada por FormSubmit (AJAX)', error);
      }),
      fallbackRequest.catch((error) => {
        console.error('No se pudo enviar recordatorio de videollamada por FormSubmit (no-cors)', error);
      }),
      emailJsPromise.catch((error) => {
        console.error('No se pudo enviar recordatorio de videollamada por EmailJS', error);
      }),
    ]);
  }

  async function submitLeadForm() {
    const { name, email, phone, projectType, details, contact, budgetAmount, budgetDetails } = state.budget;
    const observations = `${details} | Preferencia de contacto: ${contact} | Estimado: ${budgetAmount || 'N/A'} (${budgetDetails || 'Precio orientativo'})`;

    const leadPayload = {
      name,
      email,
      phone,
      projectType,
      message: observations,
      channel: contact,
      calendar_link: CALENDAR_LINK,
    };

    try {
      await enviarLeadAlAdmin(leadPayload);

      if (contact === 'videollamada') {
        await enviarMailVideollamadaAlUsuario(leadPayload);
      }

      return true;
    } catch (error) {
      console.error('No se pudo enviar el lead', error);
      // No bloqueamos la experiencia de usuario si el envío falla.
      return true;
    }
  }

  function updateBudget(field, value) {
    state = {
      ...state,
      budget: {
        ...state.budget,
        [field]: value,
      },
    };
  }

  function isBudgetInfoValid() {
    const { name, email, phone } = state.budget;
    return name.trim().length > 1 && email.trim().length > 3 && phone.trim().length > 5;
  }

  function isBudgetProjectValid() {
    const { projectType, details } = state.budget;
    return projectType.trim().length > 0 && details.trim().length > 5;
  }

  // Función para calcular presupuesto basado en tipo de proyecto
  function calculateBudget(projectType, details) {
    const lang = document.documentElement.lang;
    const isEnglish = lang === 'en';

    // Precios en PESOS para español
    const pricesES = {
      'Landing Page': {
        amount: 350000,
        display: '$350.000',
        details: 'Landing Page de 1 página - Precio orientativo',
      },
      'Página Web 2 páginas': {
        amount: 650000,
        display: '$650.000',
        details: 'Página Web de 2 páginas + $50.000 por página extra - Precio orientativo',
      },
      'Página Web con Pagos': {
        amount: 950000,
        display: '$950.000',
        details: 'Página Web con 2 páginas y sistema de pagos + $75.000 por página extra - Precio orientativo',
      },
      'Tienda E-commerce': {
        amount: 1350000,
        display: '$1.350.000',
        details: 'Tienda E-commerce completa - Precio orientativo',
      },
      'App Android/iOS': {
        amount: 2500000,
        display: '$2.500.000',
        details: 'App móvil para Android e iOS - Precio orientativo',
      },
      'App empresarial con IA': {
        amount: 3000000,
        display: '$3.000.000',
        details: 'App empresarial con integración de IA - Precio orientativo',
      },
      'Desarrollo a medida': {
        amount: 0,
        display: 'Consultar',
        details: 'Desarrollo a medida - Presupuesto sin cargo',
      },
    };

    // Precios en DÓLARES para inglés
    const pricesEN = {
      'Landing Page': {
        amount: 300,
        display: '$300',
        details: '1 Page Landing Page - Indicative price',
      },
      'Página Web 2 páginas': {
        amount: 500,
        display: '$500',
        details: 'Website with 2 pages + $50 per extra page - Indicative price',
      },
      'Página Web con Pagos': {
        amount: 700,
        display: '$700',
        details: 'Website with 2 pages and payments + $75 per extra page - Indicative price',
      },
      'Tienda E-commerce': {
        amount: 950,
        display: '$950',
        details: 'Complete E-commerce Store - Indicative price',
      },
      'App Android/iOS': {
        amount: 1800,
        display: '$1,800',
        details: 'Android/iOS App - Indicative price',
      },
      'App empresarial con IA': {
        amount: 2000,
        display: '$2,000',
        details: 'Business App with AI integration - Indicative price',
      },
      'Desarrollo a medida': {
        amount: 0,
        display: 'Contact us',
        details: 'Custom Development - Free quote',
      },
    };

    const prices = isEnglish ? pricesEN : pricesES;
    const priceInfo = prices[projectType] || prices['Desarrollo a medida'];

    let finalAmount = priceInfo.amount;
    let finalDisplay = priceInfo.display;
    let finalDetails = priceInfo.details;

    if ((projectType === 'Página Web 2 páginas' || projectType === 'Página Web con Pagos') && details) {
      const pageMatch = details.match(/(\d+)\s*páginas?/i) || details.match(/(\d+)\s*pages?/i);
      if (pageMatch) {
        const pages = parseInt(pageMatch[1]);
        if (pages > 2) {
          const extraPages = pages - 2;
          const extraCost = isEnglish
            ? (projectType === 'Página Web 2 páginas' ? 50 : 75) * extraPages
            : (projectType === 'Página Web 2 páginas' ? 50000 : 75000) * extraPages;

          finalAmount += extraCost;
          finalDisplay = isEnglish
            ? `$${(priceInfo.amount + extraCost).toLocaleString('en-US')}`
            : `$${(priceInfo.amount + extraCost).toLocaleString('es-AR')}`;

          finalDetails = isEnglish
            ? `${priceInfo.details.split(' - ')[0]} (${pages} pages total) - Indicative price`
            : `${priceInfo.details.split(' - ')[0]} (${pages} páginas total) - Precio orientativo`;
        }
      }
    }

    return {
      amount: finalAmount,
      display: finalDisplay,
      details: finalDetails,
    };
  }

  function buildBudgetMessage() {
    const { name, email, phone, projectType, details, contact, budgetAmount, budgetDetails } = state.budget;
    return `Hola, soy ${name}. Quiero un presupuesto para: ${projectType}. Detalles: ${details}. Estimado: ${budgetAmount || 'N/A'} (${budgetDetails || 'Precio orientativo'}). Mis datos de contacto son ${email} / ${phone}. Prefiero que me contacten por ${contact}.`;
  }

  async function handleBudgetConfirmation(contactType) {
    updateBudget('contact', contactType);

    const sent = await submitLeadForm();
    if (!sent) return;

    trackBudgetRequest('chatbot', contactType);

    if (contactType === 'whatsapp') {
      redirectToWhatsAppThankYou();
    } else if (contactType === 'videollamada') {
      redirectToVideollamadaThankYou();
    } else {
      redirectToBudgetThankYou();
    }
  }

  function render() {
    const container = document.getElementById("chatbot-panel-inner");
    if (!container) return;

    const s = state;
    const lang = document.documentElement.lang;
    const isEnglish = lang === 'en';

    if (s.step === "intro") {
      container.innerHTML = `
        <div>
          <p><strong>${isEnglish ? 'Hi 👋' : 'Hola 👋'}</strong></p>
          <p>${isEnglish ? 'I am the <strong>Ranquel Tech Lab</strong> assistant.' : 'Soy el asistente de <strong>Ranquel Tech Lab</strong>.'}</p>
          <p class="chatbot-badge">${isEnglish ? 'I help you get a quote or book a call.' : 'Te ayudo a entender opciones y agendar una charla.'}</p>
          <button id="cb-budget" class="chatbot-btn-primary" style="margin-bottom:6px;">${isEnglish ? 'Get a quote ⭐' : 'Mirar Precios ⭐'}</button>
          <button id="cb-start" class="chatbot-btn-primary">${isEnglish ? 'See options 👉' : 'Ver opciones 👉'}</button>
        </div>
      `;
      document.getElementById("cb-start").onclick = () => {
        state.step = "options";
        render();
      };
      document.getElementById("cb-budget").onclick = () => {
        state.step = "budget-info";
        render();
      };
      return;
    }

    if (s.step === "options") {
      container.innerHTML = `
        <div>
          <p>${isEnglish ? 'Tell me what you need and pick how to continue.' : 'Contame qué necesitás y elegí cómo querés seguir.'}</p>

          <div class="chatbot-badge" style="margin-bottom:12px;">
            <strong>${isEnglish ? 'Quick options:' : 'Opciones rápidas:'}</strong>
            <ul style="margin:8px 0 0 16px; padding:0 0 0 12px;">
              <li>${isEnglish ? 'Book a short video call.' : 'Agendar una videollamada breve.'}</li>
              <li>${isEnglish ? 'Chat now on WhatsApp.' : 'Hablar ahora por WhatsApp.'}</li>
              <li>${isEnglish ? 'Send info by email and we reply.' : 'Enviar info por email y te respondemos.'}</li>
            </ul>
          </div>

          <button id="cb-booking" class="chatbot-btn-primary" style="display:block; width:100%; text-align:center; margin-top:6px;">
            ${isEnglish ? 'Book a video call' : 'Agendar videollamada'}
          </button>

          <a href="https://wa.me/${WHATSAPP_OWNER}" target="_blank" rel="noopener noreferrer" class="chatbot-btn-primary" data-whatsapp-location="wsp_bot" style="display:block; text-align:center; margin-top:6px; background:#22c55e;">
            ${isEnglish ? 'Chat on WhatsApp' : 'Hablar por WhatsApp'}
          </a>

          <a href="mailto:${EMAIL_OWNER}" class="chatbot-btn-primary cb-email-link" data-email-location="chatbot_options" style="display:block; text-align:center; margin-top:6px; background:#0ea5e9;">
            ${isEnglish ? 'Send info by email' : 'Enviar info por email'}
          </a>

          <button id="cb-back-intro" class="chatbot-btn-link">${isEnglish ? 'Back' : 'Volver'}</button>
        </div>
      `;

      hardenExternalLinks(container);

      document.getElementById("cb-back-intro").onclick = () => {
        state.step = "intro";
        render();
      };
      setupWhatsAppTracking(container);

      const emailLink = container.querySelector('.cb-email-link');

      // Ir a la sección interna de Reservas (turnero + videollamada)
      const bookingBtn = document.getElementById('cb-booking');
      if (bookingBtn) {
        bookingBtn.onclick = () => {
          try { attachContactTracking(bookingBtn, 'videollamada', 'chatbot_opciones'); } catch (e) {}
          // cerrar panel
          document.getElementById('chatbot-panel')?.classList.add('chatbot-hidden');
          // navegar a reservas
          navegarA('reservas');
        };
      }
      if (emailLink) attachContactTracking(emailLink, 'email', 'chatbot_opciones');
      return;
    }

    if (s.step === "budget-info") {
      container.innerHTML = `
        <div>
          <p><strong>${isEnglish ? 'Details for your quote' : 'Datos para el presupuesto'}</strong></p>
          <label>${isEnglish ? 'Full name' : 'Nombre y apellido'}
            <input id="cb-name" class="chatbot-input" type="text" placeholder="${isEnglish ? 'Your name' : 'Tu nombre'}" value="${s.budget.name}" />
          </label>
          <label>Email
            <input id="cb-email" class="chatbot-input" type="email" placeholder="${isEnglish ? 'you@mail.com' : 'tu@mail.com'}" value="${s.budget.email}" />
          </label>
          <label>${isEnglish ? 'Phone / WhatsApp' : 'Teléfono / WhatsApp'}
            <input id="cb-phone" class="chatbot-input" type="tel" placeholder="${isEnglish ? 'Country code and number' : 'Código de país y número'}" value="${s.budget.phone}" />
          </label>
          <button id="cb-next-project" class="chatbot-btn-primary" ${isBudgetInfoValid() ? '' : 'disabled'}>${isEnglish ? 'Continue' : 'Continuar'}</button>
          <button id="cb-back-intro-2" class="chatbot-btn-link">${isEnglish ? 'Back' : 'Volver'}</button>
        </div>
      `;

      const nameInput = document.getElementById("cb-name");
      const emailInput = document.getElementById("cb-email");
      const phoneInput = document.getElementById("cb-phone");
      const nextBtn = document.getElementById("cb-next-project");

      const handleInputChange = () => {
        updateBudget('name', nameInput.value);
        updateBudget('email', emailInput.value);
        updateBudget('phone', phoneInput.value);
        nextBtn.disabled = !isBudgetInfoValid();
      };

      nameInput.oninput = handleInputChange;
      emailInput.oninput = handleInputChange;
      phoneInput.oninput = handleInputChange;

      document.getElementById("cb-next-project").onclick = () => {
        if (!isBudgetInfoValid()) return;
        state.step = "budget-project";
        render();
      };

      document.getElementById("cb-back-intro-2").onclick = () => {
        state.step = "intro";
        render();
      };
      return;
    }

    if (s.step === "budget-project") {
      container.innerHTML = `
        <div>
          <p><strong>${isEnglish ? 'Tell us about your project' : 'Contanos sobre tu proyecto'}</strong></p>
          <label>${isEnglish ? 'Project type' : 'Tipo de proyecto'}
            <select id="cb-project-type" class="chatbot-select">
              <option value="">${isEnglish ? 'Choose an option' : 'Elegí una opción'}</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Página Web 2 páginas">${isEnglish ? 'Web Page (2 pages)' : 'Página Web (2 páginas)'}</option>
              <option value="Página Web con Pagos">${isEnglish ? 'Web Page with Payments' : 'Página Web con Pagos'}</option>
              <option value="Tienda E-commerce">${isEnglish ? 'E-commerce Store' : 'Tienda E-commerce'}</option>
              <option value="App Android/iOS">${isEnglish ? 'Android/iOS App' : 'App Android/iOS'}</option>
              <option value="App empresarial con IA">${isEnglish ? 'Business App with AI' : 'App empresarial con IA'}</option>
              <option value="Desarrollo a medida">${isEnglish ? 'Custom Development' : 'Desarrollo a medida'}</option>
            </select>
          </label>
          <label>${isEnglish ? 'Details and requirements' : 'Detalles y requerimientos'}
            <textarea id="cb-details" class="chatbot-textarea" placeholder="${isEnglish ? 'Describe your project, features, timeline, number of pages, etc.' : 'Describí tu proyecto, funcionalidades, plazos, cantidad de páginas, etc.'}">${s.budget.details}</textarea>
          </label>
          <button id="cb-calculate-budget" class="chatbot-btn-primary" ${isBudgetProjectValid() ? '' : 'disabled'}>${isEnglish ? 'Calculate Budget' : 'Calcular Presupuesto'}</button>
          <button id="cb-back-info" class="chatbot-btn-link">${isEnglish ? 'Back' : 'Volver'}</button>
        </div>
      `;

      const typeSelect = document.getElementById("cb-project-type");
      const detailsInput = document.getElementById("cb-details");
      const calcBtn = document.getElementById("cb-calculate-budget");

      typeSelect.value = s.budget.projectType;

      const handleProjectChange = () => {
        updateBudget('projectType', typeSelect.value);
        updateBudget('details', detailsInput.value);
        calcBtn.disabled = !isBudgetProjectValid();
      };

      typeSelect.onchange = handleProjectChange;
      detailsInput.oninput = handleProjectChange;

      document.getElementById("cb-calculate-budget").onclick = () => {
        if (!isBudgetProjectValid()) return;
        const budget = calculateBudget(typeSelect.value, detailsInput.value);
        updateBudget('projectType', typeSelect.value);
        updateBudget('details', detailsInput.value);
        updateBudget('budgetAmount', budget.display);
        updateBudget('budgetDetails', budget.details);
        state.step = "budget-result";
        render();
      };

      document.getElementById("cb-back-info").onclick = () => {
        state.step = "budget-info";
        render();
      };
      return;
    }

    if (s.step === "budget-result") {
      const fallbackBudget = s.budget.projectType ? calculateBudget(s.budget.projectType, s.budget.details) : { display: '-', details: '' };
      const budgetAmount = s.budget.budgetAmount || fallbackBudget.display;
      const budgetDetails = s.budget.budgetDetails || fallbackBudget.details;

      container.innerHTML = `
        <div>
          <p><strong>${isEnglish ? '🎉 Budget Calculated!' : '🎉 ¡Presupuesto Calculado!'}</strong></p>
          <div style="background: rgba(34,204,255,0.1); padding: 12px; border-radius: 8px; margin: 12px 0;">
            <p style="font-size: 24px; font-weight: bold; color: var(--accent);">${budgetAmount}</p>
            <p style="font-size: 12px; color: var(--text-muted);">${budgetDetails}</p>
          </div>
          <p><strong>${isEnglish ? 'Choose how to continue:' : 'Elegí cómo continuar:'}</strong></p>

          <button id="cb-confirm-whatsapp" class="chatbot-btn-primary" style="background:#22c55e;">
            ${isEnglish ? '💬 Receive quote by WhatsApp' : '💬 Recibir presupuesto por WhatsApp'}
          </button>

          <button id="cb-confirm-email" class="chatbot-btn-primary" style="background:#0ea5e9;">
            ${isEnglish ? '📧 Receive quote by Email' : '📧 Recibir presupuesto por Email'}
          </button>

          <button id="cb-confirm-call" class="chatbot-btn-primary">
            ${isEnglish ? '📅 Schedule Explanatory Video Call' : '📅 Agendar Videollamada Explicativa'}
          </button>

          <div style="margin-top: 12px; padding: 12px; background: rgba(34,204,255,0.05); border-radius: 8px; border: 1px solid var(--border);">
            <p style="font-size: 12px; color: var(--text-muted); margin: 0;">
              ${isEnglish 
                ? 'For video calls: You will receive the calendar link by email to choose your preferred time.' 
                : 'Para videollamadas: Recibirás el link del calendario por email para elegir tu horario preferido.'}
            </p>
          </div>

          <button id="cb-back-project" class="chatbot-btn-link">
            ${isEnglish ? 'Back to modify' : 'Volver a modificar'}
          </button>
        </div>
      `;

      document.getElementById('cb-confirm-whatsapp').onclick = () => handleBudgetConfirmation('whatsapp');
      document.getElementById('cb-confirm-email').onclick = () => handleBudgetConfirmation('email');
      document.getElementById('cb-confirm-call').onclick = () => handleBudgetConfirmation('videollamada');
      document.getElementById("cb-back-project").onclick = () => {
        state.step = "budget-project";
        render();
      };
      return;
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("chatbot-container");
    if (!container) return;

    container.innerHTML = `
      <button id="chatbot-toggle" class="chatbot-toggle">💬 Chat Ranquel Tech Lab</button>
      <div id="chatbot-panel" class="chatbot-panel chatbot-hidden">
        <div id="chatbot-panel-inner"></div>
      </div>
    `;

    const toggle = document.getElementById("chatbot-toggle");
    const panel = document.getElementById("chatbot-panel");

    const openPanel = () => {
      panel.classList.remove("chatbot-hidden");
      render();
    };

    const togglePanel = () => {
      panel.classList.toggle("chatbot-hidden");
      render();
    };

    toggle.onclick = togglePanel;

    window.ranquelChatbot = {
      open: openPanel,
      toggle: togglePanel,
    };

    setTimeout(openPanel, 6000);
  });
})();

