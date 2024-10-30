
import React, { useState } from "react";
import { projects } from "../data";
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
export default function Projects() {

  const [visible, setVisible] = useState(Array(projects.length).fill(true));
  const [showModal, setShowModal] = useState({open: false, img: ''});

  const handleOpenModal = (image) => {
    setShowModal({open:true, img: image});
  }
  
  const handleCloseModal = () => {
    setShowModal({open:false, img: ''});
  }

  const icons = {
    website   : "./icon/website.svg",
    github    : "./icon/github.svg",
    visible   : "./icon/eye.svg",
    notVisible: "./icon/eye-slash.svg",
    expand    : "./icon/expand.svg",
  }

  const containerDivButton = (icon, cb=()=>{}, tooltip='') => {
    return(
      <button className="group relative inline-flex items-center justify-center text-3xl p-2 rounded-full bg-gradient-to-r from-zinc-600 to-slate-600 select-none" onClick={cb}>
        <div className="text-gray-300 hover:tooltip hover:tooltip-open hover:tooltip-right stroke-0">
          <img className="h-6 w-6" src={icon} />
          <div className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all">
            <div className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-16 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2" >
              <div className="rounded-sm bg-black py-1 px-2">
                  <p className="whitespace-nowrap">{tooltip}</p>
              </div>
              <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
            </div>
          </div>
        </div>
      </button>
     )
  }

  const handleOpenURL = (url) => {
    url && window.open(url, '_blank', 'noopener,noreferrer');
  }

  const handleVisibleImage = (index) => {
    setVisible((prevVisible) => {
        const newVisible = [...prevVisible];
        newVisible[index] = !newVisible[index];
        return newVisible;
    });
  }

  const expandImageModal = () => {

    return(
      <ReactModal 
        isOpen={showModal.open}
        contentLabel="Modal Expand Image"
        style={{
          overlay: {
            backgroundColor: '#000000e0',
            zIndex: '150',
          },
          content: {
            top: '70px',
            button: '70px',
            right: '1%',
            left: '1%',
            padding: '0px',
            backgroundColor: 'transparent',
            border: 'none',
            alignContent: 'center',
          }
        }}
      >
      <div className="flex relative w-full">
        <button className="group fixed flex justify-center items-center right-[1%] -mt-12 z-[151] float-right rounded-full w-10 h-10 bg-gradient-to-r from-zinc-600 to-slate-600 select-none" onClick={() => handleCloseModal()}>
          <img className="h-8" src="./icon/xmark.svg"/>
        </button>
        <img className="w-full h-full rounded-md bg-auto bg-no-repeat bg-center" src={showModal.img} style={{minHeight: '30rem'}} />
      </div>
    </ReactModal>
    );
  }

  return (
    <section id="projects" className="container mx-auto text-gray-400 body-font pt-[10rem] pb-[10rem]">
      <div className="">
        <div className="">
          <h1 className="md:text-4xl text-2xl font-medium title-font mb-4 text-white">
            Aplicaciones que he construido
          </h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 m-4 gap-2">
          {projects.map((project, index) => (
            <div 
              className="p-4 my-8 w-full h-96"
              key={index}
              >  
                <div className="flex relative h-full">
                  <img
                    id={"img_prj_" + index}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full z-20 text-left opacity-100 hover:opacity-0 animate-fade-in-down rounded-md
                      hover:animate-fade-out-down ${visible[index] ? 'block' : 'hidden'}`}
                    src={project.image}
                  />
                  <div className="relative w-full h-full z-10 p-2">
                    <h1 className="title-font text-lg font-medium text-white py-2 mb-3">
                      {project.title}
                    </h1>
                    <h2 className="tracking-widest text-sm title-font font-medium text-cyan-500 mb-1">
                      {project.subtitle}
                    </h2>
                    <ul className="my-2 text-white">
                      { 
                        project.tools.map((tool) => (
                          <li key={tool} className="mx-1 inline before:content-['✅']">
                            {tool}
                          </li>
                        ))
                      }
                    </ul>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
                <div className="flex justify-center flex-wrap gap-4 py-2 z-[100]">
                    { project.website && containerDivButton(icons.website, () => handleOpenURL(project.website), 'Visitar Sitio Web') }
                    { project.github && containerDivButton(icons.github, () => handleOpenURL(project.github), 'Ir a repositorio') }
                    { 
                        visible[index] 
                         ? containerDivButton(icons.visible, () => handleVisibleImage(index), 'Mostrar/Ocultar Imagen') 
                         : containerDivButton(icons.notVisible, () => handleVisibleImage(index), 'Mostrar/Ocultar Imagen')
                    }
                    { containerDivButton(icons.expand, () => handleOpenModal(project.image), 'Ver imagen') }
                </div>
            </div>
          ))}
        </div> 
        <div>
            {expandImageModal()}
        </div>
      </div>
    </section>
  );
}