import React from "react";
import picture from '../assets/profile-pic.png';

export default function About() {
  return (
    <section id="about" className="container mx-auto my-4 py-[15rem]">
      
      <div className="container px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <p className="text-gray-300 mb-5 text-xl text-justify">
                <span className="text-cyan-600 font-bold">Ingeniero en Sistemas Computacionales.</span><br/>
                Hola, tengo 26 años, mi experiencia como <b className="text-cyan-700">Desarrollador Web FullStack</b> es +4 años. 
                En mi experiencia laboral e utilizado múltiples lenguajes de programación 
                para llevar a cabo siempre una solución adecuada a lo que se requiere desarrollar.
                Actualmente sigo en constante aprendizaje en el desarrollo FullStack y de técnicas como principios SOLID, 
                para profundizar mis conocimientos, mejorar la calidad y agilidad en el desarrollo de software.
          </p>
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