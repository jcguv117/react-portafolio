import React from "react";

export default function Navbar() {
    return (
      <section id="Navbar">
      
        <div className="container mx-auto w-10/12">
          <nav>
            <a href="#">Home</a>
            <a href="#">Acerca de mi</a>
            <a href="#">Habilidades</a>
            <a href="#">Proyectos</a>
            <a href="#">Contacto</a>
            <div className="animation start-home"></div>
          </nav>
        </div>
      </section>
    );
  }