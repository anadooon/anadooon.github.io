document.addEventListener("DOMContentLoaded", () => {
  // --- 1. TEMA CLARO/OSCURO ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  themeToggleBtn.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");
    localStorage.theme = htmlElement.classList.contains("dark")
      ? "dark"
      : "light";
  });

  // --- 2. DOCK CON EFECTO DE CONTRACCIÓN Y SCROLL SPY ---
  const dockContainer = document.getElementById("dock-container");
  const dockItems = document.querySelectorAll(".dock-item");
  const indicator = document.getElementById("dock-indicator");

  function updateDockIndicator(item) {
    if (!item) return;

    // Efecto elástico: se contrae mientras se desplaza
    indicator.style.transform = `translateX(${item.offsetLeft}px) scale(0.85)`;

    // Al terminar la transición, recupera su tamaño normal
    clearTimeout(window.dockTimeout);
    window.dockTimeout = setTimeout(() => {
      indicator.style.transform = `translateX(${item.offsetLeft}px) scale(1)`;
    }, 150);

    dockItems.forEach((nav) => {
      nav.classList.remove("text-white");
      nav.classList.add("text-gray-500", "dark:text-gray-400");
    });
    item.classList.remove("text-gray-500", "dark:text-gray-400");
    item.classList.add("text-white");
  }

  dockItems.forEach((item) => {
    item.addEventListener("click", function () {
      updateDockIndicator(this);
    });
  });

  const sections = [
    document.getElementById("inicio"),
    document.getElementById("proyectos"),
    document.getElementById("sobre-mi"),
  ];

  window.addEventListener("scroll", () => {
    let currentSection = "inicio";
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      if (!section) return;
      const sectionTop = section.offsetTop - 250;

      if (scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    const activeItem = document.querySelector(
      `.dock-item[href="#${currentSection}"]`,
    );

    if (activeItem && !activeItem.classList.contains("text-white")) {
      updateDockIndicator(activeItem);
    }
  });

  if (dockItems.length > 0) {
    setTimeout(() => updateDockIndicator(dockItems[0]), 50);
  }

  // --- 3. TRADUCCIÓN ---
  const langToggleBtn = document.getElementById("lang-toggle");
  let isEnglish = false;

  langToggleBtn.addEventListener("click", () => {
    const selectElement = document.querySelector(".goog-te-combo");

    if (selectElement) {
      isEnglish = !isEnglish;
      langToggleBtn.textContent = isEnglish ? "ES" : "EN";

      selectElement.value = isEnglish ? "en" : "es";
      selectElement.dispatchEvent(new Event("change"));
    } else {
      console.warn("El widget de Google Translate aún no ha cargado.");
    }
  });
});
