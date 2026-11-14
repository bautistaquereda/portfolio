/* =====================================================================
   ✏️  TEXTOS DE LA PÁGINA EN INGLÉS Y ESPAÑOL
   Cada clave corresponde a un data-i18n / data-i18n-html del index.html
   Las palabras en <strong> son las keywords técnicas (las que buscan
   reclutadores y filtros ATS): conviene usar las mismas en el CV y LinkedIn.
   ===================================================================== */

const I18N = {
  en: {
    "meta.title": "Bautista Quereda | Back-end Developer · Java, Spring Boot",
    "meta.description": "Bautista Quereda, Back-end (backend) Developer in Buenos Aires, Argentina. REST APIs and microservices with Java, Spring Boot and Node.js. English C2.",

    "nav.about": "[about]",
    "nav.projects": "[projects]",
    "nav.contact": "[contact]",

    "hero.role":
      '&gt; Back-end Developer <span>· Building REST APIs and microservices with Java, Spring Boot and Node.js.</span>',

    "hero.meta": "Buenos Aires, Argentina · {age} years old · English C2",
    "hero.cvTitleEn": "Download CV in English (PDF)",
    "hero.cvTitleEs": "Download CV in Spanish (PDF)",
    "hero.clockLabel": "local time",
    "hero.clockAhead": "{h} ahead of you",
    "hero.clockBehind": "{h} behind you",
    "hero.clockSame": "same time as you",
    "snake.hint": "psst… ↑↑↓↓←→←→BA or",
    "snake.help": "arrows / WASD: move · space: start / pause · esc: exit",
    "snake.score": "score",
    "snake.best": "best",
    "snake.start": "> press SPACE (or [ok]) to start",
    "snake.paused": "> paused. SPACE to resume",
    "snake.over": "> segmentation fault (core dumped). SPACE to retry",

    "about.backend":
      
      
      "Building <strong>RESTful APIs</strong> with <strong>Java</strong>, <strong>Spring Boot</strong> and <strong>Spring MVC</strong>, and with <strong>Node.js</strong>. " +
      "Applying <strong>object-oriented programming (OOP)</strong> and <strong>design patterns</strong>, with code organized in a <strong>layered architecture</strong> (controllers, services, data access). " +
      "Implementing authentication and authorization with <strong>Spring Security</strong>, input validation and consistent HTTP responses and error handling. " +
      "Working with <strong>MySQL</strong> and <strong>SQL</strong> for data persistence: table design, queries and integration with the application. " +
      "Building <strong>microservices</strong> with <strong>Spring Cloud</strong> (API Gateway, Load Balancer, Circuit Breaker), asynchronous messaging with <strong>RabbitMQ</strong>, security with <strong>OAuth 2.0</strong> / OpenID Connect on <strong>Keycloak</strong>, <strong>NoSQL</strong> databases with <strong>MongoDB</strong> and services in <strong>Go</strong>.",
    "about.frontend":
      
      "Building interfaces with <strong>JavaScript</strong>, <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>React</strong>: responsive design, form validation, CRUD applications and <strong>third-party API integration</strong>. Working from designs and prototypes in <strong>Figma</strong>, and using Miro for diagrams and planning.",
    "about.practicesLabel": "[ WORKFLOW ]",
    "about.practices":
      
      
      "Version control with <strong>Git</strong> and <strong>GitHub</strong>: feature branches and small, descriptive commits. " +
      "Working under <strong>Agile / Scrum</strong> (sprints, dailies, retrospectives), organizing tasks in <strong>Trello</strong> and communicating through <strong>Slack</strong>. " +
      "Testing endpoints with <strong>Postman</strong> and writing <strong>automated API tests</strong> with <strong>RestAssured</strong>. " +
      "Applying <strong>DevOps</strong> and <strong>cloud computing</strong> on <strong>AWS</strong>: deployments on <strong>Kubernetes</strong> with <strong>GitOps</strong> (Argo CD) and <strong>CI/CD</strong> pipelines with <strong>Jenkins</strong>.",
    "about.educationLabel": "[ EDUCATION ]",
    "about.education":
      
      
      
      "Courses at <strong>Digital House</strong>:" +
      '<span class="edu-item"><strong>Professional Developer</strong>: Java and OOP, Spring Boot, Spring Security, MySQL, AWS and software testing.</span>' +
      '<span class="edu-item"><strong>Back-End Developer</strong>: microservices with Spring Cloud, security with OAuth 2.0 / OpenID Connect, MongoDB / NoSQL, Kubernetes and test automation.</span>' +
      '<span class="edu-item"><strong>EF SET English Certificate</strong>: <strong>C2 Proficient</strong> (74/100), 2025. <a class="edu-link" href="https://cert.efset.org/es/pVyabd" target="_blank" rel="noopener">[verify]</a></span>' +
      '<span class="edu-item edu-item--next"><strong>Associate Degree in Programming</strong> (Tecnicatura Universitaria en Programación) at <strong>UTN</strong> (Universidad Tecnológica Nacional), starting soon. Two-year degree: programming, <strong>databases</strong>, operating systems, systems methodology and <strong>software development management</strong>.</span>',
    "about.hobbies":
      "Off the clock: <strong>story-driven games</strong> (Night in the Woods, Life is Strange) and <strong>psychological horror</strong> (Silent Hill), plus the odd Resident Evil, Devil May Cry or Dark Souls run. Music from <strong>metal</strong> (Gojira, Nine Inch Nails) to <strong>trip-hop</strong> (Portishead, Massive Attack) and <strong>indie</strong> (The Cure, Sonic Youth). On <strong>film</strong>: Lynch, Ghost World, Jacob's Ladder, Fallen Angels or Empire Records. And <strong>design</strong> as a hobby: personal pieces, this site included.",
    "about.status": "[ RUNNING ]",
    "about.now": "Building back-end projects with Java, Spring Boot and microservices, focused on API design, security, data modeling and scalability.",

    "projects.code": "Code",
    "projects.demo": "Live demo",

    "footer.built": "built with HTML, CSS & JavaScript",
  },

  es: {
    "meta.title": "Bautista Quereda | Desarrollador Back-end · Java, Spring Boot",
    "meta.description": "Bautista Quereda, desarrollador back-end (backend) en Buenos Aires, Argentina. APIs REST y microservicios con Java, Spring Boot y Node.js. Inglés C2.",

    "nav.about": "[sobre_mí]",
    "nav.projects": "[proyectos]",
    "nav.contact": "[contacto]",

    "hero.role":
      '&gt; Desarrollador Back-end <span>· Desarrollando APIs REST y microservicios con Java, Spring Boot y Node.js.</span>',

    "hero.meta": "Buenos Aires, Argentina · {age} años · Inglés C2",
    "hero.cvTitleEn": "Descargar CV en inglés (PDF)",
    "hero.cvTitleEs": "Descargar CV en español (PDF)",
    "hero.clockLabel": "hora local",
    "hero.clockAhead": "{h} más que vos",
    "hero.clockBehind": "{h} menos que vos",
    "hero.clockSame": "misma hora que vos",
    "snake.hint": "psst… ↑↑↓↓←→←→BA o",
    "snake.help": "flechas / WASD: mover · espacio: empezar / pausa · esc: salir",
    "snake.score": "puntos",
    "snake.best": "récord",
    "snake.start": "> apretá ESPACIO (o [ok]) para empezar",
    "snake.paused": "> en pausa. ESPACIO para seguir",
    "snake.over": "> segmentation fault (core dumped). ESPACIO para reintentar",

    "about.backend":
      
      
      "Desarrollando <strong>APIs RESTful</strong> con <strong>Java</strong>, <strong>Spring Boot</strong> y <strong>Spring MVC</strong>, y con <strong>Node.js</strong>. " +
      "Aplicando <strong>programación orientada a objetos (POO)</strong> y <strong>patrones de diseño</strong>, con el código organizado en una <strong>arquitectura en capas</strong> (controladores, servicios y acceso a datos). " +
      "Implementando autenticación y autorización con <strong>Spring Security</strong>, validación de datos de entrada y manejo consistente de respuestas HTTP y errores. " +
      "Trabajando con <strong>MySQL</strong> y <strong>SQL</strong> para la persistencia de datos: diseño de tablas, consultas e integración con la aplicación. " +
      "Desarrollando <strong>microservicios</strong> con <strong>Spring Cloud</strong> (API Gateway, Load Balancer, Circuit Breaker), mensajería asincrónica con <strong>RabbitMQ</strong>, seguridad con <strong>OAuth 2.0</strong> / OpenID Connect en <strong>Keycloak</strong>, bases de datos <strong>NoSQL</strong> con <strong>MongoDB</strong> y servicios en <strong>Go</strong>.",
    "about.frontend":
      
      "Desarrollando interfaces con <strong>JavaScript</strong>, <strong>HTML5</strong>, <strong>CSS3</strong> y <strong>React</strong>: diseño responsive, validación de formularios, aplicaciones CRUD e <strong>integración con APIs externas</strong>. Trabajando a partir de diseños y prototipos en <strong>Figma</strong>, y usando Miro para diagramas y planificación.",
    "about.practicesLabel": "[ WORKFLOW ]",
    "about.practices":
      
      
      "Control de versiones con <strong>Git</strong> y <strong>GitHub</strong>: ramas por funcionalidad y commits chicos y descriptivos. " +
      "Trabajando con <strong>metodologías ágiles / Scrum</strong> (sprints, dailies, retrospectivas), organizando tareas en <strong>Trello</strong> y comunicando con el equipo por <strong>Slack</strong>. " +
      "Probando endpoints con <strong>Postman</strong> y escribiendo <strong>tests automatizados de APIs</strong> con <strong>RestAssured</strong>. " +
      "Aplicando prácticas de <strong>DevOps</strong> y <strong>cloud computing</strong> en <strong>AWS</strong>: despliegues en <strong>Kubernetes</strong> con <strong>GitOps</strong> (Argo CD) y pipelines de <strong>CI/CD</strong> con <strong>Jenkins</strong>.",
    "about.educationLabel": "[ FORMACIÓN ]",
    "about.education":
      
      
      
      "Cursos en <strong>Digital House</strong>:" +
      '<span class="edu-item"><strong>Professional Developer</strong>: Java y POO, Spring Boot, Spring Security, MySQL, AWS y testing de software.</span>' +
      '<span class="edu-item"><strong>Back-End Developer</strong>: microservicios con Spring Cloud, seguridad con OAuth 2.0 / OpenID Connect, MongoDB / NoSQL, Kubernetes y testing automatizado.</span>' +
      '<span class="edu-item"><strong>Certificado de inglés EF SET</strong>: <strong>C2 Proficiente</strong> (74/100), 2025. <a class="edu-link" href="https://cert.efset.org/es/pVyabd" target="_blank" rel="noopener">[verificar]</a></span>' +
      '<span class="edu-item edu-item--next"><strong>Tecnicatura Universitaria en Programación</strong> en la <strong>UTN</strong> (Universidad Tecnológica Nacional), por comenzar. Carrera de 2 años: programación, <strong>bases de datos</strong>, sistemas operativos, metodología de sistemas y <strong>gestión de desarrollo de software</strong>.</span>',
    "about.hobbies":
      "Fuera del código: <strong>juegos con historias que atrapan</strong> (Night in the Woods, Life is Strange) y <strong>terror psicológico</strong> (Silent Hill), sin olvidarme de Resident Evil, Devil May Cry o Dark Souls. Música entre el <strong>metal</strong> (Gojira, Nine Inch Nails), el <strong>trip-hop</strong> (Portishead, Massive Attack) y el <strong>indie</strong> (The Cure, Sonic Youth). En <strong>cine</strong>: Lynch, Ghost World, Jacob's Ladder, Fallen Angels o Empire Records. Y <strong>diseño</strong> por hobby: piezas personales, esta página incluida.",
    "about.status": "[ EN_CURSO ]",
    "about.now": "Desarrollando proyectos back-end con Java, Spring Boot y microservicios, enfocados en diseño de APIs, seguridad, modelado de datos y escalabilidad.",

    "projects.code": "Código",
    "projects.demo": "Demo",

    "footer.built": "hecho con HTML, CSS y JavaScript",
  },
};
