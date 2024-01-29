import './App.css'
import Nav from './components/Nav'
import EducationCard from './components/EducationCard'
import Bar from './components/Bar'
import ProjectCard from './components/ProjectCard'
import SkillCard from './components/SkillCard'
import Contact from './components/Contact'


function App() {

  return (
    <main className='relative bg-black'>
      <Nav />
      <section className='text-white w-full h-[780px] px-10 mx-10 ' id='about'>
        <div className='mt-[100px] flex justify-center'>
          <div className='justify-center items-center '>
            <h1 className='mt-10 text-5xl font-palanquin font-bold'>Hello guys ! 👋</h1>
            <h1 className='text-6xl font-palanquin font-bold mt-5'>I am <span className='text-blue-400'>MANOJ KUMAR</span> ,</h1>
              <div className='w-[90%]'>
                <p className='mt-5 font-montserrat text-sm'>
                  I'm a recent graduate with a Bachelor of Technology degree, 
                  passionate about the world of DevOps and open-source technologies. 
                  My journey in academia has equipped me with a strong technical 
                  foundation and a commitment to ongoing learning and community 
                  engagement.
                </p>
              </div>
              <div className='mt-6'>
                  <a href="/pdf/resume.pdf" download="resume.pdf" className="  border border-slate-gray text-white p-3 rounded text-xl inline-block"
                  role="button">&#128196; Download Resume</a>
              </div>
            </div>

            <div className='rounded-full w-700 h-700 justify-center items-center pr-20 mt-3'>
              <img 
                src="src/assets/profile.jpg"
                alt="profile" 
                width={800}
                height={800}
                className='rounded-full border border-blue-300'
                />
            </div>
          </div>
          <a href="mailto: manojkumarbonala3@gmail.com" className='text-md hover:text-blue-300'> &#128231; manojkumarbonala3@gmail.com</a>
      </section>

      <Bar /> 
      
      <section className='text-white w-full' id='education'>
      <h1 className='text-center mt-[50px] text-5xl font-montserrat font-semibold'>Education</h1>
        
      <div className="w-3/4 mx-auto mt-10 mb-10">
          <EducationCard /> 
      </div>
      </section>

      <Bar />

      <section className='text-white w-full ' id='projects'>
        <h1 className='text-center mt-[50px] text-5xl font-montserrat font-semibold'>Projects</h1>

        <div className='w-[85%] mt-10 mb-10  mx-20 leading-normal '>
          <ProjectCard />
        </div>
      </section>

      <Bar />

      <section className='text-white w-full' id='skills'>
        <h1 className='text-center mt-[50px] text-5xl font-montserrat font-semibold'>Skills</h1>
        <div className='mt-10 mb-20'>
          <SkillCard />
        </div>
      </section>

      <Bar />

      <section className='text-white w-full mb-10' id='contact'>
        <h1 className='text-center mt-[50px] text-5xl font-montserrat font-semibold'>Connect</h1>
        <div>
          <Contact />
        </div>
      </section>

      <Bar />

      <section className='text-white w-full mt-5 text-center'>
        &copy; Copyright. All rights reserved.
      </section>
    </main>
  )
}

export default App
