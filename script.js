/* ============================================================
   Portfolio interactions
   ============================================================ */

/* ---- Typing effect in the hero ---- */
(function typedEffect() {
  const el = document.getElementById("typed");
  if (!el) return;
  const words = [
    "web experiences.",
    "scalable systems.",
    "delightful UIs.",
    "things people love.",
  ];
  let w = 0, c = 0, deleting = false;

  function tick() {
    const word = words[w];
    el.textContent = deleting
      ? word.substring(0, c--)
      : word.substring(0, c++);

    let delay = deleting ? 55 : 110;

    if (!deleting && c === word.length + 1) {
      deleting = true;
      delay = 1600; // pause at full word
    } else if (deleting && c === 0) {
      deleting = false;
      w = (w + 1) % words.length;
      delay = 400;
    }
    setTimeout(tick, delay);
  }
  tick();
})();

/* ---- Scroll progress bar + sticky nav state ---- */
const progress = document.getElementById("scrollProgress");
const nav = document.getElementById("nav");
function onScroll() {
  const h = document.documentElement;
  const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
  if (progress) progress.style.width = (scrolled * 100).toFixed(2) + "%";
  if (nav) nav.classList.toggle("scrolled", h.scrollTop > 40);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---- Reveal on scroll ---- */
const revealEls = document.querySelectorAll(".reveal");
const revObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => revObserver.observe(el));

/* ---- Animate skill bars + count-up stats when visible ---- */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll(".skill__fill").forEach((f) => {
        f.style.width = f.dataset.level + "%";
      });
      skillObserver.unobserve(e.target);
    });
  },
  { threshold: 0.3 }
);
const skills = document.querySelector(".skills");
if (skills) skillObserver.observe(skills);

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll(".stat__num").forEach(countUp);
      statObserver.unobserve(e.target);
    });
  },
  { threshold: 0.4 }
);
const aboutCard = document.querySelector(".about__card");
if (aboutCard) statObserver.observe(aboutCard);

function countUp(el) {
  const target = +el.dataset.count;
  const dur = 1400;
  const start = performance.now();
  function frame(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target);
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---- Theme toggle (persisted) ---- */
const themeToggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
if (saved) document.documentElement.setAttribute("data-theme", saved);
themeToggle?.addEventListener("click", () => {
  const isLight =
    document.documentElement.getAttribute("data-theme") === "light";
  const next = isLight ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

/* ---- Mobile nav ---- */
const burger = document.getElementById("navBurger");
const links = document.getElementById("navLinks");
burger?.addEventListener("click", () => {
  burger.classList.toggle("open");
  links.classList.toggle("open");
});
links?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    burger.classList.remove("open");
    links.classList.remove("open");
  })
);

/* ---- Cursor glow (desktop only) ---- */
const glow = document.getElementById("cursorGlow");
if (glow && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (ev) => {
    glow.style.left = ev.clientX + "px";
    glow.style.top = ev.clientY + "px";
  });
} else if (glow) {
  glow.style.display = "none";
}

/* ---- Footer year ---- */
document.getElementById("year").textContent = new Date().getFullYear();
