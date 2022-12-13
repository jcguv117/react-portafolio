import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSquareJs, faPhp, faCss3, faHtml5, faBootstrap, faSquareGit } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const skills = [
  {name: 'React', Icon: faReact},
  {name: 'JavaScript', Icon: faSquareJs},
  {name: 'PHP', Icon: faPhp},
  {name: 'CSS3', Icon: faCss3},
  {name: 'Html5', Icon: faHtml5},
  {name: 'TailwindCSS', Icon: null},
  {name: 'Bootstrap', Icon: faBootstrap},
  {name: 'Git', Icon: faSquareGit},
];

export default function Skills() {
  return (
    <section id="skills">
        <h3 className="text-zinc-300">Conocimientos de tecnologías.</h3>
        <div className="flex flex-wrap lg:w-1/3 sm:mx-auto sm:mb-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/3 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <FontAwesomeIcon icon={faCheck} className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  <FontAwesomeIcon icon={skill.Icon} className="text-zinc-300 w-6 h-6 flex-shrink-0 mr-4" />
                  <tool-tip role="tooltip">{skill.name}</tool-tip>
                </span>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}