import { faReact, faSquareJs, faPhp, faCss3, faHtml5, faBootstrap, faSquareGit } from '@fortawesome/free-brands-svg-icons'
//images
import image1 from './assets/sispag.png';
import image2 from './assets/bitacora.png';

export const projects = [
    {
      title: "NODE SCRAPING",
      subtitle: "Aplicación de Scraping de datos",
      description:
        "Es una herramienta sencilla para la obtención de información actualizada sobre los tipos de cambio publicados por el Banco de México. A través del formulario, puedes generar automáticamente un archivo PDF con los datos más recientes, extraídos directamente de la página fuente.",
      image: "/images/projects/app-scraping.png",
      website: null,
      github: "https://github.com/jcguv117/node-scraping/",
      tools: ['NODE', 'HTML5', 'CSS', 'Puppeteer', 'Express'],
    },
    {
      title: "SIMULADOR DE MARCADORES",
      subtitle: "Simulador de google maps",
      description:
        "Esta aplicación genera marcadores con información aleatoria dentro del mapa de google maps, utiliza un archivo GeoJSON para dibujar un polígono de coordenadas en el mapa y agrega marcadores dentro de su área.",
      image: "/images/projects/app-map-google.png",
      website: "https://simulador-map-google-jcguv117s-projects.vercel.app/",
      github: "https://github.com/jcguv117/ag-map-google/",
      tools: ['Angular', 'TailwindCSS', 'TS', 'Google Map Api'],
    },
    {
      title: "PointOfSale App",
      subtitle: "Demo Punto de Venta",
      description:
        "Esta aplicación es un punto de venta sencillo que utiliza el 'local storage' con el manejador de Zustand para almacenar las ordenes activas, sus funciones consisten en administrar las ordenes y mostrar sus totales.",
      image: "/images/projects/app-pos.png",
      website: "https://neon-tulumba-8dd4bd.netlify.app/",
      github: "https://github.com/jcguv117/prct-pos-app",
      tools: ['Preact', 'TailwindCSS', 'TS', 'Zustand'],
    },
    {
      title: "CALCULADORA DE AMORTIZACIONES",
      subtitle: "Simulador de amortizaciones",
      description:
        "Esta aplicación funciona como una herramienta para calcular una tabla de amortización de pagos en base al monto, tasa de interés y su cantidad de periodos, además de proporcionar herramientas para exportar los datos generados.",
      image: "/images/projects/app-amortizacion.png",
      website: "https://jcguv117.github.io/amortization-calculator/",
      github: "https://github.com/jcguv117/amortization-calculator/",
      tools: ['HTML', 'TailwindCSS', 'JQuery', 'DataTables'],
    },
    {
      title: "PASSWORD GENERATOR",
      subtitle: "Generador de contraseñas",
      description:
        "Esta herramienta tiene como función generar contraseñas aleatorias, permite crear contraseñas únicas y robustas de manera personalizada. El usuario puede ajustar diversos parámetros, como la longitud de la contraseña, el conjunto de caracteres permitidos (letras mayúsculas y minúsculas, números, símbolos) y la complejidad de las combinaciones.",
      image: "/images/projects/app-password.png",
      website: "https://jcguv117.github.io/password-generator/",
      github: "https://github.com/jcguv117/password-generator/",
      tools: ['HTML', 'TailwindCSS', 'JS'],
    },
    {
      title: "SISPAG",
      subtitle: "Sistema de Pagarés",
      description:
        "Sistema privado, elaborado a medida, en el área inmobiliaria. Es un sistema que desarrolle para la empresa Exelco, partiendo desde todo el ciclo de vida de un sistema de software.",
      image: image1,
      website: "",
      github: "https://github.com/jcguv117/sistema-de-pagares",
      tools: ['PHP', 'JS', 'Bootstrap', 'JQuery'],
    },
    {
      title: "BITACORA TRACTOR",
      subtitle: "Bitacora de Monitoreo de Unidades",
      description:
        "Sistema de monitoreo de unidades para empresa transportista, realiza las funciones CRUD con permisos de usuario y modificaciones instantaneas entre usuarios para exportar la información a otro sistema propio de la empresa.",
      image: image2,
      website: "",
      github: "https://github.com/jcguv117/BitacoraTractor",
      tools: ['React', 'JS', 'Material UI', 'Node'],
    },
  ];


  export const skills = [
    {name: 'React',       Icon: faReact,      url: 'https://cdn.iconscout.com/icon/free/png-512/react-3-1175109.png'},
    {name: 'JavaScript',  Icon: faSquareJs,   url: 'https://cdn.sanity.io/images/jqaxrty6/production/8ebd4616c7c612766954e1274a8c99460ac21e7e-225x225.png'},
    {name: 'PHP',         Icon: faPhp,        url: 'https://cdn.iconscout.com/icon/free/png-512/php-99-1175127.png'},
    {name: 'MySQL',       Icon: null,         url: 'https://cdn.iconscout.com/icon/free/png-512/mysql-21-1174941.png'},
    {name: 'NodeJS',      Icon: null,         url: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png'},
    {name: 'CSS3',        Icon: faCss3,       url: 'https://cdn.sanity.io/images/jqaxrty6/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png'},
    {name: 'Html5',       Icon: faHtml5,      url: 'https://cdn.sanity.io/images/jqaxrty6/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png'},
    {name: 'TailwindCSS', Icon: null,         url: 'https://cdn.sanity.io/images/jqaxrty6/production/1141714a4d91c022a7712a8e78e3070d58590ddd-1024x1024.png'},
    {name: 'Bootstrap',   Icon: faBootstrap,  url: 'https://cdn.sanity.io/images/jqaxrty6/production/59f072c7a84791470c99c74a7e349d2caf5d7445-1024x860.png'},
    {name: 'Git',         Icon: faSquareGit,  url: 'https://cdn.sanity.io/images/jqaxrty6/production/fb76165a82a59baf6606873c61b7fa68dfafa101-1200x1200.png'},
    {name: 'JQuery',      Icon: null,         url: 'https://cdn.sanity.io/images/jqaxrty6/production/cbaf286b0d917e923f20f659c047f84f013e90a7-512x512.png'},
    {name: 'TypeScript',  Icon: faSquareGit,  url: 'https://cdn.sanity.io/images/jqaxrty6/production/64f3e20f8ad906d56dea96863b6db87fad6efb52-64x64.png'},
    {name: 'Angular',     Icon: null,         url: 'https://static-00.iconduck.com/assets.00/file-type-angular-icon-476x512-31akx6uw.png'},
    {name: 'C#',          Icon: null,         url: 'https://static-00.iconduck.com/assets.00/c-sharp-c-icon-456x512-9sej0lrz.png'},
    {name: 'Laravel',     Icon: null,         url: 'https://cdn.iconscout.com/icon/free/png-256/laravel-226015.png'},
  ];