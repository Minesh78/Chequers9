import React, { useEffect, useState }from 'react'
import image1 from '../assets/white.png'

import { photos } from '../Data';


function ImageSlideshow() {


  
  const[currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = (Math.floor(Math.random() * photos.length) );
      console.log(randomIndex)

     setCurrentPhotoIndex(randomIndex);
    }, 2000); // Change the duration (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`h-[100%] w-[100%] bg-cover transition-opacity duration-700 ease-in-out opacity-0 absolute ${index === currentPhotoIndex ? 'opacity-100' : ''}`}
          style={{ backgroundImage: `url(${photo})`,
          backgroundSize:'cover' }}/>
      ))}
    </>
  )
}

export default ImageSlideshow