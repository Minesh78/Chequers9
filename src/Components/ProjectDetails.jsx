import { Link, useParams } from "react-router-dom";
import ResponsiveImage from "./ResponsiveImage";
import ProjectGallery from "./ProjectGallery";
import ProjectMeta from "./ProjectMeta";
import CTA from "./CTA";
import { projects, projectTypeLabels } from "../content/projects";
import SEO from "./SEO";

export default function ProjectDetails() {
  const { id } = useParams();
  const index = projects.findIndex((item) => item.id === id);
  const project = projects[index];

  if (!project) {
    return (
      <section className="not-found shell">
        <p className="eyebrow">Project not found</p><h1>This space isn’t in our archive.</h1>
        <Link className="text-link" to="/projects">Return to projects ↗</Link>
      </section>
    );
  }

  const next = projects[(index + 1) % projects.length];
  const images = [project.cover, ...(project.gallery || [])];

  return (
    <>
      <SEO
        title={project.title}
        path={`/projects/${project.id}/${project.slug}`}
        type="article"
        image={project.cover.src}
        description={project.description}
      />
      <header className="project-hero shell">
        <p className="eyebrow">Project {project.id} · {projectTypeLabels[project.type]}</p>
        <h1>{project.title}</h1>
        <div className="project-intro-grid">
          <p>{project.description}</p>
          <ProjectMeta project={project} />
        </div>
      </header>
      <div className="project-cover">
        <ResponsiveImage image={project.cover} eager sizes="100vw" />
      </div>
      <section className="project-gallery-section shell">
        <ProjectGallery images={images.slice(1)} />
      </section>
      <section className="next-project shell">
        <p className="eyebrow">Next project</p>
        <Link to={`/projects/${next.id}/${next.slug}`}>
          <span>{next.title}</span><span aria-hidden="true">↗</span>
        </Link>
      </section>
      <CTA />
    </>
  );
}
