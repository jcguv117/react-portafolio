import { faReact, faSquareJs, faPhp, faCss3, faHtml5, faBootstrap, faSquareGit } from '@fortawesome/free-brands-svg-icons'
//images
import image1 from './assets/sispag.png';
import image2 from './assets/bitacora.png';
import image3 from './assets/portafolio.png';
import image4 from './assets/siga.png';
import image5 from './assets/hispanic.png';

export const projects = [
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
      website: "http://rexsabana.sytes.net/bitacora-tractor/#/",
      github: "https://github.com/jcguv117/BitacoraTractor",
      tools: ['React', 'JS', 'Material UI', 'Node'],
    },
    // {
    //   title: "PORTAFOLIO",
    //   subtitle: "Portafolio Personal",
    //   description:
    //     "Portafolio de proyectos elaborado por mi.",
    //   image: image3,
    //   website: "https://carlosguevara.netlify.app/",
    //   github: "https://github.com/jcguv117/react-portafolio",
    //   tools: ['React', 'JS', 'HTML5', 'TailwindCSS'],
    // },
    {
      title: "S.I.G.A.",
      subtitle: "Sistema de Inventario",
      description:
        "Sistema de inventario, elaborardo para la empresa Grancompu, sistema que ayuda para inventariar productos comerciales, tales como monitores, computadoras, laptops y accesorios.",
      image: image4,
      website: "http://grancompu.ddns.net:88/",
      github: "",
      tools: ['PHP', 'HTML5', 'Bootstrap', 'JQuery'],
    },
    {
      title: "HISPANICINTERNATIONAL",
      subtitle: "Catálogo de productos ",
      description:
        "Landingpage de catalogos de productos para empresa comercializadora, se realizó con el fin de renovar su sitio web antiguo y promover de mejor manera los servicios que realiza la empresa.",
      image: image5,
      website: "http://grancompu.com",
      github: "",
      tools: ['Vue', 'HTML5', 'JS', 'CSS'],
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