document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MODO CLARO / OSCURO ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Comprobar preferencia guardada o del sistema
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  // Lógica del botón
  themeToggleBtn.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");
    if (htmlElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  });

  // --- 2. SISTEMA BILINGÜE (ES / EN) ---
  const langToggleBtn = document.getElementById("lang-toggle");
  let currentLang = "es";

  // Diccionario de traducciones
  const translations = {
    es: {
      "hero-title":
        "Desarrollador Web <br>& <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500'>Maker</span>.",
      "hero-desc":
        "Técnico en SMR cursando el Grado Superior en DAW (Desarrollo de Aplicaciones Web) en Zaragoza. Me dedico a crear software eficiente y diseño hardware funcional, uniendo el código con la fabricación digital.",
      "btn-projects": "VER_PROYECTOS",
      "section-projects": "PROYECTOS",
      "p1-title": "Calculadora de Costes 3D",
      "p1-desc":
        "Herramienta web moderna para calcular presupuestos de piezas impresas en 3D en base al peso del material y tiempo de máquina.",
      "p2-title": "Monitores de Escritorio Pasivos",
      "p2-desc":
        "Diseño paramétrico y ensamblaje de recintos acústicos trapezoidales impresos en 3D para woofers de 120mm y tweeters de 20mm.",
      "p3-title": "Gestión de BBDD Orientada a Objetos",
      "p3-desc":
        "Desarrollo backend implementando consultas OID, filtrado por criterios en NeoDatis ODB y funciones PL/SQL con manejo de excepciones.",
      "about-title": "SOBRE_MÍ",
      "about-1":
        "Mi base técnica comenzó con el grado medio de SMR y ahora sigo profundizando en el desarrollo de software a través del DAW. Me gusta entender cómo funcionan las cosas desde la infraestructura hasta el frontend.",
      "about-2":
        'Fuera de la programación, dedico mucho tiempo al diseño 3D y la investigación de materiales de impresión (como PLA, PETG, ABS o ASA). Además, soy guitarrista en "descovertura", una banda de covers de rock, donde configuro mis propios presets y pedaleras.',
      "footer-text": "© 2026 // Construido desde cero.",
    },
    en: {
      "hero-title":
        "Web Developer <br>& <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500'>Maker</span>.",
      "hero-desc":
        "IT Systems Technician (SMR) currently studying a Higher Degree in Web App Development (DAW) in Zaragoza. I build efficient software and functional hardware, bridging the gap between code and digital fabrication.",
      "btn-projects": "VIEW_PROJECTS",
      "section-projects": "PROJECTS",
      "p1-title": "3D Print Cost Calculator",
      "p1-desc":
        "Modern web tool to estimate budgets for 3D printed parts based on material weight and machine time.",
      "p2-title": "Passive Desktop Monitors",
      "p2-desc":
        "Parametric design and assembly of 3D printed trapezoidal acoustic enclosures for 120mm woofers and 20mm tweeters.",
      "p3-title": "Object-Oriented DB Management",
      "p3-desc":
        "Backend development implementing OID queries, criteria filtering in NeoDatis ODB, and PL/SQL functions with exception handling.",
      "about-title": "ABOUT_ME",
      "about-1":
        "My technical foundation started with an SMR degree, and I am now diving deeper into software development through DAW. I enjoy understanding how things work from infrastructure to the frontend.",
      "about-2":
        'Outside of programming, I spend a lot of time on 3D design and researching printing materials (like PLA, PETG, ABS, or ASA). Additionally, I play guitar in "descovertura", a rock cover band, where I configure my own presets and pedalboards.',
      "footer-text": "© 2026 // Built from scratch.",
    },
  };

  // Lógica para cambiar textos
  langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    langToggleBtn.textContent = currentLang === "es" ? "EN" : "ES"; // El botón muestra el idioma al que puedes cambiar

    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[currentLang][key]) {
        element.innerHTML = translations[currentLang][key];
      }
    });
  });
});
