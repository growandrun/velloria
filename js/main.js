/* VELLORIA — landing page interactions */
(function () {
  "use strict";

  /* Header scroll state ---------------------------------------------------- */
  var header = document.getElementById("header");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile drawer ----------------------------------------------------------- */
  var burger = document.getElementById("burger");
  var drawer = document.getElementById("drawer");
  var drawerClose = document.getElementById("drawerClose");
  var drawerScrim = document.getElementById("drawerScrim");

  function setDrawer(open) {
    drawer.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) drawerClose.focus();
    else burger.focus();
  }
  burger.addEventListener("click", function () { setDrawer(true); });
  drawerClose.addEventListener("click", function () { setDrawer(false); });
  drawerScrim.addEventListener("click", function () { setDrawer(false); });
  drawer.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setDrawer(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) setDrawer(false);
  });

  /* Reveal on scroll --------------------------------------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* eBay outbound links ------------------------------------------------------- */
  var cfg = window.VELLORIA_EBAY || {};
  var fallback = cfg.fallbackSearch || "https://www.ebay.com/";
  document.querySelectorAll("[data-ebay]").forEach(function (a) {
    var key = a.dataset.ebay;
    var url = (cfg[key] && cfg[key].trim()) || fallback;
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });

  /* Toast (used by newsletter form) ------------------------------------------ */
  var toast = document.getElementById("toast");
  var toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-visible"); }, 3200);
  }

  /* Newsletter (demo) -------------------------------------------------------- */
  var form = document.getElementById("joinForm");
  var success = document.getElementById("joinSuccess");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.email.value.trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!valid) {
        form.email.focus();
        showToast(form.dataset.msgInvalid || "Please enter a valid email address");
        return;
      }
      form.hidden = true;
      if (success) success.hidden = false;
    });
  }

  /* Footer year -------------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
