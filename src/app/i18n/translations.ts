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
  },
} as const;
