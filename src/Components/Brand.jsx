import { Link } from "react-router-dom";

export default function Brand({ light = false, compact = false }) {
  return (
    <Link className={`brand${light ? " brand--light" : ""}${compact ? " brand--compact" : ""}`} to="/" aria-label="Chequers9 home">
      <span className="brand-mark" aria-hidden="true"><span /></span>
      <span className="brand-copy">
        <span className="brand-name">CHEQUERS<span className="brand-nine">9</span></span>
        {!compact && <span className="brand-subtitle">architectural design studio</span>}
      </span>
    </Link>
  );
}
