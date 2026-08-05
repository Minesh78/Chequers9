import { Link } from "react-router-dom";

export default function CTA({ eyebrow = "Have a project in mind?", title = "Let’s make space for what matters." }) {
  return (
    <section className="cta-section">
      <div className="shell cta-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <Link className="circle-link" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
