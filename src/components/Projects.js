
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="">
        <div className="">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Aplicaciones que he construido
          </h1>
        </div>
        <div className="flex flex-wrap grid grid-cols-2 m-4 gap-2">
          {projects.map((project) => (
            <div className="p-4 w-full h-80">  
              <a
                href={project.link}
                key={project.image}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full">
                <div className="flex relative h-full">
                  <img
                    alt={project.title}
                    className="absolute inset-0 w-full h-full z-20 text-left
                    opacity-100 hover:opacity-0 animate-fade-in-down hover:animate-fade-out-down"
                    src={project.image}
                  />
                  <div className="relative w-full h-full z-10 p-2">
                    <h1 className="title-font text-lg font-medium text-white py-2 mb-3">
                      {project.title}
                    </h1>
                    <h2 className="tracking-widest text-sm title-font font-medium text-cyan-500 mb-1">
                      {project.subtitle}
                    </h2>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
}