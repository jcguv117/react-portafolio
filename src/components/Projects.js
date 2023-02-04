
import React from "react";
import { projects } from "../data";

export default function Projects() {

  const linkWebsite = (link) => {
     if (!link) return; 
     return(
      <li className="text-3xl mb-3 p-2 rounded-full bg-gradient-to-r from-zinc-600 to-slate-600">
        <a target="_BLANk" className="text-gray-300  hover:tooltip hover:tooltip-open hover:tooltip-right stroke-0" data-tip="site" href={link} rel="noreferrer">
            <svg stroke="currentColor" fill="currentColor" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
        </a>
      </li>
     )
  }

  const linkGithub = (link) => {
      if(!link) return;
      return(
        <li className="text-3xl mb-3 p-2 rounded-full bg-gradient-to-r from-zinc-600 to-slate-600">
          <a target="_BLANk" className="text-gray-300 hover:tooltip hover:tooltip-open hover:tooltip-right stroke-0" data-tip="gitHub" href="https://github.com/jcguv117" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
        </li>
      );
  }

  return (
    <section id="projects" className="container mx-auto text-gray-400 body-font py-[120px]">
      <div className="">
        <div className="">
          <h1 className="md:text-4xl text-2xl font-medium title-font mb-4 text-white">
            Aplicaciones que he construido
          </h1>
        </div>
        <div className="flex flex-wrap grid grid-cols-2 m-4 gap-2">
          {projects.map((project) => (
            <div className="px-4 py-4 m-4 w-full h-80">  
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
                <ul className="flex justify-center flex-wrap gap-4 py-2 block z-[100]">
                    { linkWebsite(project.website) }
                    { linkGithub(project.github) }
                </ul>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
}