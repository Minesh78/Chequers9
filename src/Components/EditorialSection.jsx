export default function EditorialSection({ eyebrow, title, children, dark = false }) {
  return (
    <section className={`editorial-section${dark ? " editorial-section--dark" : ""}`}>
      <div className="shell editorial-grid">
        <p className="eyebrow">{eyebrow}</p>
        <div>
          <h2 className="display-title">{title}</h2>
          <div className="editorial-copy">{children}</div>
        </div>
      </div>
    </section>
  );
}
