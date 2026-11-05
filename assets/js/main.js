const NAV = [
  { href: "index.html", label: "Home" },
  { href: "health-fairs.html", label: "Health Fairs" },
  { href: "discussions.html", label: "Discussions" },
  { href: "projects.html", label: "Projects" },
  { href: "about.html", label: "About Us" },
];

let here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
if (here === "mcassist.html") here = "projects.html";
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function mailto(subject) {
  return `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}`;
}

/* ---------- header & footer ---------- */
function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const items = NAV.map((item) => {
    if (item.children) {
      const active = item.children.some((c) => c.href === here);
      return `<li class="has-menu">
        <button type="button" class="${active ? "active" : ""}" aria-haspopup="true">${item.label} ▾</button>
        <ul class="submenu">${item.children
          .map((c) => `<li><a href="${c.href}" class="${c.href === here ? "active" : ""}">${c.label}</a></li>`)
          .join("")}</ul></li>`;
    }
    return `<li><a href="${item.href}" class="${item.href === here ? "active" : ""}">${item.label}</a></li>`;
  }).join("");

  el.className = "site-header";
  el.innerHTML = `<nav class="container nav" aria-label="Main">
      <a class="nav-logo" href="index.html"><img src="assets/img/logo-cropped.png" alt="StuySIMI home"></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links">Menu</button>
      <ul class="nav-links" id="nav-links">${items}
        <li><a class="btn" style="padding:9px 18px;color:#fff" href="${mailto("Collaborating with StuySIMI")}">Collaborate</a></li>
      </ul>
    </nav>`;

  const toggle = el.querySelector(".nav-toggle");
  const links = el.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  el.querySelectorAll(".has-menu > button").forEach((b) =>
    b.addEventListener("click", () => b.parentElement.classList.toggle("open"))
  );
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".has-menu")) el.querySelectorAll(".has-menu.open").forEach((m) => m.classList.remove("open"));
  });
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const flat = NAV.flatMap((n) => n.children || [n]);
  el.className = "site-footer";
  el.innerHTML = `<div class="container footer-inner">
      <img src="assets/img/logo-cropped.png" alt="StuySIMI">
      <div class="footer-links">${flat.map((n) => `<a href="${n.href}">${n.label}</a>`).join("")}
        <a href="${mailto("Hello from the StuySIMI website")}">Contact us</a></div>
      <div>© ${new Date().getFullYear()} StuySIMI · Care that speaks your language</div>
    </div>`;
}

/* ---------- dates ---------- */
function parseDate(str) {
  if (!str) return null;
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function isPast(str) {
  const d = parseDate(str);
  if (!d) return false;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return d < today;
}
function dateChip(str) {
  const d = parseDate(str);
  if (!d) return `<div class="date-chip tbd"><div class="m">Date</div><div class="d">TBD</div></div>`;
  return `<div class="date-chip"><div class="m">${d.toLocaleString("en-US", { month: "short" })}</div><div class="d">${d.getDate()}</div></div>`;
}
const initials = (name) =>
  name.replace(/^Dr\.?\s+/, "").replace(/\(.*?\)/g, "").split(/\s+/).filter(Boolean).map((w) => w[0]).slice(0, 2).join("");

function media(image, alt, fallback) {
  return image
    ? `<img src="${esc(image)}" alt="${esc(alt)}" loading="lazy">`
    : `<span class="orbit"></span><span class="orbit g"></span>${fallback}`;
}

/* ---------- modal ---------- */
let dialog;
function openModal(html) {
  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.className = "modal";
    document.body.appendChild(dialog);
    dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  }
  dialog.innerHTML = `<button class="modal-close" aria-label="Close">×</button>${html}`;
  dialog.querySelector(".modal-close").addEventListener("click", () => dialog.close());
  dialog.showModal();
}

