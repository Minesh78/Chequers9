import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";
import { architecturalProjects } from "../Data";

const Imgcarousel = () => {
	return (
		<>
			<div className="h-screen">
				
					<Carousel
						showThumbs={false}
						infiniteLoop={true}
						autoPlay={true}
						emulateTouch={true}
						swipeable={true}>
					
						{architecturalProjects.map((architecturalProject) => (
							<div key={architecturalProject.id}>
								<img
									src={`${architecturalProject.imageLink}`}
									className="h-screen object-cover"
								/>
								<p className="legend">{architecturalProject.title}</p>
							</div>
						))}
					</Carousel>
				
			</div>
		</>
	);
};

export default Imgcarousel;
