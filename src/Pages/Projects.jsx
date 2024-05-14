import React, { useState } from "react";
import { architecturalProjects } from "../Data";
import { useNavigate } from "react-router-dom";
import { MdClear } from "react-icons/md";

function Projects() {

	const [filter, setFilter] = useState([]);

	const handleFilterChange = (type) => {
	  if (filter.includes(type)) {
		setFilter(filter.filter((t) => t !== type));
	  } else {
		setFilter([...filter, type]);
	  }
	};
  
	const filteredItems = filter.length
	  ? architecturalProjects.filter((project) => filter.includes(project.type))
	  : architecturalProjects;
	
	return (
		<>
			<div className="mt-[7rem] flex justify-center w-[25%] mx-auto">
				<div
					className={`w-[50%] py-2 text-center border border-gray-600 rounded-s-full cursor-pointer ${
						filter.includes('architectural') ? "focus: bg-[#777B7E] focus: text-yellow-300" : ""
					}`}
					onClick={() => handleFilterChange('architectural')}>
					Architectural
				</div>
				<div
					className={`w-[50%] py-2 text-center border border-gray-600 rounded-e-full cursor-pointer ${
						filter.includes('interior') ? "focus: bg-[#777B7E] focus: text-yellow-300" : ""
					}`}
					onClick={() => handleFilterChange('interior')}>
					Interior
				</div>

				{/* Clear button logic
				{(archFilter || interiorFilter) && (
					<div>
						<button>
							<MdClear />
						</button>
					</div>
				)} */}

				{/* architectural or interior filter logic */}
			</div>
			<div className="flex w-[90%] m-auto  mt-28 flex-col justify-center items-center md:grid-cols-2 md:grid  gap-8">
				{filteredItems.map((project) => (
						<div
							key={project.id}
							className=" m-auto flex flex-col"
							onClick={() =>
								navigate(`/projects/${project.id}/${project.title}`)
							}>
							<div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl w-96">
								<div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
									<img
										className="object-fit absolute scale-[1.30]"
										src={project.imageLink}
										alt="card-image"
									/>
								</div>
								<div class="p-6">
									<h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
										{project.title}
									</h5>
									<p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
										{project.location}
									</p>
								</div>
							</div>
						</div>
					))}
			</div>
		</>
	);
}

export default Projects;
