/* ============================================================
   Sergi Sagrera — Portfolio
   Contenido trilingüe (ES / CA / EN) + datos estructurados
   ============================================================ */

window.I18N = {
  es: {
    nav: { about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", stack: "Stack", contact: "Contacto" },
    hero: {
      status: "Barcelona · +5 años",
      role: "Full-stack Developer",
      line1: "Webs que",
      line2: "rinden,",
      line3: "no solo lucen.",
      tagline: "Desarrollador full-stack de Barcelona. Creo aplicaciones web a medida y optimizo tiendas online, del front-end a la lógica interna.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Sobre mí",
      scroll: "Desliza"
    },
    marquee: ["Full-stack", "PHP", "Laravel", "Astro", "Vue.js", "JavaScript", "SQL", "PrestaShop", "WordPress", "SEO técnico", "E-commerce"],
    about: {
      label: "Sobre mí",
      heading: "Del diseño visual a la lógica interna — sitios web completos, de principio a fin.",
      p1: "Construyo sitios web completos, desde el front-end hasta el back-end, con tecnologías como PHP, Laravel, Astro, JavaScript y SQL.",
      p2: "Me especializo en soluciones a medida y en la optimización de tiendas online, con una sólida experiencia en PrestaShop y WordPress: proyectos que no solo funcionan, sino que generan resultados.",
      p3: "Además domino la integración de herramientas de marketing digital —Google Analytics, Tag Manager, Google Ads— para que cada web esté lista para el análisis de datos y la optimización de campañas.",
      stats: [
        { n: "5+", l: "Años de experiencia" },
        { n: "4", l: "Proyectos destacados" },
        { n: "10+", l: "Tecnologías" }
      ],
      portraitNote: "retrato / foto Sergi"
    },
    experience: {
      label: "Experiencia",
      heading: "Trayectoria",
      present: "Actualidad",
      items: [
        { role: "Web Development Lead", company: "DECOWOOD®", period: "Ene 2026 — Actualidad", current: true, desc: "Desarrollo y mantenimiento full-stack de la web, nuevas funcionalidades y adaptación de templates. Gestión técnica del SEO on-page: estructura, rendimiento y buenas prácticas. Coordinación de tareas web en el equipo de IT y soporte a marketing, logística y atención al cliente." },
        { role: "Web Developer Specialist", company: "DECOWOOD®", period: "Abr 2024 — Ene 2026", desc: "Maquetación y desarrollo responsive adaptando diseños a cualquier dispositivo. Optimización de rendimiento y SEO técnico. Integración de analítica y publicidad: Google Analytics, Ads, Tag Manager y Meta Ads." },
        { role: "Programador Full Stack", company: "DECOWOOD®", period: "Jun 2021 — Abr 2024", desc: "Desarrollo y mantenimiento de plataformas web y aplicaciones internas. Gestión de analítica web y datos para campañas de marketing digital. Soporte técnico de la infraestructura informática." },
        { role: "Programador Web", company: "Sweet Messages", period: "Jun 2021 — Actualidad", desc: "Desarrollo y mantenimiento web para una tienda online de mensajes personalizados, en jornada parcial. Bootstrap, Git, PHP y PrestaShop." },
        { role: "Programación Web", company: "FOX&SOCKS", period: "Ago 2020 — Dic 2021", desc: "Desarrollo web para e-commerce con PrestaShop, Bootstrap y Git. Funcionalidades personalizadas y mantenimiento de la plataforma." },
        { role: "Técnico Informático", company: "Marelli", period: "Feb 2019 — Jul 2019", desc: "Mantenimiento y soporte de la infraestructura informática. Hardware, redes, seguridad de sistemas y soporte a usuarios." },
        { role: "Técnico de Impresión 3D y Modelado", company: "Join3D", period: "Nov 2018 — Feb 2019", desc: "Modelado y diseño de figuras para impresión 3D. Preparación de archivos y operación de impresoras para prototipos y modelos finales." }
      ]
    },
    projects: {
      label: "Proyectos",
      heading: "Trabajo seleccionado",
      view: "Visitar web",
      code: "Ver código",
      items: [
        { name: "Marta Rodríguez Rojas", shot: "/assets/shot-marta.png", kind: "Portfolio · Artista escénica", year: "2024", desc: "Web portfolio multiidioma para una artista de escenografía, vestuario, iluminación y arte digital. Diseño limpio centrado en mostrar la obra visual.", tags: ["Diseño web", "Multiidioma", "Portfolio"], url: "https://martarodriguezrojas.com/es/", img: "Marta R. Rojas — portfolio" },
        { name: "DECOWOOD®", shot: "/assets/shot-decowood.png", kind: "E-commerce · Mobiliario & decoración", year: "2026", desc: "Desarrollo y mantenimiento full-stack de la web de DECOWOOD®, marca de mobiliario y decoración para el hogar. Nuevas funcionalidades, adaptación de templates, optimización de rendimiento y SEO técnico on-page.", tags: ["Full-stack", "SEO técnico", "Rendimiento", "E-commerce"], url: "https://decowood.com/es/", img: "DECOWOOD® — web" },
        { name: "Tavola", shot: "/assets/shot-tavola.png", kind: "E-commerce · Floristería & Decoración", year: "2025", desc: "Tienda online de floristería y decoración en Barcelona. Catálogo de ramos, centros de mesa, plantas y talleres, con desarrollo responsive y SEO técnico para mejorar el posicionamiento.", tags: ["PrestaShop", "PHP", "Responsive", "SEO"], url: "https://tavola.es", img: "Tavola — tienda online" },
        { name: "Advanced Custom Fields", shot: "/assets/shot-acf.png", kind: "Módulo PrestaShop · Open source", year: "2023", desc: "Módulo de PrestaShop que permite crear campos personalizados para productos, categorías y otros elementos del back-office. Construido con PHP y Vue.js.", tags: ["PHP", "Vue.js", "PrestaShop"], code: "https://github.com/SergiSM7/advancedcustomfields", img: "ACF — módulo PrestaShop" }
      ]
    },
    stack: {
      label: "Stack",
      heading: "Tecnologías",
      note: "Herramientas con las que trabajo cada día.",
      groups: [
        { title: "Lenguajes", items: ["PHP", "JavaScript", "SQL", "HTML5", "CSS3"] },
        { title: "Frameworks", items: ["Laravel", "Astro", "Vue.js", "Bootstrap"] },
        { title: "CMS & E-commerce", items: ["PrestaShop", "WordPress"] },
        { title: "Marketing & Analítica", items: ["Google Analytics", "Tag Manager", "Google Ads", "Meta Ads"] },
        { title: "Herramientas", items: ["Git", "SEO técnico"] }
      ]
    },
    contact: {
      label: "Contacto",
      heading: "¿Hablamos?",
      sub: "¿Tienes dudas o quieres saber más sobre mi trabajo? Escríbeme.",
      cta: "Escríbeme",
      email: "hola@sergisagrera.com",
      based: "Barcelona, España",
      avail: ""
    },
    footer: { rights: "Todos los derechos reservados.", built: "Diseñado y desarrollado con cariño." }
  },

  ca: {
    nav: { about: "Sobre mi", experience: "Experiència", projects: "Projectes", stack: "Stack", contact: "Contacte" },
    hero: {
      status: "Barcelona · +5 anys",
      role: "Full-stack Developer",
      line1: "Webs que",
      line2: "rendeixen,",
      line3: "no només llueixen.",
      tagline: "Desenvolupador full-stack de Barcelona. Creo aplicacions web a mida i optimitzo botigues online, del front-end a la lògica interna.",
      ctaPrimary: "Veure projectes",
      ctaSecondary: "Sobre mi",
      scroll: "Llisca"
    },
    marquee: ["Full-stack", "PHP", "Laravel", "Astro", "Vue.js", "JavaScript", "SQL", "PrestaShop", "WordPress", "SEO tècnic", "E-commerce"],
    about: {
      label: "Sobre mi",
      heading: "Del disseny visual a la lògica interna — webs completes, de principi a fi.",
      p1: "Construeixo webs completes, des del front-end fins al back-end, amb tecnologies com PHP, Laravel, Astro, JavaScript i SQL.",
      p2: "M'especialitzo en solucions a mida i en l'optimització de botigues online, amb una sòlida experiència en PrestaShop i WordPress: projectes que no només funcionen, sinó que generen resultats.",
      p3: "A més domino la integració d'eines de màrqueting digital —Google Analytics, Tag Manager, Google Ads— perquè cada web estigui preparada per a l'anàlisi de dades i l'optimització de campanyes.",
      stats: [
        { n: "5+", l: "Anys d'experiència" },
        { n: "4", l: "Projectes destacats" },
        { n: "10+", l: "Tecnologies" }
      ],
      portraitNote: "retrat / foto Sergi"
    },
    experience: {
      label: "Experiència",
      heading: "Trajectòria",
      present: "Actualitat",
      items: [
        { role: "Web Development Lead", company: "DECOWOOD®", period: "Gen 2026 — Actualitat", current: true, desc: "Desenvolupament i manteniment full-stack del web, noves funcionalitats i adaptació de templates. Gestió tècnica del SEO on-page: estructura, rendiment i bones pràctiques. Coordinació de tasques web a l'equip d'IT i suport a màrqueting, logística i atenció al client." },
        { role: "Web Developer Specialist", company: "DECOWOOD®", period: "Abr 2024 — Gen 2026", desc: "Maquetació i desenvolupament responsive adaptant dissenys a qualsevol dispositiu. Optimització de rendiment i SEO tècnic. Integració d'analítica i publicitat: Google Analytics, Ads, Tag Manager i Meta Ads." },
        { role: "Programador Full Stack", company: "DECOWOOD®", period: "Jun 2021 — Abr 2024", desc: "Desenvolupament i manteniment de plataformes web i aplicacions internes. Gestió d'analítica web i dades per a campanyes de màrqueting digital. Suport tècnic de la infraestructura informàtica." },
        { role: "Programador Web", company: "Sweet Messages", period: "Jun 2021 — Actualitat", desc: "Desenvolupament i manteniment web per a una botiga online de missatges personalitzats, a jornada parcial. Bootstrap, Git, PHP i PrestaShop." },
        { role: "Programació Web", company: "FOX&SOCKS", period: "Ago 2020 — Des 2021", desc: "Desenvolupament web per a e-commerce amb PrestaShop, Bootstrap i Git. Funcionalitats personalitzades i manteniment de la plataforma." },
        { role: "Tècnic Informàtic", company: "Marelli", period: "Feb 2019 — Jul 2019", desc: "Manteniment i suport de la infraestructura informàtica. Maquinari, xarxes, seguretat de sistemes i suport a usuaris." },
        { role: "Tècnic d'Impressió 3D i Modelatge", company: "Join3D", period: "Nov 2018 — Feb 2019", desc: "Modelatge i disseny de figures per a impressió 3D. Preparació d'arxius i operació d'impressores per a prototips i models finals." }
      ]
    },
    projects: {
      label: "Projectes",
      heading: "Treball seleccionat",
      view: "Visitar web",
      code: "Veure codi",
      items: [
        { name: "Marta Rodríguez Rojas", shot: "/assets/shot-marta.png", kind: "Portfolio · Artista escènica", year: "2024", desc: "Web portfolio multiidioma per a una artista d'escenografia, vestuari, il·luminació i art digital. Disseny net centrat a mostrar l'obra visual.", tags: ["Disseny web", "Multiidioma", "Portfolio"], url: "https://martarodriguezrojas.com/es/", img: "Marta R. Rojas — portfolio" },
        { name: "DECOWOOD®", shot: "/assets/shot-decowood.png", kind: "E-commerce · Mobiliari & decoració", year: "2026", desc: "Desenvolupament i manteniment full-stack del web de DECOWOOD®, marca de mobiliari i decoració per a la llar. Noves funcionalitats, adaptació de templates, optimització de rendiment i SEO tècnic on-page.", tags: ["Full-stack", "SEO tècnic", "Rendiment", "E-commerce"], url: "https://decowood.com/es/", img: "DECOWOOD® — web" },
        { name: "Tavola", shot: "/assets/shot-tavola.png", kind: "E-commerce · Floristeria & Decoració", year: "2025", desc: "Botiga online de floristeria i decoració a Barcelona. Catàleg de rams, centres de taula, plantes i tallers, amb desenvolupament responsive i SEO tècnic per millorar el posicionament.", tags: ["PrestaShop", "PHP", "Responsive", "SEO"], url: "https://tavola.es", img: "Tavola — botiga online" },
        { name: "Advanced Custom Fields", shot: "/assets/shot-acf.png", kind: "Mòdul PrestaShop · Open source", year: "2023", desc: "Mòdul de PrestaShop que permet crear camps personalitzats per a productes, categories i altres elements del back-office. Construït amb PHP i Vue.js.", tags: ["PHP", "Vue.js", "PrestaShop"], code: "https://github.com/SergiSM7/advancedcustomfields", img: "ACF — mòdul PrestaShop" }
      ]
    },
    stack: {
      label: "Stack",
      heading: "Tecnologies",
      note: "Eines amb què treballo cada dia.",
      groups: [
        { title: "Llenguatges", items: ["PHP", "JavaScript", "SQL", "HTML5", "CSS3"] },
        { title: "Frameworks", items: ["Laravel", "Astro", "Vue.js", "Bootstrap"] },
        { title: "CMS & E-commerce", items: ["PrestaShop", "WordPress"] },
        { title: "Màrqueting & Analítica", items: ["Google Analytics", "Tag Manager", "Google Ads", "Meta Ads"] },
        { title: "Eines", items: ["Git", "SEO tècnic"] }
      ]
    },
    contact: {
      label: "Contacte",
      heading: "Parlem?",
      sub: "Tens dubtes o vols saber més sobre la meva feina? Escriu-me.",
      cta: "Escriu-me",
      email: "hola@sergisagrera.com",
      based: "Barcelona, Espanya",
      avail: ""
    },
    footer: { rights: "Tots els drets reservats.", built: "Dissenyat i desenvolupat amb cura." }
  },

  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", stack: "Stack", contact: "Contact" },
    hero: {
      status: "Barcelona · 5+ years",
      role: "Full-stack Developer",
      line1: "Sites that",
      line2: "perform,",
      line3: "not just shine.",
      tagline: "Full-stack developer from Barcelona. I craft custom web apps and optimize online stores — from the front-end to the inner logic.",
      ctaPrimary: "See projects",
      ctaSecondary: "About me",
      scroll: "Scroll"
    },
    marquee: ["Full-stack", "PHP", "Laravel", "Astro", "Vue.js", "JavaScript", "SQL", "PrestaShop", "WordPress", "Technical SEO", "E-commerce"],
    about: {
      label: "About",
      heading: "From visual design to inner logic — complete websites, end to end.",
      p1: "I build complete websites, from the front-end through to the back-end, with technologies like PHP, Laravel, Astro, JavaScript and SQL.",
      p2: "I specialise in tailor-made solutions and online store optimization, with solid experience in PrestaShop and WordPress: projects that don't just work, but deliver results.",
      p3: "I also handle the integration of digital marketing tools —Google Analytics, Tag Manager, Google Ads— so every website is ready for data analysis and campaign optimization.",
      stats: [
        { n: "5+", l: "Years of experience" },
        { n: "4", l: "Featured projects" },
        { n: "10+", l: "Technologies" }
      ],
      portraitNote: "portrait / photo of Sergi"
    },
    experience: {
      label: "Experience",
      heading: "Career path",
      present: "Present",
      items: [
        { role: "Web Development Lead", company: "DECOWOOD®", period: "Jan 2026 — Present", current: true, desc: "Full-stack development and maintenance of the website, new features and template adaptation. Technical on-page SEO: structure, performance and best practices. Coordinating web tasks across the IT team and supporting marketing, logistics and customer care." },
        { role: "Web Developer Specialist", company: "DECOWOOD®", period: "Apr 2024 — Jan 2026", desc: "Responsive layout and development, adapting designs to any device. Performance optimization and technical SEO. Analytics and advertising integration: Google Analytics, Ads, Tag Manager and Meta Ads." },
        { role: "Full Stack Developer", company: "DECOWOOD®", period: "Jun 2021 — Apr 2024", desc: "Development and maintenance of web platforms and internal applications. Web analytics and data management for digital marketing campaigns. Technical support of the IT infrastructure." },
        { role: "Web Developer", company: "Sweet Messages", period: "Jun 2021 — Present", desc: "Web development and maintenance for an online store of personalized messages, part-time. Bootstrap, Git, PHP and PrestaShop." },
        { role: "Web Development", company: "FOX&SOCKS", period: "Aug 2020 — Dec 2021", desc: "E-commerce web development with PrestaShop, Bootstrap and Git. Custom features and platform maintenance." },
        { role: "IT Technician", company: "Marelli", period: "Feb 2019 — Jul 2019", desc: "Maintenance and support of the IT infrastructure. Hardware, networks, systems security and user support." },
        { role: "3D Printing & Modeling Technician", company: "Join3D", period: "Nov 2018 — Feb 2019", desc: "Modeling and design of figures for 3D printing. File preparation and printer operation for prototypes and final models." }
      ]
    },
    projects: {
      label: "Projects",
      heading: "Selected work",
      view: "Visit site",
      code: "View code",
      items: [
        { name: "Marta Rodríguez Rojas", shot: "/assets/shot-marta.png", kind: "Portfolio · Stage artist", year: "2024", desc: "Multilingual portfolio website for a scenography, costume, lighting and digital-art artist. A clean design focused on showcasing the visual work.", tags: ["Web design", "Multilingual", "Portfolio"], url: "https://martarodriguezrojas.com/es/", img: "Marta R. Rojas — portfolio" },
        { name: "DECOWOOD®", shot: "/assets/shot-decowood.png", kind: "E-commerce · Furniture & home decor", year: "2026", desc: "Full-stack development and maintenance of the DECOWOOD® website, a furniture and home-decor brand. New features, template adaptation, performance optimization and technical on-page SEO.", tags: ["Full-stack", "Technical SEO", "Performance", "E-commerce"], url: "https://decowood.com/es/", img: "DECOWOOD® — site" },
        { name: "Tavola", shot: "/assets/shot-tavola.png", kind: "E-commerce · Florist & Decor", year: "2025", desc: "Online florist and home-decor store in Barcelona. A catalog of bouquets, centerpieces, plants and workshops, with responsive development and technical SEO to boost rankings.", tags: ["PrestaShop", "PHP", "Responsive", "SEO"], url: "https://tavola.es", img: "Tavola — online store" },
        { name: "Advanced Custom Fields", shot: "/assets/shot-acf.png", kind: "PrestaShop module · Open source", year: "2023", desc: "A PrestaShop module to create custom fields for products, categories and other back-office elements. Built with PHP and Vue.js.", tags: ["PHP", "Vue.js", "PrestaShop"], code: "https://github.com/SergiSM7/advancedcustomfields", img: "ACF — PrestaShop module" }
      ]
    },
    stack: {
      label: "Stack",
      heading: "Technologies",
      note: "Tools I work with every day.",
      groups: [
        { title: "Languages", items: ["PHP", "JavaScript", "SQL", "HTML5", "CSS3"] },
        { title: "Frameworks", items: ["Laravel", "Astro", "Vue.js", "Bootstrap"] },
        { title: "CMS & E-commerce", items: ["PrestaShop", "WordPress"] },
        { title: "Marketing & Analytics", items: ["Google Analytics", "Tag Manager", "Google Ads", "Meta Ads"] },
        { title: "Tools", items: ["Git", "Technical SEO"] }
      ]
    },
    contact: {
      label: "Contact",
      heading: "Let's talk",
      sub: "Curious about my work or have a question? Drop me a line.",
      cta: "Get in touch",
      email: "hola@sergisagrera.com",
      based: "Barcelona, Spain",
      avail: ""
    },
    footer: { rights: "All rights reserved.", built: "Designed and developed with care." }
  }
};
