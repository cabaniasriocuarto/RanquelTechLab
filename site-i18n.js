/**
 * Ranquel Tech Lab — bilingual layer for detail pages.
 *
 * Spanish remains the server-rendered/indexable source. The visitor's ES/EN
 * preference is applied in the browser and shared with Home through rtl-lang.
 */
(function ranquelI18nBootstrap(window, document) {
  'use strict';

  var STORAGE_KEY = 'rtl-lang';
  var VALID_LANGUAGES = ['es', 'en'];
  var originalText = new WeakMap();
  var originalAttributes = new WeakMap();
  var currentLanguage = 'es';

  var common = {
    'Navegación principal': 'Main navigation',
    'Ranquel Tech Lab, inicio': 'Ranquel Tech Lab, home',
    'Menú': 'Menu',
    'Inicio': 'Home',
    'Soluciones': 'Solutions',
    'Sectores': 'Sectors',
    'Método': 'Method',
    'Contacto': 'Contact',
    'Agendá videollamada': 'Book a video call',
    'Agendá una videollamada': 'Book a video call',
    'Migas de pan': 'Breadcrumbs',
    'Navegación secundaria': 'Secondary navigation',
    'Redes sociales y contacto': 'Social media and contact',
    'Página de WhatsApp': 'WhatsApp page',
    'Sobremonte 548 · 1.er piso · local 84 · Río Cuarto · Córdoba · Argentina': 'Sobremonte 548 · 1st floor · unit 84 · Río Cuarto · Córdoba · Argentina',
    'Selector de idioma': 'Language selector',
    'Idioma': 'Language',
    'Escribir por WhatsApp': 'Message us on WhatsApp',
    'Abrir WhatsApp': 'Open WhatsApp',
    'Videollamada': 'Video call',
    'Teléfono': 'Phone',
    'Teléfono:': 'Phone:',
    'Servicios': 'Services',
    'Explorar soluciones': 'Explore solutions',
    'Iniciar una consulta': 'Start a conversation',
    'Google Ads y Meta Ads.': 'Google Ads and Meta Ads.',
    'GA4 y Google Tag Manager.': 'GA4 and Google Tag Manager.'
  };

  var pages = {
    soluciones: {
      'Soluciones digitales': 'Digital solutions',
      'Soluciones digitales para': 'Digital solutions to',
      'vender y trabajar mejor.': 'sell and work smarter.',
      'Creamos páginas web y tiendas online, software y programas a medida, automatizaciones e inteligencia artificial. Todo pensado para simplificar el trabajo y ayudar a tu negocio a avanzar.': 'We build websites and online stores, custom software and business tools, automation, and AI. Everything is designed to simplify operations and help your business move forward.',
      'Contanos tu proyecto': 'Tell us about your project',
      'Ver ideas por sector': 'Explore ideas by sector',
      'Ranquel Tech Lab, desarrollo tecnológico': 'Ranquel Tech Lab technology development',
      'Web · Apps · Software · IA': 'Web · Apps · Software · AI',
      'Desde Río Cuarto para empresas de Argentina.': 'Based in Río Cuarto, serving companies across Argentina.',
      'Qué podemos hacer por vos': 'What we can do for you',
      'Tecnología clara para objetivos reales.': 'Clear technology for real business goals.',
      'Contanos qué querés lograr: mostrar tu negocio, vender online, ordenar tareas o ahorrar tiempo. Nosotros te proponemos una forma simple de hacerlo.': 'Tell us what you want to achieve: showcase your business, sell online, streamline tasks, or save time. We’ll recommend a straightforward way to make it happen.',
      '01 / PÁGINAS WEB, TIENDAS Y APPS': '01 / WEBSITES, ONLINE STORES & APPS',
      'Tu negocio, claro y profesional en internet.': 'A clear, professional online presence for your business.',
      'Creamos una presencia digital fácil de usar, pensada para mostrar lo que hacés, recibir consultas y vender online.': 'We build an easy-to-use digital presence designed to showcase what you do, generate inquiries, and sell online.',
      'Páginas web para empresas y profesionales.': 'Websites for companies and professionals.',
      'Tiendas online y catálogos digitales.': 'Online stores and digital catalogs.',
      'Apps móviles para Android e iOS.': 'Mobile apps for Android and iOS.',
      '02 / SOFTWARE Y PROGRAMAS A MEDIDA': '02 / CUSTOM SOFTWARE & BUSINESS TOOLS',
      'Menos tareas repetidas. Más control.': 'Fewer repetitive tasks. More control.',
      'Desarrollamos herramientas que ahorran tiempo, reúnen la información y hacen más simple el trabajo diario.': 'We build tools that save time, bring your information together, and simplify daily work.',
      'Programas adaptados a tu forma de trabajar.': 'Software tailored to the way you work.',
      'Tareas y procesos automáticos.': 'Automated tasks and processes.',
      'Paneles simples para ver el negocio.': 'Simple business dashboards.',
      '03 / INTELIGENCIA ARTIFICIAL': '03 / ARTIFICIAL INTELLIGENCE',
      'IA útil para necesidades reales.': 'Useful AI for real needs.',
      'Creamos asistentes y soluciones inteligentes para responder consultas, organizar información y acompañar a tu equipo.': 'We build assistants and smart solutions to answer questions, organize information, and support your team.',
      'Asistentes virtuales para clientes y equipos.': 'Virtual assistants for customers and teams.',
      'Respuestas y tareas automáticas.': 'Automated replies and tasks.',
      'Análisis inteligente de información e imágenes.': 'Smart analysis of information and images.',
      '04 / MARKETING DIGITAL Y ANALÍTICA': '04 / DIGITAL MARKETING & ANALYTICS',
      'Más personas te encuentran. Más oportunidades para vender.': 'Get found by more customers. Create more opportunities to sell.',
      'Mejoramos tu presencia en Google, creamos campañas y medimos qué trae consultas y ventas.': 'We improve your Google presence, run campaigns, and measure what generates inquiries and sales.',
      'SEO y presencia en Google.': 'SEO and Google visibility.',
      'Analítica, consultas y conversiones.': 'Analytics, inquiries, and conversions.',
      'Conocé Marketing Digital': 'Explore Digital Marketing',
      '¿Querés vender online, ahorrar tiempo o mejorar tu negocio?': 'Want to sell online, save time, or improve your business?',
      'Contanos qué necesitás y te explicamos una propuesta clara, sin vueltas ni tecnicismos.': 'Tell us what you need and we’ll explain a clear proposal—without jargon or unnecessary complexity.'
    },
    sectores: {
      'Ámbitos de aplicación': 'Areas of application',
      'Problemas distintos.': 'Different challenges.',
      'Ideas concretas.': 'Practical ideas.',
      'Cada sector tiene procesos, datos y prioridades propios. Estas posibilidades sirven para iniciar una conversación, no como soluciones cerradas.': 'Every sector has its own processes, data, and priorities. These ideas are starting points for a conversation—not off-the-shelf solutions.',
      'Contanos tu desafío': 'Tell us your challenge',
      'Ver capacidades': 'Explore capabilities',
      'Siete sectores de aplicación': 'Seven sectors we work with',
      'Industria · Finanzas · Hotelería · Gastronomía · Agro · Minería · Sector público': 'Manufacturing · Finance · Hospitality · Restaurants · Agriculture · Mining · Public sector',
      'Una base tecnológica adaptada a cada contexto.': 'A technology foundation adapted to each context.',
      'Ideas por sector': 'Ideas by sector',
      'Posibilidades para empezar a pensar.': 'Possibilities to start exploring.',
      'Analizamos herramientas, información y procesos existentes antes de definir cualquier implementación.': 'We review your existing tools, data, and processes before recommending any implementation.',
      'Industria y manufactura': 'Manufacturing',
      'Tableros para producción, calidad y mantenimiento.': 'Dashboards for production, quality, and maintenance.',
      'Integración de datos entre equipos y sistemas.': 'Data integration across equipment and systems.',
      'Alertas y trazabilidad para decisiones operativas.': 'Alerts and traceability to support operational decisions.',
      'Finanzas para PyMEs': 'Finance for SMEs',
      'Flujos para comprobantes, conciliaciones y cobranzas.': 'Workflows for invoices, reconciliation, and collections.',
      'Paneles de información financiera y comercial.': 'Financial and commercial dashboards.',
      'Reglas y alertas para movimientos inusuales.': 'Rules and alerts for unusual transactions.',
      'Hotelería': 'Hospitality',
      'Experiencias de reserva y comunicación con huéspedes.': 'Booking and guest communication experiences.',
      'Integraciones para centralizar disponibilidad y operación.': 'Integrations that centralize availability and operations.',
      'Paneles para tareas, ocupación y seguimiento.': 'Dashboards for tasks, occupancy, and follow-up.',
      'Restaurantes': 'Restaurants',
      'Menús, pedidos y canales digitales conectados.': 'Connected menus, ordering, and digital channels.',
      'Herramientas para inventario, compras y organización.': 'Tools for inventory, purchasing, and daily operations.',
      'Analítica de demanda, horarios y productos.': 'Analytics for demand, peak times, and products.',
      'Agro': 'Agriculture',
      'Registros de campo y aplicaciones móviles.': 'Field records and mobile applications.',
      'Paneles de información productiva y operativa.': 'Production and operations dashboards.',
      'Integraciones para seguimiento y logística.': 'Integrations for tracking and logistics.',
      'Minería': 'Mining',
      'Información de mantenimiento y operación.': 'Maintenance and operations data.',
      'Flujos de novedades, seguridad y seguimiento.': 'Incident, safety, and tracking workflows.',
      'Tableros adaptados a equipos, turnos y procesos.': 'Dashboards tailored to equipment, shifts, and processes.',
      'Sector público': 'Public sector',
      'Formularios, turnos y seguimiento de trámites.': 'Forms, appointments, and case tracking.',
      'Paneles para información y atención ciudadana.': 'Dashboards for data and citizen services.',
      'Herramientas internas para equipos y servicios.': 'Internal tools for teams and public services.',
      'El alcance final depende de la operación, los datos disponibles y los objetivos de cada proyecto. Primero relevamos el contexto; después proponemos.': 'The final scope depends on your operation, available data, and project goals. We begin with the context, then recommend a solution.',
      'Tu sector también tiene su propio contexto.': 'Your sector has its own context too.',
      'Conversemos sobre el problema antes de elegir la herramienta.': 'Let’s discuss the problem before choosing the technology.',
      'Representación abstracta de datos y automatización industrial': 'Abstract representation of industrial data and automation',
      'Representación abstracta de información financiera conectada': 'Abstract representation of connected financial information',
      'Representación abstracta de tecnología para hotelería': 'Abstract representation of technology for hospitality',
      'Representación abstracta de tecnología para restaurantes': 'Abstract representation of technology for restaurants',
      'Representación abstracta de tecnología y datos para el agro': 'Abstract representation of technology and data for agriculture',
      'Representación abstracta de tecnología para minería': 'Abstract representation of technology for mining',
      'Representación abstracta de servicios públicos digitales': 'Abstract representation of digital public services'
    },
    metodo: {
      '04 / CÓMO TRABAJAMOS': '04 / HOW WE WORK',
      '04 / Cómo trabajamos': '04 / HOW WE WORK',
      'Cuatro etapas.': 'Four stages.',
      'Un proceso claro.': 'One clear process.',
      'Ordenamos el trabajo en cuatro etapas, con decisiones visibles en cada una.': 'We organize every project into four stages, with clear decisions at each step.',
      'Contanos tu desafío': 'Tell us your challenge',
      'Ranquel Tech Lab, proceso de trabajo en cuatro etapas': 'Ranquel Tech Lab four-stage work process',
      'Proceso de trabajo en cuatro etapas': 'Four-stage work process',
      'Entender → Diseñar → Construir → Mejorar': 'Understand → Design → Build → Improve',
      'Un recorrido simple, con decisiones claras antes de avanzar.': 'A simple path, with clear decisions before moving forward.',
      'De la necesidad a la puesta en marcha': 'From the initial need to launch',
      'Cada etapa tiene un objetivo concreto.': 'Every stage has a clear goal.',
      'Avanzamos paso a paso para que siempre sepas qué estamos definiendo, qué sigue y cómo se convierte la idea en una solución real.': 'We move step by step, so you always know what we’re defining, what comes next, and how your idea becomes a real solution.',
      'Avanzamos paso a paso para que sepas qué estamos definiendo, qué viene después y cómo se transforma la idea en una solución real.': 'We move step by step, so you know what we’re defining, what comes next, and how your idea becomes a real solution.',
      '01 / ENTENDER': '01 / UNDERSTAND',
      'Entender': 'Understand',
      'Hacemos preguntas y análisis para comprender las necesidades del cliente.': 'We ask the right questions and analyze your needs to understand exactly what your business requires.',
      '02 / DISEÑAR': '02 / DESIGN',
      'Diseñar': 'Design',
      'Ordenamos prioridades y preparamos una propuesta antes de desarrollar.': 'We define priorities and prepare a proposal before development begins.',
      '03 / CONSTRUIR': '03 / BUILD',
      'Construir': 'Build',
      'Desarrollamos, integramos y probamos la solución, compartiendo avances.': 'We develop, integrate, and test the solution, sharing progress along the way.',
      '04 / MEJORAR': '04 / IMPROVE',
      'Mejorar': 'Improve',
      'Ponemos en marcha, medimos y ajustamos según el uso real.': 'We launch, measure, and adjust based on real-world use.',
      'Empecemos por entender qué necesitás.': 'Let’s start by understanding what you need.',
      'Una primera conversación alcanza para ordenar el desafío y definir un siguiente paso claro.': 'One initial conversation is enough to clarify the challenge and define a clear next step.',
      'Una primera conversación alcanza para ordenar el desafío y definir un próximo paso claro.': 'One initial conversation is enough to clarify the challenge and define a clear next step.'
    },
    marketing: {
      'Marketing Digital': 'Digital Marketing',
      'MARKETING DIGITAL · RÍO CUARTO': 'DIGITAL MARKETING · RÍO CUARTO',
      'Marketing Digital · Río Cuarto': 'Digital Marketing · Río Cuarto',
      'Marketing que': 'Marketing that',
      'atrae, convierte y se puede medir.': 'attracts, converts, and delivers measurable results.',
      'Conectamos estrategia, presencia en Google, campañas y analítica para que más personas conozcan tu negocio y cada decisión tenga información real detrás.': 'We connect strategy, Google visibility, campaigns, and analytics so more people discover your business and every decision is backed by real data.',
      'Quiero impulsar mi negocio': 'I want to grow my business',
      'Hablar por WhatsApp': 'Chat on WhatsApp',
      'Un negocio atrae personas, recibe consultas y mide resultados con marketing digital': 'A business attracts new customers, receives inquiries, and measures results through digital marketing',
      'Un negocio atrae nuevas personas, recibe consultas y mide resultados con marketing digital': 'A business attracts new customers, receives inquiries, and measures results through digital marketing',
      'ATRAER': 'ATTRACT',
      'CONSULTAS': 'INQUIRIES',
      'MEDIR': 'MEASURE',
      'Una estrategia conectada': 'One connected strategy',
      'Una estrategia para todo el recorrido.': 'One strategy for the entire customer journey.',
      'Una propuesta conectada': 'One connected strategy',
      'Todo el recorrido, en una misma estrategia.': 'One strategy for the entire customer journey.',
      'No sumamos acciones aisladas. Ordenamos el mensaje, los canales y la medición para que el marketing digital acompañe un objetivo concreto de tu negocio.': 'We don’t add isolated actions. We align your message, channels, and measurement so digital marketing supports a clear business goal.',
      '01 / ESTRATEGIA Y MENSAJE': '01 / STRATEGY & MESSAGING',
      'Que tu propuesta se entienda y se recuerde.': 'Make your value clear—and memorable.',
      'Definimos qué comunicar, a quién y por qué elegirte, con una presencia coherente en todos tus puntos de contacto.': 'We define what to say, who to reach, and why customers should choose you, with a consistent presence across every touchpoint.',
      'Propuesta de valor y mensajes.': 'Value proposition and messaging.',
      'Plan de canales y contenidos.': 'Channel and content plan.',
      'Landing pages orientadas a consultas.': 'Landing pages designed to generate inquiries.',
      '02 / SEO Y GOOGLE': '02 / SEO & GOOGLE',
      'Estar presente cuando te buscan.': 'Be there when customers search.',
      'Mejoramos la información, la estructura y la presencia local de tu negocio para que Google pueda entenderlo y mostrarlo mejor.': 'We improve your business information, website structure, and local presence so Google can understand and surface your business more effectively.',
      'SEO técnico y contenidos.': 'Technical SEO and content.',
      'Presencia local en buscadores.': 'Local search visibility.',
      'Search Console y seguimiento.': 'Search Console and performance tracking.',
      '03 / PUBLICIDAD DIGITAL': '03 / DIGITAL ADVERTISING',
      'Campañas con un objetivo claro.': 'Campaigns with a clear goal.',
      'Planificamos anuncios en Google y Meta para llegar a personas relevantes y generar visitas, consultas u oportunidades comerciales.': 'We plan Google and Meta ads to reach relevant audiences and generate visits, inquiries, and sales opportunities.',
      'Audiencias y piezas publicitarias.': 'Audiences and creative assets.',
      'Ajustes según desempeño real.': 'Optimization based on real performance.',
      '04 / ANALÍTICA Y CONVERSIONES': '04 / ANALYTICS & CONVERSIONS',
      'Saber qué trae resultados.': 'Know what drives results.',
      'Configuramos una medición clara para entender de dónde llegan las consultas y qué acciones conviene sostener o mejorar.': 'We set up clear measurement so you can see where inquiries come from and which actions to maintain or improve.',
      'Eventos, consultas y ventas.': 'Events, inquiries, and sales.',
      'Reportes fáciles de interpretar.': 'Reports that are easy to understand.',
      'Cómo trabajamos': 'How we work',
      'Primero entendemos. Después activamos.': 'Understand first. Then activate.',
      'Cada negocio necesita una combinación distinta. Por eso empezamos por el objetivo y armamos un plan que se pueda ejecutar, revisar y mejorar.': 'Every business needs a different mix. We start with the goal and build a plan that can be launched, reviewed, and improved.',
      'Enfocar': 'Focus',
      'Definimos qué querés lograr, a quién necesitás llegar y qué propuesta conviene mostrar.': 'We define what you want to achieve, who you need to reach, and which value proposition to present.',
      'Activar': 'Activate',
      'Preparamos contenidos, páginas y campañas conectadas con una acción concreta.': 'We prepare content, pages, and campaigns connected to a clear action.',
      'Medir y mejorar': 'Measure and improve',
      'Revisamos señales reales y ajustamos mensajes, inversión y experiencia.': 'We review real signals and optimize messaging, investment, and customer experience.',
      'Canales y medición': 'Channels & measurement',
      'La tecnología al servicio del marketing.': 'Technology that supports smarter marketing.',
      'Conectamos los canales que usa tu negocio con herramientas de medición para que las consultas no sean un dato aislado.': 'We connect the channels your business uses with measurement tools, so every inquiry becomes useful information.',
      'Ver todas las soluciones': 'Explore all solutions',
      'Plataformas que podemos integrar': 'Platforms we can integrate',
      '¿QUERÉS QUE MÁS PERSONAS ENCUENTREN TU NEGOCIO?': 'WANT MORE PEOPLE TO FIND YOUR BUSINESS?',
      'Hagamos que tu marketing trabaje con un objetivo.': 'Put your marketing to work toward a clear goal.',
      'Contanos qué querés mejorar y armamos una propuesta clara según tu negocio, tus canales y tu momento.': 'Tell us what you want to improve, and we’ll build a clear proposal around your business, channels, and current stage.',
      'Escribinos por WhatsApp': 'Message us on WhatsApp'
    },
    contacto: {
      'Contacto directo': 'Direct contact',
      'Hagamos que': 'Let’s make it',
      'Funcione.': 'work.',
      'Contanos qué querés mejorar. Podemos conversar por WhatsApp, teléfono, email o videollamada y definir juntos un primer paso.': 'Tell us what you want to improve. We can talk via WhatsApp, phone, email, or video call and define the right first step together.',
      'Escribinos por WhatsApp': 'Message us on WhatsApp',
      'Ranquel Tech Lab en Río Cuarto': 'Ranquel Tech Lab in Río Cuarto',
      '1.er piso · local 84 · Río Cuarto · Córdoba · Argentina': '1st floor · unit 84 · Río Cuarto · Córdoba · Argentina',
      'Elegí el canal que prefieras': 'Choose the channel that works for you',
      'Estamos para escuchar tu idea.': 'We’re ready to hear your idea.',
      'Si ya sabés qué necesitás, contanos el objetivo. Si todavía no, podemos ayudarte a ordenar el problema antes de hablar de tecnología.': 'If you already know what you need, tell us the goal. If you don’t, we can help clarify the challenge before discussing technology.',
      'Información y acceso directo al chat.': 'Information and direct access to the chat.',
      'Tocá para llamar desde tu dispositivo.': 'Tap to call from your device.',
      'Enviá los detalles de tu proyecto o consulta.': 'Send us the details of your project or inquiry.',
      'Videollamada online': 'Online video call',
      'Elegí un horario disponible': 'Choose an available time',
      'Reservá un turno y recibí el acceso por email.': 'Book an appointment and receive access by email.',
      'Mapa de Sobremonte 548, Río Cuarto': 'Map of Sobremonte 548, Río Cuarto',
      'Mapa de Google — Sobremonte 548, Río Cuarto': 'Google Maps — Sobremonte 548, Río Cuarto',
      'Conocé nuestras soluciones.': 'Explore our solutions.',
      'Web, apps, software, automatización, IA, marketing y analítica.': 'Websites, apps, software, automation, AI, marketing, and analytics.'
    },
    whatsapp: {
      'Canal oficial de WhatsApp': 'Official WhatsApp channel',
      'Tu consulta,': 'A direct line for',
      'directa.': 'your project.',
      'Escribinos qué querés construir, automatizar o mejorar. El botón abre el chat oficial de Ranquel Tech Lab con un mensaje inicial que podés editar.': 'Tell us what you want to build, automate, or improve. The button opens Ranquel Tech Lab’s official WhatsApp chat with a message you can edit.',
      'Ver todos los contactos': 'View all contact options',
      'WhatsApp oficial de Ranquel Tech Lab': 'Ranquel Tech Lab’s official WhatsApp',
      'Ranquel Tech Lab · Río Cuarto, Córdoba.': 'Ranquel Tech Lab · Río Cuarto, Córdoba.',
      'Para orientarte mejor': 'To help us guide you',
      'Qué podés incluir en tu mensaje.': 'What to include in your message.',
      'No hace falta que tengas una especificación técnica. Con una explicación breve del objetivo podemos ordenar el próximo paso.': 'You don’t need a technical specification. A brief explanation of your goal is enough to define the next step.',
      '01 / OBJETIVO': '01 / GOAL',
      'Qué querés lograr.': 'What you want to achieve.',
      'Por ejemplo: vender online, ordenar un proceso, integrar información o automatizar una tarea.': 'For example: sell online, streamline a process, connect information, or automate a task.',
      '02 / CONTEXTO': '02 / CONTEXT',
      'Cómo funciona hoy.': 'How it works today.',
      'Contanos qué herramientas usás, quiénes participan y dónde aparece la principal dificultad.': 'Tell us which tools you use, who is involved, and where the main challenge appears.',
      '03 / ALCANCE': '03 / SCOPE',
      'Qué imaginás como resultado.': 'What you imagine as the outcome.',
      'Puede ser una web, una app, un sistema interno, una automatización o una primera prueba.': 'It might be a website, an app, an internal system, an automation, or an initial pilot.',
      '04 / SIGUIENTE PASO': '04 / NEXT STEP',
      'Cómo preferís conversar.': 'How you prefer to continue.',
      'Podemos continuar por WhatsApp o coordinar una videollamada desde la agenda online.': 'We can continue on WhatsApp or schedule a video call through our online calendar.',
      '¿Preferís una videollamada?': 'Prefer a video call?',
      'Elegí un horario disponible y recibí el acceso seguro por email.': 'Choose an available time and receive secure access by email.',
      'Ver horarios disponibles': 'View available times'
    }
  };

  var chatbot = {
    'Asistente Ranquel': 'Ranquel Assistant',
    'Orientación rápida y directa': 'Quick, straightforward guidance',
    'Minimizar asistente': 'Minimize assistant',
    'Abrir consulta rápida': 'Open quick question',
    'Consulta rápida': 'Quick question',
    'Precios orientativos': 'Estimated prices',
    'Llamar': 'Call',
    'Estos son nuestros valores orientativos actuales.': 'Here are our current price estimates.',
    'El valor final depende del alcance, las integraciones y los plazos.': 'Final pricing depends on scope, integrations, and timeline.',
    'Calcular mi proyecto': 'Estimate my project',
    'Agendemos una videollamada.': 'Let’s schedule a video call.',
    'Elegí un horario disponible en nuestra agenda. Después recibirás por email el acceso seguro a la reunión.': 'Choose an available time in our calendar. You’ll receive secure meeting access by email afterward.',
    'Abrir agenda online': 'Open online calendar',
    'Iniciar chat por WhatsApp': 'Start a WhatsApp chat',
    'Escribinos al': 'Message us at',
    'Podés llamarnos al': 'Call us at',
    'Llamar ahora': 'Call now',
    'Escribinos a': 'Email us at',
    'Enviar un email': 'Send an email',
    'Elegí el canal que te resulte más cómodo.': 'Choose the contact option that works best for you.',
    'También hacemos marketing digital medible.': 'We also provide measurable digital marketing.',
    'Trabajamos presencia en Google, campañas, contenidos y analítica para atraer consultas y saber qué funciona.': 'We work on Google visibility, campaigns, content, and analytics to generate inquiries and understand what works.',
    'Ver Marketing Digital': 'Explore Digital Marketing',
    'Adaptamos la solución al contexto de cada actividad.': 'We adapt every solution to the context of your sector.',
    'Tenemos ideas para industria, finanzas, hotelería, gastronomía, agro, minería y sector público.': 'We have ideas for manufacturing, finance, hospitality, restaurants, agriculture, mining, and the public sector.',
    'Creamos tecnología para necesidades reales del negocio.': 'We build technology for real business needs.',
    'Páginas web, tiendas online, software a medida, automatización, inteligencia artificial, analítica y marketing digital.': 'Websites, online stores, custom software, automation, AI, analytics, and digital marketing.',
    'Ver soluciones': 'Explore solutions',
    '¡Hola! Estoy para ayudarte.': 'Hi! I’m here to help.',
    'Preguntame por precios, servicios o la forma más cómoda de contactarnos.': 'Ask me about pricing, services, or the easiest way to contact us.',
    'Puedo ayudarte con las consultas más frecuentes.': 'I can help with the most common questions.',
    'Probá escribir “precios de una web”, “agendar videollamada”, “marketing”, “WhatsApp”, “teléfono” o “email”.': 'Try “website pricing,” “book a video call,” “marketing,” “WhatsApp,” “phone,” or “email.”',
    '¿En qué podemos ayudarte?': 'How can we help?',
    'Consultame por precios, servicios o cómo contactarnos.': 'Ask about pricing, services, or how to contact us.',
    'Ver precios': 'View pricing',
    'Conversación con el asistente de Ranquel': 'Conversation with Ranquel Assistant',
    'Hola, soy el asistente de Ranquel.': 'Hello, I’m Ranquel’s assistant.',
    'Puedo orientarte sobre soluciones, precios y formas de contacto.': 'I can guide you through solutions, pricing, and contact options.',
    'Consultas rápidas': 'Quick questions',
    'Orientación inicial. El presupuesto final se confirma personalmente.': 'Initial guidance only. Final pricing is confirmed personally.',
    'Escribí tu consulta': 'Type your question',
    'Escribí tu consulta…': 'Type your question…',
    'Enviar': 'Send',
    'Precios': 'Pricing',
    'Marketing': 'Marketing',
    'Email': 'Email',
    'Datos para el presupuesto': 'Details for your estimate',
    'Usamos estos datos únicamente para preparar y responder tu consulta.': 'We use this information only to prepare and respond to your inquiry.',
    'Nombre y apellido': 'Full name',
    'Tu nombre': 'Your name',
    'tu@email.com': 'you@example.com',
    'Teléfono / WhatsApp': 'Phone / WhatsApp',
    'Código de país y número': 'Country code and number',
    'Continuar': 'Continue',
    'Volver a la consulta': 'Back to the conversation',
    'Contanos sobre tu proyecto': 'Tell us about your project',
    'Con una descripción breve alcanza para obtener una orientación inicial.': 'A short description is enough for an initial estimate.',
    'Tipo de proyecto': 'Project type',
    'Elegí una opción': 'Choose an option',
    'Página Web (2 páginas)': 'Website (2 pages)',
    'Página Web con Pagos': 'Website with online payments',
    'Tienda E-commerce': 'Online store',
    'App empresarial con IA': 'AI-powered business app',
    'Desarrollo a medida': 'Custom development',
    'Detalles y requerimientos': 'Project details and requirements',
    'Contanos el objetivo, funciones, plazos y cantidad de páginas.': 'Tell us the goal, features, timeline, and expected number of pages.',
    'Calcular presupuesto': 'Calculate estimate',
    'Volver a mis datos': 'Back to my details',
    'Presupuesto orientativo': 'Estimated project cost',
    'El valor definitivo se confirma después de revisar el alcance.': 'The final price is confirmed after we review the scope.',
    'Elegí cómo continuar:': 'Choose how to continue:',
    'Quiero que me contacten por WhatsApp': 'Have someone contact me on WhatsApp',
    'Recibir presupuesto por email': 'Email me the estimate',
    'Agendar videollamada explicativa': 'Book a project video call',
    'Enviando…': 'Sending…',
    'No pudimos enviar la solicitud. Probá nuevamente o escribinos por WhatsApp.': 'We couldn’t send your request. Try again or message us on WhatsApp.',
    'Volver a modificar': 'Edit project',
    'A consultar': 'Request a quote',
    'Propuesta a medida sin cargo': 'Custom proposal at no charge',
    'Precio orientativo': 'Estimated price',
    'Landing Page de una página': 'One-page landing page',
    'Página web de dos páginas + ARS 50.000 por página extra': 'Two-page website + ARS 50,000 per extra page',
    'Web de dos páginas con pagos + ARS 75.000 por página extra': 'Two-page website with payments + ARS 75,000 per extra page',
    'Tienda online completa': 'Complete online store',
    'Aplicación móvil para Android e iOS': 'Mobile application for Android and iOS',
    'Aplicación empresarial con inteligencia artificial': 'Business application with artificial intelligence',
    'Ya se muestran los precios orientativos.': 'Estimated prices are now displayed.',
    'Ya podés abrir la agenda online.': 'You can now open the online calendar.',
    'Ya se muestra el acceso a WhatsApp.': 'The WhatsApp link is now available.',
    'Ya se muestra el número de teléfono.': 'The phone number is now displayed.',
    'Ya se muestra el email.': 'The email address is now displayed.',
    'Ya se muestran las formas de contacto.': 'Contact options are now displayed.',
    'Ya se muestra Marketing Digital.': 'Digital Marketing information is now displayed.',
    'Ya se muestran las ideas por sector.': 'Ideas by sector are now displayed.',
    'Ya se muestran nuestras soluciones.': 'Our solutions are now displayed.',
    'Hola. Elegí una opción rápida o escribí una consulta.': 'Hello. Choose a quick option or type a question.',
    'Elegí precios, videollamada, WhatsApp, teléfono, email o servicios.': 'Choose pricing, video call, WhatsApp, phone, email, or services.',
    'Landing page': 'Landing page',
    'Sitio web': 'Website',
    'Web con pagos': 'Website with payments',
    'Tienda online': 'Online store',
    'App móvil': 'Mobile app',
    'Página Web (2 páginas)': 'Website (2 pages)'
  };

  var metadata = {
    soluciones: {
      title: 'Websites, Software & AI in Río Cuarto | Ranquel Tech Lab',
      description: 'Grow your business with websites, online stores, custom software, automation, and AI. Clear solutions for Río Cuarto and companies across Argentina.',
      socialTitle: 'Websites, Software & AI | Ranquel Tech Lab',
      socialDescription: 'Clear digital solutions to sell online, save time, and work smarter.'
    },
    sectores: {
      title: 'Technology Solutions by Sector | Ranquel Tech Lab',
      description: 'Software, automation, data, and AI ideas for manufacturing, finance, hospitality, restaurants, agriculture, mining, and the public sector.',
      socialTitle: 'Technology Solutions by Sector | Ranquel Tech Lab',
      socialDescription: 'Software, automation, data, and AI possibilities across seven sectors.'
    },
    metodo: {
      title: 'How We Work: A Four-Stage Method | Ranquel Tech Lab',
      description: 'See how Ranquel Tech Lab understands, designs, builds, and improves digital solutions for companies in Río Cuarto and across Argentina.',
      socialTitle: 'How We Work | Ranquel Tech Lab',
      socialDescription: 'A clear process to understand, design, build, and improve every digital solution.'
    },
    marketing: {
      title: 'Digital Marketing in Río Cuarto | Ranquel Tech Lab',
      description: 'Strategy, SEO, Google Ads, Meta Ads, and measurement to generate inquiries and sales. Digital marketing for companies in Río Cuarto and across Argentina.',
      socialTitle: 'Digital Marketing in Río Cuarto | Ranquel Tech Lab',
      socialDescription: 'Strategy, advertising, and measurement that turn searches and visits into real inquiries.'
    },
    contacto: {
      title: 'Contact & WhatsApp | Ranquel Tech Lab Río Cuarto',
      description: 'Contact Ranquel Tech Lab via WhatsApp, phone, email, or video call. Visit us at Sobremonte 548 in Río Cuarto, Córdoba.',
      socialTitle: 'Contact Ranquel Tech Lab',
      socialDescription: 'Message, call, or book a video call with Ranquel Tech Lab in Río Cuarto.'
    },
    whatsapp: {
      title: 'Ranquel Tech Lab on WhatsApp | Direct Contact',
      description: 'Message Ranquel Tech Lab on WhatsApp about web development, apps, software, automation, AI, or digital marketing.',
      socialTitle: 'Ranquel Tech Lab on WhatsApp',
      socialDescription: 'Open Ranquel Tech Lab’s official chat and tell us what you need to solve.'
    }
  };

  function safeGetLanguage() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      return VALID_LANGUAGES.indexOf(saved) !== -1 ? saved : 'es';
    } catch (_) {
      return 'es';
    }
  }

  function safeSetLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (_) {
      // The selector keeps working even when storage is unavailable.
    }
  }

  function pageName() {
    return document.body && document.body.dataset ? document.body.dataset.page || '' : '';
  }

  function dictionary() {
    var result = {};
    [common, pages[pageName()] || {}, chatbot].forEach(function merge(source) {
      Object.keys(source).forEach(function assign(key) { result[key] = source[key]; });
    });
    return result;
  }

  function translateDynamic(value, map) {
    if (Object.prototype.hasOwnProperty.call(map, value)) return map[value];
    if (/^desde$/i.test(value)) return 'from';
    if (/^desde\s+/i.test(value)) return value.replace(/^desde\s+/i, 'from ');
    if (/^Escribinos al\s+/i.test(value)) return value.replace(/^Escribinos al\s+/i, 'Message us at ');
    if (/^Podés llamarnos al\s+/i.test(value)) return value.replace(/^Podés llamarnos al\s+/i, 'Call us at ');
    if (/^Escribinos a\s+/i.test(value)) return value.replace(/^Escribinos a\s+/i, 'Email us at ');
    if (/ · Precio orientativo$/.test(value)) {
      var base = value.replace(/ · Precio orientativo$/, '');
      var pages = base.match(/^(.*) \((\d+) páginas en total\)$/i);
      if (pages) {
        base = (map[pages[1]] || pages[1]) + ' (' + pages[2] + ' pages in total)';
      } else {
        base = map[base] || base;
      }
      return base + ' · Estimated price';
    }
    if (/\d+\s+páginas en total/i.test(value)) return value.replace(/páginas en total/gi, 'pages in total');
    return value;
  }

  function translated(value) {
    return translateDynamic(value, dictionary());
  }

  function shouldSkipText(node) {
    var parent = node && node.parentElement;
    if (!parent) return true;
    if (/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(parent.tagName)) return true;
    return Boolean(parent.closest('.chatbot-message-user'));
  }

  function translateTextNode(node) {
    if (!node || shouldSkipText(node)) return;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    var source = originalText.get(node);
    var trimmed = source.trim();
    if (!trimmed) return;
    var target = currentLanguage === 'en' ? translated(trimmed) : trimmed;
    var leading = (source.match(/^\s*/) || [''])[0];
    var trailing = (source.match(/\s*$/) || [''])[0];
    var next = leading + target + trailing;
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function rememberAttribute(element, name) {
    var values = originalAttributes.get(element);
    if (!values) {
      values = {};
      originalAttributes.set(element, values);
    }
    if (!Object.prototype.hasOwnProperty.call(values, name)) {
      values[name] = element.getAttribute(name);
    }
    return values[name];
  }

  function translateAttribute(element, name) {
    if (!element.hasAttribute(name)) return;
    var source = rememberAttribute(element, name);
    if (source == null || source === '') return;
    var target = currentLanguage === 'en' ? translated(source) : source;
    if (element.getAttribute(name) !== target) element.setAttribute(name, target);
  }

  function translateElement(element) {
    if (!element || element.nodeType !== 1) return;
    ['aria-label', 'title', 'placeholder', 'alt'].forEach(function eachAttribute(name) {
      translateAttribute(element, name);
    });
  }

  function applyRoot(root) {
    if (!root) return;
    if (root.nodeType === 3) {
      translateTextNode(root);
      return;
    }
    if (root.nodeType !== 1 && root.nodeType !== 9) return;
    if (root.nodeType === 1) translateElement(root);
    var walker = document.createTreeWalker(root, window.NodeFilter.SHOW_ELEMENT | window.NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === 3) translateTextNode(node);
      else translateElement(node);
    }
  }

  function updateMetadata() {
    var meta = metadata[pageName()];
    var english = currentLanguage === 'en';
    if (!meta) return;

    if (!document.documentElement.dataset.originalTitle) {
      document.documentElement.dataset.originalTitle = document.title;
    }
    document.title = english ? meta.title : document.documentElement.dataset.originalTitle;

    var updates = [
      ['meta[name="description"]', 'content', meta.description],
      ['meta[property="og:title"]', 'content', meta.socialTitle],
      ['meta[property="og:description"]', 'content', meta.socialDescription],
      ['meta[property="og:locale"]', 'content', 'en_US'],
      ['meta[property="og:image:alt"]', 'content', 'Abstract digital landscape by Ranquel Tech Lab'],
      ['meta[name="twitter:title"]', 'content', meta.socialTitle],
      ['meta[name="twitter:description"]', 'content', meta.socialDescription]
    ];
    updates.forEach(function update(entry) {
      var element = document.querySelector(entry[0]);
      if (!element) return;
      var source = rememberAttribute(element, entry[1]);
      var target = english ? entry[2] : source;
      if (element.getAttribute(entry[1]) !== target) element.setAttribute(entry[1], target);
    });
  }

  function updateWhatsAppLinks() {
    document.querySelectorAll('a[href*="wa.me/"]').forEach(function localizeLink(link) {
      var original = rememberAttribute(link, 'href');
      if (!original) return;
      if (currentLanguage !== 'en') {
        link.setAttribute('href', original);
        return;
      }
      try {
        var url = new URL(original, window.location.origin);
        var text = url.searchParams.get('text');
        if (!text) return;
        var english = /marketing digital/i.test(text)
          ? 'Hello Ranquel Tech Lab, I would like a digital marketing proposal.'
          : 'Hello Ranquel Tech Lab, I’d like to ask about a project.';
        url.searchParams.set('text', english);
        link.setAttribute('href', url.href);
      } catch (_) {
        // Keep the original working link if URL parsing is unavailable.
      }
    });
  }

  function ensureSelector() {
    var nav = document.querySelector('.seo-nav');
    if (!nav || document.getElementById('langSelector')) return;
    var picker = document.createElement('label');
    picker.className = 'seo-language-picker';
    picker.innerHTML = [
      '<span class="seo-visually-hidden">Selector de idioma</span>',
      '<select id="langSelector" class="seo-lang-select" aria-label="Idioma">',
      '  <option value="es">ES</option>',
      '  <option value="en">EN</option>',
      '</select>'
    ].join('');
    nav.appendChild(picker);
    picker.querySelector('select').addEventListener('change', function changeLanguage(event) {
      setLanguage(event.target.value, true);
    });
  }

  function syncSelector() {
    var selector = document.getElementById('langSelector');
    if (!selector) return;
    selector.value = currentLanguage;
    selector.dataset.flag = currentLanguage;
    selector.setAttribute('aria-label', currentLanguage === 'en' ? 'Language' : 'Idioma');
    var label = selector.parentElement && selector.parentElement.querySelector('.seo-visually-hidden');
    if (label) label.textContent = currentLanguage === 'en' ? 'Language selector' : 'Selector de idioma';
  }

  function setLanguage(language, persist) {
    currentLanguage = VALID_LANGUAGES.indexOf(language) !== -1 ? language : 'es';
    if (persist) safeSetLanguage(currentLanguage);
    document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'es-AR';
    if (document.body) document.body.dataset.language = currentLanguage;
    applyRoot(document.body);
    syncSelector();
    updateMetadata();
    updateWhatsAppLinks();
    if (window.ranquelChatbot && typeof window.ranquelChatbot.refresh === 'function') {
      window.ranquelChatbot.refresh();
    }
    document.dispatchEvent(new CustomEvent('ranquel:languagechange', {
      detail: { language: currentLanguage }
    }));
  }

  function observeDynamicContent() {
    if (!document.body || typeof MutationObserver !== 'function') return;
    var observer = new MutationObserver(function onMutations(mutations) {
      mutations.forEach(function eachMutation(mutation) {
        mutation.addedNodes.forEach(applyRoot);
      });
      if (currentLanguage === 'en') updateWhatsAppLinks();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function init() {
    ensureSelector();
    currentLanguage = safeGetLanguage();
    setLanguage(currentLanguage, false);
    observeDynamicContent();
  }

  window.ranquelI18n = {
    apply: applyRoot,
    getLanguage: function getLanguage() { return currentLanguage; },
    setLanguage: function publicSetLanguage(language) { setLanguage(language, true); },
    translate: translated
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})(window, document);
