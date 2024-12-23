import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    portfolioVersion: 'Portfolio version 1.0',
    home: 'Home',
    projects: 'Projects',
    aboutMe: 'About me',
    blog: 'Blog',
    resume: 'Resume',
    welcome: "Hello",
    im: "I'm",
    miniDesc: "Full Stack Developer with a passion for creating innovative and efficient solutions. I thrive on building robust applications and continuously expanding my knowledge in the ever-evolving field of technology.",
    who: "Who",
    amI: "am I?",
    aboutText1: "👋🏻 Hi! I’m Mario, a web developer with experience in both Front End and Back End. I specialize in technologies like JavaScript, VueJS, NodeJS, PHP, Laravel, MySQL, TailwindCSS, and Bootstrap. I studied Web Application Development at Institut Estatut de Rubí.",
    aboutText2: "🎯 My goal is to craft dynamic web experiences and bring innovation to every project I work on. With strong teamwork and organizational skills, I focus on delivering excellence while exploring new technologies and trends.",
    aboutText3: "📩 I’m open to new opportunities and collaborations. Feel free to reach out if you’d like to work together!",
    services: "Services",
    servicesTitle: "Custom solutions for web, mobile, and design, tailored to your needs",
    titleService1: "Web Development and Backend",
    descService1: "I create dynamic websites and web applications, using Vue.js, Tailwind CSS, and backend frameworks to ensure high performance, security, and maintainability.",
    titleService2: "Mobile Development",
    descService2: "I develop native and cross-platform mobile apps for Android and iOS, focusing on intuitive design and seamless performance.",
    titleService3: "Graphic Design and UI/UX",
    descService3: "I design visually appealing graphics and user interfaces, ensuring a great user experience with a focus on usability and accessibility.",
    letsTalk: "Let's talk",
    contactMessage: "Ask me anything and I'd love to hear your proposal!",
    fullName: "Full Name",
    emailAddress: "Email address",
    message: "Message",
    send: "Send",
    followMe: "Follow me",
  },
  es: {
    portfolioVersion: 'Versión del portfolio 1.0',
    home: 'Inicio',
    projects: 'Proyectos',
    aboutMe: 'Sobre mi',
    blog: 'Blog',
    resume: 'Curriculum',
    welcome: "Hola",
    im: "soy",
    miniDesc: "Desarrollador Full Stack con pasión por crear soluciones innovadoras y eficientes. Me encanta construir aplicaciones robustas y expandir continuamente mi conocimiento en el campo tecnológico en constante evolución.",
    who: "¿Quién",
    amI: "soy?",
    aboutText1: "👋🏻 ¡Hola! Soy Mario, un desarrollador web con experiencia en Front End y Back End. Me especializo en tecnologías como JavaScript, VueJS, NodeJS, PHP, Laravel, MySQL, TailwindCSS y Bootstrap. Estudié Desarrollo de Aplicaciones Web en el Institut Estatut de Rubí.",
    aboutText2: "🎯 Mi objetivo es crear experiencias web dinámicas e innovar en cada proyecto en el que trabajo. Con fuertes habilidades de trabajo en equipo y organización, me enfoco en ofrecer excelencia mientras exploro nuevas tecnologías y tendencias.",
    aboutText3: "📩 Estoy abierto a nuevas oportunidades y colaboraciones. Siéntase libre de ponerse en contacto si desea trabajar juntos.",
    services: "Servicios",
    servicesTitle: "Soluciones personalizadas para web, móvil y diseño, adaptadas a sus necesidades",
    titleService1: "Desarrollo Web y Backend",
    descService1: "Crear sitios web dinámicos y aplicaciones web, utilizando Vue.js, Tailwind CSS y frameworks de backend para garantizar alto rendimiento, seguridad y mantenibilidad.",
    titleService2: "Desarrollo Móvil",
    descService2: "Desarrollar aplicaciones móviles nativas y multiplataforma para Android y iOS, centrada en diseño intuitivo y rendimiento sin interrupciones.",
    titleService3: "Diseño gráfico y UI/UX",
    descService3: "Diseñar gráficos visualmente atractivos y interfaces de usuario, garantizando una gran experiencia de usuario con un enfoque en usabilidad y accesibilidad.",
    letsTalk: "Hablemos",
    contactMessage: "Pregúntame cualquier cosa y me encantaría escuchar tu propuesta!",
    fullName: "Nombre completo",
    emailAddress: "Correo electrónico",
    message: "Mensaje",
    send: "Enviar",
    followMe: "Sígueme",
  },
};

const userLanguage = localStorage.getItem('language') || navigator.language || navigator.userLanguage; // Detecta el idioma del sistema
const defaultLocale = userLanguage.startsWith("es") ? "es" : "en"; // Por defecto español o inglés

const i18n = createI18n({
  locale: defaultLocale, // Idioma inicial
  fallbackLocale: "en", // Idioma por defecto si no está disponible el detectado
  messages,
});

export default i18n;
