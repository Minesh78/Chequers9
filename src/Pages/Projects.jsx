import React from 'react';
import { projectImages } from '../Data';

function Projects() {
  return (
    <>  
    <div className='flex mt-24 flex-col justify-center items-center'>

    {projectImages.map((project,index)=>(
      <div className=' w-[95%]  m-auto flex flex-col  '>

        <div className=' md:w-[60%] w-[90%] m-auto mb-16 max-h-screen flex flex-col justify-center items-center rounded-xl overflow-hidden' >
          <div className=' m-auto '> 
           <img className="" src={project} alt=''/>

         </div>
         <div className=' w-[100%] bg-[#777B7E] text-white p-2 '>
         <h2 className='px-2 text-xl'> Project Name</h2>

            <p className=' px-3'>
              About Project 
              fasdkfmpas
              asdfa
              sdf
              asdfadfa
              sdf
            </p>
         </div>


        </div>
        </div>
          ))}
      
        </div>


    </>
  )
}

export default Projects