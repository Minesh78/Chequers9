import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { easeIn, motion ,AnimatePresence } from "framer-motion";
import { photos } from "../Data";

const boxes = ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"];


export default function HeroSection() {
	const [moveLeft, setMoveLeft] = useState(false);
	const [selectedImg, setSelectedImg] = useState();
    const [photoArr, setPhotoArr] = useState(photos)
	const [imageLink, setImageLink] =useState()


	

  function shuffleArray() {
    // Create a copy of the array to avoid modifying the original
    const shuffled = [...photos];
  
    // Iterate through the array in reverse order
    for (let i = shuffled.length - 1; i > 0; i--) {
      // Get a random index between 0 and the current index (inclusive)
      const j = Math.floor(Math.random() * (i + 1));
  
      // Swap the current element with the randomly chosen element
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  
    return shuffled;
  }
  
  

  const imgClicked = (event) =>{
    setImageLink(event.target.src)
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
    setPhotoArr(shuffleArray())
    }, 2000); // Change the duration (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, [photoArr]);

	return (
		<>
			{/* This is a upper div which cover the whole screen         */}
			<AnimatePresence>
			<div className="flex justify-center items-center z-50 h-screen w-[100%]">
				{/* This is div which is the main outsite box of the logo  */}
				{/* animate={{x: moveLeft? -350 :0 , scale: moveLeft? 0.7 : 1}} transition={{ease:"easeInOut"}} onClick={()=>{setMoveLeft(!moveLeft)}} - This is to animate it moving left */}
				<motion.div animate={{x: moveLeft? -420 :0 , scale: moveLeft? 0.7 : 1}} transition={{ease:"easeInOut"}} onClick={()=>{setMoveLeft(true)}} className="flex justify-center items-center aspect-square w-[50%] sm:w-[28%] border-slate-400 border-8  drop-shadow-lg">
					{/* This Div contains all the images and in css I have used grid to make them align */}
					<div className="aspect-square grid grid-cols-3 w-[100%] ">
						<div className=" flex justify-center items-center relative overflow-hidden">
							<div className="w-full h-full">
								<img
									onClick={imgClicked}
									src={`${photoArr[0]}`}
									className=" h-[100%] w-[100%] transition-opacity duration-700 ease-in-out object-cover absolute"
								/>
							</div>
						</div>

						<div className=" flex justify-center items-center relative overflow-hidden">
							<div className="w-full h-full">
								<img
									onClick={imgClicked}
									src={`${photoArr[1]}`}
									className=" h-[100%] w-[100%] transition-opacity duration-700 ease-in-out  object-cover absolute"
								/>
							</div>
						</div>

						<div className=" flex justify-center items-center relative overflow-hidden">
							<div className="w-full h-full">
								<img
									onClick={imgClicked}
									src={`${photoArr[2]}`}
									className=" h-[100%] w-[100%] transition-opacity duration-700 ease-in-out object-cover absolute"
								/>
							</div>
						</div>

						<div className=" flex justify-center items-center relative overflow-hidden">
							<div className="w-full h-full">
								<img
									onClick={imgClicked}
									src={`${photoArr[3]}`}
									className=" h-[100%] w-[100%] transition-opacity duration-700 ease-in-out object-cover absolute"
								/>
							</div>
						</div>

						<div className=" flex justify-center items-center relative overflow-hidden bg-yellow-500"></div>

						<div className=" flex justify-center items-center relative overflow-hidden">
							<div className="w-full h-full">
								<img
									onClick={imgClicked}
									src={`${photoArr[4]}`}
									className=" h-[100%] w-[100%]  transition-opacity duration-700 ease-in-out object-cover absolute"
								/>
							</div>

						</div>
						<div className=" flex justify-center items-center relative overflow-hidden">
							<div className="w-full h-full">
								<img
									onClick={imgClicked}
									src={`${photoArr[5]}`}
									className=" h-[100%] w-[100%]  transition-opacity duration-700 ease-in-out object-cover absolute"
								/>
							</div>


						</div>
						<div className=" flex justify-center items-center relative overflow-hidden">
							<div className="w-full h-full">
								<img
									onClick={imgClicked}
									src={`${photoArr[6]}`}
									className=" h-[100%] w-[100%]  transition-opacity duration-700 ease-in-out object-cover absolute"
								/>
							</div>


						</div>
						<div className=" flex justify-center items-center relative overflow-hidden">
							<div className="w-full h-full">
								<img
									onClick={imgClicked}
									src={`${photoArr[7]}`}
									className=" h-[100%] w-[100%] bg-cover transition-opacity duration-700 ease-in-out object-cover absolute"
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
			{moveLeft ?	<motion.div
			className="absolute h-[70%] w-[50%] top-7 right-0 left-0 mt-[6rem] mx-auto rounded-xl overflow-hidden z-[-10] drop-shadow-lg"
			animate={{x: moveLeft? 300 : 0 , scale: moveLeft? 1 : 0}} 
			transition={{ease:"easeIn",scale:{ delay: 2},type: "tween"}}
			
			>
				<img 
				src={`${imageLink}`} 
				
				// src="https://i.ibb.co/ZNBKt4m/Mr-Ganesh-Sawant-Bhor-Pune.webp"
				alt="Clicked Image"
				className=" h-full w-full object-cover"
				/>
			</motion.div>: <> </>}

			<motion.div className="absolute opacity-80 border-transparent top-0 bottom-0 right-0 left-0 m-auto z-20 w-2 h-2"
			animate={{y: moveLeft? 300 : 0}} 
			transition={{ease: easeIn,scale:{ delay: 2},type: "tween"}}>
			<GiCancel className=" scale-[2.5] text-yellow-500 "
			onClick={()=>{setMoveLeft(false)}}  />
			</motion.div>

			</AnimatePresence>
			
		</>
	);
}

