// ===== Menú móvil =====
const nav = document.getElementById("nav");
const navLinks = document.getElementById("navLinks");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  })
);

// ===== Nav al hacer scroll, enlace activo y botón "arriba" =====
const sections = document.querySelectorAll("section[id]");
const toTop = document.getElementById("toTop");

function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle("scrolled", y > 50);
  toTop.classList.toggle("show", y > 600);

  let current = "inicio";
  sections.forEach((s) => {
    if (y >= s.offsetTop - 120) current = s.id;
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + current)
  );
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
toTop.addEventListener("click", () => window.scrollTo({ top: 0 }));

// ===== Idioma (FR por defecto en el HTML, ES en este diccionario) =====
const ES = {
  "nav.home": "Inicio",
  "nav.about": "Sobre mí",
  "nav.services": "Servicios",
  "nav.skills": "Habilidades",
  "nav.projects": "Proyectos",
  "nav.resume": "Trayectoria",
  "nav.contact": "Contacto",
  "nav.cta": "Contáctame",
  "hero.hello": "Hola, soy",
  "hero.projects": "Ver proyectos",
  "hero.scroll": "Desliza",
  "cv": "Descargar CV",
  "about.kicker": "Descúbreme",
  "about.title": "Sobre mí",
  "about.p1": "Soy <strong>Salvador Filiberto Nsue Ekang Esaha</strong>, desarrollador web <strong>Full Stack</strong> formado en Desarrollo Digital en el ISTA Salé Al Jadida y actualmente estudiante de <strong>Ciberseguridad y Gobernanza de Sistemas de Información</strong>.",
  "about.p2": "Me definen la responsabilidad y un fuerte compromiso con el trabajo, tanto de forma autónoma como en equipo. Convierto mi pasión por la tecnología en un servicio: construir soluciones útiles, bien hechas y honestas. Mi principio de trabajo es sencillo: <em>aprender de todo y de todos</em>.",
  "about.name": "Nombre:",
  "about.location": "Ubicación:",
  "about.locationVal": "Salé, Marruecos",
  "about.email": "Email:",
  "about.whatsapp": "WhatsApp:",
  "about.languages": "Idiomas:",
  "about.languagesVal": "Español (nativo), Francés (B2), Inglés (intermedio)",
  "about.availability": "Disponibilidad:",
  "about.availabilityVal": "Prácticas remuneradas y media jornada",
  "services.kicker": "Qué hago",
  "services.title": "Mis servicios",
  "services.s1.t": "Desarrollo Full Stack",
  "services.s1.d": "Aplicaciones web completas con React en el frontend y Laravel en el backend, de la idea al despliegue.",
  "services.s2.t": "Backend y APIs",
  "services.s2.d": "APIs REST seguras con PHP/Laravel y Python: autenticación, roles, control de acceso y lógica de negocio.",
  "services.s3.t": "Interfaces web",
  "services.s3.d": "Interfaces modernas, responsive y accesibles con HTML, CSS, JavaScript y React.",
  "services.s4.t": "Bases de datos",
  "services.s4.d": "Modelado y gestión de datos en SQL (MySQL) y NoSQL (MongoDB), orientado a rendimiento e integridad.",
  "services.s5.t": "Seguridad y gobernanza",
  "services.s5.d": "Buenas prácticas de ciberseguridad y gobernanza de SI aplicadas al desarrollo: aislamiento de datos y mínimo privilegio.",
  "services.s6.t": "Análisis y gestión ágil",
  "services.s6.d": "Análisis y diseño con UML, trabajo con metodología Scrum y análisis de datos con Excel avanzado.",
  "skills.kicker": "Lo que domino",
  "skills.title": "Habilidades",
  "skills.h": "Tecnologías con las que construyo cada día",
  "skills.p": "Trabajo en todo el stack: desde la interfaz hasta la base de datos, aplicando buenas prácticas de seguridad y una metodología de trabajo ordenada.",
  "lvl.adv": "Avanzado",
  "lvl.mid": "Intermedio",
  "projects.kicker": "Mi trabajo",
  "projects.title": "Proyectos destacados",
  "badge.final": "Proyecto final",
  "badge.prod": "En producción",
  "badge.mobile": "App móvil",
  "badge.research": "Investigación",
  "access": "Solicitar acceso",
  "site": "Web",
  "projects.p1": "Sistema multi-organización para centros de apoyo escolar: alumnos, tutores, profesores, grupos, sesiones, asistencia y pagos. Datos totalmente aislados por centro y control de acceso por roles.",
  "projects.t2": "Refuerzo Élite · Web",
  "projects.p2": "Plataforma para un centro de refuerzo escolar con web informativa e interfaz de administración para gestionar y modificar sus datos de forma sencilla y moderna.",
  "projects.p3": "Conversor de divisas rápido y minimalista (MAD, EUR, USD, GBP, XAF) con tasas en tiempo real, modo sin conexión y modo oscuro automático.",
  "projects.t4": "Monolito vs Microservicios",
  "projects.p4": "Dos versiones de un e-commerce (monolítica y en microservicios) comparadas con pruebas de carga: latencia p95, peticiones/s, CPU/RAM y tasa de errores.",
  "projects.p5": "Aplicación móvil interna que centraliza la gestión de clientes, préstamos, contratos y pagos, automatizando la generación de documentos y el seguimiento de vencimientos.",
  "tech.mobile": "Móvil",
  "tech.automation": "Automatización",
  "projects.t6": "Gestor de Tareas",
  "projects.p6": "Aplicación para organizar las tareas diarias: crear, completar y eliminar tareas de forma rápida y clara.",
  "projects.note": '<i class="fa-solid fa-lock"></i> El código fuente de estos proyectos es privado. Para consultarlo o hacer un fork, pídeme autorización.',
  "projects.all": "Solicitar acceso al código",
  "resume.kicker": "Mi camino",
  "resume.title": "Educación y experiencia",
  "resume.edu": "Educación",
  "resume.exp": "Experiencia",
  "resume.ongoing": "En curso",
  "edu1.t": "Ciberseguridad y Gobernanza de Sistemas de Información",
  "edu1.place": "Universidad Ibn Tofail · Escuela Superior de Tecnología de Kenitra",
  "edu1.d": "Seguridad de la información, gestión de riesgos y gobernanza de SI.",
  "edu2.t": "Desarrollo Digital Full Stack",
  "edu2.d": "Desarrollo web frontend y backend, bases de datos, UML y metodologías ágiles.",
  "edu3.t": "Diploma de Francés B2",
  "edu3.place": "Universidad Mohammed V",
  "edu4.t": "Ciencias Económicas",
  "edu4.place": "Universidad Nacional de Guinea Ecuatorial",
  "exp1.date": "Oct. 2025 – Dic. 2025",
  "exp1.t": "Profesor de apoyo de español",
  "exp1.d": "Clases personalizadas para alumnos de todos los niveles y creación de material didáctico digital: fichas, ejercicios interactivos, audios y mini-tests.",
  "exp2.date": "May. 2025 – Ago. 2025",
  "exp2.t": "Proyecto web · Refuerzo Élite",
  "exp2.d": "Desarrollo de una plataforma web con página informativa e interfaz de administración para un centro de apoyo escolar (PHP, JavaScript, HTML, CSS).",
  "exp3.t": "Formador en Informática",
  "exp3.place": "Seminarios en español · Guinea Ecuatorial",
  "exp3.d": "Formación a usuarios principiantes e intermedios en Word, Excel, PowerPoint, gestión de archivos, navegación web y seguridad digital básica.",
  "contact.kicker": "Hablemos",
  "contact.title": "Contacto",
  "contact.p": "¿Tienes una oferta de prácticas, un trabajo a media jornada o un proyecto en mente? Escríbeme y te respondo lo antes posible.",
  "contact.email": "Email",
  "form.name": "Tu nombre",
  "form.email": "Tu email",
  "form.subject": "Asunto",
  "form.message": "Tu mensaje",
  "form.sendEmail": "Enviar por email",
  "form.sendWa": "Enviar por WhatsApp",
  "footer.role": "Desarrollador Web Full Stack",
};

