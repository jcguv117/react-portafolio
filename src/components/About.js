import React from "react";
import picture from '../assets/profile-pic.png';

export default function About() {
  return (
    <section id="about" className="container mx-auto my-4 py-[15rem]">
      
      <div className="container px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="ml-4 col-span-1">
          <div>
            <span className="text-2xl text-cyan-600 font-bold">Ingeniero en Sistemas Computacionales.</span>
            <p className="text-gray-300 mb-5 text-xl text-justify"> 
                  En mi experiencia laboral  como <b className="text-cyan-700">Desarrollador Web FullStack</b> e utilizado múltiples lenguajes de programación 
                  para llevar a cabo siempre una solución adecuada a lo que se requiere desarrollar.
                  Actualmente sigo en constante aprendizaje en el desarrollo FullStack y de técnicas como principios SOLID, 
                  para profundizar mis conocimientos, mejorar la calidad y agilidad en el desarrollo de software.
            </p>
            
          </div>
        </div>
        <div className="flex justify-center">
          <picture className="w-full">
            <img className="h-96 mx-auto" src={picture} alt="profile-pic"/>
          </picture>
        </div>
      </div>

    </section>
  );
}