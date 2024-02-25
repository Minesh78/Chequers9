import React, { useEffect, useState }from 'react'
import image1 from '../assets/white.png'


function ImageSlideshow() {

  const photos = [
      "https://i.ibb.co/qJVJGhf/Mr-Mrs-Deepali-Joshi-Ambavane-Kop.webp" ,
      "https://i.ibb.co/S7y6MJK/Mr-Amit-Chavan-01.webp" ,
      "https://i.ibb.co/FDDrprk/Mr-Arun-Patil-Kop2.webp",
      "https://i.ibb.co/s5DF9x2/Mr-Arun-Patil-Kop3.webp",
      "https://i.ibb.co/dJ5KQfh/Mr-Chetan-Desai.webp" ,
      "https://i.ibb.co/FBJVN0v/Mr-Ganesh-Sawant-Bhor-Pune.webp" ,
      "https://i.ibb.co/dWxPg6r/Mr-L-M-Kumbhar-Kop2.webp" ,
      "https://i.ibb.co/rt7dvDY/Mr-Rohan-Kadam-2.webp" ,
      "https://i.ibb.co/Wy80MWn/Mr-Sanjay-Sawant-Kudal-Sindhudurg01.webp",
      "https://i.ibb.co/4VJ9Q6h/Mr-Sarjoshi-Achara-Malvan1.webp" ,
      "https://i.ibb.co/Trq3zyh/Mr-Vikas-Mane-Islampur1.webp",
      "https://i.ibb.co/vmVyd2b/Mr-Vikas-Mane-Islampur2.webp",
      "https://i.ibb.co/k07mYjJ/Ray-Associates-Kop.webp" ,
      "https://i.ibb.co/fFCfPsv/Shree-Mouni-Maharaj-Math-Patgaon1.webp" 
   ];
  
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