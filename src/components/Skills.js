import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto my-4 py-[10rem]">
        <h1 className="md:text-4xl text-2xl font-medium title-font mb-4 text-white">
          Conocimientos de tecnologías.
        </h1>
        <div className="w-full lg:w-1/2 px-4 mx-auto grid gap-2 grid-cols-2 sm:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.name} className="group m-2 border-2 border-cyan-500 hover:border-none rounded-lg select-none">
              <div className="flex items-center justify-center w-full font-bold text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 group-hover:scale-110 group-hover:rotate-2 group-hover:bg-sky-900 group-hover:text-blue-200 group-hover:shadow-lg active:opacity-85 p-4 h-full">
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