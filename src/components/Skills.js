import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto my-4 py-[10rem]">
        <h1 className="md:text-4xl text-2xl font-medium title-font mb-4 text-white">
          Conocimientos de tecnologías.
        </h1>
        <div className="w-full lg:w-1/2 px-4 mx-auto grid gap-2 grid-cols-2 sm:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.name} className="m-2 border-2 border-cyan-500 hover:border-none rounded-lg">
              <div className="flex items-center justify-center w-full font-bold text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-sky-900 hover:text-blue-200 hover:shadow-lg active:opacity-85 p-4 h-full">
                {/* <FontAwesomeIcon icon={faCheck} className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
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