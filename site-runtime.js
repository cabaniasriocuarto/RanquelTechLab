/**
 * Ranquel Tech Lab — runtime compartido para páginas de detalle.
 *
 * Responsabilidades deliberadamente acotadas:
 * - endurecer enlaces que abren una pestaña nueva;
 * - medir WhatsApp, teléfono, email y agenda sin inicializar gtag;
 * - montar un asistente determinista, sin navegación SPA ni traducción global.
 *
 * El único dato persistido es si el teaser automático ya se mostró durante
 * esta sesión. Los datos de un presupuesto viven sólo en memoria y se limpian
 * antes de navegar fuera de la página.
 */
(function ranquelSiteRuntimeBootstrap(window, document) {
  'use strict';

  var RUNTIME_KEY = '__ranquelSiteRuntimeV1';
  var AUTO_SHOWN_KEY = 'rtl-chatbot-auto-shown-v1';
  var AUTO_OPEN_DELAY_MS = 7000;
  var MAX_CONVERSATION_TURNS = 4;

  var CONTACT = Object.freeze({
    whatsappNumber: '5493584118722',
    whatsappDisplay: '+54 9 358 411 8722',
    phoneHref: '+543584118722',
    phoneDisplay: '+54 358 411 8722',
    email: 'ranqueltechlab@gmail.com',
    // The complete scheduler + secure Daily access still lives in Home's
    // reservation view. Keep this canonical destination until that flow is
    // migrated as a whole, so detail pages never land on the Daily-only page.
    agendaPath: '/?view=reservas',
    solutionsPath: '/soluciones/',
    sectorsPath: '/sectores/',
    marketingPath: '/marketing/',
    contactPath: '/contacto/',
  });

  var ADS = Object.freeze({
    id: 'AW-958141767',
    whatsappLabel: 'wsp_click',
    emailLabel: 'bgv6CNz5mcUbEMeq8MgD',
    phoneLabel: 'llamada_click',
  });

  var PROJECT_PRICES = Object.freeze({
    'Landing Page': Object.freeze({
      amount: 350000,
      display: 'ARS 350.000',
      details: 'Landing Page de una página',
    }),
    'Página Web 2 páginas': Object.freeze({
      amount: 650000,
      display: 'ARS 650.000',
      details: 'Página web de dos páginas + ARS 50.000 por página extra',
    }),
    'Página Web con Pagos': Object.freeze({
      amount: 950000,
      display: 'ARS 950.000',
      details: 'Web de dos páginas con pagos + ARS 75.000 por página extra',
    }),
    'Tienda E-commerce': Object.freeze({
      amount: 1350000,
      display: 'ARS 1.350.000',
      details: 'Tienda online completa',
    }),
    'App Android/iOS': Object.freeze({
      amount: 2500000,
      display: 'ARS 2.500.000',
      details: 'Aplicación móvil para Android e iOS',
    }),
    'App empresarial con IA': Object.freeze({
      amount: 3000000,
      display: 'ARS 3.000.000',
      details: 'Aplicación empresarial con inteligencia artificial',
    }),
    'Desarrollo a medida': Object.freeze({
      amount: 0,
      display: 'A consultar',
      details: 'Propuesta a medida sin cargo',
    }),
  });

  if (window[RUNTIME_KEY]) {
    if (typeof window[RUNTIME_KEY].refresh === 'function') {
      window[RUNTIME_KEY].refresh();
    }
    return;
  }

  var runtime = {
    initialized: false,
    chatbotInitialized: false,
    refresh: function noop() {},
  };
  window[RUNTIME_KEY] = runtime;

  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
      return;
    }
    callback();
  }

  function safeSessionGet(key) {
    try {
      return window.sessionStorage.getItem(key);
    } catch (_) {
      return null;
    }
  }

  function safeSessionSet(key, value) {
    try {
      window.sessionStorage.setItem(key, value);
    } catch (_) {
      // sessionStorage puede estar bloqueado; el asistente sigue funcionando.
    }
  }

  function pageSource() {
    var explicit = document.body && document.body.dataset
      ? document.body.dataset.page
      : '';
    if (explicit) return explicit;

    var pathname = window.location.pathname.replace(/^\/|\/$/g, '');
    if (!pathname) return 'home';
    return pathname.replace(/\//g, '_').replace(/\.html$/i, '') || 'home';
  }

  function cleanLegacySectorQuery() {
    try {
      var url = new URL(window.location.href);
      var pathname = url.pathname.replace(/\/+$/, '') || '/';
      if (pathname !== '/sectores' || url.searchParams.get('view') !== 'opciones') return;

      url.searchParams.delete('view');
      window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
    } catch (_) {
      // La navegación sigue funcionando aunque History API no esté disponible.
    }
  }

  function sanitizeLabel(value, fallback) {
    var label = String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, '_')
      .replace(/^_+|_+$/g, '');
    return label || fallback;
  }

  function placementFor(link, fallback) {
    if (!link) return fallback;
    var dataset = link.dataset || {};
    var explicit = dataset.whatsappLocation
      || dataset.callLocation
      || dataset.emailLocation
      || dataset.agendaLocation
      || dataset.trackLocation;
    if (explicit) return sanitizeLabel(explicit, fallback);

    if (link.closest && link.closest('header')) return 'header';
    if (link.closest && link.closest('footer')) return 'footer';
    if (link.closest && link.closest('#chatbot-container')) return 'chatbot';
    if (link.closest && link.closest('.seo-hero')) return 'hero';
    return fallback;
  }

  function emitEvent(name, parameters) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, parameters || {});
  }

  function emitAdsConversion(label, value) {
    if (!label || typeof window.gtag !== 'function') return;
    window.gtag('event', 'conversion', {
      send_to: ADS.id + '/' + label,
      value: typeof value === 'number' ? value : 1,
    });
  }

  function eventLabel(placement) {
    return pageSource() + ':' + sanitizeLabel(placement, 'link');
  }

  function trackWhatsApp(placement) {
    emitEvent('click_whatsapp', {
      event_category: 'engagement',
      event_label: eventLabel(placement),
      value: 1,
    });
    emitAdsConversion(ADS.whatsappLabel, 1);
  }

  function trackContactChannel(channel, placement) {
    emitEvent(channel + '_click', {
      event_category: 'engagement',
      event_label: eventLabel(placement),
      value: 1,
    });

    if (channel === 'email') emitAdsConversion(ADS.emailLabel, 1);
    if (channel === 'llamada') emitAdsConversion(ADS.phoneLabel, 1);
  }

  function trackAgenda(placement) {
    emitEvent('agenda_abierta', {
      event_category: 'engagement',
      event_label: eventLabel(placement),
      value: 1,
    });
  }

  function trackChatIntent(intent) {
    emitEvent('chatbot_intent', {
      event_category: 'engagement',
      event_label: pageSource() + ':' + intent,
    });
  }

  function trackBudgetRequest(contactType) {
    emitEvent('presupuesto_solicitado', {
      event_category: 'conversion',
      event_label: pageSource() + ':chatbot_' + contactType,
      value: 1,
    });
  }

  function ensureNoopener(link) {
    if (!link) return;
    var rel = link.getAttribute('rel') || '';
    var tokens = rel.split(/\s+/).filter(Boolean);
    if (tokens.indexOf('noopener') === -1) tokens.push('noopener');
    if (tokens.indexOf('noreferrer') === -1) tokens.push('noreferrer');
    link.setAttribute('rel', tokens.join(' '));
  }

  function hardenExternalLinks(root) {
    var scope = root && typeof root.querySelectorAll === 'function' ? root : document;
    scope.querySelectorAll('a[target="_blank"]').forEach(ensureNoopener);
  }

  function parseLink(link) {
    try {
      return new URL(link.getAttribute('href') || '', window.location.href);
    } catch (_) {
      return null;
    }
  }

  function isWhatsAppLink(url) {
    return Boolean(url && (
      url.hostname === 'wa.me'
      || url.hostname === 'api.whatsapp.com'
      || url.hostname === 'web.whatsapp.com'
    ));
  }

  function isAgendaLink(url, link) {
    if (link && link.dataset && link.dataset.trackAgenda === 'true') return true;
    if (!url || url.origin !== window.location.origin) return false;
    if (url.pathname.replace(/\/+$/, '') === '/videollamada.html') return true;
    return url.pathname === '/' && url.searchParams.get('view') === 'reservas';
  }

  function attachOnce(link, marker, callback) {
    if (!link || !link.dataset || link.dataset[marker] === 'true') return;
    link.addEventListener('click', callback);
    link.dataset[marker] = 'true';
  }

  function bindLinkTracking(root) {
    var scope = root && typeof root.querySelectorAll === 'function' ? root : document;

    scope.querySelectorAll('a[href]').forEach(function bindTrackedLink(link) {
      var url = parseLink(link);
      var href = link.getAttribute('href') || '';

      if (isWhatsAppLink(url)) {
        if (link.dataset.whatsappTracked === 'true') return;
        attachOnce(link, 'rtlWhatsappTracked', function onWhatsAppClick() {
          trackWhatsApp(placementFor(link, 'whatsapp'));
        });
        // Compatibilidad con el marcador del runtime histórico de Home.
        link.dataset.whatsappTracked = 'true';
        return;
      }

      if (/^tel:/i.test(href)) {
        if (link.dataset.contactTracked === 'true') return;
        attachOnce(link, 'rtlPhoneTracked', function onPhoneClick() {
          trackContactChannel('llamada', placementFor(link, 'telefono'));
        });
        link.dataset.contactTracked = 'true';
        return;
      }

      if (/^mailto:/i.test(href)) {
        if (link.dataset.contactTracked === 'true') return;
        attachOnce(link, 'rtlEmailTracked', function onEmailClick() {
          trackContactChannel('email', placementFor(link, 'email'));
        });
        link.dataset.contactTracked = 'true';
        return;
      }

      if (isAgendaLink(url, link)) {
        attachOnce(link, 'rtlAgendaTracked', function onAgendaClick() {
          trackAgenda(placementFor(link, 'agenda'));
        });
      }
    });
  }

  function escapeHTML(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function normalizeChatText(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  function detectChatIntent(value) {
    var text = normalizeChatText(value);

    if (/whats|wsp/.test(text)) return 'whatsapp';
    if (/video.?llamada|agenda|turno|reunion|reservar|reserva/.test(text)) return 'booking';
    if (/telefono|celular|llamar|numero/.test(text)) return 'phone';
    if (/correo|e-?mail|mail/.test(text)) return 'email';
    if (/marketing|publicidad|redes|google ads|meta ads|seo|campana/.test(text)) return 'marketing';
    if (/sector|industria|finanza|hotel|restaurante|gastronomia|agro|mineria|gobierno/.test(text)) return 'sectors';
    if (/precio|presup|costo|cuanto|valor|cotiz|landing|pagina|sitio|web|tienda|e-?commerce|app|software/.test(text)) return 'prices';
    if (/servicio|solucion|hacen|desarroll|automatiza|inteligencia|\bia\b/.test(text)) return 'services';
    if (/contact|hablar|comunicar/.test(text)) return 'contact';
    if (/hola|buen dia|buenas|hey/.test(text)) return 'greeting';
    return 'fallback';
  }

  function calculateBudget(projectType, details) {
    var base = PROJECT_PRICES[projectType] || PROJECT_PRICES['Desarrollo a medida'];
    var amount = base.amount;
    var display = base.display;
    var description = base.details;

    if (
      (projectType === 'Página Web 2 páginas' || projectType === 'Página Web con Pagos')
      && details
    ) {
      var pageMatch = String(details).match(/(\d+)\s*p[aá]ginas?/i);
      var pages = pageMatch ? parseInt(pageMatch[1], 10) : 0;

      if (pages > 2) {
        var extraPages = pages - 2;
        var unitPrice = projectType === 'Página Web 2 páginas' ? 50000 : 75000;
        amount += extraPages * unitPrice;
        display = 'ARS ' + amount.toLocaleString('es-AR');
        description = base.details + ' (' + pages + ' páginas en total)';
      }
    }

    return {
      amount: amount,
      display: display,
      details: description + ' · Precio orientativo',
    };
  }

  function freshBudget() {
    return {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      details: '',
      contact: 'whatsapp',
      submitting: false,
      submissionFailed: false,
    };
  }

  function initChatbot() {
    var container = document.getElementById('chatbot-container');
    if (!container) return;
    if (container.dataset.ranquelAssistantInitialized === 'true') {
      runtime.chatbotInitialized = true;
      return;
    }
    if (container.querySelector('#chatbot-panel') || window.ranquelChatbot) {
      return;
    }

    container.dataset.ranquelAssistantInitialized = 'true';
    runtime.chatbotInitialized = true;

    var state = {
      step: 'chat',
      teaser: false,
      conversation: [],
      budget: freshBudget(),
    };
    var autoOpenTimer = null;

    container.innerHTML = [
      '<div id="chatbot-panel" class="chatbot-panel chatbot-hidden" role="dialog" aria-modal="false" aria-labelledby="chatbot-panel-title">',
      '  <header class="chatbot-panel-head">',
      '    <div class="chatbot-panel-identity">',
      '      <span class="chatbot-status-dot" aria-hidden="true"></span>',
      '      <span>',
      '        <strong id="chatbot-panel-title">Asistente Ranquel</strong>',
      '        <small>Orientación rápida y directa</small>',
      '      </span>',
      '    </div>',
      '    <button id="chatbot-minimize" class="chatbot-minimize" type="button" aria-label="Minimizar asistente" title="Minimizar asistente">',
      '      <span aria-hidden="true">−</span>',
      '    </button>',
      '  </header>',
      '  <div id="chatbot-panel-inner" class="chatbot-panel-inner"></div>',
      '</div>',
      '<button id="chatbot-toggle" class="chatbot-toggle" type="button" aria-label="Abrir consulta rápida" aria-controls="chatbot-panel" aria-expanded="false">',
      '  <span>Consulta rápida</span><b aria-hidden="true">↗</b>',
      '</button>',
    ].join('');

    var panel = container.querySelector('#chatbot-panel');
    var panelInner = container.querySelector('#chatbot-panel-inner');
    var toggle = container.querySelector('#chatbot-toggle');
    var minimize = container.querySelector('#chatbot-minimize');

    function updateBudget(field, value) {
      state.budget[field] = value;
    }

    function budgetInfoIsValid() {
      var name = state.budget.name.trim();
      var email = state.budget.email.trim();
      var phone = state.budget.phone.trim();
      var phoneDigits = phone.replace(/\D/g, '');
      return name.length > 1
        && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        && /^[+()0-9\s.-]+$/.test(phone)
        && phoneDigits.length >= 7
        && phoneDigits.length <= 18;
    }

    function budgetProjectIsValid() {
      return state.budget.projectType.trim().length > 0
        && state.budget.details.trim().length > 5;
    }

    function cancelAutoOpen(markAsShown) {
      if (autoOpenTimer !== null) {
        window.clearTimeout(autoOpenTimer);
        autoOpenTimer = null;
      }
      if (markAsShown) safeSessionSet(AUTO_SHOWN_KEY, '1');
    }

    function closePanel(options) {
      var shouldFocus = !options || options.focusToggle !== false;
      cancelAutoOpen(true);
      panel.classList.add('chatbot-hidden');
      toggle.setAttribute('aria-expanded', 'false');
      if (shouldFocus) toggle.focus();
    }

    function openPanel(options) {
      var automatic = options && options.automatic === true;
      if (automatic) {
        safeSessionSet(AUTO_SHOWN_KEY, '1');
        if (state.step === 'chat' && state.conversation.length === 0) {
          state.teaser = true;
        }
      } else {
        cancelAutoOpen(true);
        state.teaser = false;
      }

      panel.classList.remove('chatbot-hidden');
      toggle.setAttribute('aria-expanded', 'true');
      render();
      if (!automatic) {
        window.requestAnimationFrame(function focusMinimize() {
          minimize.focus();
        });
      }
    }

    function togglePanel() {
      if (panel.classList.contains('chatbot-hidden')) {
        openPanel({ automatic: false });
      } else {
        closePanel();
      }
    }

    function goToAgenda(origin) {
      trackAgenda(origin || 'chatbot');
      closePanel({ focusToggle: false });
      window.location.assign(CONTACT.agendaPath);
    }

    function getPriceListMarkup() {
      var projects = [
        ['Landing Page', 'Landing page'],
        ['Página Web 2 páginas', 'Sitio web'],
        ['Página Web con Pagos', 'Web con pagos'],
        ['Tienda E-commerce', 'Tienda online'],
        ['App Android/iOS', 'App móvil'],
        ['App empresarial con IA', 'App empresarial con IA'],
      ];

      return '<ul class="chatbot-price-list" aria-label="Precios orientativos">'
        + projects.map(function priceRow(project) {
          var price = calculateBudget(project[0], '');
          return '<li><span>' + escapeHTML(project[1]) + '</span><strong>desde '
            + escapeHTML(price.display) + '</strong></li>';
        }).join('')
        + '</ul>';
    }

    function getContactActionsMarkup() {
      return [
        '<div class="chatbot-inline-actions">',
        '  <a class="chatbot-inline-action chatbot-inline-action-whatsapp" href="https://wa.me/' + CONTACT.whatsappNumber + '" target="_blank" rel="noopener noreferrer" data-whatsapp-location="chatbot_contact">WhatsApp</a>',
        '  <a class="chatbot-inline-action" href="tel:' + CONTACT.phoneHref + '" data-call-location="chatbot_contact">Llamar</a>',
        '  <a class="chatbot-inline-action" href="mailto:' + CONTACT.email + '" data-email-location="chatbot_contact">Email</a>',
        '  <button class="chatbot-inline-action" type="button" data-chat-action="booking">Videollamada</button>',
        '</div>',
      ].join('');
    }

    function responseMarkup(intent) {
      switch (intent) {
        case 'prices':
          return [
            '<p><strong>Estos son nuestros valores orientativos actuales.</strong></p>',
            getPriceListMarkup(),
            '<p class="chatbot-response-note">El valor final depende del alcance, las integraciones y los plazos.</p>',
            '<button class="chatbot-conversation-cta" type="button" data-chat-action="budget">Calcular mi proyecto</button>',
          ].join('');
        case 'booking':
          return [
            '<p><strong>Agendemos una videollamada.</strong></p>',
            '<p>Elegí un horario disponible en nuestra agenda. Después recibirás por email el acceso seguro a la reunión.</p>',
            '<button class="chatbot-conversation-cta" type="button" data-chat-action="booking">Abrir agenda online</button>',
          ].join('');
        case 'whatsapp':
          return [
            '<p><strong>WhatsApp</strong></p>',
            '<p>Escribinos al <strong>' + CONTACT.whatsappDisplay + '</strong>.</p>',
            '<a class="chatbot-conversation-cta chatbot-conversation-cta-whatsapp" href="https://wa.me/' + CONTACT.whatsappNumber + '" target="_blank" rel="noopener noreferrer" data-whatsapp-location="chatbot_conversation">Iniciar chat por WhatsApp</a>',
          ].join('');
        case 'phone':
          return [
            '<p><strong>Teléfono</strong></p>',
            '<p>Podés llamarnos al <strong>' + CONTACT.phoneDisplay + '</strong>.</p>',
            '<a class="chatbot-conversation-cta" href="tel:' + CONTACT.phoneHref + '" data-call-location="chatbot_conversation">Llamar ahora</a>',
          ].join('');
        case 'email':
          return [
            '<p><strong>Email</strong></p>',
            '<p>Escribinos a <strong>' + CONTACT.email + '</strong>.</p>',
            '<a class="chatbot-conversation-cta" href="mailto:' + CONTACT.email + '" data-email-location="chatbot_conversation">Enviar un email</a>',
          ].join('');
        case 'contact':
          return [
            '<p><strong>Elegí el canal que te resulte más cómodo.</strong></p>',
            '<p>WhatsApp: <strong>' + CONTACT.whatsappDisplay + '</strong><br>Teléfono: <strong>' + CONTACT.phoneDisplay + '</strong><br>Email: <strong>' + CONTACT.email + '</strong></p>',
            getContactActionsMarkup(),
          ].join('');
        case 'marketing':
          return [
            '<p><strong>También hacemos marketing digital medible.</strong></p>',
            '<p>Trabajamos presencia en Google, campañas, contenidos y analítica para atraer consultas y saber qué funciona.</p>',
            '<a class="chatbot-conversation-cta" href="' + CONTACT.marketingPath + '">Ver Marketing Digital</a>',
          ].join('');
        case 'sectors':
          return [
            '<p><strong>Adaptamos la solución al contexto de cada actividad.</strong></p>',
            '<p>Tenemos ideas para industria, finanzas, hotelería, gastronomía, agro, minería y sector público.</p>',
            '<a class="chatbot-conversation-cta" href="' + CONTACT.sectorsPath + '">Ver ideas por sector</a>',
          ].join('');
        case 'services':
          return [
            '<p><strong>Creamos tecnología para necesidades reales del negocio.</strong></p>',
            '<p>Páginas web, tiendas online, software a medida, automatización, inteligencia artificial, analítica y marketing digital.</p>',
            '<a class="chatbot-conversation-cta" href="' + CONTACT.solutionsPath + '">Ver soluciones</a>',
          ].join('');
        case 'greeting':
          return [
            '<p><strong>¡Hola! Estoy para ayudarte.</strong></p>',
            '<p>Preguntame por precios, servicios o la forma más cómoda de contactarnos.</p>',
          ].join('');
        default:
          return [
            '<p><strong>Puedo ayudarte con las consultas más frecuentes.</strong></p>',
            '<p>Probá escribir “precios de una web”, “agendar videollamada”, “marketing”, “WhatsApp”, “teléfono” o “email”.</p>',
          ].join('');
      }
    }

    function responseAnnouncement(intent) {
      var messages = {
        prices: 'Ya se muestran los precios orientativos.',
        booking: 'Ya podés abrir la agenda online.',
        whatsapp: 'Ya se muestra el acceso a WhatsApp.',
        phone: 'Ya se muestra el número de teléfono.',
        email: 'Ya se muestra el email.',
        contact: 'Ya se muestran las formas de contacto.',
        marketing: 'Ya se muestra Marketing Digital.',
        sectors: 'Ya se muestran las ideas por sector.',
        services: 'Ya se muestran nuestras soluciones.',
        greeting: 'Hola. Elegí una opción rápida o escribí una consulta.',
        fallback: 'Elegí precios, videollamada, WhatsApp, teléfono, email o servicios.',
      };
      return messages[intent] || messages.fallback;
    }

    function quickRepliesMarkup() {
      var replies = [
        ['prices', 'Precios'],
        ['booking', 'Videollamada'],
        ['whatsapp', 'WhatsApp'],
        ['marketing', 'Marketing'],
        ['phone', 'Teléfono'],
        ['email', 'Email'],
        ['services', 'Servicios'],
      ];
      return replies.map(function quickReply(reply) {
        return '<button class="chatbot-quick-reply" type="button" data-chat-intent="'
          + reply[0] + '">' + reply[1] + '</button>';
      }).join('');
    }

    function addConversationTurn(query, intent) {
      var nextTurn = {
        query: String(query || '').trim().slice(0, 180),
        intent: intent,
      };
      state.teaser = false;
      state.conversation = state.conversation.concat(nextTurn).slice(-MAX_CONVERSATION_TURNS);
      trackChatIntent(intent);
      render({ focusComposer: true });
    }

    function bindCommonRenderedEvents() {
      panelInner.querySelectorAll('[data-chat-intent]').forEach(function bindIntent(button) {
        button.addEventListener('click', function onIntentClick() {
          var intent = button.dataset.chatIntent || 'fallback';
          addConversationTurn(button.textContent.trim(), intent);
        });
      });

      panelInner.querySelectorAll('[data-chat-action="budget"]').forEach(function bindBudget(button) {
        button.addEventListener('click', function openBudget() {
          state.step = 'budget-info';
          state.teaser = false;
          render({ focusSelector: '#cb-name' });
        });
      });

      panelInner.querySelectorAll('[data-chat-action="booking"]').forEach(function bindBooking(button) {
        button.addEventListener('click', function openAgenda() {
          goToAgenda('chatbot');
        });
      });

      hardenExternalLinks(panelInner);
      bindLinkTracking(panelInner);
    }

    function renderChat(options) {
      if (state.teaser) {
        panelInner.innerHTML = [
          '<div class="chatbot-teaser">',
          '  <div class="chatbot-message chatbot-message-assistant">',
          '    <span class="chatbot-message-avatar" aria-hidden="true">R</span>',
          '    <div class="chatbot-message-bubble">',
          '      <p><strong>¿En qué podemos ayudarte?</strong></p>',
          '      <p>Consultame por precios, servicios o cómo contactarnos.</p>',
          '    </div>',
          '  </div>',
          '  <div class="chatbot-teaser-actions">',
          '    <button class="chatbot-conversation-cta" type="button" data-chat-expand>Iniciar una consulta</button>',
          '    <button class="chatbot-quick-reply" type="button" data-chat-intent="prices">Ver precios</button>',
          '  </div>',
          '</div>',
        ].join('');

        var expand = panelInner.querySelector('[data-chat-expand]');
        if (expand) {
          expand.addEventListener('click', function expandTeaser() {
            state.teaser = false;
            render({ focusComposer: true });
          });
        }
        bindCommonRenderedEvents();
        return;
      }

      var conversationMarkup = state.conversation.map(function conversationTurn(turn) {
        return [
          '<div class="chatbot-message chatbot-message-user">',
          '  <div class="chatbot-message-bubble">' + escapeHTML(turn.query) + '</div>',
          '</div>',
          '<div class="chatbot-message chatbot-message-assistant">',
          '  <span class="chatbot-message-avatar" aria-hidden="true">R</span>',
          '  <div class="chatbot-message-bubble">' + responseMarkup(turn.intent) + '</div>',
          '</div>',
        ].join('');
      }).join('');

      var latest = state.conversation.length
        ? state.conversation[state.conversation.length - 1]
        : null;

      panelInner.innerHTML = [
        '<div class="chatbot-conversation-shell">',
        '  <div class="chatbot-conversation" tabindex="0" aria-label="Conversación con el asistente de Ranquel">',
        '    <div class="chatbot-message chatbot-message-assistant">',
        '      <span class="chatbot-message-avatar" aria-hidden="true">R</span>',
        '      <div class="chatbot-message-bubble">',
        '        <p><strong>Hola, soy el asistente de Ranquel.</strong></p>',
        '        <p>Puedo orientarte sobre soluciones, precios y formas de contacto.</p>',
        '      </div>',
        '    </div>',
        conversationMarkup,
        '  </div>',
        '  <p class="chatbot-visually-hidden" role="status">' + (latest ? responseAnnouncement(latest.intent) : '') + '</p>',
        '  <div class="chatbot-quick-replies" aria-label="Consultas rápidas">' + quickRepliesMarkup() + '</div>',
        '  <p class="chatbot-capability-note">Orientación inicial. El presupuesto final se confirma personalmente.</p>',
        '  <form id="chatbot-chat-form" class="chatbot-composer">',
        '    <label class="chatbot-visually-hidden" for="chatbot-chat-input">Escribí tu consulta</label>',
        '    <input id="chatbot-chat-input" class="chatbot-composer-input" type="text" maxlength="180" autocomplete="off" placeholder="Escribí tu consulta…">',
        '    <button class="chatbot-composer-send" type="submit">Enviar</button>',
        '  </form>',
        '</div>',
      ].join('');

      var form = panelInner.querySelector('#chatbot-chat-form');
      var input = panelInner.querySelector('#chatbot-chat-input');
      if (form && input) {
        form.addEventListener('submit', function submitChat(event) {
          event.preventDefault();
          var query = input.value.trim();
          if (!query) return;
          addConversationTurn(query, detectChatIntent(query));
        });
      }

      bindCommonRenderedEvents();
      window.requestAnimationFrame(function finishChatRender() {
        var conversation = panelInner.querySelector('.chatbot-conversation');
        if (conversation) conversation.scrollTop = conversation.scrollHeight;
        if (options && options.focusComposer && input) input.focus();
      });
    }

    function renderBudgetInfo(options) {
      var budget = state.budget;
      panelInner.innerHTML = [
        '<form id="chatbot-budget-info-form" class="chatbot-form">',
        '  <div class="chatbot-form-heading">',
        '    <strong>Datos para el presupuesto</strong>',
        '    <p>Usamos estos datos únicamente para preparar y responder tu consulta.</p>',
        '  </div>',
        '  <label>Nombre y apellido',
        '    <input id="cb-name" class="chatbot-input" type="text" required minlength="2" maxlength="120" autocomplete="name" placeholder="Tu nombre" value="' + escapeHTML(budget.name) + '">',
        '  </label>',
        '  <label>Email',
        '    <input id="cb-email" class="chatbot-input" type="email" required maxlength="254" autocomplete="email" placeholder="tu@email.com" value="' + escapeHTML(budget.email) + '">',
        '  </label>',
        '  <label>Teléfono / WhatsApp',
        '    <input id="cb-phone" class="chatbot-input" type="tel" required maxlength="40" autocomplete="tel" inputmode="tel" placeholder="Código de país y número" value="' + escapeHTML(budget.phone) + '">',
        '  </label>',
        '  <button id="cb-next-project" class="chatbot-btn-primary" type="submit"' + (budgetInfoIsValid() ? '' : ' disabled') + '>Continuar</button>',
        '  <button id="cb-back-chat" class="chatbot-btn-link" type="button">Volver a la consulta</button>',
        '</form>',
      ].join('');

      var form = panelInner.querySelector('#chatbot-budget-info-form');
      var nameInput = panelInner.querySelector('#cb-name');
      var emailInput = panelInner.querySelector('#cb-email');
      var phoneInput = panelInner.querySelector('#cb-phone');
      var nextButton = panelInner.querySelector('#cb-next-project');

      function syncBudgetInfo() {
        updateBudget('name', nameInput.value);
        updateBudget('email', emailInput.value);
        updateBudget('phone', phoneInput.value);
        nextButton.disabled = !budgetInfoIsValid();
      }

      [nameInput, emailInput, phoneInput].forEach(function bindInput(input) {
        input.addEventListener('input', syncBudgetInfo);
      });

      form.addEventListener('submit', function continueBudget(event) {
        event.preventDefault();
        syncBudgetInfo();
        if (!budgetInfoIsValid()) return;
        state.step = 'budget-project';
        render({ focusSelector: '#cb-project-type' });
      });

      panelInner.querySelector('#cb-back-chat').addEventListener('click', function backToChat() {
        state.step = 'chat';
        render({ focusComposer: true });
      });

      focusAfterRender(options && options.focusSelector);
    }

    function renderBudgetProject(options) {
      var budget = state.budget;
      panelInner.innerHTML = [
        '<form id="chatbot-budget-project-form" class="chatbot-form">',
        '  <div class="chatbot-form-heading">',
        '    <strong>Contanos sobre tu proyecto</strong>',
        '    <p>Con una descripción breve alcanza para obtener una orientación inicial.</p>',
        '  </div>',
        '  <label>Tipo de proyecto',
        '    <select id="cb-project-type" class="chatbot-select" required>',
        '      <option value="">Elegí una opción</option>',
        '      <option value="Landing Page">Landing Page</option>',
        '      <option value="Página Web 2 páginas">Página Web (2 páginas)</option>',
        '      <option value="Página Web con Pagos">Página Web con Pagos</option>',
        '      <option value="Tienda E-commerce">Tienda E-commerce</option>',
        '      <option value="App Android/iOS">App Android/iOS</option>',
        '      <option value="App empresarial con IA">App empresarial con IA</option>',
        '      <option value="Desarrollo a medida">Desarrollo a medida</option>',
        '    </select>',
        '  </label>',
        '  <label>Detalles y requerimientos',
        '    <textarea id="cb-details" class="chatbot-textarea" maxlength="2000" placeholder="Contanos el objetivo, funciones, plazos y cantidad de páginas.">' + escapeHTML(budget.details) + '</textarea>',
        '  </label>',
        '  <button id="cb-calculate-budget" class="chatbot-btn-primary" type="submit"' + (budgetProjectIsValid() ? '' : ' disabled') + '>Calcular presupuesto</button>',
        '  <button id="cb-back-info" class="chatbot-btn-link" type="button">Volver a mis datos</button>',
        '</form>',
      ].join('');

      var form = panelInner.querySelector('#chatbot-budget-project-form');
      var typeSelect = panelInner.querySelector('#cb-project-type');
      var detailsInput = panelInner.querySelector('#cb-details');
      var calculateButton = panelInner.querySelector('#cb-calculate-budget');
      typeSelect.value = budget.projectType;

      function syncProject() {
        updateBudget('projectType', typeSelect.value);
        updateBudget('details', detailsInput.value);
        calculateButton.disabled = !budgetProjectIsValid();
      }

      typeSelect.addEventListener('change', syncProject);
      detailsInput.addEventListener('input', syncProject);

      form.addEventListener('submit', function calculate(event) {
        event.preventDefault();
        syncProject();
        if (!budgetProjectIsValid()) return;
        state.step = 'budget-result';
        updateBudget('submissionFailed', false);
        render();
      });

      panelInner.querySelector('#cb-back-info').addEventListener('click', function backToInfo() {
        state.step = 'budget-info';
        render({ focusSelector: '#cb-name' });
      });

      focusAfterRender(options && options.focusSelector);
    }

    function absoluteAgendaUrl() {
      try {
        return new URL(CONTACT.agendaPath, window.location.origin).href;
      } catch (_) {
        return CONTACT.agendaPath;
      }
    }

    async function submitLead(contactType) {
      var budget = state.budget;
      var estimate = calculateBudget(budget.projectType, budget.details);
      var controller = typeof AbortController === 'function' ? new AbortController() : null;
      var timeout = window.setTimeout(function abortRequest() {
        if (controller) controller.abort();
      }, 15000);

      var message = budget.details
        + ' | Preferencia de contacto: ' + contactType
        + ' | Estimado: ' + estimate.display
        + ' (' + estimate.details + ')'
        + ' | Página de origen: ' + pageSource();

      try {
        var response = await window.fetch('/api/contact', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: budget.name,
            email: budget.email,
            phone: budget.phone,
            projectType: budget.projectType,
            message: message,
            channel: contactType,
            calendar_link: absoluteAgendaUrl(),
            website: '',
          }),
          signal: controller ? controller.signal : undefined,
          credentials: 'same-origin',
        });
        var result = await response.json().catch(function invalidJson() {
          return null;
        });
        return response.ok && result && result.ok === true;
      } catch (error) {
        if (!(error && error.name === 'AbortError')) {
          console.error('No se pudo entregar la solicitud de presupuesto.', error);
        }
        return false;
      } finally {
        window.clearTimeout(timeout);
      }
    }

    async function confirmBudget(contactType) {
      if (state.budget.submitting) return;

      updateBudget('contact', contactType);
      updateBudget('submissionFailed', false);
      updateBudget('submitting', true);
      render();
      panelInner.setAttribute('aria-busy', 'true');

      var sent = await submitLead(contactType);
      panelInner.removeAttribute('aria-busy');
      updateBudget('submitting', false);

      if (!sent) {
        updateBudget('submissionFailed', true);
        render();
        return;
      }

      trackBudgetRequest(contactType);
      state.budget = freshBudget();
      state.conversation = [];

      if (contactType === 'videollamada') {
        goToAgenda('chatbot_presupuesto');
        return;
      }

      if (contactType === 'whatsapp') {
        window.location.assign('/gracias-whatsapp/');
        return;
      }

      window.location.assign('/gracias-presupuesto/');
    }

    function renderBudgetResult() {
      var budget = state.budget;
      var estimate = calculateBudget(budget.projectType, budget.details);
      var sendingLabel = budget.submitting ? 'Enviando…' : '';

      panelInner.innerHTML = [
        '<div class="chatbot-form chatbot-budget-result">',
        '  <div class="chatbot-form-heading">',
        '    <strong>Presupuesto orientativo</strong>',
        '    <p>El valor definitivo se confirma después de revisar el alcance.</p>',
        '  </div>',
        '  <div class="chatbot-estimate">',
        '    <strong>' + escapeHTML(estimate.display) + '</strong>',
        '    <span>' + escapeHTML(estimate.details) + '</span>',
        '  </div>',
        '  <p><strong>Elegí cómo continuar:</strong></p>',
        '  <button id="cb-confirm-whatsapp" class="chatbot-btn-primary chatbot-btn-whatsapp" type="button"' + (budget.submitting ? ' disabled' : '') + '>' + (sendingLabel || 'Quiero que me contacten por WhatsApp') + '</button>',
        '  <button id="cb-confirm-email" class="chatbot-btn-primary" type="button"' + (budget.submitting ? ' disabled' : '') + '>Recibir presupuesto por email</button>',
        '  <button id="cb-confirm-call" class="chatbot-btn-primary" type="button"' + (budget.submitting ? ' disabled' : '') + '>Agendar videollamada explicativa</button>',
        budget.submissionFailed && !budget.submitting
          ? '  <div class="chatbot-submit-error" role="alert"><p>No pudimos enviar la solicitud. Probá nuevamente o escribinos por WhatsApp.</p><a href="https://wa.me/' + CONTACT.whatsappNumber + '" target="_blank" rel="noopener noreferrer" data-whatsapp-location="chatbot_submit_error">Abrir WhatsApp</a></div>'
          : '',
        '  <button id="cb-back-project" class="chatbot-btn-link" type="button"' + (budget.submitting ? ' disabled' : '') + '>Volver a modificar</button>',
        '</div>',
      ].join('');

      panelInner.querySelector('#cb-confirm-whatsapp').addEventListener('click', function confirmWhatsApp() {
        confirmBudget('whatsapp');
      });
      panelInner.querySelector('#cb-confirm-email').addEventListener('click', function confirmEmail() {
        confirmBudget('email');
      });
      panelInner.querySelector('#cb-confirm-call').addEventListener('click', function confirmCall() {
        confirmBudget('videollamada');
      });
      panelInner.querySelector('#cb-back-project').addEventListener('click', function backToProject() {
        if (state.budget.submitting) return;
        updateBudget('submissionFailed', false);
        state.step = 'budget-project';
        render({ focusSelector: '#cb-project-type' });
      });

      hardenExternalLinks(panelInner);
      bindLinkTracking(panelInner);
    }

    function focusAfterRender(selector) {
      if (!selector) return;
      window.requestAnimationFrame(function focusRequestedElement() {
        var element = panelInner.querySelector(selector);
        if (element) element.focus();
      });
    }

    function render(options) {
      panelInner.classList.toggle('chatbot-panel-inner-conversation', state.step === 'chat');
      panelInner.classList.toggle('chatbot-panel-inner-teaser', state.step === 'chat' && state.teaser);

      if (state.step === 'budget-info') {
        renderBudgetInfo(options || {});
        return;
      }
      if (state.step === 'budget-project') {
        renderBudgetProject(options || {});
        return;
      }
      if (state.step === 'budget-result') {
        renderBudgetResult();
        return;
      }
      renderChat(options || {});
    }

    function resetChatbot() {
      state = {
        step: 'chat',
        teaser: false,
        conversation: [],
        budget: freshBudget(),
      };
      render();
    }

    toggle.addEventListener('click', togglePanel);
    minimize.addEventListener('click', function minimizePanel() {
      closePanel();
    });

    document.addEventListener('keydown', function closeOnEscape(event) {
      if (event.key === 'Escape' && !panel.classList.contains('chatbot-hidden')) {
        closePanel();
      }
    });

    window.ranquelChatbot = {
      open: function publicOpen() {
        openPanel({ automatic: false });
      },
      toggle: togglePanel,
      close: closePanel,
      reset: resetChatbot,
      refresh: function refreshChatbot() {
        render();
      },
    };

    render();
    hardenExternalLinks(container);
    bindLinkTracking(container);

    if (!safeSessionGet(AUTO_SHOWN_KEY)) {
      autoOpenTimer = window.setTimeout(function autoOpenTeaser() {
        autoOpenTimer = null;
        if (panel.classList.contains('chatbot-hidden')) {
          openPanel({ automatic: true });
        }
      }, AUTO_OPEN_DELAY_MS);
    }
  }

  function init() {
    if (runtime.initialized) {
      hardenExternalLinks(document);
      bindLinkTracking(document);
      if (!runtime.chatbotInitialized) initChatbot();
      return;
    }

    runtime.initialized = true;
    cleanLegacySectorQuery();
    hardenExternalLinks(document);
    bindLinkTracking(document);
    initChatbot();

    runtime.refresh = function refreshRuntime() {
      hardenExternalLinks(document);
      bindLinkTracking(document);
      if (!runtime.chatbotInitialized) initChatbot();
    };
  }

  onReady(init);
})(window, document);
