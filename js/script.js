(() => {
  const root = document.documentElement;
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const themeButton = document.querySelector(".theme-toggle");

  let savedTheme = "";
  try { savedTheme = localStorage.getItem("portfolio-theme") || ""; } catch { /* Theme still works until this page is closed. */ }
  if (savedTheme === "dark" || savedTheme === "light") root.dataset.theme = savedTheme;

  const updateThemeLabel = () => {
    const dark = root.dataset.theme === "dark";
    themeButton.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    document.querySelector('meta[name="theme-color"]').content = dark ? "#101a16" : "#f5f6f1";
  };
  updateThemeLabel();
  themeButton.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("portfolio-theme", root.dataset.theme); } catch { /* Theme still works until this page is closed. */ }
    updateThemeLabel();
  });

  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    navLinks.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };
  menuButton.addEventListener("click", () => {
    const opening = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(opening));
    menuButton.setAttribute("aria-label", opening ? "Close navigation menu" : "Open navigation menu");
    navLinks.classList.toggle("is-open", opening);
    document.body.classList.toggle("menu-open", opening);
  });
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

  const grid = document.querySelector("#project-grid");
  const projects = Array.isArray(window.portfolioProjects) ? window.portfolioProjects : [];
  const safeExternalLink = (value) => {
    try { const url = new URL(value); return url.protocol === "https:" || url.protocol === "http:" ? url.href : ""; }
    catch { return ""; }
  };
  grid.innerHTML = projects.map((project, index) => {
    const tags = project.technologies.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
    const github = safeExternalLink(project.github);
    const demo = safeExternalLink(project.demo);
    const links = [github && `<a href="${github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`, demo && `<a href="${demo}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>`].filter(Boolean).join("");
    return `<article class="project-card reveal"><div class="project-card-top"><span class="project-number">0${index + 1}</span><span class="project-category">${escapeHtml(project.category)}</span></div><h3>${escapeHtml(project.title)}</h3><p class="project-description">${escapeHtml(project.description)}</p><div class="tag-row">${tags}</div><div class="project-card-bottom"><span>${escapeHtml(project.status)}</span>${links ? `<div class="project-links">${links}</div>` : ""}</div></article>`;
  }).join("");

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
  }

  document.querySelector("#year").textContent = new Date().getFullYear();
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); currentObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }
})();