const ROLES = {
  fr: ["Développeur Web Full Stack", "Étudiant en Cybersécurité", "React · Laravel · Python", "Gouvernance des Systèmes d'Information"],
  es: ["Desarrollador Web Full Stack", "Estudiante de Ciberseguridad", "React · Laravel · Python", "Gobernanza de Sistemas de Información"],
};
const GREETING = { fr: "Bonjour Salvador,", es: "Hola Salvador," };
const TITLE = {
  fr: "Salvador Filiberto Nsue Ekang Esaha | Développeur Web Full Stack",
  es: "Salvador Filiberto Nsue Ekang Esaha | Desarrollador Web Full Stack",
};

// Guardar el francés original del HTML para poder volver a él
const FR = {};
document.querySelectorAll("[data-i18n]").forEach((el) => (FR[el.dataset.i18n] = el.innerHTML));
document.querySelectorAll("[data-i18n-ph]").forEach((el) => (FR[el.dataset.i18nPh] = el.placeholder));

let lang = "fr";

function setLang(next) {
  lang = next === "es" ? "es" : "fr";
  const dict = lang === "es" ? ES : FR;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const t = dict[el.dataset.i18n];
    if (t !== undefined) el.innerHTML = t;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const t = dict[el.dataset.i18nPh];
    if (t !== undefined) el.placeholder = t;
  });
  document.documentElement.lang = lang;
  document.title = TITLE[lang];
  document.querySelectorAll(".lang__btn").forEach((b) => {
    const on = b.dataset.lang === lang;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on);
  });
  roleIdx = 0; charIdx = 0; deleting = false;
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang__btn").forEach((b) =>
  b.addEventListener("click", () => setLang(b.dataset.lang))
);

// ===== Efecto de escritura =====
const typed = document.getElementById("typed");
let roleIdx = 0, charIdx = 0, deleting = false;

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
if (saved === "es") setLang("es");

function type() {
  const roles = ROLES[lang];
  const word = roles[roleIdx];
  typed.textContent = word.slice(0, charIdx);
  if (!deleting && charIdx < word.length) { charIdx++; setTimeout(type, 70); }
  else if (!deleting) { deleting = true; setTimeout(type, 1800); }
  else if (charIdx > 0) { charIdx--; setTimeout(type, 35); }
  else { deleting = false; roleIdx = (roleIdx + 1) % roles.length; setTimeout(type, 300); }
}
type();

// ===== Animaciones al aparecer y barras de habilidades =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      entry.target.querySelectorAll(".bar").forEach((bar) => {
        bar.querySelector(".bar__fill").style.width = bar.dataset.level + "%";
      });
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===== Formulario de contacto (email o WhatsApp) =====
const form = document.getElementById("contactForm");
let via = "email";
form.querySelectorAll("button[data-via]").forEach((b) =>
  b.addEventListener("click", () => (via = b.dataset.via))
);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  const body = `${GREETING[lang]}\n\n${d.message}\n\n— ${d.name} (${d.email})`;
  if (via === "whatsapp") {
    window.open(`https://wa.me/212709184686?text=${encodeURIComponent(`*${d.subject}*\n\n${body}`)}`, "_blank");
  } else {
    window.location.href = `mailto:salvadorfiliberto6@gmail.com?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
