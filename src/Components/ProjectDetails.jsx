import React from 'react'
import { useParams } from 'react-router-dom';
import { architecturalProjects } from '../Data';

const ProjectDetails = () => {

   const {id, title} = useParams();
   let proj = architecturalProjects.filter(project => (project.id === id)) 
  return (
    <div>
        {
            proj.map(item =>{
                return <h1>{item.imageLink}</h1>
            }) 
        }
        
    </div>
  )
}
export default ProjectDetails;