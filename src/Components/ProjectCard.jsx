import { Link } from "react-router-dom";
import ResponsiveImage from "./ResponsiveImage";
import Reveal from "./Reveal";
import { projectTypeLabels } from "../content/projects";

export default function ProjectCard({ project, priority = false, index }) {
  return (
    <article className="project-card">
      <Link to={`/projects/${project.id}/${project.slug}`} aria-label={`View ${project.title}`}>
        <Reveal className="project-card-image">
          <ResponsiveImage image={project.cover} eager={priority} sizes="(max-width: 767px) 94vw, 46vw" />
        </Reveal>
        <div className="project-card-meta">
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{project.title}</h3>
            <p>{[project.location, projectTypeLabels[project.type]].filter(Boolean).join(" · ")}</p>
          </div>
          <span className="arrow" aria-hidden="true">↗</span>
        </div>
      </Link>
    </article>
  );
}
