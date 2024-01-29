import React from 'react'


function Nav() {
  return (
   <>
      <section className='flex justify-center'>
        <nav className="text-white w-[80%] mx-20 pt-20 px-10 font-montserrat">
          <ul className="flex justify-center gap-200">
            <li className="mr-6"><a href="#education" className="hover:text-blue-300">Education</a></li>
            <li className="mr-6"><a href="#projects" className="hover:text-blue-300">Projects</a></li>
            <li className="mr-6"><a href="#skills" className="hover:text-blue-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </section>
   </>
  )
}

export default Nav