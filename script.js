// Renders the tech stack and the project cards from projects.js

function techBadge(name) {
  const icon = TECH_ICONS[name];
  const el = document.createElement("span");
  el.className = "tech";
  if (icon) {
    const img = document.createElement("img");
    img.src = icon;
    img.alt = "";
    img.loading = "lazy";
    const box = document.createElement("span");
    box.className = "tech__icon";
    box.appendChild(img);
    el.appendChild(box);
  }
  el.appendChild(document.createTextNode(name));
  return el;
}

function initials(name) {
  return name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function projectCard(p, i) {
  const card = document.createElement("article");
  card.className = "project";

  const bar = document.createElement("div");
  bar.className = "project__bar";
  bar.innerHTML = `<span>project_${String(i + 1).padStart(2, "0")}.exe</span><span>[-][x]</span>`;

  const body = document.createElement("div");
  body.className = "project__body";

  const head = document.createElement("div");
  head.className = "project__head";

  const logo = document.createElement("div");
  logo.className = "project__logo";
  if (p.logo) {
    const img = document.createElement("img");
    img.src = p.logo;
    img.alt = `${p.name} logo`;
    logo.appendChild(img);
  } else {
    logo.textContent = initials(p.name);
  }

  const title = document.createElement("h3");
  title.className = "project__name";
  title.textContent = p.name;

  head.append(logo, title);

  const desc = document.createElement("p");
  desc.className = "project__desc";
  desc.textContent =
    typeof p.description === "string" ? p.description : p.description[lang] || p.description.en;

  const techLabel = document.createElement("div");
  techLabel.className = "project__label";
  techLabel.textContent = "$ cat ./tech_stack";

  const techs = document.createElement("div");
  techs.className = "project__techs";
  (p.technologies || []).forEach((t) => techs.appendChild(techBadge(t)));

  body.append(head, desc, techLabel, techs);
  card.append(bar, body);

  const links = [[t("projects.code"), p.repo], [t("projects.demo"), p.demo]].filter(([, url]) => url);
  if (links.length) {
    const linkRow = document.createElement("div");
    linkRow.className = "project__links";
    links.forEach(([label, url]) => {
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = `> ${label}`;
      linkRow.appendChild(a);
    });
    body.appendChild(linkRow);
  }

  return card;
}

/* ---------- Preferences (saved in the browser) ---------- */
const root = document.documentElement;
let lang = root.lang === "es" ? "es" : "en";

function save(key, value) {
  try { localStorage.setItem(key, value); } catch (e) {}
}

function t(key) {
  return (I18N[lang] && I18N[lang][key]) ?? I18N.en[key] ?? "";
}

function markActive(button, value) {
  button.querySelectorAll("[data-value]").forEach((s) =>
    s.classList.toggle("is-active", s.dataset.value === value)
  );
}

/* ---------- Age: goes up by one every August 1st ---------- */
const BIRTH_YEAR = 2002; // 24 years old in 2026 (birthday: August 1st)

function getAge(today = new Date()) {
  const beforeBirthday = today.getMonth() < 7; // months are 0-based: 7 = August
  return today.getFullYear() - BIRTH_YEAR - (beforeBirthday ? 1 : 0);
}

/* ---------- Language ---------- */
const langToggle = document.getElementById("lang-toggle");

function applyLang() {
  root.lang = lang;
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]').content = t("meta.description");
  document.querySelectorAll("[data-i18n]").forEach(
    (el) => (el.textContent = t(el.dataset.i18n).replace("{age}", getAge()))
  );
  document.querySelectorAll("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
  document.querySelectorAll("[data-i18n-title]").forEach((el) => (el.title = t(el.dataset.i18nTitle)));
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  const list = document.getElementById("projects-list");
  list.replaceChildren(...PROJECTS.map(projectCard));
  markActive(langToggle, lang);
  langToggle.title = lang === "en" ? "Cambiar a español" : "Switch to English";
}

langToggle.addEventListener("click", () => {
  lang = lang === "en" ? "es" : "en";
  save("lang", lang);
  // shareable URL: /?lang=es for Spanish, clean URL for English
  const url = new URL(location.href);
  if (lang === "es") url.searchParams.set("lang", "es");
  else url.searchParams.delete("lang");
  history.replaceState(null, "", url);
  applyLang();
});

/* ---------- Day / night ---------- */
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  root.dataset.theme = theme;
  markActive(themeToggle, theme);
  themeToggle.title = theme === "dark" ? "Day mode / Modo día" : "Night mode / Modo noche";
}

themeToggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  save("theme", next);
  applyTheme(next);
});

/* ---------- Local time clock (Buenos Aires, UTC-3, no DST) ---------- */
const HOME_TZ = "America/Argentina/Buenos_Aires";
const HOME_OFFSET_MIN = -180;

function updateClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat(lang === "es" ? "es-AR" : "en-US", {
    timeZone: HOME_TZ, hour: "2-digit", minute: "2-digit", hour12: lang !== "es",
  }).format(now);
  const timeEl = document.getElementById("clock-time");
  // blinking colon, like an old digital clock
  timeEl.innerHTML = time.replace(":", '<span class="clock-colon">:</span>');
  timeEl.dateTime = now.toISOString();

  // difference with the visitor's own time zone
  const diffMin = HOME_OFFSET_MIN - -now.getTimezoneOffset();
  const h = Math.abs(diffMin) / 60;
  const hours = (Number.isInteger(h) ? h : h.toFixed(1)) + " h";
  const diffText =
    diffMin === 0 ? t("hero.clockSame") :
    diffMin > 0 ? t("hero.clockAhead").replace("{h}", hours) :
    t("hero.clockBehind").replace("{h}", hours);
  document.getElementById("clock-diff").textContent = " · " + diffText;
}

/* ---------- Init ---------- */
document.getElementById("stack").append(
  ...Object.entries(STACK).map(([group, techs]) => {
    const wrap = document.createElement("div");
    const label = document.createElement("p");
    label.className = "sub-label";
    label.textContent = `$ ls ./stack/${group}`;
    const list = document.createElement("div");
    list.className = "stack";
    list.append(...techs.map(techBadge));
    wrap.append(label, list);
    return wrap;
  })
);
document.getElementById("year").textContent = new Date().getFullYear();
applyTheme(root.dataset.theme || "dark");
applyLang();
updateClock();
setInterval(updateClock, 15000);
document.addEventListener("langchange", updateClock);
