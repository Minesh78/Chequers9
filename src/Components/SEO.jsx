import { Helmet } from "react-helmet-async";
import { site } from "../content/site";

export default function SEO({ title, description = site.description, path = "/", image = "/og.png", type = "website" }) {
  const pageTitle = title ? `${title} — Chequers9` : "Chequers9 — Architecture & Interior Design Studio";
  const canonical = new URL(path, site.website).toString();
  const socialImage = new URL(image, site.website).toString();

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:site_name" content={site.legalName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
    </Helmet>
  );
}
