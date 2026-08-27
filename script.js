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
    'nav.marketing': 'Marketing',
    'nav.contact': 'Contacto',
    'nav.method': 'Método',
    'nav.options': 'Ideas por sector',
    'nav.sectors': 'Sectores',
    'nav.booking': 'Agendá videollamada online',
    'lang.label': 'Selector de idioma',
    'common.back': '← Volver al inicio',

    // HERO + LOCAL SEO
    'hero.badge': 'Río Cuarto · Argentina',
    'hero.title': '<span class="tl-hero-line">Tecnología actual</span> <span class="tl-hero-line">para</span> <em class="tl-hero-line">negocios Rentables.</em>',
    'hero.subtitle': 'Creamos páginas web, software, inteligencia artificial y marketing digital para mejorar el trabajo, las ventas y las decisiones.',
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
    'about.p2': 'Páginas web, software, automatización, IA o marketing digital: primero entendemos qué necesitás y después elegimos la mejor opción.',
    'about.cta': 'Conocé Opciones de Desarrollo',

    'solutions.eyebrow': '02 / SOLUCIONES PARA TU NEGOCIO',
    'solutions.title': 'Soluciones digitales para<br>vender, ordenar y avanzar.',
    'solutions.body': 'Creamos páginas web, tiendas online, programas, inteligencia artificial y marketing digital según lo que tu negocio realmente necesita.',
    'solutions.digital.label': 'PÁGINAS WEB, TIENDAS Y APPS',
    'solutions.digital.title': 'Mostrá tu negocio y vendé online con una presencia profesional.',
    'solutions.digital.body': 'Creamos páginas web, tiendas y apps fáciles de usar, desde el diseño hasta la publicación.',
    'solutions.digital.tag1': 'Páginas web',
    'solutions.digital.tag2': 'Tiendas online',
    'solutions.digital.tag3': 'Apps móviles',
    'solutions.software.label': 'SOFTWARE Y PROGRAMAS A MEDIDA',
    'solutions.software.title': 'Menos tareas repetidas. Más orden para tu equipo.',
    'solutions.software.body': 'Creamos programas a medida para reunir información, automatizar tareas y simplificar el trabajo diario.',
    'solutions.software.tag1': 'Programas a medida',
    'solutions.software.tag2': 'Tareas automáticas',
    'solutions.software.tag3': 'Paneles de control',
    'solutions.ai.label': 'INTELIGENCIA ARTIFICIAL',
    'solutions.ai.title': 'IA práctica para atender, organizar y trabajar mejor.',
    'solutions.ai.body': 'Creamos asistentes y soluciones inteligentes para responder consultas, ordenar información y acompañar tareas.',
    'solutions.ai.tag1': 'Asistentes con IA',
    'solutions.ai.tag2': 'Respuestas automáticas',
    'solutions.ai.tag3': 'Análisis de imágenes',
    'solutions.marketing.label': 'MARKETING DIGITAL Y ANALÍTICA',
    'solutions.marketing.title': 'Más personas te encuentran. Más oportunidades para vender.',
    'solutions.marketing.body': 'Mejoramos tu presencia en Google, creamos campañas y medimos qué trae consultas y ventas para que puedas invertir mejor.',
    'solutions.marketing.tag1': 'SEO y Google',
    'solutions.marketing.tag2': 'Google Ads y Meta Ads',
    'solutions.marketing.tag3': 'Analítica y conversiones',
    'solutions.marketing.cta': 'Quiero atraer más clientes <span aria-hidden="true">↗</span>',
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
    'ia.subtitle': 'Usamos IA para responder consultas, organizar información, automatizar tareas y ayudar a tomar mejores decisiones.',
    'ia.consulting.title': 'Asesoramiento',
    'ia.consulting.desc': 'Auditamos procesos y datos, medimos tu madurez digital y detectamos "quick wins". Entregamos un plan 30-60-90 días con casos de uso priorizados, costos, métricas y ROI estimado para acelerar resultados.',
    'ia.gpts.title': 'GPTs a medida',
    'ia.gpts.desc': 'Creamos asistentes con el contexto de tu negocio (documentos, políticas, catálogos) y reglas propias. Se conectan a tus sistemas (ERP/CRM/AFIP/Sheets) para automatizar tareas, responder con trazabilidad y ejecutar flujos end-to-end.',
    'ia.bots.title': 'Bots conversacionales',
    'ia.bots.desc': 'Web/WhatsApp/Instagram que atienden, reservan, cobran y escalan a un humano cuando corresponde. Entrenados con tu contenido, con analytics de conversaciones y mejoras continuas para elevar la experiencia del cliente.',
    'ia.cta': 'Evaluemos un caso de uso <span aria-hidden="true">↗</span>',

    // RESTO IGUAL QUE TENÍAS
    'marketing.eyebrow': 'MARKETING DIGITAL',
    'marketing.title': 'Atraé clientes. Medí resultados. Crecé con claridad.',
    'marketing.subtitle': 'Unimos estrategia, SEO, publicidad y analítica para transformar búsquedas y visitas en consultas reales.',
    'marketing.point1': 'Mejor presencia en Google',
    'marketing.point2': 'Campañas orientadas a consultas y ventas',
    'marketing.point3': 'Medición clara de cada resultado',
    'marketing.cta': 'Ver soluciones de marketing <span aria-hidden="true">↗</span>',
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
    'lab.body': 'Probamos ideas con IA y automatización en una versión pequeña para comprobar si sirven antes de invertir en un desarrollo mayor.',
    'lab.status': 'PROTOTIPO ACTIVO',
    'lab.card1.title': 'IA',
    'lab.card1.body': 'asistentes con contexto',
    'lab.card2.title': 'AUTO',
    'lab.card2.body': 'flujos conectados',
    'lab.card3.title': 'VISIÓN',
    'lab.card3.body': 'prototipos visuales',
    'contact.eyebrow': '06 / ¿TENÉS UN DESAFÍO?',
    'contact.title': 'Hagamos que Funcione.',
    'contact.body': 'Contanos qué querés mejorar y vemos juntos por dónde conviene empezar.',
    'contact.primary': 'Agendá una videollamada',
    'contact.secondary': 'Escribinos por WhatsApp',
    'contact.base': 'DIRECCIÓN',
    'contact.address': 'Sobremonte 548 · 1.er piso · local 84 · Río Cuarto · Córdoba · Argentina',
    'contact.map.eyebrow': 'DÓNDE ENCONTRARNOS',
    'contact.map.title': 'Sobremonte 548',
    'contact.map.body': '1.er piso · local 84 · Río Cuarto · Córdoba · Argentina',
    'contact.map.open': 'Abrir en Google Maps',
    'contact.email': 'EMAIL',
    'contact.phone': 'TELÉFONO',
    'footer.location': 'Sobremonte 548 · 1.er piso · local 84 · Río Cuarto · Córdoba · Argentina',
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
    'nav.marketing': 'Marketing',
    'nav.contact': 'Contact',
    'nav.method': 'Method',
    'nav.options': 'Ideas by sector',
    'nav.sectors': 'Sectors',
    'nav.booking': 'Book an online video call',
    'lang.label': 'Language selector',
    'common.back': '← Back to home',

    // HERO + LOCAL SEO (EN)
    'hero.badge': 'Río Cuarto · Argentina',
    'hero.title': '<span class="tl-hero-line">Modern technology</span> <span class="tl-hero-line">for</span> <em class="tl-hero-line">profitable businesses.</em>',
    'hero.subtitle': 'We create websites, software, AI, and digital marketing to improve operations, sales, and decision-making.',
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
    'about.p2': 'Websites, software, automation, AI, or digital marketing: we first understand what you need and then choose the best option.',
    'about.cta': 'See development options',

    'solutions.eyebrow': '02 / SOLUTIONS FOR YOUR BUSINESS',
    'solutions.title': 'Web, software, and AI<br>to help your business move forward.',
    'solutions.body': 'We create websites, online stores, custom software, AI, and digital marketing around what your business truly needs.',
    'solutions.digital.label': 'WEBSITES, ONLINE STORES & APPS',
    'solutions.digital.title': 'Showcase your business and sell online with a professional digital presence.',
    'solutions.digital.body': 'We create easy-to-use websites, online stores, and apps, from design through launch.',
    'solutions.digital.tag1': 'Websites',
    'solutions.digital.tag2': 'Online stores',
    'solutions.digital.tag3': 'Mobile apps',
    'solutions.software.label': 'CUSTOM SOFTWARE & AUTOMATION',
    'solutions.software.title': 'Fewer repetitive tasks. A more organized way to work.',
    'solutions.software.body': 'We build custom software to bring information together, automate tasks, and simplify day-to-day work.',
    'solutions.software.tag1': 'Custom software',
    'solutions.software.tag2': 'Task automation',
    'solutions.software.tag3': 'Control panels',
    'solutions.ai.label': 'ARTIFICIAL INTELLIGENCE',
    'solutions.ai.title': 'Practical AI to support customers and simplify work.',
    'solutions.ai.body': 'We build AI assistants and smart solutions to answer questions, organize information, and support everyday tasks.',
    'solutions.ai.tag1': 'AI assistants',
    'solutions.ai.tag2': 'Automated replies',
    'solutions.ai.tag3': 'Image analysis',
    'solutions.marketing.label': 'DIGITAL MARKETING & ANALYTICS',
    'solutions.marketing.title': 'Get found by more customers. Create more opportunities to sell.',
    'solutions.marketing.body': 'We improve your Google presence, run campaigns, and measure what brings inquiries and sales so you can invest with confidence.',
    'solutions.marketing.tag1': 'SEO & Google',
    'solutions.marketing.tag2': 'Google Ads & Meta Ads',
    'solutions.marketing.tag3': 'Analytics & conversions',
    'solutions.marketing.cta': 'I want more customers <span aria-hidden="true">↗</span>',
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
    'ia.subtitle': 'We use AI to answer questions, organize information, automate tasks, and support better decisions.',
    'ia.consulting.title': 'Consulting',
    'ia.consulting.desc': 'We audit processes and data, measure your digital maturity and detect quick wins. We deliver a 30-60-90 day plan with prioritized use cases, costs, metrics and estimated ROI to accelerate results.',
    'ia.gpts.title': 'Custom GPTs',
    'ia.gpts.desc': 'We build assistants with your business context (documents, policies, catalogs) and custom rules. They connect to your systems (ERP/CRM/AFIP/Sheets) to automate tasks, respond with traceability and run end-to-end flows.',
    'ia.bots.title': 'Conversational bots',
    'ia.bots.desc': 'Web/WhatsApp/Instagram bots that serve, book, collect payments and escalate to a human when needed. Trained with your content, with analytics and continuous improvements.',
    'ia.cta': 'Let\'s evaluate a use case <span aria-hidden="true">↗</span>',

    'marketing.eyebrow': 'DIGITAL MARKETING',
    'marketing.title': 'Attract customers. Measure results. Grow with clarity.',
    'marketing.subtitle': 'We bring together strategy, SEO, advertising, and analytics to turn searches and visits into qualified inquiries.',
    'marketing.point1': 'Stronger Google visibility',
    'marketing.point2': 'Campaigns focused on inquiries and sales',
    'marketing.point3': 'Clear measurement of every result',
    'marketing.cta': 'Explore marketing services <span aria-hidden="true">↗</span>',
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
    'options.industry.title': 'Manufacturing',
    'options.industry.list': '<li>Dashboards for production, quality, and maintenance.</li><li>Data integration across equipment and existing systems.</li><li>Alerts and traceability to support operational decisions.</li>',
    'options.finance.title': 'Finance for SMEs',
    'options.finance.list': '<li>Workflows for invoices, reconciliation, and collections.</li><li>Dashboards that connect financial and commercial information.</li><li>Rules and alerts to flag unusual transactions.</li>',
    'options.hotel.title': 'Hospitality',
    'options.hotel.list': '<li>Booking and guest communication experiences.</li><li>Integrations that centralize availability and operations.</li><li>Dashboards for tasks, occupancy, and follow-up.</li>',
    'options.restaurant.title': 'Restaurants',
    'options.restaurant.list': '<li>Connected menus, ordering, and digital channels.</li><li>Tools for inventory, purchasing, and daily organization.</li><li>Analytics for demand, hours, and product mix.</li>',
    'options.agro.title': 'Agriculture',
    'options.agro.list': '<li>Field records and applications adapted to mobile work.</li><li>Dashboards that bring production and operations together.</li><li>Integrations that simplify follow-up and logistics.</li>',
    'options.mining.title': 'Mining',
    'options.mining.list': '<li>Maintenance and operational information in one place.</li><li>Workflows for incidents, safety, and follow-up.</li><li>Dashboards adapted to equipment, shifts, and processes.</li>',
    'options.gov.title': 'Public sector',
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
    'lab.body': 'We test AI and automation ideas on a small scale to see whether they work before investing in a larger build.',
    'lab.status': 'ACTIVE PROTOTYPE',
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
    'contact.secondary': 'Message us on WhatsApp',
    'contact.base': 'ADDRESS',
    'contact.address': 'Sobremonte 548 · 1st floor · unit 84 · Río Cuarto · Córdoba · Argentina',
    'contact.map.eyebrow': 'FIND US',
    'contact.map.title': 'Sobremonte 548',
    'contact.map.body': '1st floor · unit 84 · Río Cuarto · Córdoba · Argentina',
    'contact.map.open': 'Open in Google Maps',
    'contact.email': 'EMAIL',
    'contact.phone': 'PHONE',
    'footer.location': 'Sobremonte 548 · 1st floor · unit 84 · Río Cuarto · Córdoba · Argentina',
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
  document.querySelector('.tl-system-map')?.setAttribute('aria-label', isEnglish ? 'Connected business system visualization' : 'Visualización de un sistema conectado');
  document.querySelectorAll('.tl-brand').forEach((brand) => {
    brand.setAttribute('aria-label', isEnglish ? 'Ranquel Tech Lab, home' : 'Ranquel Tech Lab, inicio');
  });
  document.querySelector('.tl-whatsapp')?.setAttribute('aria-label', isEnglish ? 'Message us on WhatsApp' : 'Escribir por WhatsApp');
  document.querySelectorAll('.tl-service-card ul').forEach((list) => {
    list.setAttribute('aria-label', isEnglish ? 'Includes' : 'Incluye');
  });
  document.querySelector('.tl-contact-map iframe')?.setAttribute('title', isEnglish
    ? 'Google Maps — Sobremonte 548, Río Cuarto'
    : 'Mapa de Google — Sobremonte 548, Río Cuarto');
  document.getElementById('langSelector')?.setAttribute('aria-label', isEnglish ? 'Language' : 'Idioma');
  document.getElementById('chatbot-toggle')?.setAttribute('aria-label', isEnglish ? 'Quick question' : 'Consulta rápida');
  const chatbotTitle = document.getElementById('chatbot-panel-title');
  if (chatbotTitle) chatbotTitle.textContent = isEnglish ? 'Ranquel Assistant' : 'Asistente Ranquel';
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

  window.ranquelChatbot?.refresh?.();
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

