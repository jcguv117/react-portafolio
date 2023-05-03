
import React, { useState } from "react";
import { projects } from "../data";
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
export default function Projects() {

  const [visible, setVisible] = useState({show: Array(projects.length).fill(true)});
  const [showModal, setShowModal] = useState({open: false, img: ''});

  const handleOpenModal = (image) => {
    setShowModal({open:true, img: image});
  }
  
  const handleCloseModal = () => {
    setShowModal({open:false, img: ''});
  }

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
          <a target="_BLANk" className="text-gray-300 hover:tooltip hover:tooltip-open hover:tooltip-right stroke-0" data-tip="gitHub" href={link} rel="noreferrer"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
        </li>
      );
  }

  const visibleImg = (id, index) => {
    const showState = visible.show[index];
    document.getElementById('div_prj_' + id).innerHTML = (showState)
      ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"/></svg>`
    document.getElementById('img_prj_' + id).style.display = (!showState) 
      ? 'block' 
      : 'none';
    visible.show[index] = !showState;
    setVisible(visible);
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
        <div className="flex flex-wrap grid md:grid-cols-2 grid-cols-1 m-4 gap-2">
          {projects.map((project) => (
            <div 
              className="p-4 my-8 w-full h-96"
              key={project.id}
              >  
                <div className="flex relative h-full">
                  <img
                    id={"img_prj_"+project.id}
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
                <ul className="flex justify-center flex-wrap gap-4 py-2 block z-[100]">
                    { linkWebsite(project.website) }
                    { linkGithub(project.github) }
                    <li className="text-3xl mb-3 p-2 rounded-full bg-gradient-to-r from-zinc-600 to-slate-600 w-12" >
                      <div id={"div_prj_"+project.id} className="text-gray-300  hover:tooltip hover:tooltip-open hover:tooltip-right stroke-0 cursor-pointer z-100" onClick={ () => visibleImg(project.id, projects.indexOf(project))} >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"/></svg>
                      </div>
                    </li>
                    <li className="text-3xl mb-3 p-2 rounded-full bg-gradient-to-r from-zinc-600 to-slate-600 w-12" >
                      <div id={"div_prj_"+project.id} className="text-gray-300  hover:tooltip hover:tooltip-open hover:tooltip-right stroke-0 cursor-pointer z-100" onClick={ () => handleOpenModal(project.image)} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                      </div>
                    </li>
                </ul>
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