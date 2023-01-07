import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSquareJs, faPhp, faCss3, faHtml5, faBootstrap, faSquareGit } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const skills = [
  {name: 'React', Icon: faReact, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'},
  {name: 'JavaScript', Icon: faSquareJs, url: 'https://cdn.sanity.io/images/jqaxrty6/production/8ebd4616c7c612766954e1274a8c99460ac21e7e-225x225.png'},
  {name: 'PHP', Icon: faPhp, url: 'https://www.freepnglogos.com/uploads/php-logo-png/php-logo-png-transparent-svg-vector-bie-supply-1.png'},
  {name: 'MySQL', Icon: null, url: 'https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png'},
  {name: 'Oracle', Icon: null, url: 'https://w7.pngwing.com/pngs/655/464/png-transparent-oracle-database-oracle-corporation-logo-others-text-trademark-logo.png'},
  {name: 'CSS3', Icon: faCss3, url: 'https://cdn.sanity.io/images/jqaxrty6/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png'},
  {name: 'Html5', Icon: faHtml5, url: 'https://cdn.sanity.io/images/jqaxrty6/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png'},
  {name: 'TailwindCSS', Icon: null, url: 'https://cdn.sanity.io/images/jqaxrty6/production/1141714a4d91c022a7712a8e78e3070d58590ddd-1024x1024.png'},
  {name: 'Bootstrap', Icon: faBootstrap, url: 'https://cdn.sanity.io/images/jqaxrty6/production/59f072c7a84791470c99c74a7e349d2caf5d7445-1024x860.png'},
  {name: 'Git', Icon: faSquareGit, url: 'https://cdn.sanity.io/images/jqaxrty6/production/fb76165a82a59baf6606873c61b7fa68dfafa101-1200x1200.png'},
  {name: 'JQuery', Icon: null, url: 'https://cdn.sanity.io/images/jqaxrty6/production/cbaf286b0d917e923f20f659c047f84f013e90a7-512x512.png'},
  {name: 'TypeScript', Icon: faSquareGit, url: 'https://cdn.sanity.io/images/jqaxrty6/production/64f3e20f8ad906d56dea96863b6db87fad6efb52-64x64.png'},
];

export default function Skills() {
  return (
    <section id="skills" className="container my-4 py-4">
        <h3 className="text-zinc-300">Conocimientos de tecnologías.</h3>
        <div className="flex flex-wrap w-full lg:w-1/2 sm:mx-auto sm:mb-2 grid gap-2 grid-cols-2 sm:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.name} className="m-2">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <FontAwesomeIcon icon={faCheck} className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  <img className="w-16 h-16" src={skill.url} alt={skill.name} />
                  <tool-tip role="tooltip">{skill.name}</tool-tip>
                </span>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}