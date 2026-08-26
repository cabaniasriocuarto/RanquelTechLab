// =====================
// Ranquel Tech Lab - JavaScript
// Archivo: script.js
// =====================

const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre',
    'nav.services': 'Soluciones',
    'nav.ai': 'IA aplicada',
    'nav.marketing': 'Lab',
    'nav.contact': 'Contacto',
    'nav.method': 'Método',
    'nav.options': 'Opciones de Desarrollo',
    'nav.booking': 'Hablemos',
    'lang.label': 'Selector de idioma',
    'common.back': '← Volver al inicio',

    // HERO + LOCAL SEO
    'hero.badge': 'Río Cuarto · Argentina',
    'hero.title': '<span class="tl-hero-line">Tecnología actual</span> <span class="tl-hero-line">para</span> <em class="tl-hero-line">negocios rentables.</em>',
    'hero.subtitle': 'Creamos productos digitales, automatizaciones e IA para mejorar procesos, ventas y decisiones.',
    'hero.primary': 'Explorar soluciones',
    'hero.secondary': 'Contanos tu desafío <span aria-hidden="true">↗</span>',
    'hero.area1': 'Estrategia',
    'hero.area2': 'Producto',
    'hero.area3': 'IA y datos',
    'hero.area4': 'Crecimiento',

    'hero.chatbot': 'Chatbot',
    'hero.whatsapp': 'WhatsApp',
    'hero.options': 'Opciones de Desarrollo',
    'hero.booking': 'Reservar videollamada',

    // SOBRE NOSOTROS – FOCO RÍO CUARTO / CÓRDOBA / ARGENTINA + AGRO + RETAIL
    'about.eyebrow': '01 / NUESTRA MIRADA',
    'about.title': 'La tecnología sirve cuando deja de sentirse complicada.',
    'about.p1': 'Partimos de cómo funciona tu negocio hoy, detectamos qué frena el trabajo y diseñamos una solución que tenga sentido para ese contexto.',
    'about.p2': 'Web, software, automatización, datos o IA: elegimos las herramientas después de entender el problema.',
    'about.cta': 'Conocé Opciones de Desarrollo',

    'solutions.eyebrow': '02 / LO QUE CONSTRUIMOS',
    'solutions.title': 'Menos catálogo.<br>Más soluciones con sentido.',
    'solutions.body': 'Partimos de una necesidad concreta y definimos la tecnología en función del proyecto.',
    'solutions.digital.label': 'PRODUCTOS DIGITALES',
    'solutions.digital.title': 'Webs, tiendas y apps pensadas para cada proyecto.',
    'solutions.digital.body': 'Diseño, desarrollo, dominio, hosting y puesta en marcha.',
    'solutions.digital.tag1': 'Web & e-commerce',
    'solutions.digital.tag2': 'Apps móviles',
    'solutions.digital.tag3': 'Experiencia de usuario',
    'solutions.software.label': 'SOFTWARE Y AUTOMATIZACIÓN',
    'solutions.software.title': 'Sistemas a medida para conectar información y procesos.',
    'solutions.software.body': 'Paneles, integraciones, microservicios y flujos de trabajo.',
    'solutions.software.tag1': 'Software a medida',
    'solutions.software.tag2': 'Integraciones',
    'solutions.software.tag3': 'Dashboards',
    'solutions.ai.label': 'IA APLICADA',
    'solutions.ai.title': 'IA integrada al contexto de cada negocio.',
    'solutions.ai.body': 'Asistentes, bots y visión por computadora conectados a contenidos y procesos.',
    'solutions.ai.tag1': 'Asistentes',
    'solutions.ai.tag2': 'Bots',
    'solutions.ai.tag3': 'Visión artificial',
    'solutions.marketing.label': 'MARKETING Y ANALÍTICA',
    'solutions.marketing.title': 'Presencia digital con medición desde el inicio.',
    'solutions.marketing.body': 'SEO, campañas y analítica para planificar, medir y ajustar.',
    'solutions.marketing.tag1': 'SEO & Ads',
    'solutions.marketing.tag2': 'Analítica',
    'solutions.marketing.tag3': 'Conversión',
    'sectors.eyebrow': 'ÁMBITOS DE APLICACIÓN',
    'sectors.title': 'Distintos sectores. Problemas diferentes.',
    'sectors.body': 'Explorá ideas para industria, finanzas, hotelería, gastronomía, agro, minería y sector público.',
    'sectors.cta': 'Ver ideas por sector <span aria-hidden="true">↗</span>',
    'system.input': 'ENTRADA / CONTEXTO',
    'system.active': 'SISTEMA ACTIVO',
    'system.operation': 'Tu operación',
    'system.context': 'datos + reglas + procesos',
    'system.output1': 'Automatización',
    'system.output2': 'Asistencia',
    'system.output3': 'Medición',

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
    'ia.eyebrow': '03 / INTELIGENCIA APLICADA',
    'ia.title': 'IA donde aporta valor. No donde suma ruido.',
    'ia.subtitle': 'Conectamos modelos, datos y herramientas existentes para asistir decisiones, automatizar tareas o crear nuevas experiencias.',
    'ia.consulting.title': 'Asesoramiento',
    'ia.consulting.desc': 'Auditamos procesos y datos, medimos tu madurez digital y detectamos "quick wins". Entregamos un plan 30-60-90 días con casos de uso priorizados, costos, métricas y ROI estimado para acelerar resultados.',
    'ia.gpts.title': 'GPTs a medida',
    'ia.gpts.desc': 'Creamos asistentes con el contexto de tu negocio (documentos, políticas, catálogos) y reglas propias. Se conectan a tus sistemas (ERP/CRM/AFIP/Sheets) para automatizar tareas, responder con trazabilidad y ejecutar flujos end-to-end.',
    'ia.bots.title': 'Bots conversacionales',
    'ia.bots.desc': 'Web/WhatsApp/Instagram que atienden, reservan, cobran y escalan a un humano cuando corresponde. Entrenados con tu contenido, con analytics de conversaciones y mejoras continuas para elevar la experiencia del cliente.',
    'ia.cta': 'Evaluemos un caso de uso <span aria-hidden="true">↗</span>',

    // RESTO IGUAL QUE TENÍAS
    'marketing.title': 'Marketing',
    'marketing.subtitle': 'Con 13 años de experiencia en Marketing digital, hacemos que el dinero de tu inversión en publicidad digital rinda como Nunca Antes.',
    'method.eyebrow': '04 / CÓMO TRABAJAMOS',
    'method.title': 'Cuatro etapas.<br>Un proceso claro.',
    'method.subtitle': 'Ordenamos el trabajo en cuatro etapas, con decisiones visibles en cada una.',
    'method.step1.title': 'Entender',
    'method.step1.desc': 'Nos contás qué necesitás, cómo funciona hoy y qué querés mejorar.',
    'method.step2.title': 'Diseñar',
    'method.step2.desc': 'Ordenamos prioridades y preparamos una propuesta antes de desarrollar.',
    'method.step3.title': 'Construir',
    'method.step3.desc': 'Desarrollamos, integramos y probamos la solución, compartiendo avances.',
    'method.step4.title': 'Acompañar',
    'method.step4.desc': 'Ponemos en marcha, medimos y ajustamos según el uso real.',
    'method.step5.title': '5- Conexión con Buscadores y SEO',
    'method.step5.desc': 'Conectamos la web a Google Ads, Google Tag Manager, Google Analytics, Google Search Console, Meta (Facebook + Instagram + WhatsApp), Bing y Bing Ads. Optimización e Indexación de la Página para reconocimiento prioritario en buscadores.',
    'method.step6.title': '6- Entrega de la web, Puesta a punto y seguimiento mensual.',
    'method.step6.desc': 'Ultimamos detalles. Se Abona el 50% del presupuesto restante. Hacemos entrega de la Página Web y hacemos un segumiento mensual para la implementación de nuevas tecnologías.',
    'options.title': 'Ideas por sector',
    'options.subtitle': 'Cada sector tiene desafíos propios. Estas son posibilidades para iniciar una conversación, no soluciones cerradas.',
    'options.industry.title': 'Industria (manufactura)',
    'options.industry.list': '<li>Tableros para ordenar producción, calidad y mantenimiento.</li><li>Integración de datos entre equipos y sistemas existentes.</li><li>Alertas y trazabilidad para acompañar decisiones operativas.</li>',
    'options.finance.title': 'Finanzas (PyMEs)',
    'options.finance.list': '<li>Flujos para ordenar comprobantes, conciliaciones y cobranzas.</li><li>Paneles que reúnen información financiera y comercial.</li><li>Reglas y alertas para revisar movimientos fuera de lo habitual.</li>',
    'options.hotel.title': 'Hotelería',
    'options.hotel.list': '<li>Experiencias de reserva y comunicación con huéspedes.</li><li>Integraciones para centralizar disponibilidad y operación.</li><li>Paneles para organizar tareas, ocupación y seguimiento.</li>',
    'options.restaurant.title': 'Restaurantes',
    'options.restaurant.list': '<li>Menús, pedidos y canales digitales conectados.</li><li>Herramientas para inventario, compras y organización diaria.</li><li>Analítica para entender demanda, horarios y productos.</li>',
    'options.agro.title': 'Agro',
    'options.agro.list': '<li>Registros de campo y aplicaciones adaptadas al trabajo móvil.</li><li>Paneles que reúnen información productiva y operativa.</li><li>Integraciones para simplificar seguimiento y logística.</li>',
    'options.mining.title': 'Minería',
    'options.mining.list': '<li>Información de mantenimiento y operación en un mismo lugar.</li><li>Flujos para registrar novedades, seguridad y seguimiento.</li><li>Tableros adaptados a equipos, turnos y procesos.</li>',
    'options.gov.title': 'Gobierno (sector público)',
    'options.gov.list': '<li>Formularios, turnos y seguimiento de trámites.</li><li>Paneles para organizar información y atención ciudadana.</li><li>Herramientas internas para equipos y servicios públicos.</li>',
    

    // RESERVA + VIDEOLLAMADA
    'booking.title': 'Reserva online + Videollamada',
    'booking.subtitle': 'Elegí un horario en el turnero y después entrá a la videollamada desde la misma web.',
    'booking.step1.badge': 'Paso 1',
    'booking.step1.title': 'Reservá tu turno',
    'booking.step1.desc': 'Elegí día y hora disponibles. Si no ves el turnero, abrilo en otra pestaña.',
    'booking.languageNote': 'El turnero se administra en español. Podés abrirlo en una pestaña nueva para elegir un horario.',
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
    'lab.eyebrow': '05 / RANQUEL LAB',
    'lab.title': 'Probar en pequeño antes de construir en grande.',
    'lab.body': 'Prototipamos usos de IA, automatización y visión por computadora para evaluar su utilidad antes de una implementación mayor.',
    'lab.card1.title': 'IA',
    'lab.card1.body': 'asistentes con contexto',
    'lab.card2.title': 'AUTO',
    'lab.card2.body': 'flujos conectados',
    'lab.card3.title': 'VISIÓN',
    'lab.card3.body': 'prototipos visuales',
    'contact.eyebrow': '06 / ¿TENÉS UN DESAFÍO?',
    'contact.title': 'Hagamos que funcione.',
    'contact.body': 'Contanos qué querés mejorar y vemos juntos por dónde conviene empezar.',
    'contact.primary': 'Agendá una videollamada',
    'contact.secondary': 'Escribinos por WhatsApp <span aria-hidden="true">↗</span>',
    'contact.base': 'BASE',
    'contact.email': 'EMAIL',
    'contact.phone': 'TELÉFONO',
    'footer.location': 'Río Cuarto · Córdoba · Argentina',
    'footer.copy': '© 2026 Ranquel Tech Lab',
    'chat.toggle': 'Consulta rápida <span aria-hidden="true">↗</span>',
    'cta.title': '¿Tenés un desafío?',
    'cta.subtitle': 'Contanos qué necesitás resolver y vemos por dónde empezar.',
  },

  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Solutions',
    'nav.ai': 'Applied AI',
    'nav.marketing': 'Lab',
    'nav.contact': 'Contact',
    'nav.method': 'Method',
    'nav.options': 'Development options',
    'nav.booking': 'Let\'s talk',
    'lang.label': 'Language selector',
    'common.back': '← Back to home',

    // HERO + LOCAL SEO (EN)
    'hero.badge': 'Río Cuarto · Argentina',
    'hero.title': '<span class="tl-hero-line">Modern technology</span> <span class="tl-hero-line">for</span> <em class="tl-hero-line">profitable businesses.</em>',
    'hero.subtitle': 'We build digital products, automations, and AI to improve processes, sales, and decision-making.',
    'hero.primary': 'Explore solutions',
    'hero.secondary': 'Tell us your challenge <span aria-hidden="true">↗</span>',
    'hero.area1': 'Strategy',
    'hero.area2': 'Product',
    'hero.area3': 'AI & data',
    'hero.area4': 'Growth',

    'hero.chatbot': 'Chatbot',
    'hero.whatsapp': 'WhatsApp',
    'hero.options': 'Development options',

    // ABOUT (EN) – MISMO FOCO
    'about.eyebrow': '01 / OUR POINT OF VIEW',
    'about.title': 'Technology works when it stops feeling complicated.',
    'about.p1': 'We start with how your business works today, identify what slows it down, and design a solution that fits that context.',
    'about.p2': 'Web, software, automation, data, or AI: we choose the tools after understanding the problem.',
    'about.cta': 'See development options',

    'solutions.eyebrow': '02 / WHAT WE BUILD',
    'solutions.title': 'Technology shaped<br>around each project.',
    'solutions.body': 'We start with a specific need and define the technology around the project.',
    'solutions.digital.label': 'DIGITAL PRODUCTS',
    'solutions.digital.title': 'Websites, online stores, and apps designed around each project.',
    'solutions.digital.body': 'Design, development, domain and hosting setup, and launch.',
    'solutions.digital.tag1': 'Web & e-commerce',
    'solutions.digital.tag2': 'Mobile apps',
    'solutions.digital.tag3': 'User experience',
    'solutions.software.label': 'SOFTWARE & AUTOMATION',
    'solutions.software.title': 'Custom systems that connect information and processes.',
    'solutions.software.body': 'Dashboards, integrations, microservices, and workflows.',
    'solutions.software.tag1': 'Custom software',
    'solutions.software.tag2': 'Integrations',
    'solutions.software.tag3': 'Dashboards',
    'solutions.ai.label': 'APPLIED AI',
    'solutions.ai.title': 'AI integrated into each business context.',
    'solutions.ai.body': 'Assistants, bots, and computer vision connected to content and processes.',
    'solutions.ai.tag1': 'Assistants',
    'solutions.ai.tag2': 'Bots',
    'solutions.ai.tag3': 'Computer vision',
    'solutions.marketing.label': 'MARKETING & ANALYTICS',
    'solutions.marketing.title': 'Digital visibility with measurement built in.',
    'solutions.marketing.body': 'SEO, campaigns, and analytics for planning, measurement, and iteration.',
    'solutions.marketing.tag1': 'SEO & Ads',
    'solutions.marketing.tag2': 'Analytics',
    'solutions.marketing.tag3': 'Conversion',
    'sectors.eyebrow': 'AREAS OF APPLICATION',
    'sectors.title': 'Different sectors. Different challenges.',
    'sectors.body': 'Explore ideas for manufacturing, finance, hotels, restaurants, agriculture, mining, and the public sector.',
    'sectors.cta': 'Explore ideas by sector <span aria-hidden="true">↗</span>',
    'system.input': 'INPUT / CONTEXT',
    'system.active': 'SYSTEM ACTIVE',
    'system.operation': 'Your operation',
    'system.context': 'data + rules + processes',
    'system.output1': 'Automation',
    'system.output2': 'Assistance',
    'system.output3': 'Measurement',

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

    'ia.eyebrow': '03 / APPLIED INTELLIGENCE',
    'ia.title': 'AI where it adds value. Not where it adds noise.',
    'ia.subtitle': 'We connect models, data, and existing tools to support decisions, automate tasks, or create new experiences.',
    'ia.consulting.title': 'Consulting',
    'ia.consulting.desc': 'We audit processes and data, measure your digital maturity and detect quick wins. We deliver a 30-60-90 day plan with prioritized use cases, costs, metrics and estimated ROI to accelerate results.',
    'ia.gpts.title': 'Custom GPTs',
    'ia.gpts.desc': 'We build assistants with your business context (documents, policies, catalogs) and custom rules. They connect to your systems (ERP/CRM/AFIP/Sheets) to automate tasks, respond with traceability and run end-to-end flows.',
    'ia.bots.title': 'Conversational bots',
    'ia.bots.desc': 'Web/WhatsApp/Instagram bots that serve, book, collect payments and escalate to a human when needed. Trained with your content, with analytics and continuous improvements.',
    'ia.cta': 'Let\'s evaluate a use case <span aria-hidden="true">↗</span>',

    'marketing.title': 'Marketing',
    'marketing.subtitle': 'With 13 years of digital marketing experience, we make your ad investment work harder than ever.',
    'method.eyebrow': '04 / HOW WE WORK',
    'method.title': 'Four stages.<br>One clear process.',
    'method.subtitle': 'We organize the work into four stages, with visible decisions at each one.',
    'method.step1.title': 'Understand',
    'method.step1.desc': 'You tell us what you need, how things work today, and what you want to improve.',
    'method.step2.title': 'Design',
    'method.step2.desc': 'We define priorities and prepare a proposal before development begins.',
    'method.step3.title': 'Build',
    'method.step3.desc': 'We develop, integrate, and test the solution, sharing progress along the way.',
    'method.step4.title': 'Support',
    'method.step4.desc': 'We launch, measure, and adjust based on real-world use.',
    'method.step5.title': '5 Search engine connection & SEO',
    'method.step5.desc': 'We connect the site to Google Ads, Google Tag Manager, Google Analytics, Google Search Console, Meta (Facebook + Instagram + WhatsApp), Bing and Bing Ads. Optimization and indexing for priority recognition.',
    'method.step6.title': '6 Delivery, tuning and monthly follow-up.',
    'method.step6.desc': 'We finalize details, collect the remaining 50%, deliver the website and run monthly follow-ups to add new technology.',
    'options.title': 'Ideas by sector',
    'options.subtitle': 'Every sector has its own challenges. These are conversation starters, not off-the-shelf solutions.',
    'options.industry.title': 'Industry (manufacturing)',
    'options.industry.list': '<li>Dashboards for production, quality, and maintenance.</li><li>Data integration across equipment and existing systems.</li><li>Alerts and traceability to support operational decisions.</li>',
    'options.finance.title': 'Finance (SMEs)',
    'options.finance.list': '<li>Workflows for documents, reconciliation, and collections.</li><li>Dashboards that connect financial and commercial information.</li><li>Rules and alerts for reviewing unusual movements.</li>',
    'options.hotel.title': 'Hospitality',
    'options.hotel.list': '<li>Booking and guest communication experiences.</li><li>Integrations that centralize availability and operations.</li><li>Dashboards for tasks, occupancy, and follow-up.</li>',
    'options.restaurant.title': 'Restaurants',
    'options.restaurant.list': '<li>Connected menus, ordering, and digital channels.</li><li>Tools for inventory, purchasing, and daily organization.</li><li>Analytics for demand, hours, and product mix.</li>',
    'options.agro.title': 'Agro',
    'options.agro.list': '<li>Field records and applications adapted to mobile work.</li><li>Dashboards that bring production and operations together.</li><li>Integrations that simplify follow-up and logistics.</li>',
    'options.mining.title': 'Mining',
    'options.mining.list': '<li>Maintenance and operational information in one place.</li><li>Workflows for incidents, safety, and follow-up.</li><li>Dashboards adapted to equipment, shifts, and processes.</li>',
    'options.gov.title': 'Government (public sector)',
    'options.gov.list': '<li>Forms, appointments, and case tracking.</li><li>Dashboards for information and citizen services.</li><li>Internal tools for teams and public services.</li>',
    

    // BOOKING + VIDEO CALL
    'booking.title': 'Online booking + Video call',
    'booking.subtitle': 'Pick a slot in the scheduler and then join the video call from the same website.',
    'booking.step1.badge': 'Step 1',
    'booking.step1.title': 'Book your slot',
    'booking.step1.desc': 'Choose an available day and time. If the scheduler does not load, open it in a new tab.',
    'booking.languageNote': 'The scheduler is managed in Spanish. Use the button below to choose a time in a new tab.',
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
    'lab.eyebrow': '05 / RANQUEL LAB',
    'lab.title': 'Test on a small scale before a larger build.',
    'lab.body': 'We prototype uses of AI, automation, and computer vision to evaluate their usefulness before a larger implementation.',
    'lab.card1.title': 'AI',
    'lab.card1.body': 'context-aware assistants',
    'lab.card2.title': 'AUTO',
    'lab.card2.body': 'connected workflows',
    'lab.card3.title': 'VISION',
    'lab.card3.body': 'visual prototypes',
    'contact.eyebrow': '06 / HAVE A CHALLENGE?',
    'contact.title': 'Let’s make it work.',
    'contact.body': 'Tell us what you want to improve, and let’s figure out where to start.',
    'contact.primary': 'Book a video call',
    'contact.secondary': 'Message us on WhatsApp <span aria-hidden="true">↗</span>',
    'contact.base': 'BASE',
    'contact.email': 'EMAIL',
    'contact.phone': 'PHONE',
    'footer.location': 'Río Cuarto · Córdoba · Argentina',
    'footer.copy': '© 2026 Ranquel Tech Lab',
    'chat.toggle': 'Quick question <span aria-hidden="true">↗</span>',
    'cta.title': 'Have a challenge?',
    'cta.subtitle': 'Tell us what you need to solve, and we’ll find a starting point.',
  }
};

