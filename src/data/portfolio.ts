export type Locale = 'en' | 'es';

export interface Highlight {
  icon: 'workflow' | 'shield' | 'broadcast' | 'devices';
  name: string;
  description: string;
}

export interface Project {
  name: string;
  image: string;
  techs: string[];
  summary?: string;
  description: string;
  cta: string;
  href: string;
}

export interface TimelineEntry {
  title: string;
  time: string;
  organization?: string;
  description: string;
}

export interface Article {
  title: string;
  image: string;
  description: string;
  date: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'facebook';
}

export interface PortfolioContent {
  seo: {
    title: string;
    description: string;
  };
  nav: Array<{ href: string; label: string }>;
  hero: {
    name: string;
    roleAccent: string;
    roleTitle: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    stackLabel: string;
    stack: string[];
    resumeHref: string;
  };
  about: {
    title: string;
    eyebrow: string;
    heading: string;
    strengthLabel: string;
    summary: string;
    emphasis: string;
    highlights: Highlight[];
    technologiesLabel: string;
    technologies: string[];
  };
  projects: {
    title: string;
    eyebrow: string;
    intro: string;
    viewAllLabel: string;
    items: Project[];
  };
  experience: {
    title: string;
    eyebrow: string;
    quote: string;
    cite: string;
    jobsLabel: string;
    educationLabel: string;
    jobs: TimelineEntry[];
    education: TimelineEntry[];
  };
  articles: {
    title: string;
    eyebrow: string;
    intro: string;
    viewAllLabel: string;
    readTimeLabel: string;
    sourceLabel: string;
    topicsLabel: string;
    items: Article[];
  };
  contact: {
    title: string;
    eyebrow: string;
    headline: string;
    description: string;
    socialTitle: string;
    formTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    socialLinks: SocialLink[];
    formAction: string;
  };
  footer: {
    builtWith: string;
  };
}

const resumeHref = '/assets/derwin-romero-cv.pdf';

const sharedSocialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Derwin1310',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/derwinerr/',
    icon: 'linkedin',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/derwin.romero1310',
    icon: 'facebook',
  },
];