/* ---------- health fairs ---------- */
function fairTile(f) {
  const past = isPast(f.date);
  return `<button class="tile ${past ? "is-past" : ""}" data-fair="${f.id}" aria-haspopup="dialog">
      <div class="tile-media">
        <span class="badge ${past ? "past" : "upcoming"}">${past ? "Past" : "Upcoming"}</span>
        ${media(f.image, f.name, `<span class="placeholder">✚</span>`)}
        ${dateChip(f.date)}
      </div>
      <div class="tile-body">
        <h3>${esc(f.name)}</h3>
        <div class="tile-meta">${esc(f.location)} · ${esc(f.dateNote)}</div>
        <div class="tile-meta">With ${esc(f.partners.filter((p) => !/to be announced/i.test(p)).slice(0, 3).join(", "))}${f.partners.length > 3 ? " & more" : ""}</div>
        <div class="tile-more">View details →</div>
      </div>
    </button>`;
}

function fairModal(f) {
  const past = isPast(f.date);
  return `<div class="modal-media">${media(f.image, f.name, `<span class="placeholder">✚</span>`)}
      <span class="badge ${past ? "past" : "upcoming"}">${past ? "Past event" : "Upcoming"}</span></div>
    <div class="modal-body">
      <h2>${esc(f.name)}</h2>
      <p class="lede" style="font-size:1.05rem">${esc(f.summary)}</p>
      <dl class="detail-list">
        <dt>Date</dt><dd>${esc(f.dateNote)}</dd>
        <dt>Location</dt><dd>${esc(f.location)}</dd>
        <dt>Partners</dt><dd><ul class="partner-list">${f.partners.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></dd>
        ${f.studentRoles.length ? `<dt>Student roles</dt><dd>${f.studentRoles.map(esc).join(" · ")}</dd>` : ""}
      </dl>
      ${f.details.map((p) => `<p>${esc(p)}</p>`).join("")}
      ${past ? "" : `<div class="btn-row"><a class="btn" href="${mailto("Getting involved: " + f.name)}">Get involved</a></div>`}
    </div>`;
}

function renderFairs(targetId, opts = {}) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const list = [...FAIRS]
    .filter((f) => (opts.upcomingOnly ? !isPast(f.date) : true))
    .sort((a, b) => isPast(a.date) - isPast(b.date));
  el.innerHTML = list.map(fairTile).join("");
  el.querySelectorAll("[data-fair]").forEach((t) =>
    t.addEventListener("click", () => openModal(fairModal(FAIRS.find((f) => f.id === t.dataset.fair))))
  );
}

