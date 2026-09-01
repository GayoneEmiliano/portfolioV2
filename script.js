(function () {
  "use strict";

  var ACCENT = "#4F7DFF";

  var COPY = {
    es: {
      navAbout: "Sobre mí",
      navWork: "Proyectos",
      navStack: "Tecnologías",
      navContact: "Contacto",
      navProcess: "Cómo trabajo",
      badge: "Abierto a oportunidades",
      heroLead:
        "Construyo aplicaciones web, APIs y sistemas administrativos que se usan todos los días en producción.",
      ctaWork: "Ver proyectos",
      ctaContact: "Hablemos",
      canvasHint: "arrastrá el mouse: los nodos reaccionan",
      aboutTitle:
        "No hago sitios web: desarrollo sistemas que la gente usa para trabajar.",
      aboutP1:
        "Soy Analista de Sistemas y desarrollador Full Stack Semi Senior. Desde 2022 desarrollo y mantengo software interno en DM Group (Bahía Blanca): sistemas administrativos, integraciones con servicios externos y automatizaciones que sostienen la operación diaria de la empresa.",
      aboutP2:
        "Trabajo end-to-end: modelo la base de datos, escribo el backend y las APIs, armo la interfaz y después convivo con el sistema — soporte, debugging y mejoras con usuarios reales del otro lado. Ese ciclo completo es lo que más me interesa: entender el problema del negocio y dejarlo resuelto.",
      processTitle:
        "Analizo cómo trabaja tu empresa, lo digitalizo y lo automatizo.",
      steps: [
        {
          n: "01",
          title: "Analizo",
          body: 'Me meto en tu operación real: cómo circula la información, dónde se duplica trabajo y qué se hace a mano porque "siempre se hizo así".',
        },
        {
          n: "02",
          title: "Digitalizo",
          body: "Convierto ese proceso en un sistema: base de datos bien modelada, backend, APIs y una interfaz que tu equipo pueda usar sin manual.",
        },
        {
          n: "03",
          title: "Automatizo",
          body: "Las tareas repetitivas pasan a correr solas —cargas, sincronizaciones, avisos, reportes— con registro y control de errores.",
        },
      ],
      workNote: "// casos seleccionados",
      lblProblem: "Problema",
      lblSolution: "Solución",
      lblResult: "Resultado",
      contactTitle: "¿Tenés un proyecto",
      contactTitle2: "en mente? Hablemos.",
      contactLead:
        "Escribime por mail o LinkedIn. Respondo rápido y con gusto cuento en detalle cómo trabajo.",
      ctaEmail: "Enviar un mail",
      formName: "Nombre",
      formEmail: "Email",
      formMessage: "Mensaje",
      formSubmit: "Enviar mensaje",
      formSending: "Enviando…",
      formSuccess: "¡Mensaje enviado! Te responderé pronto.",
      formErrorValidation: "Completá todos los campos con un email válido.",
      formErrorGeneric:
        "No se pudo enviar. Probá de nuevo o escribime por mail.",
      footer: "Diseñado y desarrollado por Emiliano Newen · 2026",
      facts: [
        { k: "2022", v: "Full Stack en DM Group, Bahía Blanca" },
        { k: "prod", v: "Sistemas internos y externos" },
        { k: "stack", v: "PHP, Node, React/Next, MySQL/MariaDB" },
        { k: "foco", v: "APIs, integraciones, automatización, datos" },
      ],
      projects: [
        {
          num: "01",
          kind: "Sistema administrativo",
          title: "Sistema de gestión interna multisucursal",
          summary:
            "Plataforma administrativa que centraliza la operación diaria: usuarios, permisos por rol, carga de datos y reportes para varias sucursales.",
          problem:
            "Procesos dispersos en planillas y cargas manuales, sin trazabilidad ni una única fuente de verdad.",
          solution:
            "Backend en PHP sobre MySQL con módulos por área, roles y auditoría; interfaz pensada para operar rápido con teclado.",
          result:
            "Operación unificada en un solo sistema, con reportes que antes se armaban a mano.",
          tech: ["PHP", "MySQL", "JavaScript", "REST", "Bootstrap"],
        },
        {
          num: "02",
          kind: "API + integraciones",
          title: "Capa de integración con servicios externos",
          summary:
            "API REST propia que conecta el sistema interno con proveedores y servicios de terceros, normalizando datos y errores.",
          problem:
            "Cada integración se resolvía ad-hoc: formatos distintos, fallas silenciosas y lógica duplicada.",
          solution:
            "Endpoints versionados, validación de payloads, logging de cada request y reintentos ante errores de red.",
          result:
            "Integraciones nuevas en horas en lugar de días, y fallas visibles antes de que las reporte un usuario.",
          tech: ["Node.js", "Express", "REST", "MariaDB", "Git"],
        },
        {
          num: "03",
          kind: "Dashboard + datos",
          title: "Dashboard operativo en tiempo cercano al real",
          summary:
            "Panel de control con indicadores clave de la operación, filtros por período y sucursal, y exportación de datos.",
          problem:
            "Las decisiones se tomaban con información vieja y consultas SQL pedidas al equipo técnico.",
          solution:
            "Vistas y consultas optimizadas alimentando un frontend en React/Next.js con filtros y gráficos livianos.",
          result:
            "Los responsables consultan sus números solos, sin depender de que alguien corra una query.",
          tech: ["Next.js", "React", "TypeScript", "MySQL", "Tailwind"],
        },
        {
          num: "04",
          kind: "Automatización",
          title: "Automatización de procesos repetitivos",
          summary:
            "Tareas programadas que reemplazan trabajo manual: procesamiento de archivos, sincronizaciones y avisos automáticos.",
          problem:
            "Horas por semana dedicadas a copiar, validar y cruzar datos entre sistemas.",
          solution:
            "Scripts y jobs con control de errores y notificaciones, corriendo sin intervención humana.",
          result:
            "Menos trabajo manual y errores de carga, con registro de todo lo ejecutado.",
          tech: ["Node.js", "PHP", "Cron", "MySQL", "APIs"],
        },
      ],
    },
    en: {
      navAbout: "About",
      navWork: "Work",
      navStack: "Stack",
      navContact: "Contact",
      navProcess: "How I work",
      badge: "Open to opportunities",
      heroLead:
        "I build web apps, APIs and internal systems that run in production every day.",
      ctaWork: "See projects",
      ctaContact: "Get in touch",
      canvasHint: "move your mouse: the nodes react",
      aboutTitle: "I don't build websites — I build systems people work with.",
      aboutP1:
        "I'm a Systems Analyst and semi-senior Full Stack developer. Since 2022 I've been building and maintaining internal software at DM Group (Bahía Blanca): admin systems, third-party integrations and automations that keep daily operations running.",
      aboutP2:
        "I work end to end: I model the database, write the backend and APIs, build the interface — and then live with the system: support, debugging and improvements with real users on the other side. That full cycle is what I like most: understanding the business problem and actually solving it.",
      processTitle:
        "I analyze how your company works, digitize it and automate it.",
      steps: [
        {
          n: "01",
          title: "Analyze",
          body: "I dig into your actual operation: how information flows, where work is duplicated and what's done by hand just because \"it's always been done that way\".",
        },
        {
          n: "02",
          title: "Digitize",
          body: "I turn that process into a system: a properly modeled database, backend, APIs and an interface your team can use without a manual.",
        },
        {
          n: "03",
          title: "Automate",
          body: "Repetitive tasks start running on their own — imports, syncs, alerts, reports — with logging and error handling.",
        },
      ],
      workNote: "// selected cases",
      lblProblem: "Problem",
      lblSolution: "Solution",
      lblResult: "Outcome",
      contactTitle: "Got a project",
      contactTitle2: "in mind? Let's talk.",
      contactLead:
        "Reach me by email or LinkedIn. I reply fast and I'm happy to walk you through how I work.",
      ctaEmail: "Send an email",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send message",
      formSending: "Sending…",
      formSuccess: "Message sent! I'll get back to you soon.",
      formErrorValidation: "Fill in all fields with a valid email.",
      formErrorGeneric: "Couldn't send it. Try again or email me directly.",
      footer: "Designed & built by Emiliano Newen · 2026",
      facts: [
        { k: "2022", v: "Full Stack at DM Group, Bahía Blanca" },
        {
          k: "prod",
          v: "Internal and external systems in daily use, not demos",
        },
        { k: "stack", v: "PHP, Node, React/Next, MySQL/MariaDB" },
        { k: "focus", v: "APIs, integrations, automation, data" },
      ],
      projects: [
        {
          num: "01",
          kind: "Admin system",
          title: "Multi-branch internal management system",
          summary:
            "Admin platform that centralizes daily operations: users, role-based permissions, data entry and reporting across branches.",
          problem:
            "Processes scattered across spreadsheets and manual entry, with no traceability or single source of truth.",
          solution:
            "PHP backend on MySQL with per-area modules, roles and auditing; a UI built for fast keyboard-first operation.",
          result:
            "One system for the whole operation, with reports that used to be assembled by hand.",
          tech: ["PHP", "MySQL", "JavaScript", "REST", "Bootstrap"],
        },
        {
          num: "02",
          kind: "API + integrations",
          title: "Integration layer for external services",
          summary:
            "An in-house REST API connecting internal systems with providers and third-party services, normalizing data and errors.",
          problem:
            "Every integration was ad-hoc: different formats, silent failures and duplicated logic.",
          solution:
            "Versioned endpoints, payload validation, per-request logging and retries on network errors.",
          result:
            "New integrations in hours instead of days, and failures visible before a user reports them.",
          tech: ["Node.js", "Express", "REST", "MariaDB", "Git"],
        },
        {
          num: "03",
          kind: "Dashboard + data",
          title: "Near real-time operations dashboard",
          summary:
            "Control panel with key operational metrics, filters by period and branch, and data export.",
          problem:
            "Decisions were made on stale data and SQL queries requested from the tech team.",
          solution:
            "Optimized views and queries feeding a React/Next.js frontend with filters and lightweight charts.",
          result:
            "Managers check their own numbers without waiting for someone to run a query.",
          tech: ["Next.js", "React", "TypeScript", "MySQL", "Tailwind"],
        },
        {
          num: "04",
          kind: "Automation",
          title: "Automation of repetitive processes",
          summary:
            "Scheduled jobs replacing manual work: file processing, syncs and automatic notifications.",
          problem:
            "Hours a week spent copying, validating and cross-checking data between systems.",
          solution:
            "Scripts and jobs with error handling and notifications, running with no human intervention.",
          result:
            "Less manual work and fewer data-entry errors, with a full log of every run.",
          tech: ["Node.js", "PHP", "Cron", "MySQL", "APIs"],
        },
      ],
    },
  };

  var STACK = [
    {
      name: "Frontend",
      items: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind",
        "Bootstrap",
      ],
    },
    { name: "Backend", items: ["Node.js", "Express", "PHP", "REST APIs"] },
    { name: "Database", items: ["MySQL", "MariaDB", "Modelado", "Queries"] },
    {
      name: "Tools & others",
      items: ["Git", "Integraciones", "Automatización", "Debugging", "Linux"],
    },
  ];

  var NODES = [
    { l: "React", x: 0.3, y: 0.24, r: 26 },
    { l: "Next.js", x: 0.7, y: 0.16, r: 24 },
    { l: "Node", x: 0.8, y: 0.48, r: 25 },
    { l: "PHP", x: 0.18, y: 0.55, r: 23 },
    { l: "API", x: 0.5, y: 0.4, r: 31 },
    { l: "MySQL", x: 0.62, y: 0.78, r: 26 },
    { l: "Cron", x: 0.26, y: 0.84, r: 21 },
  ];
  var EDGES = [
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 5],
    [3, 5],
    [2, 5],
    [6, 5],
    [0, 1],
    [3, 6],
  ];

  var state = { lang: "es" };

  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function renderFacts(t) {
    var list = document.getElementById("factsList");
    list.innerHTML = "";
    t.facts.forEach(function (fact) {
      var row = el("div", "fact-row");
      row.appendChild(el("span", "fact-k mono", fact.k));
      row.appendChild(el("span", "fact-v", fact.v));
      list.appendChild(row);
    });
  }

  function renderSteps(t) {
    var list = document.getElementById("stepsList");
    list.innerHTML = "";
    t.steps.forEach(function (s) {
      var card = el("div", "step-card");
      var head = el("div", "step-head");
      head.appendChild(el("span", "accent-text", s.n));
      head.appendChild(el("span", "rule"));
      card.appendChild(head);
      card.appendChild(el("h3", null, s.title));
      card.appendChild(el("p", null, s.body));
      list.appendChild(card);
    });
  }

  function renderProjects(t) {
    var list = document.getElementById("projectsList");
    list.innerHTML = "";
    t.projects.forEach(function (p) {
      var article = el("article", "project-card");
      var grid = el("div", "project-grid");

      var left = el("div");
      var meta = el("div", "project-meta");
      meta.appendChild(el("span", "accent-text", p.num));
      meta.appendChild(el("span", "rule"));
      meta.appendChild(el("span", "kind", p.kind));
      left.appendChild(meta);
      left.appendChild(el("h3", null, p.title));
      left.appendChild(el("p", "project-summary", p.summary));
      var techRow = el("div", "tech-row");
      p.tech.forEach(function (tech) {
        techRow.appendChild(el("span", "tech-pill", tech));
      });
      left.appendChild(techRow);
      grid.appendChild(left);

      var right = el("div", "project-psr");
      var problem = el("div", "psr-block");
      problem.appendChild(el("div", "psr-label", t.lblProblem));
      problem.appendChild(el("div", "psr-value", p.problem));
      var solution = el("div", "psr-block");
      solution.appendChild(el("div", "psr-label", t.lblSolution));
      solution.appendChild(el("div", "psr-value", p.solution));
      var result = el("div", "psr-block result");
      result.appendChild(el("div", "psr-label", t.lblResult));
      result.appendChild(el("div", "psr-value", p.result));
      right.appendChild(problem);
      right.appendChild(solution);
      right.appendChild(result);
      grid.appendChild(right);

      article.appendChild(grid);
      list.appendChild(article);
    });
  }

  function renderStack() {
    var list = document.getElementById("stackList");
    if (list.childElementCount) return;
    STACK.forEach(function (group) {
      var card = el("div", "stack-card");
      var head = el("div", "stack-head");
      head.appendChild(el("span", "dot"));
      head.appendChild(el("span", null, group.name));
      card.appendChild(head);
      var items = el("div", "stack-items");
      group.items.forEach(function (item) {
        items.appendChild(el("span", "stack-pill", item));
      });
      card.appendChild(items);
      list.appendChild(card);
    });
  }

  function applyLang(lang) {
    state.lang = lang;
    var t = COPY[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (t[key] !== undefined) node.textContent = t[key];
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    renderFacts(t);
    renderSteps(t);
    renderProjects(t);
  }

  function setupLangToggle() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function setupReveal() {
    var sections = Array.prototype.slice.call(
      document.querySelectorAll("[data-reveal]"),
    );
    if (!("IntersectionObserver" in window)) {
      sections.forEach(function (s) {
        s.classList.add("is-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    sections.forEach(function (s) {
      io.observe(s);
    });
  }

  function hexToRgb(hex) {
    var v = hex.replace("#", "");
    return [
      parseInt(v.slice(0, 2), 16),
      parseInt(v.slice(2, 4), 16),
      parseInt(v.slice(4, 6), 16),
    ];
  }

  function setupCanvas() {
    var cv = document.getElementById("graphCanvas");
    if (!cv || !cv.getContext) return;
    var ctx = cv.getContext("2d");
    var pointer = { x: -999, y: -999 };

    window.addEventListener(
      "pointermove",
      function (ev) {
        var r = cv.getBoundingClientRect();
        pointer.x = ev.clientX - r.left;
        pointer.y = ev.clientY - r.top;
      },
      { passive: true },
    );

    var W = 0,
      H = 0,
      dpr = 1;
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      var r = cv.getBoundingClientRect();
      W = r.width;
      H = r.height;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    if ("ResizeObserver" in window) {
      new ResizeObserver(resize).observe(cv);
    } else {
      window.addEventListener("resize", resize);
    }

    var pts = NODES.map(function (n, i) {
      return Object.assign({}, n, { ph: i * 1.3 });
    });
    var rgb = hexToRgb(ACCENT);

    function alpha(a) {
      return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
    }

    function draw(ts) {
      var t = ts / 1000;
      var rect = cv.getBoundingClientRect();
      if (
        Math.abs(rect.width - W) > 0.5 ||
        Math.abs(rect.height - H) > 0.5 ||
        cv.width === 0
      )
        resize();
      if (W === 0 || H === 0) {
        requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, W, H);

      var pos = pts.map(function (p) {
        var x = p.x * W + Math.sin(t * 0.42 + p.ph) * 9;
        var y = p.y * H + Math.cos(t * 0.37 + p.ph) * 9;
        var dx = x - pointer.x,
          dy = y - pointer.y;
        var d = Math.hypot(dx, dy);
        if (d < 130 && d > 0.1) {
          var f = (1 - d / 130) * 22;
          x += (dx / d) * f;
          y += (dy / d) * f;
        }
        return { x: x, y: y, r: p.r, l: p.l };
      });

      EDGES.forEach(function (edge) {
        var p1 = pos[edge[0]],
          p2 = pos[edge[1]];
        ctx.strokeStyle = "rgba(255,255,255,.09)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        var k = (t * 0.22 + (edge[0] + edge[1]) * 0.11) % 1;
        var px = p1.x + (p2.x - p1.x) * k,
          py = p1.y + (p2.y - p1.y) * k;
        ctx.fillStyle = alpha(0.85);
        ctx.beginPath();
        ctx.arc(px, py, 1.7, 0, Math.PI * 2);
        ctx.fill();
      });

      pos.forEach(function (p, i) {
        var hot = Math.hypot(p.x - pointer.x, p.y - pointer.y) < p.r + 16;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = hot
          ? alpha(0.16)
          : i === 4
            ? alpha(0.1)
            : "rgba(255,255,255,.03)";
        ctx.fill();
        ctx.strokeStyle =
          hot || i === 4 ? alpha(0.65) : "rgba(255,255,255,.14)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = hot ? "#fff" : "rgba(231,233,238,.82)";
        ctx.font =
          "500 " +
          Math.max(10, Math.min(12, W / 34)) +
          "px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.l, p.x, p.y);
      });

      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  function setupContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;
    var statusEl = document.getElementById("formStatus");
    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var t = COPY[state.lang];

      if (!form.checkValidity()) {
        statusEl.textContent = t.formErrorValidation;
        statusEl.className = "form-status error";
        form.reportValidity();
        return;
      }

      submitBtn.disabled = true;
      statusEl.textContent = t.formSending;
      statusEl.className = "form-status pending";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
        },
      })
        .then(function (res) {
          return res
            .json()
            .catch(function () {
              return { ok: false, message: null };
            })
            .then(function (data) {
              return { ok: res.ok && data.ok, message: data.message };
            });
        })
        .then(function (result) {
          var tt = COPY[state.lang];
          if (result.ok) {
            statusEl.textContent = tt.formSuccess;
            statusEl.className = "form-status success";
            form.reset();
          } else {
            statusEl.textContent = result.message || tt.formErrorGeneric;
            statusEl.className = "form-status error";
          }
        })
        .catch(function () {
          statusEl.textContent = COPY[state.lang].formErrorGeneric;
          statusEl.className = "form-status error";
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderStack();
    applyLang(state.lang);
    setupLangToggle();
    setupReveal();
    setupCanvas();
    setupContactForm();
  });
})();
