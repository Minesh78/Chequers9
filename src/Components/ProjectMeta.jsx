import { projectTypeLabels } from "../content/projects";

export default function ProjectMeta({ project }) {
  const items = [
    project.location && ["Location", project.location],
    ["Discipline", projectTypeLabels[project.type]],
    project.services?.length && ["Services", project.services.join(", ")],
  ].filter(Boolean);

  return (
    <dl className="project-meta-list">
      {items.map(([label, value]) => (
        <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
      ))}
    </dl>
  );
}
