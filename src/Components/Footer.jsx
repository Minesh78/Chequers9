import Brand from "./Brand";
import { serviceTitles, site } from "../content/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <Brand light />
        <div>
          <p className="eyebrow">Visit</p>
          <p>{site.location}</p>
        </div>
        <div>
          <p className="eyebrow">Enquiries</p>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
        </div>
        <div className="footer-meta">
          <p>{serviceTitles.join(" · ")}</p>
          <p>© {new Date().getFullYear()} Chequers9</p>
        </div>
      </div>
    </footer>
  );
}
