import React from 'react'

function Loader() {

  
  return (
    <>

    <div className='flex justify-center items-center fixed bg-white z-50 h-screen w-[100%] transition-opacity ease-in-out '>
        <div className='flex justify-center items-center aspect-square w-[50%] sm:w-[28%] border-solid border-8 border-[#777B7E] drop-shadow-lg transition-opacity ease-in-out'>
        <div className='aspect-square w-[40%] sm:w-[33.33%] border-solid drop-shadow-2xl bg-amber-300 transition-opacity ease-in-out'>

        </div>

        </div>
    </div>
    </>
  )
}

export default Loader