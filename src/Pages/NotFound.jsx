import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="eyebrow">404 · Not found</p>
      <h1>There’s nothing built here yet.</h1>
      <Link className="text-link" to="/">Return home ↗</Link>
    </section>
  );
}
