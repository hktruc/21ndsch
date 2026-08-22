(() => {
  "use strict";

  const STORAGE_KEY = "k03-strava-os";
  const validSystems = ["android", "ios"];
  const osLabels = { android: "Android", ios: "iPhone" };
  const buttons = [...document.querySelectorAll("[data-os-choice]")];
  const panels = [...document.querySelectorAll("[data-os]")];
  const reminder = document.querySelector("#os-reminder");
  const reminderText = document.querySelector("#os-reminder-text");
  const changeOsButton = document.querySelector("#change-os");
  let currentOs = null;

  function readSavedOs() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return validSystems.includes(saved) ? saved : null;
    } catch (_) {
      return null;
    }
  }

  function saveOs(os) {
    try { localStorage.setItem(STORAGE_KEY, os); } catch (_) { /* Private mode may block storage. */ }
  }

  function setOs(os, shouldScroll = false) {
    if (!validSystems.includes(os)) return;
    currentOs = os;
    document.documentElement.dataset.os = os;

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.osChoice === os));
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.os !== os;
    });

    reminder.hidden = false;
    reminderText.textContent = `Đang xem hướng dẫn: ${osLabels[os]}`;
    saveOs(os);

    if (shouldScroll) {
      document.querySelector("#cai-app")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => setOs(button.dataset.osChoice, true));
  });

  changeOsButton?.addEventListener("click", () => {
    document.querySelector(".strava-os-chooser")?.scrollIntoView({ behavior: "smooth", block: "center" });
    const alternative = currentOs === "android" ? "ios" : "android";
    document.querySelector(`[data-os-choice="${alternative}"]`)?.focus({ preventScroll: true });
  });

  setOs(readSavedOs() || "android");

  const screenshotSlots = [...document.querySelectorAll(".screenshot-slot")];
  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxTitle = document.querySelector("#lightbox-title");

  function buildScreenshot(slot, index) {
    const { platform, file, title, caption } = slot.dataset;
    const source = `./assets/screenshots/${platform}/${file}`;
    const figure = document.createElement("figure");
    figure.className = "screenshot-card";
    figure.innerHTML = `
      <div class="screenshot-card__visual">
        <div class="screenshot-card__placeholder">
          <span>Không tải được minh họa AI ${osLabels[platform]}</span>
          <strong>${title}</strong>
          <code>${file}</code>
        </div>
        <button class="screenshot-card__image-button" type="button" aria-label="Phóng to: ${title}">
          <img alt="Minh họa AI mô phỏng: ${title}. ${caption}" width="768" height="1152" loading="lazy" decoding="async">
        </button>
      </div>
      <figcaption>
        <span>Minh họa AI · Bước ${String(index + 1).padStart(2, "0")}</span>
        <strong>${title}</strong>
        <p>${caption}</p>
      </figcaption>`;

    slot.replaceWith(figure);
    const image = figure.querySelector("img");
    const imageButton = figure.querySelector(".screenshot-card__image-button");
    const probe = new Image();

    probe.onload = () => {
      image.src = source;
      figure.classList.add("has-image");
    };
    probe.onerror = () => figure.classList.remove("has-image");
    probe.src = source;

    imageButton.addEventListener("click", () => {
      lightboxImage.src = source;
      lightboxImage.alt = image.alt;
      lightboxTitle.textContent = title;
      if (typeof lightbox.showModal === "function") lightbox.showModal();
    });
  }

  screenshotSlots.forEach(buildScreenshot);

  document.querySelector(".lightbox__close")?.addEventListener("click", () => lightbox.close());
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox?.addEventListener("close", () => {
    lightboxImage.removeAttribute("src");
  });


  const navLinks = [...document.querySelectorAll(".progress-nav a")];
  const sections = [...document.querySelectorAll("[data-progress-section]")];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;

    const step = visible.target.dataset.progressSection;
    navLinks.forEach((link) => {
      const active = link.dataset.step === step;
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "step");
        link.scrollIntoView({ block: "nearest", inline: "center" });
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, .2, .5] });

  sections.forEach((section) => observer.observe(section));
})();
