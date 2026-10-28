export const translations = {
  es: {
    nav: {
      brandSub: 'SMR × DAW // GUITAR LAB',
      about: 'Sobre Mí',
      skills: 'Stack & Habilidades',
      projects: 'Proyectos 3D',
      contact: 'Contacto',
      soundToggle: 'Audio FX',
      statusAvailable: 'DISPONIBLE PARA PROYECTOS',
      themeToggleDark: 'Modo Oscuro',
      themeToggleLight: 'Modo Claro',
    },
    hero: {
      badge: 'PERFIL TÉCNICO SMR & DAW // GUITARRISTA',
      titleLine1: 'ARQUITECTURA DE REDES.',
      titleLine2: 'INTERFACES REACTIVAS.',
      titleLine3: 'DISTORSIÓN PURA.',
      description: 'Combinando la solidez de la administración de sistemas y redes (SMR) con el desarrollo de aplicaciones web de alto rendimiento (DAW). Pasión por la estética dark/cromo, la arquitectura de código limpia y las frecuencias de guitarra procesadas con Web Audio.',
      ctaProjects: 'Explorar Proyectos 3D',
      ctaContact: 'Iniciar Contacto',
      guitarRiffBtn: 'Tocar Riff Metálico',
      terminal: {
        title: 'smr-daw-terminal://status',
        host: 'arch-kernel-6.12 // DAW-STAGE-PROD',
        routing: '0.0.0.0/0 via 192.168.1.1 (MTU: 1500)',
        runtime: 'Vite 6 + React 18 + Web Audio Engine',
        rig: 'Drop-D Tuning / High Gain Preamp Active',
        ready: 'System integrity: 100% | Zero AI Slop'
      }
    },
    about: {
      sectionTag: '// 01. TRAYECTORIA',
      title: 'El puente entre la infraestructura y el píxel',
      p1: 'Mi camino comenzó en las entrañas de los sistemas: cables de red estructurados, configuración de switches y routers, servidores Linux y protocolos de seguridad durante mi formación en SMR (Sistemas Microinformáticos y Redes).',
      p2: 'Esa base de ingeniería de bajo nivel impulsa ahora mi formación en DAW (Desarrollo de Aplicaciones Web). No solo maqueteo componentes; entiendo cómo viajan los paquetes, cómo optimizar la latencia del renderizado y cómo crear herramientas web complejas como sintetizadores en tiempo real.',
      p3: 'Como guitarrista de estilo alternativo y estética oscura, aplico la misma disciplina rítmica y atención al detalle a mis interfaces: acabados cromados, bordes metálicos milimétricos y microinteracciones táctiles.',
      metrics: [
        { label: 'Especialización Dual', value: 'SMR + DAW', detail: 'Infraestructura & Frontend' },
        { label: 'Filosofía de Diseño', value: '0% Slop', detail: 'Personalidad Brutalista & Cromo' },
        { label: 'Audio Web', value: '24-bit / 48kHz', detail: 'Síntesis e Interacción Real' },
      ],
      timelineTitle: 'Evolución Técnica',
      timeline: [
        {
          period: 'Fase 1 // Base',
          title: 'Técnico en Sistemas Microinformáticos y Redes (SMR)',
          desc: 'Arquitectura de hardware, despliegue de redes LAN/VLAN, administración de servidores Debian/RedHat, scripting Bash y seguridad perimetral.'
        },
        {
          period: 'Fase 2 // Presente',
          title: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
          desc: 'Ingeniería frontend moderna con React, TypeScript, APIs RESTful, gestión de estado y experiencias interactivas avanzadas con Web Audio API.'
        },
        {
          period: 'Fase 3 // ADN Creativo',
          title: 'Guitarra Alternativa & Audio Experimental',
          desc: 'Modelado de efectos analógicos llevados a la web: pedales de distorsión, secuenciadores polifónicos y feedback loops interactivos.'
        }
      ]
    },
    skills: {
      sectionTag: '// 02. ARSENAL TECNOLÓGICO',
      title: 'Habilidades & Herramientas de Precisión',
      subtitle: 'Pasa el cursor sobre cada nodo para activar el reflejo metálico.',
      categories: [
        {
          title: 'Sistemas & Redes (SMR)',
          icon: 'server',
          items: [
            { name: 'Linux / Debian / Arch', level: 'Avanzado', tag: 'OS', details: 'Shell scripting, systemd, gestión de permisos y servicios.' },
            { name: 'Redes TCP/IP & VLANs', level: 'Avanzado', tag: 'Net', details: 'Subnetting, routing estático, DNS/DHCP, Wireshark packet analysis.' },
            { name: 'Virtualización & Docker', level: 'Intermedio', tag: 'Infra', details: 'Contenedores aislados, Proxmox VE, redes virtuales.' },
            { name: 'Seguridad & Firewalls', level: 'Intermedio', tag: 'Sec', details: 'iptables, UFW, análisis de vulnerabilidades y hardening.' },
          ]
        },
        {
          title: 'Desarrollo Web Moderno (DAW)',
          icon: 'code',
          items: [
            { name: 'React & TypeScript', level: 'Avanzado', tag: 'Frontend', details: 'Componentes tipados, custom hooks, render performance y context.' },
            { name: 'Tailwind CSS & Estilos', level: 'Avanzado', tag: 'UI', details: 'Tokens a medida, dark/light themes, diseño responsivo estricto.' },
            { name: 'Framer Motion', level: 'Avanzado', tag: 'Motion', details: 'Choreography, animaciones 3D, physics springs y accesibilidad.' },
            { name: 'Git & GitHub Pages', level: 'Avanzado', tag: 'DevOps', details: 'CI/CD workflows, branching estructurado y despliegues estáticos.' },
          ]
        },
        {
          title: 'Audio Web & Diseño Sensorial',
          icon: 'disc',
          items: [
            { name: 'Web Audio API', level: 'Avanzado', tag: 'Audio', details: 'Osciladores, nodos biquad, wave shapers de distorsión y gain graphs.' },
            { name: 'UX Sonora & Háptica', level: 'Avanzado', tag: 'Design', details: 'Microinteracciones con retroalimentación acústica calculada.' },
            { name: 'Estética Chrome / Goth', level: 'Nativo', tag: 'Style', details: 'Bordes pulidos 1px, superficies obsidiana, tipografía con carácter.' },
            { name: 'Accesibilidad WCAG AA', level: 'Riguroso', tag: 'A11y', details: 'Ratios de contraste contrastados, navegación por teclado y reduced-motion.' },
          ]
        }
      ]
    },
    projects: {
      sectionTag: '// 03. LAB DE PROYECTOS INTERACTIVOS',
      title: 'Tarjetas 3D // Haz clic para voltear',
      subtitle: 'Cada tarjeta está construida con un motor 3D interactivo en el eje Y. Haz clic en el frontal para inspeccionar los detalles de arquitectura y tecnologías en el reverso.',
      clickToFlipFront: 'Haz clic para ver arquitectura 3D ↺',
      clickToFlipBack: 'Haz clic para volver al frontal ↻',
      liveDemo: 'Demo en Vivo',
      viewCode: 'Código en GitHub',
      testSynth: 'Probar Sintetizador',
      techTitle: 'Stack Tecnológico:',
      soundCraft: {
        title: 'SoundCraft - DAW Web Synthesizer',
        category: 'AUDIO WEB // REACT // FRAMER MOTION',
        year: '2025 - Presente',
        frontBadge: 'PROYECTO DESTACADO',
        frontDescription: 'Sintetizador y secuenciador de audio interactivo construido en el navegador con interfaz oscura/cromada inspirada en los racks analógicos y pedales de guitarra.',
        frontHighlights: ['Síntesis sustractiva en tiempo real', 'Efecto de distorsión waveshaper', 'Visualizador de espectro FFT'],
        backTitle: 'Especificaciones Técnicas & Arquitectura',
        backDescription: 'Aplicación web desarrollada con Web Audio API y React que permite crear bucles de guitarra y secuencias de ritmos. Proyecto creado para aplicar conceptos avanzados de DAW y maquetación interactiva con acabados metálicos y baja latencia de procesamiento de señal.',
        backArchitectureTitle: 'Pipeline de Audio:',
        backArchitectureNotes: [
          'OscillatorNode (Saw / Square / Sine) con control de detune fino',
          'WaveShaperNode para recrear la saturación de amplificador a válvulas',
          'BiquadFilterNode de 4 polos con envolvente ADSR modulada por state',
          'Framer Motion en las perillas virtuales para feedback táctil instantáneo'
        ],
        technologies: ['React 18', 'TypeScript', 'Web Audio API', 'Tailwind CSS', 'Framer Motion'],
        githubUrl: 'https://github.com',
        demoUrl: 'https://github.io'
      },
      netPulse: {
        title: 'NetPulse - Topology & Packet Inspector',
        category: 'SMR ARCHITECTURE // NETWORKING // CANVAS',
        year: '2024',
        frontBadge: 'SMR + WEB',
        frontDescription: 'Visualizador de topologías de red y simulación de tráfico de paquetes TCP/IP interactivo diseñado con estética de terminal militar pulida.',
        frontHighlights: ['Simulación de enrutamiento y saltos', 'Cálculo de latencia y jitter', 'Exportación de topologías a JSON'],
        backTitle: 'Ingeniería de Redes & Renderizado',
        backDescription: 'Herramienta que une los fundamentos de SMR (VLANs, máscaras CIDR y tablas de enrutamiento) con una interfaz web reactiva. Permite a estudiantes y administradores visualizar cuellos de botella en tiempo real.',
        backArchitectureTitle: 'Características Principales:',
        backArchitectureNotes: [
          'Motor de grafos dinámicos en HTML5 Canvas con aceleración por GPU',
          'Algoritmo Dijkstra para cálculo de rutas mínimas entre nodos',
          'Simulador de pérdida de paquetes y caídas de interfaces',
          'Paleta cromada de alto contraste con métricas de rendimiento'
        ],
        technologies: ['React', 'HTML5 Canvas', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
        githubUrl: 'https://github.com',
        demoUrl: 'https://github.io'
      },
      fretForge: {
        title: 'FretForge - Guitar Fretboard & Tone Lab',
        category: 'MUSIC TECH // GUITAR ENGINE',
        year: '2024',
        frontBadge: 'CREATIVO // GUITAR',
        frontDescription: 'Matriz interactiva de mástil de guitarra para afinaciones alternativas (Drop D, DADGAD) y exploración de escalas exóticas con sonido sintetizado.',
        frontHighlights: ['Mástil de 24 trastes navegable', 'Afinaciones alternativas instantáneas', 'Generador de acordes disonantes'],
        backTitle: 'Diseño Acústico & Visual',
        backDescription: 'Diseñado para guitarristas que buscan salir de las escalas estándar. Permite mapear intervalos, visualizar arpegios y escuchar la tímbrica de cada posición a través de síntesis sustractiva.',
        backArchitectureTitle: 'Detalles del Motor:',
        backArchitectureNotes: [
          'Modelado matemático de armónicos de cuerda en tensión',
          'Soporte completo para afinaciones abiertas y drops',
          'Modo oscuro/cromado inspirado en guitarras estilo ESP/Ibanez Custom',
          'Optimizado para interacción táctil y atajos de teclado'
        ],
        technologies: ['React', 'Web Audio API', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        githubUrl: 'https://github.com',
        demoUrl: 'https://github.io'
      }
    },
    audioRack: {
      title: 'RACK DE EFECTOS // PEDALBOARD VIRTUAL',
      subtitle: 'Haz sonar los acordes interactivos generados mediante Web Audio API en tu navegador.',
      cleanTone: 'Tono Limpio',
      leadTone: 'Distorsión High-Gain',
      strumChords: 'Tocar Riffs de Prueba:',
      volume: 'Volumen:',
      activeAmp: 'AMPLIFICADOR A VÁLVULAS: ACTIVO (96kHz)'
    },
    contact: {
      sectionTag: '// 04. CONEXIÓN DIRECTA',
      title: '¿Tienes un proyecto o vacante? Hablemos.',
      subtitle: 'Abierto a oportunidades laborales en desarrollo frontend, proyectos web interactivos y sinergia de sistemas/redes.',
      formName: 'Tu Nombre / Empresa',
      formEmail: 'Correo Electrónico',
      formMessage: 'Cuéntame sobre tu proyecto o propuesta...',
      sendBtn: 'Transmitir Mensaje',
      sendingBtn: 'Enviando Señal...',
      sentSuccess: '¡Mensaje registrado! Te responderé a la brevedad.',
      directChannelsTitle: 'Canales Directos & Repositorios',
      copyEmail: 'Copiar correo',
      copied: '¡Copiado!',
      githubDesc: 'Explora mis repositorios y commits de código.',
      linkedinDesc: 'Conecta profesionalmente en LinkedIn.',
      emailDesc: 'Escríbeme directamente a mi bandeja de entrada.'
    },
    footer: {
      builtWith: 'Arquitectura creada con Vite, React 18, TypeScript, Tailwind CSS y Framer Motion.',
      ghPagesReady: 'Listo para GitHub Pages (sin dependencias de servidor)',
      license: 'Diseñado sin clichés. Inspirado en el metal, los racks analógicos y el código pulido.',
      backToTop: 'Volver Arriba ↑'
    }
  },
  en: {
    nav: {
      brandSub: 'SMR × DAW // GUITAR LAB',
      about: 'About Me',
      skills: 'Stack & Skills',
      projects: '3D Projects',
      contact: 'Contact',
      soundToggle: 'Audio FX',
      statusAvailable: 'AVAILABLE FOR HIRE',
      themeToggleDark: 'Dark Mode',
      themeToggleLight: 'Light Mode',
    },
    hero: {
      badge: 'TECHNICAL PROFILE: SMR & DAW // GUITARIST',
      titleLine1: 'NETWORK ARCHITECTURE.',
      titleLine2: 'REACTIVE INTERFACES.',
      titleLine3: 'HEAVY DISTORTION.',
      description: 'Bridging the raw resilience of systems administration and network engineering (SMR) with high-performance modern web application development (DAW). Fuelled by dark chrome aesthetics, surgical code, and Web Audio guitar synthesis.',
      ctaProjects: 'Explore 3D Projects',
      ctaContact: 'Initiate Contact',
      guitarRiffBtn: 'Trigger Metal Riff',
      terminal: {
        title: 'smr-daw-terminal://status',
        host: 'arch-kernel-6.12 // DAW-STAGE-PROD',
        routing: '0.0.0.0/0 via 192.168.1.1 (MTU: 1500)',
        runtime: 'Vite 6 + React 18 + Web Audio Engine',
        rig: 'Drop-D Tuning / High Gain Preamp Active',
        ready: 'System integrity: 100% | Zero AI Slop'
      }
    },
    about: {
      sectionTag: '// 01. TRAJECTORY',
      title: 'The Bridge Between the Infrastructure and the Pixel',
      p1: 'My journey began deep inside system internals: structured cabling, switch & router provisioning, Linux servers, and network protocol security during my SMR (Microcomputer Systems & Networks) certification.',
      p2: 'That low-level engineering bedrock now powers my advanced training in DAW (Web Application Development). I don’t just assemble components; I understand how packets traverse networks, how to squeeze rendering latency, and how to construct zero-compromise browser tools like real-time synthesizers.',
      p3: 'As an alternative metal guitarist, I inject the same rhythmic discipline and sonic edge into user interfaces: brushed chrome edges, deep obsidian layers, and crisp tactile micro-interactions.',
      metrics: [
        { label: 'Dual Specialization', value: 'SMR + DAW', detail: 'Infrastructure & Frontend' },
        { label: 'Design Philosophy', value: '0% Slop', detail: 'Brutalist Chrome Character' },
        { label: 'Web Audio Engine', value: '24-bit / 48kHz', detail: 'Real Synthesis & Interaction' },
      ],
      timelineTitle: 'Technical Evolution',
      timeline: [
        {
          period: 'Phase 1 // Foundation',
          title: 'Systems & Network Administration (SMR)',
          desc: 'Hardware architecture, LAN/VLAN deployments, Debian/RedHat server administration, Bash automation, and network firewalling.'
        },
        {
          period: 'Phase 2 // Present',
          title: 'Higher Degree in Web Application Development (DAW)',
          desc: 'Modern frontend engineering with React, TypeScript, RESTful architectures, state pipelines, and sensory web experiences with the Web Audio API.'
        },
        {
          period: 'Phase 3 // Creative DNA',
          title: 'Alternative Guitar & Experimental Sound',
          desc: 'Analog tube modeling translated to the browser: distortion curves, polyphonic sequencers, and interactive tactile control racks.'
        }
      ]
    },
    skills: {
      sectionTag: '// 02. TECHNICAL ARSENAL',
      title: 'Precision Tools & Technical Competencies',
      subtitle: 'Hover over each node to trigger chrome specular reflections.',
      categories: [
        {
          title: 'Systems & Networking (SMR)',
          icon: 'server',
          items: [
            { name: 'Linux / Debian / Arch', level: 'Advanced', tag: 'OS', details: 'Shell scripting, systemd, permission models, and headless daemon management.' },
            { name: 'TCP/IP & VLAN Routing', level: 'Advanced', tag: 'Net', details: 'Subnetting, static routing, DNS/DHCP, and Wireshark packet inspection.' },
            { name: 'Virtualization & Docker', level: 'Intermediate', tag: 'Infra', details: 'Isolated containers, Proxmox VE, virtual bridge networking.' },
            { name: 'Security & Firewalls', level: 'Intermediate', tag: 'Sec', details: 'iptables, UFW rules, vulnerability audits, and server hardening.' },
          ]
        },
        {
          title: 'Modern Web Engineering (DAW)',
          icon: 'code',
          items: [
            { name: 'React & TypeScript', level: 'Advanced', tag: 'Frontend', details: 'Strict typing, custom hooks, render optimization, and context architecture.' },
            { name: 'Tailwind CSS & Token Systems', level: 'Advanced', tag: 'UI', details: 'Bespoke design tokens, seamless dark/light modes, strict responsive grid.' },
            { name: 'Framer Motion', level: 'Advanced', tag: 'Motion', details: 'Orchestrated choreography, 3D card physics, spring curves, and reduced-motion.' },
            { name: 'Git & GitHub Pages', level: 'Advanced', tag: 'DevOps', details: 'CI/CD pipelines, structured git branching, and zero-config static hosting.' },
          ]
        },
        {
          title: 'Web Audio & Sensory Design',
          icon: 'disc',
          items: [
            { name: 'Web Audio API', level: 'Advanced', tag: 'Audio', details: 'Custom oscillators, biquad filters, waveshaper distortion curves, and gain graphs.' },
            { name: 'Acoustic & Tactile UX', level: 'Advanced', tag: 'Design', details: 'Micro-interactions enhanced with calculated real-time audio cues.' },
            { name: 'Obsidian & Chrome Aesthetic', level: 'Native', tag: 'Style', details: '1px beveled metal borders, layered obsidian surfaces, editorial typography.' },
            { name: 'WCAG AA Accessibility', level: 'Rigorous', tag: 'A11y', details: 'High-contrast compliant colors, keyboard focus traps, screen-reader semantics.' },
          ]
        }
      ]
    },
    projects: {
      sectionTag: '// 03. INTERACTIVE LAB',
      title: '3D Project Cards // Click to Flip',
      subtitle: 'Each card is powered by a physical 3D Y-axis transform. Click the front face to rotate 180° and inspect the architectural blueprint and source code.',
      clickToFlipFront: 'Click to inspect 3D blueprint ↺',
      clickToFlipBack: 'Click to return to front face ↻',
      liveDemo: 'Live Demo',
      viewCode: 'GitHub Repository',
      testSynth: 'Play Synthesizer',
      techTitle: 'Technology Stack:',
      soundCraft: {
        title: 'SoundCraft - DAW Web Synthesizer',
        category: 'WEB AUDIO // REACT // FRAMER MOTION',
        year: '2025 - Present',
        frontBadge: 'SPOTLIGHT PROJECT',
        frontDescription: 'Interactive in-browser audio synthesizer and step sequencer featuring a dark brushed-chrome interface inspired by analog studio racks and guitar stomps.',
        frontHighlights: ['Real-time subtractive synthesis', 'Custom waveshaper distortion stage', 'Live FFT frequency visualizer'],
        backTitle: 'Technical Specifications & Architecture',
        backDescription: 'Web application built with React and the Web Audio API allowing users to craft guitar loops and rhythmic beat sequences. Created to fuse advanced DAW coursework with high-performance interactive UI and sub-millisecond signal processing.',
        backArchitectureTitle: 'Audio Signal Pipeline:',
        backArchitectureNotes: [
          'OscillatorNode (Saw / Square / Sine) with microtonal detune capabilities',
          'WaveShaperNode recreating warm vacuum tube amplifier distortion',
          '4-pole low-pass BiquadFilterNode with state-driven ADSR modulation',
          'Framer Motion spring physics applied to rotary parameter dials'
        ],
        technologies: ['React 18', 'TypeScript', 'Web Audio API', 'Tailwind CSS', 'Framer Motion'],
        githubUrl: 'https://github.com',
        demoUrl: 'https://github.io'
      },
      netPulse: {
        title: 'NetPulse - Topology & Packet Inspector',
        category: 'SMR ARCHITECTURE // NETWORKING // CANVAS',
        year: '2024',
        frontBadge: 'SMR + WEB',
        frontDescription: 'Interactive network topology mapping tool and simulated TCP/IP packet transmission monitor designed with a clean titanium terminal feel.',
        frontHighlights: ['Multi-hop routing simulation', 'Real-time latency & jitter metrics', 'Exportable network schemas'],
        backTitle: 'Network Engineering & Canvas Pipeline',
        backDescription: 'Tool uniting core SMR fundamentals (VLANs, CIDR subnets, and routing tables) with an interactive reactive web interface. Allows network trainees to diagnose bottlenecks visually.',
        backArchitectureTitle: 'Engine Highlights:',
        backArchitectureNotes: [
          'GPU-accelerated dynamic network graph rendered on HTML5 Canvas',
          'Dijkstra pathfinding algorithm calculating optimal node hops',
          'Configurable packet drop rates and interface failure simulation',
          'High-contrast metallic UI with live telemetry badges'
        ],
        technologies: ['React', 'HTML5 Canvas', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
        githubUrl: 'https://github.com',
        demoUrl: 'https://github.io'
      },
      fretForge: {
        title: 'FretForge - Guitar Fretboard & Tone Lab',
        category: 'MUSIC TECH // GUITAR ENGINE',
        year: '2024',
        frontBadge: 'CREATIVE // GUITAR',
        frontDescription: 'Interactive 24-fret guitar matrix for alternate tunings (Drop D, DADGAD) and exotic scale mapping with synthesized physical string tones.',
        frontHighlights: ['Full 24-fret interactive navigation', 'Instant alternate tuning transposition', 'Dissonant chord voicing generator'],
        backTitle: 'Acoustic Modeling & Visual Hierarchy',
        backDescription: 'Crafted for alternative guitarists looking to break free from standard scales. Maps intervals, displays chord fingerings, and generates synthetic preview tones using Web Audio.',
        backArchitectureTitle: 'Engine Specifications:',
        backArchitectureNotes: [
          'Mathematical frequency calculation for vibrating strings under tension',
          'Comprehensive preset bank of metal and progressive rock tunings',
          'Custom dark obsidian & chrome finish inspired by ESP/Ibanez axes',
          'Optimized for mobile touch gestures and full keyboard navigation'
        ],
        technologies: ['React', 'Web Audio API', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        githubUrl: 'https://github.com',
        demoUrl: 'https://github.io'
      }
    },
    audioRack: {
      title: 'EFFECTS RACK // VIRTUAL PEDALBOARD',
      subtitle: 'Trigger interactive chords generated live via the Web Audio API directly in your browser.',
      cleanTone: 'Clean Chime',
      leadTone: 'High-Gain Metal Lead',
      strumChords: 'Test Riff Progressions:',
      volume: 'Master Gain:',
      activeAmp: 'TUBE PREAMP STAGE: ONLINE (96kHz)'
    },
    contact: {
      sectionTag: '// 04. DIRECT LINK',
      title: 'Got a Project or Role? Let’s Connect.',
      subtitle: 'Available for frontend engineering roles, creative interactive web development, and systems/network infrastructure positions.',
      formName: 'Your Name / Organization',
      formEmail: 'Email Address',
      formMessage: 'Tell me about your project or opportunity...',
      sendBtn: 'Transmit Message',
      sendingBtn: 'Transmitting Signal...',
      sentSuccess: 'Signal received! I will reply promptly.',
      directChannelsTitle: 'Direct Channels & Repositories',
      copyEmail: 'Copy Email',
      copied: 'Copied!',
      githubDesc: 'Inspect my repositories, experiments, and code commits.',
      linkedinDesc: 'Connect with me professionally on LinkedIn.',
      emailDesc: 'Send a message directly to my primary inbox.'
    },
    footer: {
      builtWith: 'Engineered with Vite, React 18, TypeScript, Tailwind CSS, and Framer Motion.',
      ghPagesReady: 'Ready for GitHub Pages (zero server dependencies)',
      license: 'Zero slop. Inspired by heavy guitar distortion, analog rack units, and clean code.',
      backToTop: 'Back to Top ↑'
    }
  }
};
