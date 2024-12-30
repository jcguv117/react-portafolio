import { Typewriter } from 'react-simple-typewriter'

export const Home = () => {
  return (
    <section id="home" className="container mx-auto my-4 mt-0 pt-[15rem] pb-[20rem]">
          <h1 className="text-cyan-500 text-2xl sm:text-4xl mb-5 font-bold h-8">
            <Typewriter
              words={["Hola! 👋, soy", "Hello! 👋, I'm"]}
              loop={false}
              typeSpeed={120}
              deleteSpeed={90}
              delaySpeed={2900}
              cursor
            />
          </h1>
          <h1 className="text-zinc-100 text-4xl sm:text-6xl mb-5 font-bold">Carlos Guevara</h1>
          <h2 className="text-zinc-300 text-4xl sm:text-5xl mb-4 font-bold h-12">
            <Typewriter
                words={["Desarrollador Web Fullstack","Web Developer FullStack!"]}
                loop={false}
                typeSpeed={70}
                deleteSpeed={60}
                delaySpeed={2300}
                cursor
              />
          </h2>
          <div className="m-4 pt-[4rem]">
            <a href="https://drive.google.com/file/d/1GK_qo1f77W8ZbBhR-8ISmmujeK2d12tS/view?usp=share_link" target="_blank" rel="noreferrer"
              className="bg-sky-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
              Ver Curriculum Vitae
            </a>
          </div>
      <hr className="py-5 px-3 w-full opacity-0"></hr>
    </section>
  )
}



export default Home;
