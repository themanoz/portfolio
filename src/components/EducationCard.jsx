import React from 'react'

function EducationCard() {
  return (
        <div className='flex justify-between mt-5 font-montserrat'>
            <div>
                <h3 className="text-xl font-semibold text-white mt-[15px]">B.Tech in Computer Science</h3>
                <h3 className="text-blue-400 text-md font-semibold mt-1">RGUKT</h3>
                <h3 className="text-1.1em mt-1">2019 - 2023</h3>
            </div>
            <div className="timeline-body p-4 text-justify w-[70%]">
                <p className="text-md tracking-noraml">
                    I graduated with a Bachelor of Technology in Computer 
                    Science from Rajiv Gandhi University of Knowledge Technologies, 
                    Srikakulam. The program honed my analytical and problem-solving 
                    skills, providing a strong foundation in computer science. Excited 
                    to apply this knowledge in my professional career.
                </p>
            </div>
        </div>
  )
}

export default EducationCard