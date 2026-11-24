export const translations = {
  es: {
    navbar: {
      home: 'Mi Portafolio',
      experience: 'Experiencia',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      about: 'Sobre mí',
      contact: 'Contacto',
    },

    hero: {
      role: 'Ingeniero de Software · Ingeniero de Ciberseguridad',

      specialization: 'Cloud · DevSecOps · Application Security',

      description:
        'Desarrollo software y soluciones de infraestructura con enfoque en seguridad, cloud y DevSecOps.',
      phrase: 'Construyendo sistemas escalables, seguros y resilientes.',

      experienceButton: 'Ver la experiencia laboral',

      cv: 'Currículum',
    },
    experience: {
      title: 'Experiencia Laboral',
      activitiesTitle: 'Principales actividades',
      nextSection: 'Ver los proyectos',

      items: [
        {
          id: 'praxis',
          company: 'Praxis',
          role: 'DevSecOps',
          period: '2023 — Actualidad',
          activities: [
            'Administración y soporte de plataformas empresariales con Oracle WebLogic 12c/14c, Linux y bases de datos Oracle y SQL Server.',
            'Gestión y mantenimiento de microservicios en OpenShift, así como contenerización y administración de entornos mediante Docker.',
            'Participación en procesos CI/CD, integración de servicios web y actividades del ciclo de vida del software.',
            'Validaciones técnicas de ciberseguridad, desarrollo seguro y seguimiento a vulnerabilidades.',
            'Planeación y ejecución de medidas de alta disponibilidad y recuperación de ambientes.',
            'Ejecución de pruebas y certificaciones ante Banco de México para SPEI, SPID, CEP y CEP SPID, además de soporte a implementaciones de Banjercito.',
          ],
          technologies: [
            'OpenShift',
            'RHEL',
            'Java',
            'Spring Boot',
            'Kubernetes',
            'HashiCorp Vault',
            'WebLogic',
            'Docker',
            'Oracle WebLogic',
            'Linux',
            'Oracle Database',
            'SQL Server',
            'CI/CD',
          ],
        },
        {
          id: 'banjercito',
          company: 'Banjercito',
          role: 'Auxiliar especializado',
          period: '2022 — 2023',
          activities: [
            'Participación en procesos de certificación de sistemas SPEI y SPID ante Banco de México.',
            'Formación y capacitación sobre normativa aplicable a los sistemas de pago.',
            'Elaboración de documentación técnica y manuales de usuario.',
            'Desarrollo de soluciones para automatización de flujos de procesos mediante Visual Basic for Applications (VBA).',
          ],
          technologies: [
            'SPEI',
            'SPID',
            'Visual Basic',
            'Python',
            'SQL Server',
            'Linux',
            'Solaris',
          ],
        },
      ],
    },

    projects: {
      title: 'Proyectos',
      nextSection: 'Ver certificaciones',
      githubLabel: 'Ver código fuente',
      demoLabel: 'Ver proyecto',

      items: [
        {
          id: 'data-center-iot',
          title: 'Monitoreo de Data Center IoT',
          description:
            'Sistema full stack para monitoreo y gestión de infraestructura de un centro de datos. Integra un backend REST desarrollado con Java y Spring Boot, autenticación JWT y un dashboard interactivo construido con React y TypeScript.',
          year: 2025,
          image: '',
          technologies: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'JWT',
            'React',
            'TypeScript',
            'MySQL',
          ],
          githubUrl: 'https://github.com/Patchwtf/metricas-monitoreo-data-center-iot',
          demoUrl: '',
        },
        {
          id: 'chat-lyen',
          title: 'Chat Lyen',
          description:
            'Aplicación móvil de colaboración empresarial desarrollada con Flutter y Firebase. Incorpora mensajería, autenticación de usuarios y consultas en tiempo real mediante una base de datos NoSQL, con soporte para Android e iOS.',
          year: 2023,
          image: '',
          technologies: ['Flutter', 'Dart', 'Firebase', 'NoSQL', 'Android', 'iOS'],
          githubUrl: 'https://github.com/Patchwtf/chat-lyen',
          demoUrl: '',
        },
        {
          id: 'machine-learning',
          title: 'Machine Learning Projects',
          description:
            'Colección de proyectos de aprendizaje automático que exploran modelos supervisados y no supervisados, incluyendo regresión lineal y logística, árboles de decisión, Random Forest y técnicas de clustering mediante Python y Jupyter Notebook.',
          year: 2025,
          image: '',
          technologies: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Scikit-learn'],
          githubUrl: 'https://github.com/Patchwtf/MachineLearningProyects',
          demoUrl: '',
        },
        {
          id: 'calculadora-medica',
          title: 'Calculadora Médica',
          description:
            'Aplicación móvil desarrollada con Flutter para realizar cálculos relacionados con procedimientos médicos. Diseñada para estudiantes de medicina y profesionales de nutrición, y publicada en Google Play.',
          year: 2024,
          image: '',
          technologies: ['Flutter', 'Dart', 'Android'],
          githubUrl: '',
          demoUrl: '',
        },
        {
          id: 'pizzeria-api',
          title: 'Pizzeria REST API',
          description:
            'API REST desarrollada con Java y Spring Boot para la gestión de pizzas, clientes y pedidos. Implementa una arquitectura por capas con controladores, servicios, repositorios, persistencia mediante JPA y documentación OpenAPI.',
          year: 2025,
          image: '',
          technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'REST API', 'OpenAPI'],
          githubUrl: 'https://github.com/Patchwtf/pizzeria-api-project',
          demoUrl: '',
        },

        {
          id: 'market-project-api',
          title: 'Market Project API',
          description:
            'API REST desarrollada con Java y Spring Boot para la gestión de productos, categorías y compras de una tienda virtual. Implementa operaciones CRUD, persistencia con PostgreSQL, arquitectura por capas y documentación interactiva mediante Swagger/OpenAPI.',
          year: 2025,
          image: '',
          technologies: [
            'Java',
            'Spring Boot',
            'Spring Data JPA',
            'PostgreSQL',
            'REST API',
            'Swagger',
            'OpenAPI',
          ],
          githubUrl: 'https://github.com/Patchwtf/market-project-api',
          demoUrl: '',
        },
      ],
    },
  },

  en: {
    navbar: {
      home: 'My Portfolio',
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      about: 'About me',
      contact: 'Contact',
    },

    hero: {
      role: 'Software Engineer · Cybersecurity Engineer',

      specialization: 'Cloud · DevSecOps · Application Security',

      description:
        'I develop software and infrastructure solutions with a focus on security, cloud, and DevSecOps.',
      phrase: 'Building scalable, secure, and resilient systems.',

      experienceButton: 'View work experience',

      cv: 'Resume',
    },
    experience: {
      title: 'Work Experience',
      activitiesTitle: 'Main responsibilities',
      nextSection: 'View projects',

      items: [
        {
          id: 'praxis',
          company: 'Praxis',
          role: 'DevSecOps',
          period: '2023 — Present',
          activities: [
            'Administration and support of enterprise platforms using Oracle WebLogic 12c/14c, Linux, and Oracle and SQL Server databases.',
            'Management and maintenance of microservices on OpenShift, including containerization and environment administration using Docker.',
            'Participation in CI/CD processes, web service integration, and software lifecycle activities.',
            'Technical cybersecurity assessments, secure development practices, and vulnerability tracking.',
            'Planning and implementation of high-availability and environment recovery measures.',
            'Execution of testing and certification processes with Banco de México for SPEI, SPID, CEP, and CEP SPID, including support for Banjercito implementations.',
          ],
          technologies: [
            'OpenShift',
            'RHEL',
            'Java',
            'Spring Boot',
            'Kubernetes',
            'HashiCorp Vault',
            'WebLogic',
            'Docker',
            'Oracle WebLogic',
            'Linux',
            'Oracle Database',
            'SQL Server',
            'CI/CD',
          ],
        },
        {
          id: 'banjercito',
          company: 'Banjercito',
          role: 'Specialized Assistant',
          period: '2022 — 2023',
          activities: [
            'Participation in SPEI and SPID payment system certification processes with Banco de México.',
            'Training in regulatory requirements applicable to payment systems.',
            'Preparation of technical documentation and user manuals.',
            'Development of workflow automation solutions using Visual Basic for Applications (VBA).',
          ],
          technologies: [
            'SPEI',
            'SPID',
            'Visual Basic',
            'Python',
            'SQL Server',
            'Linux',
            'Solaris',
          ],
        },
      ],
    },

    projects: {
      title: 'Projects',
      nextSection: 'View certifications',
      githubLabel: 'View source code',
      demoLabel: 'View project',

      items: [
        {
          id: 'data-center-iot',
          title: 'IoT Data Center Monitoring',
          description:
            'Full-stack system for monitoring and managing data center infrastructure. Features a REST backend developed with Java and Spring Boot, JWT authentication, and an interactive dashboard built with React and TypeScript.',
          year: 2025,
          image: '',
          technologies: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'JWT',
            'React',
            'TypeScript',
            'MySQL',
          ],
          githubUrl: 'https://github.com/Patchwtf/metricas-monitoreo-data-center-iot',
          demoUrl: '',
        },
        {
          id: 'chat-lyen',
          title: 'Chat Lyen',
          description:
            'Enterprise collaboration mobile application built with Flutter and Firebase. Features messaging, user authentication, and real-time queries using a NoSQL database, with support for Android and iOS.',
          year: 2023,
          image: '',
          technologies: ['Flutter', 'Dart', 'Firebase', 'NoSQL', 'Android', 'iOS'],
          githubUrl: 'https://github.com/Patchwtf/chat-lyen',
          demoUrl: '',
        },
        {
          id: 'machine-learning',
          title: 'Machine Learning Projects',
          description:
            'Collection of machine learning projects exploring supervised and unsupervised models, including linear and logistic regression, decision trees, Random Forest, and clustering techniques using Python and Jupyter Notebook.',
          year: 2025,
          image: '',
          technologies: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Scikit-learn'],
          githubUrl: 'https://github.com/Patchwtf/MachineLearningProyects',
          demoUrl: '',
        },
        {
          id: 'calculadora-medica',
          title: 'Medical Calculator',
          description:
            'Mobile application developed with Flutter to perform calculations related to medical procedures. Designed for medical students and nutrition professionals and published on Google Play.',
          year: 2024,
          image: '',
          technologies: ['Flutter', 'Dart', 'Android'],
          githubUrl: '',
          demoUrl: '',
        },
        {
          id: 'pizzeria-api',
          title: 'Pizzeria REST API',
          description:
            'REST API developed with Java and Spring Boot for managing pizzas, customers, and orders. Implements a layered architecture with controllers, services, repositories, JPA persistence, and OpenAPI documentation.',
          year: 2025,
          image: '',
          technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'REST API', 'OpenAPI'],
          githubUrl: 'https://github.com/Patchwtf/pizzeria-api-project',
          demoUrl: '',
        },

        {
          id: 'market-project-api',
          title: 'Market Project API',
          description:
            'REST API developed with Java and Spring Boot for managing products, categories, and purchases in an online store. Features CRUD operations, PostgreSQL persistence, a layered architecture, and interactive API documentation using Swagger/OpenAPI.',
          year: 2025,
          image: '',
          technologies: [
            'Java',
            'Spring Boot',
            'Spring Data JPA',
            'PostgreSQL',
            'REST API',
            'Swagger',
            'OpenAPI',
          ],
          githubUrl: 'https://github.com/Patchwtf/market-project-api',
          demoUrl: '',
        },
      ],
    },
  },
} as const;