function applyTranslations(lang = 'es') {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  const isEnglish = lang === 'en';
  document.body?.classList.toggle('tl-lang-en', isEnglish);

  document.querySelector('.tl-nav')?.setAttribute('aria-label', isEnglish ? 'Main navigation' : 'Navegación principal');
  document.querySelector('.tl-footer-nav')?.setAttribute('aria-label', isEnglish ? 'Secondary navigation' : 'Navegación secundaria');
  document.querySelector('.tl-hero-index')?.setAttribute('aria-label', isEnglish ? 'Areas of expertise' : 'Áreas de trabajo');
  document.querySelectorAll('.tl-brand').forEach((brand) => {
    brand.setAttribute('aria-label', isEnglish ? 'Ranquel Tech Lab, home' : 'Ranquel Tech Lab, inicio');
  });
  document.querySelector('.tl-whatsapp')?.setAttribute('aria-label', isEnglish ? 'Message us on WhatsApp' : 'Escribir por WhatsApp');
  document.getElementById('langSelector')?.setAttribute('aria-label', isEnglish ? 'Language' : 'Idioma');
  document.getElementById('chatbot-toggle')?.setAttribute('aria-label', isEnglish ? 'Quick question' : 'Consulta rápida');
  document.getElementById('chatbot-panel')?.setAttribute('aria-label', isEnglish ? 'Ranquel Tech Lab assistant' : 'Asistente de Ranquel Tech Lab');
  const menuButton = document.getElementById('menuToggle');
  if (menuButton) {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-label', isEnglish
      ? (isOpen ? 'Close menu' : 'Open menu')
      : (isOpen ? 'Cerrar menú' : 'Abrir menú'));
  }

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
  const hasRealCredentials = cfg.publicKey
    && cfg.serviceId
    && !String(cfg.publicKey).startsWith('TU_')
    && !String(cfg.serviceId).includes('xxxx');
  return typeof emailjs !== 'undefined' && hasRealCredentials && cfg.templateLead;
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
    document.body.classList.toggle('tl-menu-open', menuOpen);
    if (mobileMenu) mobileMenu.style.display = menuOpen ? 'block' : 'none';
    menuToggle.setAttribute('aria-expanded', menuOpen);
    const menuLangIsEnglish = document.documentElement.lang === 'en';
    menuToggle.setAttribute('aria-label', menuLangIsEnglish
      ? (menuOpen ? 'Close menu' : 'Open menu')
      : (menuOpen ? 'Cerrar menú' : 'Abrir menú'));
    
    // Cambiar icono
    if (menuOpen && menuIcon) {
      menuIcon.innerHTML = '<path d="M18 6L6 18M6 6l12 12"/>';
    } else if (menuIcon) {
      menuIcon.innerHTML = '<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>';
    }
  });
  
  // Navegación entre vistas
  function navegarA(vista, anchor = null) {
    menuOpen = false;
    document.body.classList.remove('tl-menu-open');
    if (mobileMenu) mobileMenu.style.display = 'none';
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Open menu' : 'Abrir menú');
    if (menuIcon) menuIcon.innerHTML = '<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>';

    // Las páginas auxiliares comparten el chatbot pero no las vistas de la home.
    if (vista === 'reservas' && !vistaReservas) {
      window.location.href = '/?view=reservas';
      return;
    }
    if (vista === 'opciones' && !vistaOpciones) {
      window.location.href = '/#services';
      return;
    }
    if (vista === 'inicio' && !vistaInicio) {
      window.location.href = anchor ? `/${anchor}` : '/';
      return;
    }
    
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

  // El chatbot vive en otro scope: exponemos sólo este puente de navegación.
  window.navegarA = navegarA;
  
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
  const CALENDAR_LINK = "https://calendar.app.google/LvSPMzEtUA8SKyRk6";
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
    formData.append('_next', 'https://www.ranquel.com.ar/gracias-presupuesto/');
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    const urlencodedPayload = new URLSearchParams({
      nombre: datos.name || '',
      whatsapp: datos.phone || '',
      email: datos.email || '',
      presupuesto: datos.projectType || '',
      observaciones,
      _subject: 'Nuevo presupuesto desde el chatbot',
      _next: 'https://www.ranquel.com.ar/gracias-presupuesto/',
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
          <p><strong>${isEnglish ? 'What do you need to solve?' : '¿Qué necesitás resolver?'}</strong></p>
          <p>${isEnglish ? 'Tell us about your idea and choose how you would like to continue.' : 'Contanos tu idea y elegí cómo te gustaría continuar.'}</p>
          <p class="chatbot-badge">${isEnglish ? 'A short first step, with no obligation.' : 'Un primer paso breve y sin compromiso.'}</p>
          <button id="cb-budget" class="chatbot-btn-primary" style="margin-bottom:6px;">${isEnglish ? 'Request a quote' : 'Pedir presupuesto'}</button>
          <button id="cb-start" class="chatbot-btn-primary">${isEnglish ? 'Contact options' : 'Formas de contacto'}</button>
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
          document.getElementById('chatbot-toggle')?.setAttribute('aria-expanded', 'false');
          // navegar a reservas
          window.navegarA?.('reservas');
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
          <p><strong>${isEnglish ? 'Indicative quote' : 'Presupuesto orientativo'}</strong></p>
          <div style="background: rgba(34,204,255,0.1); padding: 12px; border-radius: 8px; margin: 12px 0;">
            <p style="font-size: 24px; font-weight: bold; color: var(--accent);">${budgetAmount}</p>
            <p style="font-size: 12px; color: var(--text-muted);">${budgetDetails}</p>
          </div>
          <p><strong>${isEnglish ? 'Choose how to continue:' : 'Elegí cómo continuar:'}</strong></p>

          <button id="cb-confirm-whatsapp" class="chatbot-btn-primary" style="background:#22c55e;">
            ${isEnglish ? 'Receive quote by WhatsApp' : 'Recibir presupuesto por WhatsApp'}
          </button>

          <button id="cb-confirm-email" class="chatbot-btn-primary" style="background:#0ea5e9;">
            ${isEnglish ? 'Receive quote by Email' : 'Recibir presupuesto por Email'}
          </button>

          <button id="cb-confirm-call" class="chatbot-btn-primary">
            ${isEnglish ? 'Schedule an explanatory video call' : 'Agendar videollamada explicativa'}
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
    const initialToggleLabel = document.documentElement.lang === 'en'
      ? 'Quick question <span aria-hidden="true">↗</span>'
      : 'Consulta rápida <span aria-hidden="true">↗</span>';
    const initialToggleAria = document.documentElement.lang === 'en' ? 'Quick question' : 'Consulta rápida';
    const initialPanelAria = document.documentElement.lang === 'en'
      ? 'Ranquel Tech Lab assistant'
      : 'Asistente de Ranquel Tech Lab';

    container.innerHTML = `
      <div id="chatbot-panel" class="chatbot-panel chatbot-hidden" role="dialog" aria-label="${initialPanelAria}">
        <div id="chatbot-panel-inner"></div>
      </div>
      <button id="chatbot-toggle" class="chatbot-toggle" type="button" aria-label="${initialToggleAria}" aria-controls="chatbot-panel" aria-expanded="false" data-i18n="chat.toggle">${initialToggleLabel}</button>
    `;

    const toggle = document.getElementById("chatbot-toggle");
    const panel = document.getElementById("chatbot-panel");

    const openPanel = () => {
      panel.classList.remove("chatbot-hidden");
      toggle.setAttribute('aria-expanded', 'true');
      render();
    };

    const togglePanel = () => {
      panel.classList.toggle("chatbot-hidden");
      toggle.setAttribute('aria-expanded', String(!panel.classList.contains('chatbot-hidden')));
      render();
    };

    toggle.onclick = togglePanel;

    window.ranquelChatbot = {
      open: openPanel,
      toggle: togglePanel,
    };

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !panel.classList.contains('chatbot-hidden')) {
        panel.classList.add('chatbot-hidden');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    // Mantener el asistente cerrado hasta que la persona decida abrirlo.
  });
})();