export const portfolioContent = {
  en: {
    seo: {
      title: 'Derwin Romero | Full Stack Developer',
      description:
        'Full Stack Developer specializing in React ecosystems, TypeScript architecture, and scalable web and mobile products.',
    },
    nav: [
      { href: '#about', label: 'About' },
      { href: '#projects', label: 'Projects' },
      { href: '#experience', label: 'Experience' },
      { href: '#articles', label: 'Articles' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      name: 'Derwin Romero',
      roleAccent: 'Full Stack',
      roleTitle: 'Developer',
      intro:
        'I build scalable web and mobile products across frontend and backend, with a strong focus on TypeScript, React ecosystems, performance, and product delivery.',
      primaryCta: 'Download Resume',
      secondaryCta: "Let's Connect",
      stackLabel: 'Tech stack',
      stack: [
        'TypeScript',
        'React',
        'Next.js',
        'Effect',
        'TanStack',
        'React Native',
        'Expo',
        'GraphQL',
      ],
      resumeHref,
    },
    about: {
      title: 'About',
      eyebrow: 'What I bring',
      heading: 'I care about building things that people enjoy using.',
      strengthLabel: 'Core strength',
      summary:
        'I specialize in building end-to-end product experiences, from polished frontend interfaces to the backend workflows and integrations that support them.',
      emphasis:
        'I care about type-safe systems, strong product thinking, and shipping features that scale.',
      highlights: [
        {
          icon: 'workflow',
          name: 'End-to-end',
          description:
            'I can take features from discovery to production across frontend, backend, and delivery workflows.',
        },
        {
          icon: 'shield',
          name: 'Type-safe',
          description:
            'I work deeply with TypeScript-first tools and architectures that improve confidence, maintainability, and developer velocity.',
        },
        {
          icon: 'broadcast',
          name: 'Real-time',
          description:
            'I have hands-on experience with notifications, WebSockets, streaming flows, and event-driven product behavior.',
        },
        {
          icon: 'devices',
          name: 'Cross-platform',
          description:
            'I build for web and mobile with shared systems, reusable components, and consistent product experiences.',
        },
      ],
      technologiesLabel: 'Technologies I use',
      technologies: [
        'TypeScript',
        'React',
        'Next.js',
        'Effect',
        'TanStack Suite',
        'GraphQL',
        'Vite',
        'React Native',
        'Expo',
        'Redis',
        'SQL',
        'SQLite',
        'Tailwind CSS',
        'Zustand',
        'React Hook Form',
      ],
    },
    projects: {
      title: 'Selected Work',
      eyebrow: 'Selected Projects',
      intro:
        'A mix of product-facing engineering work and personal builds that show how I think about interfaces, architecture, and delivery.',
      viewAllLabel: 'View all projects',
      items: [
        {
          name: 'Online Pokedex',
          image:
            'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/pokedex.webp',
          techs: ['React', 'Sass', 'API'],
          summary:
            'A lightweight product-style interface built around API consumption and responsive component patterns.',
          description: 'A pokedex app',
          cta: 'Visit project',
          href: 'https://derwin1310.github.io/Pokeapi/',
        },
        {
          name: 'Gif Buddy',
          image:
            'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/gif-buddy-img.webp',
          techs: ['React', 'Vite', 'CSS'],
          summary:
            'A search-focused UI with fast feedback loops, simple interaction design, and lightweight frontend architecture.',
          description:
            'A compact GIF search app that reflects my interest in snappy user flows, clean state handling, and frontend polish.',
          cta: 'Visit project',
          href: 'https://gif-buddy-app.netlify.app/',
        },
      ],
    },
    experience: {
      title: 'Experience',
      eyebrow: 'Experience & Education',
      quote:
        'Great products are built when engineering quality, product thinking, and user experience move in the same direction.',
      cite: 'Core working principle',
      jobsLabel: 'Professional Experience',
      educationLabel: 'Education',
      jobs: [
        {
          title: 'Full Stack Developer',
          time: 'May 2025 - Mar 2026',
          organization: 'Neon Blue',
          description:
            'Delivered end-to-end product features across frontend and backend using TypeScript, React, and Effect. Built AI-enabled workflows, real-time user flows with WebSockets and Effect Stream, and stronger typed service layers that improved team delivery speed and release confidence.',
        },
        {
          title: 'Mobile & Web Developer',
          time: 'Jan 2024 - May 2025',
          organization: 'Sainapsis Inc',
          description:
            'Led cross-platform product development with React, TypeScript, Nx, and React Native. Built shared systems for web and mobile, designed granular access control, contributed to event-driven notifications with Redis Pub/Sub and Firebase Cloud Messaging, and implemented offline-first workflows with Effect Schema.',
        },
      ],
      education: [
        {
          title: 'Systems Engineering',
          time: 'Feb 2018',
          organization: 'Instituto Universitario Politécnico Santiago Mariño',
          description:
            'Formal engineering foundation supporting software design, systems thinking, and long-term technical growth.',
        },
        {
          title: 'Advanced TypeScript for Developers',
          time: 'Mar 2024',
          organization: 'Frontend Masters',
          description:
            'Focused on writing safer, more expressive TypeScript for production-grade application architecture.',
        },
      ],
    },
    articles: {
      title: 'Articles',
      eyebrow: 'Articles',
      intro:
        'Writing helps me clarify what I learn about UI craft and frontend fundamentals.',
      viewAllLabel: 'View all articles',
      readTimeLabel: '5 min read',
      sourceLabel: 'Medium',
      topicsLabel: 'Astro, Performance, DX',
      items: [
        {
          title: 'Best Practices with CSS',
          image:
            'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/css-wallpaper.webp',
          description:
            'An article about cleaner CSS habits, written as I started organizing the way I think about styling.',
          date: 'March',
          href: 'https://medium.com/@derwin1310/aprende-las-buenas-practicas-en-css-cascade-style-sheets-3eab66cb738d',
        },
      ],
    },
    contact: {
      title: 'Contact',
      eyebrow: "Let's Work Together",
      headline: "Let's build great things together!",
      description:
        'If you are hiring for product-focused frontend or full-stack roles, or want to build something meaningful together, I would be glad to connect.',
      socialTitle: 'Find me online',
      formTitle: 'Send me a message',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email address',
      message: 'Message',
      messagePlaceholder: 'Type your message',
      submit: 'Submit',
      socialLinks: sharedSocialLinks,
      formAction: 'https://formspree.io/f/mbjweyop',
    },
    footer: {
      builtWith: 'Built with Astro, TypeScript, and Tailwind CSS.',
    },
  },
  es: {
    seo: {
      title: 'Derwin Romero | Full Stack Developer',
      description:
        'Desarrollador Full Stack especializado en ecosistemas React, arquitectura con TypeScript y productos web y mobile escalables.',
    },
    nav: [
      { href: '#about', label: 'Acerca' },
      { href: '#projects', label: 'Proyectos' },
      { href: '#experience', label: 'Experiencia' },
      { href: '#articles', label: 'Articulos' },
      { href: '#contact', label: 'Contacto' },
    ],
    hero: {
      name: 'Derwin Romero',
      roleAccent: 'Full Stack',
      roleTitle: 'Developer',
      intro:
        'Construyo productos web y mobile escalables desde frontend hasta backend, con un foco fuerte en TypeScript, ecosistemas React, performance y entrega de producto.',
      primaryCta: 'Descargar CV',
      secondaryCta: 'Conectemos',
      stackLabel: 'Stack',
      stack: [
        'TypeScript',
        'React',
        'Next.js',
        'Effect',
        'TanStack',
        'React Native',
        'Expo',
        'GraphQL',
      ],
      resumeHref,
    },
    about: {
      title: 'Acerca',
      eyebrow: 'Lo que aporto',
      heading: 'Me importa construir cosas que la gente disfrute usar.',
      strengthLabel: 'Fortaleza clave',
      summary:
        'Me especializo en construir experiencias de producto de punta a punta, desde interfaces cuidadas hasta workflows backend e integraciones que las sostienen.',
      emphasis:
        'Me importan los sistemas type-safe, el criterio de producto y entregar funcionalidades que escalen.',
      highlights: [
        {
          icon: 'workflow',
          name: 'End-to-end',
          description:
            'Puedo llevar funcionalidades desde discovery hasta produccion tocando frontend, backend y flujos de entrega.',
        },
        {
          icon: 'shield',
          name: 'Type-safe',
          description:
            'Trabajo profundamente con herramientas y arquitecturas basadas en TypeScript para mejorar confianza, mantenibilidad y velocidad.',
        },
        {
          icon: 'broadcast',
          name: 'Real-time',
          description:
            'Tengo experiencia real con notificaciones, WebSockets, streaming y comportamientos dirigidos por eventos.',
        },
        {
          icon: 'devices',
          name: 'Cross-platform',
          description:
            'Construyo para web y mobile con sistemas compartidos, componentes reutilizables y experiencias consistentes.',
        },
      ],
      technologiesLabel: 'Tecnologias que uso',
      technologies: [
        'TypeScript',
        'React',
        'Next.js',
        'Effect',
        'TanStack Query',
        'TanStack Router',
        'GraphQL',
        'Apollo',
        'Nx',
        'Vite',
        'React Native',
        'Expo',
        'Redis',
        'SQL',
        'SQLite',
        'Tailwind CSS',
        'Zustand',
        'AWS',
        'Firebase',
      ],
    },
    projects: {
      title: 'Trabajo Seleccionado',
      eyebrow: 'Proyectos seleccionados',
      intro:
        'Una mezcla de trabajo orientado a producto y proyectos personales que muestran como pienso interfaz, arquitectura y entrega.',
      viewAllLabel: 'Ver todos los proyectos',
      items: [
        {
          name: 'Pokedex Online',
          image:
            'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/pokedex.webp',
          techs: ['React', 'Sass', 'API'],
          summary:
            'Un proyecto liviano construido sobre consumo de APIs y patrones de UI responsiva.',
          description:
            'Un proyecto frontend construido mientras exploraba la PokeAPI, patrones de UI reutilizables y una arquitectura de informacion mas clara.',
          cta: 'Visitar proyecto',
          href: 'https://derwin1310.github.io/Pokeapi/',
        },
        {
          name: 'Gif Buddy',
          image:
            'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/gif-buddy-img.webp',
          techs: ['React', 'Vite', 'CSS'],
          summary:
            'Una experiencia compacta de busqueda de GIFs con resultados rapidos y feedback claro.',
          description:
            'Una aplicacion de busqueda de GIFs que refleja mi interes por flujos rapidos, manejo limpio de estado y pulido frontend.',
          cta: 'Visitar proyecto',
          href: 'https://gif-buddy-app.netlify.app/',
        },
      ],
    },
    experience: {
      title: 'Experiencia',
      eyebrow: 'Experiencia y educacion',
      quote:
        'Los mejores productos aparecen cuando calidad tecnica, criterio de producto y experiencia de usuario avanzan en la misma direccion.',
      cite: 'Principio de trabajo',
      jobsLabel: 'Experiencia Profesional',
      educationLabel: 'Educacion',
      jobs: [
        {
          title: 'Full Stack Developer',
          time: 'May 2025 - Mar 2026',
          organization: 'Neon Blue',
          description:
            'Entregue funcionalidades end-to-end en frontend y backend usando TypeScript, React y Effect. Construi flujos con IA, experiencias en tiempo real con WebSockets y capas de servicios tipadas que mejoraron la velocidad de entrega y la confianza en releases.',
        },
        {
          title: 'Full Stack Developer',
          time: 'Jan 2024 - May 2025',
          organization: 'Sainapsis Inc',
          description:
            'Lidere desarrollo cross-platform con React, TypeScript, Nx y React Native. Implemente sistemas compartidos para web y mobile, control de acceso granular, notificaciones dirigidas por eventos con Redis Pub/Sub y Firebase, y flujos offline-first con Effect Schema.',
        },
      ],
      education: [
        {
          title: 'Systems Engineering',
          time: 'Feb. 2018',
          organization: 'Instituto Universitario Politecnico Santiago Marino',
          description:
            'Base formal de ingenieria que fortalece diseno de software, pensamiento de sistemas y crecimiento tecnico de largo plazo.',
        },
        {
          title: 'Advanced TypeScript for Developers',
          time: 'Mar. 2024',
          organization: 'Frontend Masters',
          description:
            'Enfocado en escribir TypeScript mas seguro y expresivo para arquitectura de aplicaciones en produccion.',
        },
      ],
    },
    articles: {
      title: 'Articulos',
      eyebrow: 'Articulos',
      intro:
        'Escribir me ayuda a aclarar lo que aprendo sobre cuidado visual y fundamentos frontend.',
      viewAllLabel: 'Ver todos los articulos',
      readTimeLabel: '5 min de lectura',
      sourceLabel: 'Medium',
      topicsLabel: 'Astro, Rendimiento, DX',
      items: [
        {
          title: 'Buenas Practicas con CSS',
          image:
            'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/css-wallpaper.webp',
          description:
            'Un articulo sobre habitos mas limpios en CSS, escrito mientras empezaba a ordenar mi forma de pensar los estilos.',
          date: 'Marzo',
          href: 'https://medium.com/@derwin1310/aprende-las-buenas-practicas-en-css-cascade-style-sheets-3eab66cb738d',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      eyebrow: 'Trabajemos juntos',
      headline: 'Construyamos grandes cosas juntos!',
      description:
        'Si estas contratando para roles de frontend orientado a producto o full-stack, o quieres construir algo relevante, estare encantado de conectar.',
      socialTitle: 'Encuentrame en linea',
      formTitle: 'Enviame un mensaje',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo electronico',
      message: 'Mensaje',
      messagePlaceholder: 'Escribe tu mensaje',
      submit: 'Enviar',
      socialLinks: sharedSocialLinks,
      formAction: 'https://formspree.io/f/mbjweyop',
    },
    footer: {
      builtWith: 'Construido con Astro, TypeScript y Tailwind CSS.',
    },
  },
} satisfies Record<Locale, PortfolioContent>;
