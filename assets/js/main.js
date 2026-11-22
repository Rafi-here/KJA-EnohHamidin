(function () {
  "use strict";

  /* ===== Tahun otomatis di footer ===== */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ===== Menu mobile ===== */
  const hamb = document.getElementById("hamb");
  const navlinks = document.getElementById("navlinks");
  if (hamb && navlinks) {
    hamb.addEventListener("click", () => navlinks.classList.toggle("open"));
  }

  /* ===== Dropdown Layanan (klik, bukan hover) ===== */
  const servicesToggle = document.getElementById("servicesToggle");
  const servicesDropdown = servicesToggle
    ? servicesToggle.closest(".dropdown")
    : null;

  if (servicesToggle && servicesDropdown) {
    // Buka/tutup dropdown saat chevron diklik
    servicesToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isActive = servicesDropdown.classList.toggle("active");
      servicesToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    });

    // Tutup saat klik di luar
    document.addEventListener("click", (e) => {
      if (!servicesDropdown.contains(e.target)) {
        servicesDropdown.classList.remove("active");
        servicesToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Tutup saat Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        servicesDropdown.classList.remove("active");
        servicesToggle.setAttribute("aria-expanded", "false");
        if (navlinks) navlinks.classList.remove("open");
      }
    });

    // Tutup menu & dropdown saat link di dalam nav diklik
    document.querySelectorAll("#navlinks a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navlinks) navlinks.classList.remove("open");
        servicesDropdown.classList.remove("active");
        servicesToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ===== Filter kategori (halaman layanan) ===== */
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (filterBtns.length) {
    const groups = document.querySelectorAll("[data-cat]");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        groups.forEach((el) => {
          el.style.display =
            filter === "all" || el.dataset.cat === filter ? "" : "none";
        });
      });
    });
  }

  /* ===== Form kontak → WhatsApp ===== */
  const leadform = document.getElementById("leadform");
  if (leadform) {
    leadform.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = (document.getElementById("fullname") || {}).value || "";
      const org = (document.getElementById("org") || {}).value || "";
      const mail = (document.getElementById("mail") || {}).value || "";
      const service = (document.getElementById("service") || {}).value || "";
      const detail = (document.getElementById("detail") || {}).value || "";

      const text =
        "*Permintaan Konsultasi / Proposal*%0A" +
        "Nama: " + encodeURIComponent(name) + "%0A" +
        "Organisasi: " + encodeURIComponent(org) + "%0A" +
        "Email: " + encodeURIComponent(mail) + "%0A" +
        "Layanan: " + encodeURIComponent(service) + "%0A" +
        "Kebutuhan: " + encodeURIComponent(detail);

      window.open("https://wa.me/6285111418264?text=" + text, "_blank");
    });
  }
})();

/* ===== Animasi masuk Process saat scroll ===== */
const processSteps = document.querySelectorAll(".process-step");
if (processSteps.length && "IntersectionObserver" in window) {
  // Matikan animasi CSS default agar dikontrol observer
  processSteps.forEach((el) => {
    el.style.animation = "none";
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition =
      "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)";
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const idx = Number(el.dataset.step || 1);
          // delay bertingkat sesuai urutan
          const delay = (idx - 1) * 90;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  processSteps.forEach((el) => io.observe(el));
}

/* ===== Animasi masuk Section About ===== */
const aboutSection = document.getElementById("about");
if (aboutSection && "IntersectionObserver" in window) {
  const targets = aboutSection.querySelectorAll(".statement, .aboutcopy h2, .aboutcopy p, .value");
  targets.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition =
      "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
    el.style.transitionDelay = (i % 6) * 70 + "ms";
  });

  const aboutIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          // gunakan requestAnimationFrame untuk memastikan transisi berjalan
          requestAnimationFrame(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          });
          aboutIO.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => aboutIO.observe(el));
}

/* ===== Animasi masuk Section Industries ===== */
const industrySection = document.getElementById("industries");
if (industrySection && "IntersectionObserver" in window) {
  const cards = industrySection.querySelectorAll(".industry");
  cards.forEach((el) => {
    el.style.animation = "none";
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition =
      "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)";
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const idx = Array.from(cards).indexOf(el);
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, idx * 80);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  cards.forEach((el) => io.observe(el));
}

/* ===== Animasi masuk Section Pricing ===== */
const pricingSection = document.getElementById("pricing");
if (pricingSection && "IntersectionObserver" in window) {
  const cards = pricingSection.querySelectorAll(".pricecard");
  cards.forEach((el) => {
    el.style.animation = "none";
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition =
      "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const idx = Number(el.dataset.index || 1);
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, (idx - 1) * 90);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  cards.forEach((el) => io.observe(el));
}

/* ===== Animasi masuk Section Insights ===== */
const insightsSection = document.getElementById("insights");
if (insightsSection && "IntersectionObserver" in window) {
  const cards = insightsSection.querySelectorAll(".article");
  cards.forEach((el) => {
    el.style.animation = "none";
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.transition =
      "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const idx = Number(el.dataset.index || 1);
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, (idx - 1) * 90);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  cards.forEach((el) => io.observe(el));
}