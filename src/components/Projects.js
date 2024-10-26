
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

  const containerDivButton = (icon, cb=()=>{}) => {
    return(
      <div className="flex justify-center text-3xl p-2 rounded-full bg-gradient-to-r from-zinc-600 to-slate-600 select-none">
        <button className="text-gray-300 hover:tooltip hover:tooltip-open hover:tooltip-right stroke-0" onClick={cb}>
          <img className="h-6 w-6" src={icon} />
        </button>
      </div>
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
            inset: '70px',
            padding: '0px',
          }
        }}
      >
      <div className="flex relative h-full w-full">
        <button className="fixed right-[1em] z-[151] float-right rounded-full bg-gray-100/75 hover:bg-gray-100 w-12" onClick={() => handleCloseModal()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </button>
        <img className="w-full bg-auto bg-no-repeat bg-center" src={showModal.img} alt="project" />
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
                    className={`absolute inset-0 w-full h-full z-20 text-left opacity-100 hover:opacity-0 animate-fade-in-down 
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
                    { project.website && containerDivButton(icons.website, () => handleOpenURL(project.website)) }
                    { project.github && containerDivButton(icons.github, () => handleOpenURL(project.github)) }
                    { 
                        visible[index] 
                         ? containerDivButton(icons.visible, () => handleVisibleImage(index)) 
                         : containerDivButton(icons.notVisible, () => handleVisibleImage(index))
                    }
                    { containerDivButton(icons.expand, () => handleOpenModal(project.image)) }
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