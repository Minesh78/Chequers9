import { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import CTA from "../Components/CTA";
import SEO from "../Components/SEO";
import { projects } from "../content/projects";

const filters = [
  { id: "all", label: "All projects" },
  { id: "architecture", label: "Architecture" },
  { id: "interior", label: "Interiors" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.type === filter);

  return (
    <>
      <SEO title="Projects" path="/projects" description="Explore Chequers9 architecture and interior design projects across Kolhapur, Pune, Sindhudurg and Maharashtra." />
      <header className="page-hero shell">
        <p className="eyebrow">Selected work</p>
        <h1>Built ideas,<br /><em>lived in.</em></h1>
        <p className="page-intro">Architecture and interiors shaped by place, light and the people who inhabit them.</p>
      </header>
      <section className="projects-index shell" aria-labelledby="project-filter-label">
        <div className="project-filters" role="group" aria-labelledby="project-filter-label">
          <span id="project-filter-label" className="sr-only">Filter projects</span>
          {filters.map((item) => (
            <button key={item.id} type="button" className={filter === item.id ? "is-active" : ""} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} priority={index < 2} />)}
        </div>
      </section>
      <CTA />
    </>
  );
}
