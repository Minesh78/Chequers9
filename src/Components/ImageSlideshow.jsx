import React, { useEffect, useState }from 'react'
import img1 from '../assets/Images/image_0.jpg'
import img2 from '../assets/Images/image_1.jpg'
import img3 from '../assets/Images/image_2.jpg'
import img4 from '../assets/Images/image_3.jpg'
import img5 from '../assets/Images/image_4.jpg'
import img6 from '../assets/Images/image_5.jpg'
import img7 from '../assets/Images/image_6.jpg'
import img8 from '../assets/Images/image_7.jpg'
import img9 from '../assets/Images/image_8.jpg'

function ImageSlideshow() {

  const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * photos.length);
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