// --- Google Ads helpers ---
const GOOGLE_ADS_ID = 'AW-958141767';
const CONVERSION_LABEL_WHATSAPP = 'wsp_click';
const CONVERSION_LABEL_PRESUPUESTO_EMAIL = 'bgv6CNz5mcUbEMeq8MgD';
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

  link.addEventListener('click', () => {
    trackContactChannel(channel, origin);
  });

  link.dataset.contactTracked = 'true';
}

function setupWhatsAppTracking(root = document) {
  const whatsappLinks = root.querySelectorAll('a[href^="https://wa.me/"], a[href^="https://api.whatsapp.com/"]');

  whatsappLinks.forEach((link) => {
    if (link.dataset.whatsappTracked === 'true') return;

    link.addEventListener('click', () => {
      const location = link.dataset.whatsappLocation || 'desconocido';
      trackWhatsAppClick(location);
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
  const optionsTitle = document.getElementById('optionsTitle');
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
  
  function syncNavigationUrl(vista, anchor = null) {
    if (!window.history?.pushState) return;

    const url = new URL(window.location.href);
    const currentView = url.searchParams.get('view');

    if (vista === 'opciones') {
      url.searchParams.set('view', 'opciones');
      url.searchParams.delete('access');
      url.hash = '';
    } else if (vista === 'reservas') {
      url.searchParams.set('view', 'reservas');
      if (currentView !== 'reservas') url.searchParams.delete('access');
      url.hash = '';
    } else {
      url.searchParams.delete('view');
      url.searchParams.delete('access');
      url.hash = anchor || '';
    }

    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (nextUrl !== currentUrl) {
      window.history.pushState({ vista, anchor }, '', nextUrl);
    }
  }

  // Navegación entre vistas
  function navegarA(vista, anchor = null, { updateHistory = true } = {}) {
    menuOpen = false;
    document.body.classList.remove('tl-menu-open');
    if (mobileMenu) mobileMenu.style.display = 'none';
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Open menu' : 'Abrir menú');
    if (menuIcon) menuIcon.innerHTML = '<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>';

    // Las páginas auxiliares comparten el chatbot pero no las vistas de la home.
    if (vista === 'reservas' && !vistaReservas) {
      const legacyAccess = new URLSearchParams(window.location.search).get('access');
      window.location.href = legacyAccess
        ? `/videollamada.html?access=${encodeURIComponent(legacyAccess)}`
        : '/videollamada.html';
      return;
    }
    if (vista === 'opciones' && !vistaOpciones) {
      window.location.href = '/sectores/';
      return;
    }
    if (vista === 'inicio' && !vistaInicio) {
      window.location.href = anchor ? `/${anchor}` : '/';
      return;
    }

    if (updateHistory) syncNavigationUrl(vista, anchor);
    
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
      setTimeout(() => optionsTitle?.focus({ preventScroll: true }), 50);
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
  const savedLang = langSelector
    ? (localStorage.getItem('rtl-lang') || 'es')
    : (document.documentElement.lang.startsWith('en') ? 'en' : 'es');

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

  function applyLocationView() {
    try {
      const params = new URLSearchParams(window.location.search);
      const view = params.get('view');
      const access = params.get('access');

      if (view === 'reservas') {
        navegarA('reservas', null, { updateHistory: false });
        if (dailyRoomInput) dailyRoomInput.value = access || '';
        if (access) renderDailyFromAccess(access);
      } else if (view === 'opciones') {
        navegarA('opciones', null, { updateHistory: false });
      } else if (vistaInicio) {
        navegarA('inicio', window.location.hash || null, { updateHistory: false });
      }
    } catch (_) {}
  }

  // Compatibilidad con enlaces históricos; Vercel los redirige en producción.
  applyLocationView();
  window.addEventListener('popstate', applyLocationView);

  
  
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

  // Pausamos las escenas ambientales cuando están fuera de pantalla o la pestaña no está visible.
  const ambientVisuals = document.querySelectorAll('[data-ambient-visual]');
  const syncAmbientVisual = (visual) => {
    const canAnimate = visual.dataset.inViewport === 'true' && !document.hidden;
    visual.classList.toggle('is-visual-active', canAnimate);
  };

  const ambientObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.dataset.inViewport = String(entry.isIntersecting);
      syncAmbientVisual(entry.target);
    });
  }, { threshold: 0.15 });

  ambientVisuals.forEach((visual) => ambientObserver.observe(visual));
  document.addEventListener('visibilitychange', () => {
    ambientVisuals.forEach(syncAmbientVisual);
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
  const WHATSAPP_DISPLAY = "+54 9 358 411 8722";
  const EMAIL_OWNER = "ranqueltechlab@gmail.com";
  const PHONE_OWNER = "+543584118722";
  const PHONE_DISPLAY = "+54 358 411 8722";
  const MAX_CONVERSATION_TURNS = 4;
  let state = {
    step: "intro",
    teaser: false,
    conversation: [],
    budget: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      details: "",
      budgetAmount: "",
      budgetDetails: "",
      contact: "whatsapp",
      submitting: false,
      submissionFailed: false,
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
  }

  function trackVideoCallOpen(origin = 'chatbot') {
    if (typeof gtag !== 'function') return;
    gtag('event', 'agenda_abierta', {
      event_category: 'engagement',
      event_label: origin,
      value: 1,
    });
  }

  async function enviarLeadAlAdmin(datos) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...datos, website: '' }),
        signal: controller.signal,
      });

      const result = await response.json().catch(() => null);
      return response.ok && result?.ok === true;
    } catch (error) {
      console.error('No se pudo entregar la solicitud de presupuesto.', error);
      return false;
    } finally {
      window.clearTimeout(timeout);
    }
  }

  async function submitLeadForm() {
    const { name, email, phone, projectType, details, contact } = state.budget;
    const currentBudget = projectType ? calculateBudget(projectType, details) : { display: 'N/A', details: 'Precio orientativo' };
    const observations = `${details} | Preferencia de contacto: ${contact} | Estimado: ${currentBudget.display} (${currentBudget.details})`;

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
      return await enviarLeadAlAdmin(leadPayload);
    } catch (error) {
      console.error('No se pudo enviar el lead', error);
      return false;
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
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const phoneDigits = phone.replace(/\D/g, '');
    const phoneIsValid = /^[+()0-9\s.-]+$/.test(phone.trim())
      && phoneDigits.length >= 7
      && phoneDigits.length <= 18;
    return name.trim().length > 1 && emailIsValid && phoneIsValid;
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
        display: 'ARS 350.000',
        details: 'Landing Page de 1 página - Precio orientativo',
      },
      'Página Web 2 páginas': {
        amount: 650000,
        display: 'ARS 650.000',
        details: 'Página Web de 2 páginas + ARS 50.000 por página extra - Precio orientativo',
      },
      'Página Web con Pagos': {
        amount: 950000,
        display: 'ARS 950.000',
        details: 'Página Web con 2 páginas y sistema de pagos + ARS 75.000 por página extra - Precio orientativo',
      },
      'Tienda E-commerce': {
        amount: 1350000,
        display: 'ARS 1.350.000',
        details: 'Tienda E-commerce completa - Precio orientativo',
      },
      'App Android/iOS': {
        amount: 2500000,
        display: 'ARS 2.500.000',
        details: 'App móvil para Android e iOS - Precio orientativo',
      },
      'App empresarial con IA': {
        amount: 3000000,
        display: 'ARS 3.000.000',
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
        display: 'USD 300',
        details: '1 Page Landing Page - Indicative price',
      },
      'Página Web 2 páginas': {
        amount: 500,
        display: 'USD 500',
        details: 'Website with 2 pages + USD 50 per extra page - Indicative price',
      },
      'Página Web con Pagos': {
        amount: 700,
        display: 'USD 700',
        details: 'Website with 2 pages and payments + USD 75 per extra page - Indicative price',
      },
      'Tienda E-commerce': {
        amount: 950,
        display: 'USD 950',
        details: 'Complete E-commerce Store - Indicative price',
      },
      'App Android/iOS': {
        amount: 1800,
        display: 'USD 1,800',
        details: 'Android/iOS App - Indicative price',
      },
      'App empresarial con IA': {
        amount: 2000,
        display: 'USD 2,000',
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
            ? `USD ${(priceInfo.amount + extraCost).toLocaleString('en-US')}`
            : `ARS ${(priceInfo.amount + extraCost).toLocaleString('es-AR')}`;

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

  async function handleBudgetConfirmation(contactType) {
    if (state.budget.submitting) return;

    updateBudget('contact', contactType);
    updateBudget('submissionFailed', false);
    updateBudget('submitting', true);
    render();

    const panelInner = document.getElementById('chatbot-panel-inner');
    panelInner?.setAttribute('aria-busy', 'true');

    const sent = await submitLeadForm();
    panelInner?.removeAttribute('aria-busy');
    updateBudget('submitting', false);
    if (!sent) {
      updateBudget('submissionFailed', true);
      render();
      return;
    }

    trackBudgetRequest('chatbot', contactType);

    if (contactType === 'whatsapp') {
      redirectToWhatsAppThankYou();
    } else if (contactType === 'videollamada') {
      trackVideoCallOpen('chatbot_presupuesto');
      window.ranquelChatbot?.close?.({ focusToggle: false });
      if (typeof window.navegarA === 'function') {
        window.navegarA('reservas');
      } else {
        window.location.href = '/videollamada.html';
      }
    } else {
      redirectToBudgetThankYou();
    }
  }

  function escapeHTML(value = '') {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function normalizeChatText(value = '') {
    return String(value)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  function detectChatIntent(value = '') {
    const text = normalizeChatText(value);

    if (/whats|wsp/.test(text)) return 'whatsapp';
    if (/video.?llamada|video.?call|agenda|turno|reunion|meeting|book/.test(text)) return 'booking';
    if (/telefono|celular|llamar|numero|phone|call|number/.test(text)) return 'phone';
    if (/correo|e-?mail|mail/.test(text)) return 'email';
    if (/precio|presup|costo|cuanto|valor|cotiz|price|pricing|quote|cost|how much|landing|pagina|sitio|web|tienda|e-?commerce|app|software/.test(text)) return 'prices';
    if (/servicio|solucion|hacen|desarroll|automatiza|inteligencia|service|solution|develop|automation|artificial intelligence|\bia\b|\bai\b/.test(text)) return 'services';
    if (/contact|hablar|comunicar/.test(text)) return 'contact';
    if (/hola|buen dia|buenas|hello|\bhi\b|hey/.test(text)) return 'greeting';

    return 'fallback';
  }

  function trackChatIntent(intent) {
    if (typeof gtag !== 'function') return;
    gtag('event', 'chatbot_intent', {
      event_category: 'engagement',
      event_label: intent,
    });
  }

  function getPriceListMarkup(isEnglish) {
    const projects = [
      ['Landing Page', 'Landing page'],
      ['Página Web 2 páginas', isEnglish ? 'Website' : 'Sitio web'],
      ['Página Web con Pagos', isEnglish ? 'Website with payments' : 'Web con pagos'],
      ['Tienda E-commerce', 'E-commerce'],
      ['App Android/iOS', isEnglish ? 'Mobile app' : 'App móvil'],
      ['App empresarial con IA', isEnglish ? 'Business app with AI' : 'App empresarial con IA'],
    ];

    return `
      <ul class="chatbot-price-list" aria-label="${isEnglish ? 'Indicative prices' : 'Precios orientativos'}">
        ${projects.map(([value, label]) => {
          const price = calculateBudget(value, '');
          const currency = isEnglish ? 'USD ' : 'ARS ';
          const display = /^\$/.test(price.display) ? `${currency}${price.display.slice(1)}` : price.display;
          return `<li><span>${label}</span><strong>${isEnglish ? 'from ' : 'desde '}${display}</strong></li>`;
        }).join('')}
      </ul>
    `;
  }

  function getContactActionsMarkup(isEnglish, compact = false) {
    return `
      <div class="chatbot-inline-actions${compact ? ' chatbot-inline-actions-compact' : ''}">
        <a class="chatbot-inline-action chatbot-inline-action-whatsapp" href="https://wa.me/${WHATSAPP_OWNER}" target="_blank" rel="noopener noreferrer" data-whatsapp-location="chatbot_conversation">
          ${isEnglish ? 'Open WhatsApp' : 'Abrir WhatsApp'}
        </a>
        <a class="chatbot-inline-action" href="tel:${PHONE_OWNER}" data-call-location="chatbot_conversation">
          ${isEnglish ? 'Call' : 'Llamar'}
        </a>
        <a class="chatbot-inline-action" href="mailto:${EMAIL_OWNER}" data-email-location="chatbot_conversation">
          Email
        </a>
        <button class="chatbot-inline-action" type="button" data-chat-action="booking">
          ${isEnglish ? 'Video call' : 'Videollamada'}
        </button>
      </div>
    `;
  }

  function getChatResponseMarkup(intent, isEnglish) {
    switch (intent) {
      case 'prices':
        return `
          <p><strong>${isEnglish ? 'Here are our current indicative prices.' : 'Estos son nuestros valores orientativos actuales.'}</strong></p>
          ${getPriceListMarkup(isEnglish)}
          <p class="chatbot-response-note">${isEnglish
            ? 'The final quote depends on scope, integrations, and delivery time.'
            : 'El valor final depende del alcance, las integraciones y los plazos.'}</p>
          <button class="chatbot-conversation-cta" type="button" data-chat-action="budget">
            ${isEnglish ? 'Estimate my project' : 'Calcular mi proyecto'}
          </button>
        `;
      case 'booking':
        return `
          <p><strong>${isEnglish ? 'Let’s schedule a video call.' : 'Agendemos una videollamada.'}</strong></p>
          <p>${isEnglish
            ? 'Choose an available day and time in our scheduler. You can then join the call from this website.'
            : 'Elegí un día y horario disponible en nuestro turnero. Después podés entrar a la llamada desde esta misma web.'}</p>
          <button class="chatbot-conversation-cta" type="button" data-chat-action="booking">
            ${isEnglish ? 'Open scheduler' : 'Abrir agenda online'}
          </button>
        `;
      case 'whatsapp':
        return `
          <p><strong>WhatsApp</strong></p>
          <p>${isEnglish ? 'Message us at' : 'Escribinos al'} <strong>${WHATSAPP_DISPLAY}</strong>.</p>
          <a class="chatbot-conversation-cta chatbot-conversation-cta-whatsapp" href="https://wa.me/${WHATSAPP_OWNER}" target="_blank" rel="noopener noreferrer" data-whatsapp-location="chatbot_conversation">
            ${isEnglish ? 'Start WhatsApp chat' : 'Iniciar chat por WhatsApp'}
          </a>
        `;
      case 'phone':
        return `
          <p><strong>${isEnglish ? 'Phone' : 'Teléfono'}</strong></p>
          <p>${isEnglish ? 'You can call us at' : 'Podés llamarnos al'} <strong>${PHONE_DISPLAY}</strong>.</p>
          <a class="chatbot-conversation-cta" href="tel:${PHONE_OWNER}" data-call-location="chatbot_conversation">
            ${isEnglish ? 'Call now' : 'Llamar ahora'}
          </a>
        `;
      case 'email':
        return `
          <p><strong>Email</strong></p>
          <p>${isEnglish ? 'Write to us at' : 'Escribinos a'} <strong>${EMAIL_OWNER}</strong>.</p>
          <a class="chatbot-conversation-cta" href="mailto:${EMAIL_OWNER}" data-email-location="chatbot_conversation">
            ${isEnglish ? 'Write an email' : 'Enviar un email'}
          </a>
        `;
      case 'contact':
        return `
          <p><strong>${isEnglish ? 'Choose the easiest channel for you.' : 'Elegí el canal que te resulte más cómodo.'}</strong></p>
          <p>WhatsApp: <strong>${WHATSAPP_DISPLAY}</strong><br>${isEnglish ? 'Phone' : 'Teléfono'}: <strong>${PHONE_DISPLAY}</strong><br>Email: <strong>${EMAIL_OWNER}</strong></p>
          ${getContactActionsMarkup(isEnglish)}
        `;
      case 'services':
        return `
          <p><strong>${isEnglish ? 'We build technology around real business needs.' : 'Creamos tecnología alrededor de necesidades reales del negocio.'}</strong></p>
          <p>${isEnglish
            ? 'Web products, custom software, automation, applied AI, analytics, and digital growth.'
            : 'Productos web, software a medida, automatización, IA aplicada, analítica y crecimiento digital.'}</p>
          <a class="chatbot-conversation-cta" href="/soluciones/">${isEnglish ? 'See solutions' : 'Ver soluciones'}</a>
        `;
      case 'greeting':
        return `
          <p><strong>${isEnglish ? 'Hello! I’m here to help.' : '¡Hola! Estoy para ayudarte.'}</strong></p>
          <p>${isEnglish
            ? 'Ask me about prices, services, or the best way to contact Ranquel Tech Lab.'
            : 'Preguntame por precios, servicios o la mejor forma de contactar a Ranquel Tech Lab.'}</p>
        `;
      default:
        return `
          <p><strong>${isEnglish ? 'I can help with the most common questions.' : 'Puedo ayudarte con las consultas más frecuentes.'}</strong></p>
          <p>${isEnglish
            ? 'Try “website prices”, “book a video call”, “WhatsApp”, “phone”, or “email”.'
            : 'Probá escribir “precios de una web”, “agendar videollamada”, “WhatsApp”, “teléfono” o “email”.'}</p>
        `;
    }
  }

  function getQuickReplies(isEnglish) {
    return [
      { intent: 'prices', label: isEnglish ? 'Prices' : 'Precios', id: 'cb-budget' },
      { intent: 'booking', label: isEnglish ? 'Video call' : 'Videollamada' },
      { intent: 'whatsapp', label: 'WhatsApp' },
      { intent: 'phone', label: isEnglish ? 'Phone' : 'Teléfono' },
      { intent: 'email', label: 'Email' },
      { intent: 'contact', label: isEnglish ? 'Contact' : 'Contacto', id: 'cb-start' },
    ];
  }

  function getChatResponseAnnouncement(intent, isEnglish) {
    const announcements = {
      prices: isEnglish ? 'Indicative prices are now displayed.' : 'Ya se muestran los precios orientativos.',
      booking: isEnglish ? 'You can now open the online scheduler.' : 'Ya podés abrir la agenda online.',
      whatsapp: `WhatsApp: ${WHATSAPP_DISPLAY}.`,
      phone: isEnglish ? `Phone: ${PHONE_DISPLAY}.` : `Teléfono: ${PHONE_DISPLAY}.`,
      email: `Email: ${EMAIL_OWNER}.`,
      contact: isEnglish ? 'Direct contact options are now displayed.' : 'Ya se muestran las formas de contacto directo.',
      services: isEnglish ? 'A link to our solutions is now displayed.' : 'Ya se muestra el acceso a nuestras soluciones.',
      greeting: isEnglish ? 'Hello. Choose a quick option or write a question.' : 'Hola. Elegí una opción rápida o escribí una consulta.',
      fallback: isEnglish ? 'Choose prices, video call, WhatsApp, phone, email, or contact.' : 'Elegí precios, videollamada, WhatsApp, teléfono, email o contacto.',
    };
    return announcements[intent] || announcements.fallback;
  }

  function addConversationTurn(query, intent) {
    const nextTurn = {
      query: String(query || '').trim().slice(0, 180),
      intent,
    };

    state = {
      ...state,
      teaser: false,
      conversation: [...state.conversation, nextTurn].slice(-MAX_CONVERSATION_TURNS),
    };

    trackChatIntent(intent);
    render({ focusComposer: true });
  }

  function bindConversationEvents(container, isEnglish) {
    const form = container.querySelector('#chatbot-chat-form');
    const input = container.querySelector('#chatbot-chat-input');

    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = input?.value.trim() || '';
      if (!query) return;
      addConversationTurn(query, detectChatIntent(query));
    });

    container.querySelectorAll('[data-chat-intent]').forEach((button) => {
      button.addEventListener('click', () => {
        const intent = button.dataset.chatIntent || 'fallback';
        addConversationTurn(button.textContent.trim(), intent);
      });
    });

    container.querySelectorAll('[data-chat-action="budget"]').forEach((button) => {
      button.addEventListener('click', () => {
        state.step = 'budget-info';
        render();
        window.requestAnimationFrame(() => document.getElementById('cb-name')?.focus());
      });
    });

    container.querySelectorAll('[data-chat-action="booking"]').forEach((button) => {
      button.addEventListener('click', () => {
        trackVideoCallOpen('chatbot_conversation');
        window.ranquelChatbot?.close?.({ focusToggle: false });
        if (typeof window.navegarA === 'function') {
          window.navegarA('reservas');
        } else {
          window.location.href = '/videollamada.html';
        }
      });
    });

    hardenExternalLinks(container);
    setupWhatsAppTracking(container);
    container.querySelectorAll('a[href^="tel:"]').forEach((link) => {
      attachContactTracking(link, 'llamada', link.dataset.callLocation || 'chatbot_conversation');
    });
    container.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
      attachContactTracking(link, 'email', link.dataset.emailLocation || 'chatbot_conversation');
    });
  }

  function render({ focusComposer = false } = {}) {
    const container = document.getElementById("chatbot-panel-inner");
    if (!container) return;

    const s = state;
    const lang = document.documentElement.lang;
    const isEnglish = lang === 'en';
    container.classList.toggle('chatbot-panel-inner-conversation', s.step === 'intro');
    container.classList.toggle('chatbot-panel-inner-teaser', s.step === 'intro' && s.teaser);

    if (s.step === "intro") {
      if (s.teaser) {
        container.innerHTML = `
          <div class="chatbot-teaser">
            <div class="chatbot-message chatbot-message-assistant">
              <span class="chatbot-message-avatar" aria-hidden="true">R</span>
              <div class="chatbot-message-bubble">
                <p><strong>${isEnglish ? 'How can I help?' : '¿En qué puedo ayudarte?'}</strong></p>
                <p>${isEnglish ? 'I can answer questions about prices and contact options.' : 'Puedo responder sobre precios y formas de contacto.'}</p>
              </div>
            </div>
            <div class="chatbot-teaser-actions">
              <button class="chatbot-conversation-cta" type="button" data-chat-expand>
                ${isEnglish ? 'Start a conversation' : 'Iniciar una consulta'}
              </button>
              <button class="chatbot-quick-reply" type="button" data-chat-intent="prices">
                ${isEnglish ? 'See prices' : 'Ver precios'}
              </button>
            </div>
          </div>
        `;

        container.querySelector('[data-chat-expand]')?.addEventListener('click', () => {
          state = { ...state, teaser: false };
          render({ focusComposer: true });
        });
        bindConversationEvents(container, isEnglish);
        return;
      }

      const conversationMarkup = s.conversation.map((turn) => `
        <div class="chatbot-message chatbot-message-user">
          <div class="chatbot-message-bubble">${escapeHTML(turn.query)}</div>
        </div>
        <div class="chatbot-message chatbot-message-assistant">
          <span class="chatbot-message-avatar" aria-hidden="true">R</span>
          <div class="chatbot-message-bubble">${getChatResponseMarkup(turn.intent, isEnglish)}</div>
        </div>
      `).join('');
      const quickRepliesMarkup = getQuickReplies(isEnglish).map(({ intent, label, id = '' }) => `
        <button${id ? ` id="${id}"` : ''} class="chatbot-quick-reply" type="button" data-chat-intent="${intent}">${label}</button>
      `).join('');
      const latestTurn = s.conversation.at(-1);

      container.innerHTML = `
        <div class="chatbot-conversation-shell">
          <div class="chatbot-conversation" tabindex="0" aria-label="${isEnglish ? 'Conversation with the Ranquel assistant' : 'Conversación con el asistente de Ranquel'}">
            <div class="chatbot-message chatbot-message-assistant">
              <span class="chatbot-message-avatar" aria-hidden="true">R</span>
              <div class="chatbot-message-bubble">
                <p><strong>${isEnglish ? 'Hi, I’m the Ranquel assistant.' : 'Hola, soy el asistente de Ranquel.'}</strong></p>
                <p>${isEnglish
                  ? 'Ask me about prices, services, or how you would like to contact us.'
                  : 'Preguntame por precios, servicios o cómo preferís contactarnos.'}</p>
              </div>
            </div>
            ${conversationMarkup}
          </div>
          <p class="visually-hidden" role="status">${latestTurn ? getChatResponseAnnouncement(latestTurn.intent, isEnglish) : ''}</p>

          <div class="chatbot-quick-replies" aria-label="${isEnglish ? 'Quick questions' : 'Consultas rápidas'}">
            ${quickRepliesMarkup}
          </div>

          <p class="chatbot-capability-note">${isEnglish
            ? 'Quick assistant for prices and contact information.'
            : 'Asistente rápido para precios y datos de contacto.'}</p>
          <form id="chatbot-chat-form" class="chatbot-composer">
            <label class="visually-hidden" for="chatbot-chat-input">${isEnglish ? 'Write your question' : 'Escribí tu consulta'}</label>
            <input id="chatbot-chat-input" class="chatbot-composer-input" type="text" maxlength="180" autocomplete="off" placeholder="${isEnglish ? 'Type your question…' : 'Escribí tu consulta…'}">
            <button class="chatbot-composer-send" type="submit">${isEnglish ? 'Send' : 'Enviar'}</button>
          </form>
        </div>
      `;

      bindConversationEvents(container, isEnglish);
      window.requestAnimationFrame(() => {
        const conversation = container.querySelector('.chatbot-conversation');
        if (conversation) conversation.scrollTop = conversation.scrollHeight;
        if (focusComposer) container.querySelector('#chatbot-chat-input')?.focus();
      });
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
          trackVideoCallOpen('chatbot_opciones');
          window.ranquelChatbot?.close?.({ focusToggle: false });
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
            <input id="cb-name" class="chatbot-input" type="text" required minlength="2" maxlength="120" autocomplete="name" placeholder="${isEnglish ? 'Your name' : 'Tu nombre'}" value="${escapeHTML(s.budget.name)}" />
          </label>
          <label>Email
            <input id="cb-email" class="chatbot-input" type="email" required maxlength="254" autocomplete="email" placeholder="${isEnglish ? 'you@mail.com' : 'tu@mail.com'}" value="${escapeHTML(s.budget.email)}" />
          </label>
          <label>${isEnglish ? 'Phone / WhatsApp' : 'Teléfono / WhatsApp'}
            <input id="cb-phone" class="chatbot-input" type="tel" required maxlength="40" autocomplete="tel" inputmode="tel" placeholder="${isEnglish ? 'Country code and number' : 'Código de país y número'}" value="${escapeHTML(s.budget.phone)}" />
          </label>
          <p class="chatbot-legal">${isEnglish
            ? 'We use these details only to prepare and reply to your request.'
            : 'Usamos estos datos únicamente para preparar y responder tu consulta.'}</p>
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
            <textarea id="cb-details" class="chatbot-textarea" maxlength="2000" placeholder="${isEnglish ? 'Describe your project, features, timeline, number of pages, etc.' : 'Describí tu proyecto, funcionalidades, plazos, cantidad de páginas, etc.'}">${escapeHTML(s.budget.details)}</textarea>
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
        updateBudget('submissionFailed', false);
        updateBudget('submitting', false);
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
      const currentBudget = s.budget.projectType ? calculateBudget(s.budget.projectType, s.budget.details) : { display: '-', details: '' };
      const currency = isEnglish ? 'USD ' : 'ARS ';
      const budgetAmount = /^\$/.test(currentBudget.display) ? `${currency}${currentBudget.display.slice(1)}` : currentBudget.display;
      const budgetDetails = currentBudget.details;

      container.innerHTML = `
        <div>
          <p><strong>${isEnglish ? 'Indicative quote' : 'Presupuesto orientativo'}</strong></p>
          <div style="background: rgba(34,204,255,0.1); padding: 12px; border-radius: 8px; margin: 12px 0;">
            <p style="font-size: 24px; font-weight: bold; color: var(--accent);">${budgetAmount}</p>
            <p style="font-size: 12px; color: var(--text-muted);">${budgetDetails}</p>
          </div>
          <p><strong>${isEnglish ? 'Choose how to continue:' : 'Elegí cómo continuar:'}</strong></p>

          <button id="cb-confirm-whatsapp" class="chatbot-btn-primary" style="background:#22c55e;" ${s.budget.submitting ? 'disabled' : ''}>
            ${s.budget.submitting
              ? (isEnglish ? 'Sending…' : 'Enviando…')
              : (isEnglish ? 'Contact me on WhatsApp' : 'Quiero que me contacten por WhatsApp')}
          </button>

          <button id="cb-confirm-email" class="chatbot-btn-primary" style="background:#0ea5e9;" ${s.budget.submitting ? 'disabled' : ''}>
            ${isEnglish ? 'Receive quote by Email' : 'Recibir presupuesto por Email'}
          </button>

          <button id="cb-confirm-call" class="chatbot-btn-primary" ${s.budget.submitting ? 'disabled' : ''}>
            ${isEnglish ? 'Schedule an explanatory video call' : 'Agendar videollamada explicativa'}
          </button>

          <div style="margin-top: 12px; padding: 12px; background: rgba(34,204,255,0.05); border-radius: 8px; border: 1px solid var(--border);">
            <p style="font-size: 12px; color: var(--text-muted); margin: 0;">
              ${isEnglish 
                ? 'For video calls: You will receive the calendar link by email to choose your preferred time.' 
                : 'Para videollamadas: Recibirás el link del calendario por email para elegir tu horario preferido.'}
            </p>
          </div>

          ${s.budget.submissionFailed && !s.budget.submitting ? `
            <div class="chatbot-submit-error" role="alert">
              <p>${isEnglish
                ? 'We could not send the request. Please try again or contact us on WhatsApp.'
                : 'No pudimos enviar la solicitud. Probá nuevamente o escribinos por WhatsApp.'}</p>
              <a href="https://wa.me/${WHATSAPP_OWNER}" target="_blank" rel="noopener noreferrer" data-whatsapp-location="chatbot_submit_error">WhatsApp</a>
            </div>
          ` : ''}

          <button id="cb-back-project" class="chatbot-btn-link" ${s.budget.submitting ? 'disabled' : ''}>
            ${isEnglish ? 'Back to modify' : 'Volver a modificar'}
          </button>
        </div>
      `;

      document.getElementById('cb-confirm-whatsapp').onclick = () => handleBudgetConfirmation('whatsapp');
      document.getElementById('cb-confirm-email').onclick = () => handleBudgetConfirmation('email');
      document.getElementById('cb-confirm-call').onclick = () => handleBudgetConfirmation('videollamada');
      document.getElementById("cb-back-project").onclick = () => {
        if (state.budget.submitting) return;
        updateBudget('submissionFailed', false);
        state.step = "budget-project";
        render();
      };
      setupWhatsAppTracking(container);
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
    const initialMinimizeAria = document.documentElement.lang === 'en'
      ? 'Minimize assistant'
      : 'Minimizar asistente';

    container.innerHTML = `
      <div id="chatbot-panel" class="chatbot-panel chatbot-hidden" role="dialog" aria-modal="false" aria-labelledby="chatbot-panel-title">
        <header class="chatbot-panel-head">
          <div class="chatbot-panel-identity">
            <span class="chatbot-status-dot" aria-hidden="true"></span>
            <div>
              <strong id="chatbot-panel-title">${document.documentElement.lang === 'en' ? 'Ranquel Assistant' : 'Asistente Ranquel'}</strong>
              <small id="chatbot-panel-subtitle">${document.documentElement.lang === 'en' ? 'Digital assistant' : 'Asistente digital'}</small>
            </div>
          </div>
          <button id="chatbot-minimize" class="chatbot-minimize" type="button" aria-label="${initialMinimizeAria}" title="${initialMinimizeAria}">
            <span aria-hidden="true">−</span>
          </button>
        </header>
        <div id="chatbot-panel-inner"></div>
      </div>
      <button id="chatbot-toggle" class="chatbot-toggle" type="button" aria-label="${initialToggleAria}" aria-controls="chatbot-panel" aria-expanded="false" data-i18n="chat.toggle">${initialToggleLabel}</button>
    `;

    const toggle = document.getElementById("chatbot-toggle");
    const panel = document.getElementById("chatbot-panel");
    const minimize = document.getElementById("chatbot-minimize");

    const AUTO_OPEN_DELAY_MS = 7000;
    let autoOpenTimer = null;
    let contactIsVisible = false;

    const cancelAutoOpen = () => {
      if (autoOpenTimer === null) return;
      window.clearTimeout(autoOpenTimer);
      autoOpenTimer = null;
    };

    const syncChatbotLanguage = () => {
      const isEnglish = document.documentElement.lang === 'en';
      const minimizeLabel = isEnglish ? 'Minimize assistant' : 'Minimizar asistente';
      document.getElementById('chatbot-panel-title').textContent = isEnglish ? 'Ranquel Assistant' : 'Asistente Ranquel';
      document.getElementById('chatbot-panel-subtitle').textContent = isEnglish ? 'Digital assistant' : 'Asistente digital';
      minimize.setAttribute('aria-label', minimizeLabel);
      minimize.setAttribute('title', minimizeLabel);
      toggle.setAttribute('aria-label', isEnglish ? 'Quick question' : 'Consulta rápida');
    };

    const closePanel = ({ focusToggle = true } = {}) => {
      cancelAutoOpen();
      panel.classList.add('chatbot-hidden');
      toggle.setAttribute('aria-expanded', 'false');
      if (focusToggle) toggle.focus();
    };

    const openPanel = (automatic = false) => {
      if (!automatic) cancelAutoOpen();
      if (automatic && state.step === 'intro' && state.conversation.length === 0) {
        state = { ...state, teaser: true };
      } else if (!automatic && state.teaser) {
        state = { ...state, teaser: false };
      }
      syncChatbotLanguage();
      panel.classList.remove("chatbot-hidden");
      toggle.setAttribute('aria-expanded', 'true');
      render();
      if (automatic && state.teaser && contactIsVisible) {
        window.setTimeout(() => {
          if (state.teaser && !panel.classList.contains('chatbot-hidden')) {
            closePanel({ focusToggle: false });
          }
        }, 1800);
      }
      if (!automatic) window.requestAnimationFrame(() => minimize.focus());
    };

    const togglePanel = () => {
      cancelAutoOpen();
      if (panel.classList.contains('chatbot-hidden')) {
        openPanel();
      } else {
        closePanel();
      }
    };

    toggle.addEventListener('click', togglePanel);
    minimize.addEventListener('click', () => closePanel());

    window.ranquelChatbot = {
      open: openPanel,
      toggle: togglePanel,
      close: closePanel,
      refresh: () => {
        syncChatbotLanguage();
        render();
      },
    };

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !panel.classList.contains('chatbot-hidden')) {
        closePanel();
      }
    });

    const contactSection = document.getElementById('contact');
    if (contactSection && 'IntersectionObserver' in window) {
      const contactObserver = new IntersectionObserver(([entry]) => {
        contactIsVisible = Boolean(entry?.isIntersecting);
        if (contactIsVisible && state.teaser && !panel.classList.contains('chatbot-hidden')) {
          closePanel({ focusToggle: false });
        }
      }, { threshold: 0.18 });
      contactObserver.observe(contactSection);
    }

    // Presentar el asistente una vez que la persona tuvo tiempo de recorrer la portada.
    autoOpenTimer = window.setTimeout(() => {
      autoOpenTimer = null;
      if (panel.classList.contains('chatbot-hidden')) openPanel(true);
    }, AUTO_OPEN_DELAY_MS);
  });
})();

