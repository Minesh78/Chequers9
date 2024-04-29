import React, { useEffect, useState }from 'react'
import image1 from '../assets/white.png'

import { photos } from '../Data';


function ImageSlideshow(props) {
  
  const[currentPhotoIndex, setCurrentPhotoIndex] = useState((Math.floor(Math.random() * photos.length)));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = (Math.floor(Math.random() * photos.length));
   

     setCurrentPhotoIndex(randomIndex);
    }, 2000); // Change the duration (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, []);

  const imgClicked = (event) =>{
   console.log(event.target.src)
    // props.displayImg(photo)

    
  }

  return (
    <>

    {/* <div className='w-full h-full'>
      <img 
      onClick={imgClicked}
      src={`${photos[currentPhotoIndex]}`} 
      className=" h-[100%] w-[100%] bg-cover transition-opacity duration-700 ease-in-out object-cover absolute"
      />
    </div> */}
    
    </>
  )
}

export default ImageSlideshow