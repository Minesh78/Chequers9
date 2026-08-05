import CTA from "../Components/CTA";
import { site } from "../content/site";
import SEO from "../Components/SEO";

export default function Services() {
  return (
    <>
      <SEO title="Services" path="/services" description="Architecture, interior design and environmentally responsive spatial design services by Chequers9 in Kolhapur." />
      <header className="page-hero shell">
        <p className="eyebrow">Capabilities</p>
        <h1>One idea,<br /><em>fully considered.</em></h1>
        <p className="page-intro">From spatial thinking to material detail, each decision belongs to a larger whole.</p>
      </header>
      <section className="services-page shell">
        {site.services.map((service) => (
          <article key={service.number}>
            <span className="service-number">{service.number}</span>
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
          </article>
        ))}
      </section>
      <CTA />
    </>
  );
}
