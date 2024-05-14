import React from "react";

function ProjectCard(props) {
	return (
		<>
			<div key={props.id} className=" m-auto flex flex-col ">
				<div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl w-96">
					<div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
						<img
							className="object-fit absolute scale-[1.30]"
							src={props.imageLink}
							alt="card-image"
						/>
					</div>
					<div class="p-6">
						<h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
							{props.title}
						</h5>
						<p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
							{props.location}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectCard;
