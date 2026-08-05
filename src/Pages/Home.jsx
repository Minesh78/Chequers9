import { Link } from "react-router-dom";
import HeroSection from "../Components/HeroSection";
import ProjectCard from "../Components/ProjectCard";
import EditorialSection from "../Components/EditorialSection";
import CTA from "../Components/CTA";
import { projects } from "../content/projects";
import { site } from "../content/site";
import SEO from "../Components/SEO";

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  return (
    <>
      <SEO />
      <HeroSection />

      <section className="work-section">
        <div className="shell section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Places with presence.</h2>
          <Link className="text-link" to="/projects">View all projects <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="shell project-grid">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} priority={index === 0} />
          ))}
        </div>
      </section>

      <EditorialSection eyebrow="Our approach" title={<>Designing between<br />form and feeling.</>} dark>
        <p>We believe the best spaces are generous with light, responsive to their setting and quietly supportive of the lives unfolding within them.</p>
        <Link className="text-link text-link--light" to="/about">Meet the studio <span aria-hidden="true">↗</span></Link>
      </EditorialSection>

      <section className="services-preview">
        <div className="shell">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">What we do</p>
            <h2>From the first line<br />to the final detail.</h2>
          </div>
          <div className="service-list">
            {site.services.map((service) => (
              <article key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
