import React from 'react'
import {motion, AnimatePresence, anticipate} from 'framer-motion';

function Loader() {

  
  return (
    <>
    <AnimatePresence>
    <motion.div   initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3.5,delay:3,ease:"anticipate"}} className='flex justify-center bg-white items-center fixed z-50 h-screen w-[100%] transition-opacity ease-in-out '>

        <motion.div initial={{opacity:1,scale:0.9}}  animate={{opacity:0, scale:1}} transition={{duration:3,delay:3,ease:"anticipate"}} className='flex justify-center items-center aspect-square w-[50%] sm:w-[28%] border-solid border-8 border-[#777B7E] drop-shadow-lg transition-opacity ease-in-out '>
        
        <div className='aspect-square w-[40%] sm:w-[33.33%] border-solid drop-shadow-2xl bg-amber-300 transition-opacity ease-in-out'>

        </div>

        </motion.div>
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default Loader