import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto my-4 py-[120px]">
        <h1 className="md:text-4xl text-2xl font-medium title-font mb-4 text-white">
          Conocimientos de tecnologías.
        </h1>
        <div className="flex flex-wrap w-full lg:w-1/2 px-4 mx-auto grid gap-2 grid-cols-2 sm:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.name} className="m-2">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <FontAwesomeIcon icon={faCheck} className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  <img className="skill-img w-16 h-16 hover:animate-bounce" src={skill.url} alt={skill.name} />
                  <tool-tip role="tooltip">{skill.name}</tool-tip>
                </span>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}