/* ---------- speakers ---------- */
function speakerTile(s, i) {
  const past = s.status === "past";
  const d = parseDate(s.date);
  return `<button class="tile" data-speaker="${i}" aria-haspopup="dialog">
      <div class="tile-media" style="aspect-ratio:16/9">
        <span class="badge ${past ? "past" : "upcoming"}">${past ? "Past speaker" : "Upcoming"}</span>
        <span class="orbit"></span><span class="orbit g"></span>
        <div class="avatar">${s.image ? `<img src="${esc(s.image)}" alt="${esc(s.name)}">` : esc(initials(s.name))}</div>
      </div>
      <div class="tile-body">
        <h3>${esc(s.name)}</h3>
        <div class="tile-meta">${esc(s.position)}</div>
        <div class="tags">${s.fields.map((f) => `<span class="tag">${esc(f)}</span>`).join("")}</div>
        ${d ? `<div class="tile-meta">${d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>` : ""}
        <div class="tile-more">About this speaker →</div>
      </div>
    </button>`;
}

function speakerModal(s) {
  const past = s.status === "past";
  const d = parseDate(s.date);
  return `<div class="modal-media"><span class="orbit"></span><span class="orbit g"></span>
      <div class="avatar" style="width:120px;height:120px;font-size:2.6rem">${s.image ? `<img src="${esc(s.image)}" alt="${esc(s.name)}">` : esc(initials(s.name))}</div>
      <span class="badge ${past ? "past" : "upcoming"}">${past ? "Past speaker" : "Upcoming"}</span></div>
    <div class="modal-body">
      <h2>${esc(s.name)}</h2>
      <dl class="detail-list">
        <dt>Position</dt><dd>${esc(s.position)}</dd>
        <dt>Fields</dt><dd><ul class="partner-list">${s.fields.map((f) => `<li>${esc(f)}</li>`).join("")}</ul></dd>
        <dt>Series</dt><dd>The Health + Tech Series${d ? ` · ${d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}` : past ? "" : " · Date to be announced"}</dd>
      </dl>
      ${s.blurb ? `<p>${esc(s.blurb)}</p>` : ""}
      ${past
        ? `<p class="note">Sessions aren't recorded, but we're happy to share takeaways with schools interested in hosting similar conversations.</p>
           <div class="btn-row"><a class="btn ghost" href="${mailto("Health + Tech Series: " + s.name)}">Ask about this session</a></div>`
        : `<div class="btn-row"><a class="btn" href="${mailto("Attending the Health + Tech Series: " + s.name)}">Ask about attending</a></div>`}
    </div>`;
}

function renderSpeakers(targetId, filter = "all") {
  const el = document.getElementById(targetId);
  if (!el) return;
  const list = SPEAKERS.map((s, i) => ({ s, i }))
    .filter(({ s }) => filter === "all" || s.status === filter)
    .sort((a, b) => (a.s.status === "upcoming" ? -1 : 1) - (b.s.status === "upcoming" ? -1 : 1));
  el.innerHTML = list.map(({ s, i }) => speakerTile(s, i)).join("");
  el.querySelectorAll("[data-speaker]").forEach((t) =>
    t.addEventListener("click", () => openModal(speakerModal(SPEAKERS[+t.dataset.speaker])))
  );
}

function setupSpeakerFilters(targetId) {
  document.querySelectorAll("[data-filter]").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((x) => x.setAttribute("aria-pressed", "false"));
      b.setAttribute("aria-pressed", "true");
      renderSpeakers(targetId, b.dataset.filter);
    })
  );
}

/* ---------- team ---------- */
function renderTeam(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = TEAM.map(
    (m) => `<div class="member">
      <div class="avatar">${m.image ? `<img src="${esc(m.image)}" alt="${esc(m.name)}">` : esc(initials(m.name))}</div>
      <h3>${esc(m.name)}</h3>
      <div class="role">${esc(m.role)}</div>
      ${m.bio ? `<p class="bio">${esc(m.bio)}</p>` : ""}
    </div>`
  ).join("");
}

/* ---------- collaborating schools ---------- */
function renderSchools(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = SCHOOLS.map(
    (s) => `<div class="school">
      <div class="school-logo">${s.logo ? `<img src="${esc(s.logo)}" alt="${esc(s.name)} logo">` : `<span>${esc(s.name.replace(/\b(High|School)\b/g, "").split(/[\s-]+/).filter(Boolean).map((w) => w[0]).join(""))}</span>`}</div>
      <div><div class="school-name">${esc(s.name)}</div><div class="school-loc">${esc(s.location)}</div></div>
    </div>`
  ).join("");
}

/* ---------- counts on the home page ---------- */
function renderStats() {
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set("stat-fairs", FAIRS.length);
  set("stat-speakers", SPEAKERS.filter((s) => s.status === "past").length);
  set("stat-partners", new Set(FAIRS.flatMap((f) => f.partners).filter((p) => !/to be announced/i.test(p))).size);
}

/* contact links with data-mail="subject" */
function wireMailLinks() {
  document.querySelectorAll("[data-mail]").forEach((a) => (a.href = mailto(a.dataset.mail)));
  document.querySelectorAll("[data-email-text]").forEach((e) => (e.textContent = SITE.contactEmail));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  wireMailLinks();
  renderSchools("schools");
});
