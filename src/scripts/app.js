/* ============================================================
   Sergi Sagrera — Portfolio · app.js
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);

  // resolve a project screenshot path to a bundled blob URL when running standalone
  function resolveShot(path) {
    if (!path) return path;
    const map = {
      "assets/shot-marta.png": "shotMarta",
      "assets/shot-decowood.png": "shotDecowood",
      "assets/shot-tavola.png": "shotTavola",
      "assets/shot-acf.png": "shotAcf"
    };
    if (window.__resources) {
      const id = map[path];
      if (id && window.__resources[id]) return window.__resources[id];
    }
    return path;
  }

  // mark JS active so reveal/hidden states only apply with JS (content visible otherwise)
  document.documentElement.classList.add("js");
  // safety net: if rendering was throttled/backgrounded, re-check reveals when shown
  document.addEventListener("visibilitychange", () => { if (!document.hidden) revealVisible(); });

  /* ---------- THEME ---------- */
  const html = document.documentElement;
  const themeBtn = $("#themeBtn");
  const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8"/></svg>';
  const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 14.5A8 8 0 119.5 4a6.5 6.5 0 0010.5 10.5z"/></svg>';
  let userPickedTheme = false;
  function setTheme(t, fromUser) {
    html.setAttribute("data-theme", t);
    if (themeBtn) themeBtn.innerHTML = t === "dark" ? SUN : MOON;
    if (fromUser) {
      userPickedTheme = true;
      try { localStorage.setItem("ss-theme", t); } catch (e) {}
    }
  }
  // 1) saved preference  2) system preference (prefers-color-scheme)  3) dark
  const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  let savedTheme = null;
  try { savedTheme = localStorage.getItem("ss-theme"); } catch (e) {}
  if (savedTheme) { userPickedTheme = true; }
  setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));
  // follow the OS theme live while the user hasn't manually overridden it
  if (window.matchMedia) {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e) => { if (!userPickedTheme) setTheme(e.matches ? "dark" : "light"); };
    if (mql.addEventListener) mql.addEventListener("change", onSystemChange);
    else if (mql.addListener) mql.addListener(onSystemChange);
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", () =>
      setTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark", true)
    );
  }

  /* ---------- LANGUAGE / i18n ---------- */
  let lang = "es";
  try { lang = localStorage.getItem("ss-lang") || "es"; } catch (e) {}
  if (!window.I18N[lang]) lang = "es";

  function renderDynamic(t) {
    // marquee
    const mq = $("#marquee");
    if (mq) {
      const items = t.marquee.map(x => `<span class="marquee-item">${x}</span>`).join("");
      mq.innerHTML = items + items; // duplicate for seamless loop
    }
    // stats
    const stats = $("#stats");
    if (stats) {
      stats.innerHTML = t.about.stats.map(s =>
        `<div class="stat"><span class="n" data-count="${s.n}">${s.n}</span><span class="l">${s.l}</span></div>`
      ).join("");
    }
    // timeline
    const tl = $("#timeline");
    if (tl) {
      const fixed = '<div class="tl-line"></div><div class="tl-progress" id="tlProgress"></div>';
      tl.innerHTML = fixed + t.experience.items.map(it => `
        <div class="tl-item reveal${it.current ? " cur" : ""}">
          <span class="tl-dot"></span>
          <div class="tl-head">
            <span class="tl-role">${it.role}</span>
            <span class="tl-period">${it.period}</span>
          </div>
          <span class="tl-company">${it.company}</span>
          <p class="tl-desc">${it.desc}</p>
        </div>`).join("");
    }
    // projects
    const pl = $("#projects-list");
    if (pl) {
      pl.innerHTML = t.projects.items.map((p, i) => {
        const links = [];
        if (p.url) links.push(`<a class="plink primary" href="${p.url}" target="_blank" rel="noopener" data-magnet>${t.projects.view}<span class="arr">↗</span></a>`);
        if (p.code) links.push(`<a class="plink" href="${p.code}" target="_blank" rel="noopener" data-magnet>${t.projects.code}<span class="arr">↗</span></a>`);
        // url bar label
        const domain = p.url ? p.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : (p.code ? "github.com" : "");
        // media: long screenshot (scroll on hover) if `shot` provided, else placeholder
        const shotSrc = resolveShot(p.shot);
        const shot = p.shot
          ? `<img class="scrollable" src="${shotSrc}" alt="${p.name}" loading="lazy" onload="this.closest('.proj-shot').style.setProperty('--shot-h', this.closest('.proj-shot').clientHeight + 'px')" />`
          : `<div class="ph"><span>${p.img}</span></div>`;
        return `
        <article class="proj-item reveal">
          <div class="proj-media">
            <div class="browser-bar">
              <div class="browser-dots"><span></span><span></span><span></span></div>
              <div class="browser-url"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>${domain}</div>
            </div>
            <div class="proj-shot"><span class="proj-num">0${i + 1}</span>${shot}</div>
          </div>
          <div class="proj-info">
            <div class="kind"><span>${p.kind}</span><span class="yr">${p.year}</span></div>
            <h3 class="proj-name">${p.name}</h3>
            <p class="proj-desc">${p.desc}</p>
            <div class="tags">${p.tags.map(x => `<span class="tag">${x}</span>`).join("")}</div>
            <div class="proj-links">${links.join("")}</div>
          </div>
        </article>`;
      }).join("");
    }
    // stack
    const sg = $("#stack-groups");
    if (sg) {
      sg.innerHTML = t.stack.groups.map(g => `
        <div class="stack-row reveal">
          <h3>${g.title}</h3>
          <div class="chips">${g.items.map(x => `<span class="chip">${x}</span>`).join("")}</div>
        </div>`).join("");
    }
  }

  function applyLang(l) {
    lang = l;
    const t = window.I18N[l];
    html.setAttribute("lang", l);
    try { localStorage.setItem("ss-lang", l); } catch (e) {}
    // static text nodes
    $$("[data-i18n]").forEach(el => {
      const val = get(t, el.getAttribute("data-i18n"));
      if (val == null) return;
      // preserve trailing cursor-bar in hero line3
      const bar = el.querySelector(".cursor-bar");
      el.textContent = val;
      if (bar) el.appendChild(bar);
    });
    renderDynamic(t);
    // re-bind things that depend on regenerated DOM
    bindMagnets();
    observeReveals();
    initTimelineProgress();
    // mark active lang button
    $$("#lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === l));
    // make already-visible sections reveal immediately (avoid blank after re-render)
    requestAnimationFrame(() => revealVisible());
  }

  $$("#lang button").forEach(b =>
    b.addEventListener("click", () => applyLang(b.dataset.lang))
  );

  /* ---------- REVEAL ON SCROLL ---------- */
  let revealObserver;
  function observeReveals() {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          if (e.target.querySelector("[data-count]") || e.target.hasAttribute("data-count")) countUp(e.target);
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    $$(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
  }
  function revealVisible() {
    const vh = window.innerHeight;
    $$(".reveal:not(.in)").forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92) { el.classList.add("in"); countUp(el); }
    });
  }

  /* ---------- COUNT UP ---------- */
  function countUp(scope) {
    $$("[data-count]", scope).forEach(el => {
      if (el.dataset.done) return;
      const raw = el.dataset.count;
      const m = raw.match(/(\d+)/);
      if (!m) return;
      el.dataset.done = "1";
      const target = parseInt(m[1], 10);
      const suffix = raw.replace(m[1], "");
      let cur = 0;
      const step = Math.max(1, Math.round(target / 28));
      const tick = () => {
        cur += step;
        if (cur >= target) { el.textContent = raw; return; }
        el.textContent = cur + (suffix.includes("+") ? "" : suffix);
        requestAnimationFrame(tick);
      };
      tick();
    });
  }

  /* ---------- TIMELINE PROGRESS ---------- */
  function initTimelineProgress() {
    const tl = $("#timeline");
    const prog = $("#tlProgress");
    if (!tl || !prog) return;
    const update = () => {
      const r = tl.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height;
      const passed = Math.min(Math.max(vh * 0.5 - r.top, 0), total);
      prog.style.height = passed + "px";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---------- MAGNETIC BUTTONS ---------- */
  let magnetEls = [];
  function bindMagnets() {
    magnetEls = $$("[data-magnet]");
  }
  function magnetMove(e) {
    if (window.matchMedia("(pointer:coarse)").matches) return;
    magnetEls.forEach(el => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const dx = e.clientX - cx, dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const radius = 90;
      if (dist < radius) {
        el.style.transform = `translate(${dx * 0.28}px, ${dy * 0.28}px)`;
      } else if (el.style.transform) {
        el.style.transform = "";
      }
    });
  }

  /* ---------- CUSTOM CURSOR ---------- */
  const cursor = $("#cursor");
  function cursorMove(e) {
    if (!cursor) return;
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
  document.addEventListener("mouseover", e => {
    if (cursor && e.target.closest("a, button, [data-magnet], .chip")) cursor.classList.add("big");
  });
  document.addEventListener("mouseout", e => {
    if (cursor && e.target.closest("a, button, [data-magnet], .chip")) cursor.classList.remove("big");
  });

  /* ---------- HERO GLOW FOLLOW ---------- */
  const glow = $("#heroGlow");
  const hero = $("#hero");
  if (hero && glow) {
    hero.addEventListener("pointermove", e => {
      const r = hero.getBoundingClientRect();
      glow.style.left = (e.clientX - r.left) + "px";
      glow.style.top = (e.clientY - r.top) + "px";
      glow.style.opacity = "1";
    });
    hero.addEventListener("pointerleave", () => { glow.style.opacity = ".5"; });
    // initial position
    glow.style.left = "50%"; glow.style.top = "45%"; glow.style.opacity = ".5";
  }

  document.addEventListener("mousemove", e => { cursorMove(e); magnetMove(e); }, { passive: true });

  /* ---------- NAV SCROLL STATE + PROGRESS ---------- */
  const nav = $("#nav");
  const progress = $("#progress");
  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("scrolled", y > 30);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- BURGER ---------- */
  const burger = $("#burger");
  const navlinks = $("#navlinks");
  if (burger && navlinks) {
    burger.addEventListener("click", () => navlinks.classList.toggle("open"));
    $$("#navlinks a").forEach(a => a.addEventListener("click", () => navlinks.classList.remove("open")));
  }

  /* ---------- TO TOP ---------- */
  const toTop = $("#toTop");
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- YEAR ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- HERO TYPEWRITER ---------- */
  function typeHero() {
    const l1 = $(".hero .linewrap:nth-child(1) .line");
    const em = $(".hero em");
    const bar = $(".hero .cursor-bar");
    if (!l1 || !em || !bar) return;
    const t1 = "Sergi", t2 = "Sagrera";
    // respect reduced motion: show full name, no animation
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      l1.textContent = t1;
      em.textContent = t2;
      em.appendChild(bar);
      return;
    }
    // disable the slide-in so the typing reads cleanly
    l1.style.animation = "none";
    const line2 = em.closest(".line");
    if (line2) line2.style.animation = "none";
    // reset and start with the caret on the first line
    l1.textContent = "";
    em.textContent = "";
    l1.appendChild(bar);
    const speed = 75;          // ms per letter (rápido pero visible)
    const pauseBetween = 130;  // pequeña pausa al saltar a la 2ª línea
    let i = 0, j = -1;
    function step() {
      if (i < t1.length) {
        l1.insertBefore(document.createTextNode(t1[i++]), bar);
        setTimeout(step, speed);
      } else if (j < 0) {
        em.appendChild(bar); // mueve el caret a la línea 2 (acento)
        j = 0;
        setTimeout(step, pauseBetween);
      } else if (j < t2.length) {
        em.insertBefore(document.createTextNode(t2[j++]), bar);
        setTimeout(step, speed);
      }
    }
    setTimeout(step, 300); // breve espera tras cargar
  }

  /* ---------- INIT ---------- */
  applyLang(lang);
  onScroll();
  requestAnimationFrame(() => document.body.classList.add("loaded"));
  setTimeout(revealVisible, 200);
  typeHero();
})();
