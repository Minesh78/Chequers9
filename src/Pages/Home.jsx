import React, { useEffect, useState } from 'react'
// import ImageSlideshow from '../Components/ImageSlideshow/ImageSlideshow'
import ImageSlideshow from '../Components/ImageSlideshow'

const boxes = ['B1', 'B2' ,'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9']

function Home() {



  return (
    <>
        {/* This is a upper div which cover the whole screen         */}
       <div className='flex justify-center items-center z-50 h-screen w-[100%]'>

       {/* This is div which is the main outsite box of the logo  */}
       <div className='flex justify-center items-center aspect-square w-[50%] sm:w-[28%] border-slate-400 border-8  drop-shadow-lg'>
      
        {/* This Div contains all the images and in css I have used grid to make them align */}
       <div className="aspect-square grid grid-cols-3 w-[100%] ">

       <div className=' flex justify-center items-center relative overflow-hidden'>
      <ImageSlideshow/>
      </div>

       <div className=' flex justify-center items-center relative overflow-hidden'>
      <ImageSlideshow/>
      </div>

       <div className=' flex justify-center items-center relative overflow-hidden'>
      <ImageSlideshow/>
      </div>
      
       <div className=' flex justify-center items-center relative overflow-hidden'>
      <ImageSlideshow/>
      </div>

       <div className=' flex justify-center items-center relative overflow-hidden bg-yellow-500'>
      </div>

       <div className=' flex justify-center items-center relative overflow-hidden'>
      <ImageSlideshow/>
      </div>
       <div className=' flex justify-center items-center relative overflow-hidden'>
      <ImageSlideshow/>
      </div>
       <div className=' flex justify-center items-center relative overflow-hidden'>
      <ImageSlideshow/>
      </div>
       <div className=' flex justify-center items-center relative overflow-hidden'>
      <ImageSlideshow/>
      </div>
       </div>

        </div>
       </div>
    </>
  )
}

export default Home