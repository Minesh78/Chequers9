import EditorialSection from "../Components/EditorialSection";
import CTA from "../Components/CTA";
import SEO from "../Components/SEO";
import { site, studioPrinciples } from "../content/site";

export default function About() {
  return (
    <>
      <SEO title="Studio" path="/about" description={`Meet ${site.legalName}, a thoughtful architecture and interior design practice based in ${site.location}.`} />
      <header className="page-hero page-hero--studio shell">
        <p className="eyebrow">The studio</p>
        <h1>Making space<br />for <em>life.</em></h1>
        <p className="page-intro">Chequers9 is an architecture and interior design practice based in Kolhapur, Maharashtra.</p>
      </header>

      <EditorialSection eyebrow="Our point of view" title={<>Built form in<br />conversation with nature.</>} dark>
        <p>We create harmonious spaces where artistry meets environmental responsibility. Our work begins with the belief that thoughtful light, honest material and a sensitive response to place can enrich everyday life.</p>
        <p>Across urban homes and rural settings, we seek a careful balance between architectural form and environmental considerations—working closely with our clients to make each space distinctly theirs.</p>
      </EditorialSection>

      <section className="principles shell">
        <p className="eyebrow">What guides us</p>
        <div className="principle-grid">
          {studioPrinciples.map((principle, index) => (
            <article key={principle.title}>
              <span>0{index + 1}</span>
              <h2>{principle.title}</h2>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA title="Bring us the place. We’ll find its possibilities." />
    </>
  );
}
