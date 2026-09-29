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

// ===== Efecto de escritura =====
const roles = [
  "Desarrollador Web Full Stack",
  "Estudiante de Ciberseguridad",
  "React · Laravel · Python",
  "Gobernanza de Sistemas de Información",
];
const typed = document.getElementById("typed");
let roleIdx = 0, charIdx = 0, deleting = false;

function type() {
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
  const body = `Hola Salvador,\n\n${d.message}\n\n— ${d.name} (${d.email})`;
  if (via === "whatsapp") {
    window.open(`https://wa.me/212709184686?text=${encodeURIComponent(`*${d.subject}*\n\n${body}`)}`, "_blank");
  } else {
    window.location.href = `mailto:salvadorfiliberto6@gmail.com?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
