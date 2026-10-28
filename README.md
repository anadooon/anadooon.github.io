# // SMR × DAW // Portfolio

> **Portfolio interactivo de alto rendimiento para desarrollador web (DAW) y técnico en sistemas y redes (SMR)** con pasión por la música, la guitarra alternativa y los acabados cromados/metálicos. Diseñado con **cero "AI slop"**, tipografía editorial distintiva, interactividad 3D física con Framer Motion y un motor de audio Web Audio API en tiempo real.

Listo para alojar en **GitHub Pages (`username.github.io` o `username.github.io/repo-name`)**.

---

## ⚡ Características Principales

### 🌐 Internacionalización Dinámica (i18n)
- **Español por defecto** (`es`) e **Inglés** (`en`).
- Selector visible y táctil en el Navbar.
- Actualización dinámica instantánea de todos los textos (Hero, Sobre mí, Arsenal técnico, Proyectos 3D, Rack de audio y Contacto) sin recargar la página.

### 🎨 Estética Dark/Goth-Cyber & Acabados Cromados
- **Tema Oscuro por defecto**: Superficies en obsidiana profunda (`#060709`), reflejos especulares de cromo líquido, bordes biselados de 1px y tipografía brutalista limpia.
- **Modo Claro alternativo**: Mantiene el ADN metálico en plata mate, peltre y contraste estricto WCAG AA/AAA.
- **Tipografía**: Jerarquía editorial con **Syne** (titulares con tracking ajustado), **Space Grotesk** (cuerpo) y **JetBrains Mono** (telemetría de sistemas).

### 🎬 Efecto 3D Flip en Tarjetas de Proyecto (Framer Motion)
- Al hacer clic en la portada de cualquier proyecto, la tarjeta **se levanta y gira en el eje Y (180°)** revelando:
  - Diagrama de especificaciones técnicas.
  - Pipeline de arquitectura de sistemas y audio.
  - Píldoras de stack tecnológico.
  - Enlaces directos a Demo en Vivo y repositorio en GitHub.
- **SoundCraft - DAW Web Synthesizer (Proyecto Destacado)**:
  - Incluye un sintetizador interactivo en miniatura en la propia tarjeta para probar notas (`C4`, `E4`, `G4`, `B4`) sintetizadas en el navegador.

### 🎸 Motor de Audio Web Audio API (Guitarist Easter Egg)
- **Rack de Efectos Virtual**: Selector de etapa de saturación (Tono Limpio / Distorsión High-Gain con emulación de amplificador a válvulas mediante `WaveShaperNode` y filtro de pantalla acústica).
- **Riffs interactivos**: Permite pulsar acordes reales afinados (Drop D, Power E, Heavy A, Lead D) con modelado de distorsión.
- **Feedback háptico**: Clics acústicos sutiles al interactuar con switches y botones.
- **Botón Mute**: Desactiva el audio en cualquier momento.

---

## 🛠️ Stack Tecnológico

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Empaquetador**: [Vite 6](https://vitejs.dev/) (con `base: './'` para compatibilidad total con GitHub Pages)
- **Estilos**: [Tailwind CSS 3](https://tailwindcss.com/) con sistema de tokens a medida
- **Animaciones**: [Framer Motion 11](https://www.framer.com/motion/) (3D perspective, springs, scroll progress, reduced motion)
- **Motor de Audio**: Web Audio API nativo del navegador
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Efectos**: Canvas-Confetti

---

## 🚀 Despliegue en GitHub Pages

Este proyecto ya incluye el workflow automatizado de GitHub Actions en [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Pasos para publicar en tu GitHub:
1. Crea un repositorio en GitHub (por ejemplo, `portfolio` o `<tu-usuario>.github.io`).
2. Sube este proyecto:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio SMR + DAW con diseño 3D flip y Web Audio"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repositorio>.git
   git push -u origin main
   ```
3. En tu repositorio de GitHub, ve a **Settings** > **Pages**.
4. En **Build and deployment** > **Source**, selecciona **GitHub Actions**.
5. ¡Listo! En menos de 2 minutos tu web estará disponible en `https://<tu-usuario>.github.io/<tu-repositorio>/`.

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar compilación local
npm run preview
```
