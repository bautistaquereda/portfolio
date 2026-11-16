/* =====================================================================
   ✏️  ACÁ AGREGÁS TUS PROYECTOS
   ---------------------------------------------------------------------
   Cada proyecto es un objeto con:
     name         → nombre del proyecto
     logo         → ruta a la imagen del logo (ej: "assets/logos/mi-app.png").
                    Si lo dejás vacío ("") se muestran las iniciales.
     description  → descripción corta en los dos idiomas: { en: "...", es: "..." }
                    (también acepta un texto simple si no querés traducirla)
     technologies → lista de tecnologías. Usá los nombres de TECH_ICONS
                    (abajo). Si ponés uno que no está, se muestra sin ícono.
     repo / demo  → links opcionales (dejalos en "" si no tenés)
   ===================================================================== */

/* Mientras esté vacía, la sección muestra el bloque "WORK IN PROGRESS".
   Cuando tengas proyectos, agregalos acá y aparecen solos como tarjetas.
   Ejemplo de formato:
     {
       name: "Inventory API",
       logo: "",
       description: {
         en: "RESTful API for managing products, stock and orders. Layered architecture with DTOs, validation and global error handling.",
         es: "API RESTful para gestionar productos, stock y pedidos. Arquitectura en capas con DTOs, validaciones y manejo global de errores.",
       },
       technologies: ["Java", "Spring Boot", "MySQL", "Git"],
       repo: "https://github.com/bautistaquereda",
       demo: "",
     },
     {
       name: "Task Manager",
       logo: "",
       description: {
         en: "Full-stack task management app with JWT authentication, a Node.js/Express back-end and a responsive React front-end.",
         es: "Aplicación full-stack de gestión de tareas con autenticación JWT, back-end en Node.js/Express y front-end responsivo en React.",
       },
       technologies: ["Node.js", "Express", "React", "MySQL"],
       repo: "https://github.com/bautistaquereda",
       demo: "",
     },
     {
       name: "Cloud Deploy Demo",
       logo: "",
       description: {
         en: "Spring Boot service deployed on AWS, exploring cloud infrastructure, environment configuration and CI basics.",
         es: "Servicio en Spring Boot desplegado en AWS, explorando infraestructura cloud, configuración de entornos y nociones de CI.",
       },
       technologies: ["Java", "Spring Boot", "AWS", "Docker"],
       repo: "",
       demo: "",
     },
*/
const PROJECTS = [];

/* ---------------------------------------------------------------------
   Íconos de tecnologías (Devicon). Para agregar una nueva, buscala en
   https://devicon.dev y sumala acá con el mismo formato.
   --------------------------------------------------------------------- */
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

const TECH_ICONS = {
  "Java":        `${DEVICON}/java/java-original.svg`,
  "Spring Boot": `${DEVICON}/spring/spring-original.svg`,
  "Node.js":     `${DEVICON}/nodejs/nodejs-original.svg`,
  "Express":     `${DEVICON}/express/express-original.svg`,
  "MySQL":       `${DEVICON}/mysql/mysql-original.svg`,
  "JavaScript":  `${DEVICON}/javascript/javascript-original.svg`,
  "TypeScript":  `${DEVICON}/typescript/typescript-original.svg`,
  "HTML":        `${DEVICON}/html5/html5-original.svg`,
  "CSS":         `${DEVICON}/css3/css3-original.svg`,
  "React":       `${DEVICON}/react/react-original.svg`,
  "Git":         `${DEVICON}/git/git-original.svg`,
  "GitHub":      `${DEVICON}/github/github-original.svg`,
  "AWS":         `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  "Docker":      `${DEVICON}/docker/docker-original.svg`,
  "PostgreSQL":  `${DEVICON}/postgresql/postgresql-original.svg`,
  "MongoDB":     `${DEVICON}/mongodb/mongodb-original.svg`,
  "Postman":     `${DEVICON}/postman/postman-original.svg`,
  "Jira":        `${DEVICON}/jira/jira-original.svg`,
  "Trello":      `${DEVICON}/trello/trello-original.svg`,
  "Slack":       `${DEVICON}/slack/slack-original.svg`,
  "Figma":       `${DEVICON}/figma/figma-original.svg`,
  "Go":          `${DEVICON}/go/go-original.svg`,
  "Kubernetes":  `${DEVICON}/kubernetes/kubernetes-original.svg`,
  "Jenkins":     `${DEVICON}/jenkins/jenkins-original.svg`,
  "RabbitMQ":    `${DEVICON}/rabbitmq/rabbitmq-original.svg`,
  "Argo CD":     `${DEVICON}/argocd/argocd-original.svg`,
};

/* Tecnologías de la sección "About me", agrupadas ($ ls ./stack/<grupo>) */
const STACK = {
  "back-end":   ["Java", "Spring Boot", "Node.js", "Go", "RabbitMQ"],
  databases: ["MySQL", "MongoDB"],
  devops:    ["AWS", "Kubernetes", "Jenkins", "Argo CD"],
  "front-end":  ["JavaScript", "React", "HTML", "CSS"],
  tools:     ["Git", "GitHub", "Postman", "Trello", "Slack", "Figma"],
};
