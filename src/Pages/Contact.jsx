import { useState } from "react";
import { serviceTitles, site } from "../content/site";
import SEO from "../Components/SEO";
import SocialLinks from "../Components/SocialLinks";

const initialForm = { name: "", email: "", phone: "", projectType: "", message: "", company: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  async function submit(event) {
    event.preventDefault();
    if (form.company) return;
    if (!endpoint) {
      setStatus("unconfigured");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Submission failed");
      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <SEO title="Contact" path="/contact" description={`Start an architecture or interior design project with Chequers9 in ${site.location}.`} />
      <header className="contact-hero shell">
        <p className="eyebrow">Start a conversation</p>
        <h1>Tell us about<br /><em>your place.</em></h1>
      </header>
      <section className="contact-layout shell">
        <div className="contact-details">
          <p>Every project starts with a conversation. Share what you are imagining, where it belongs and what matters most to you.</p>
          <dl>
            <div><dt>Call</dt><dd><a href={site.phoneHref}>{site.phoneDisplay}</a></dd></div>
            <div><dt>WhatsApp</dt><dd><a href={site.whatsappHref} target="_blank" rel="noreferrer">Message the studio ↗</a></dd></div>
            <div><dt>Based in</dt><dd>{site.location}</dd></div>
          </dl>
          <div className="contact-socials">
            <p className="eyebrow">Follow the studio</p>
            <SocialLinks compact />
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label>Name<input name="name" value={form.name} onChange={update} autoComplete="name" required /></label>
            <label>Email<input type="email" name="email" value={form.email} onChange={update} autoComplete="email" required /></label>
          </div>
          <div className="form-row">
            <label>Phone<input type="tel" name="phone" value={form.phone} onChange={update} autoComplete="tel" /></label>
            <label>Project type
              <select name="projectType" value={form.projectType} onChange={update} required>
                <option value="" disabled>Select one</option>
                {serviceTitles.map((title) => <option key={title}>{title}</option>)}
                <option>Other</option>
              </select>
            </label>
          </div>
          <label>Tell us about your project<textarea name="message" value={form.message} onChange={update} rows="5" required /></label>
          <label className="honeypot" aria-hidden="true">Company<input name="company" value={form.company} onChange={update} tabIndex="-1" autoComplete="off" /></label>
          <button className="submit-button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"}<span aria-hidden="true">↗</span></button>
          <div className="form-status" aria-live="polite">
            {status === "success" && <p>Your message is on its way. We’ll be in touch soon.</p>}
            {status === "error" && <p>We couldn’t send that message. Please try again or call the studio.</p>}
            {status === "unconfigured" && <p>Online enquiries are being configured. Please call {site.phoneDisplay} in the meantime.</p>}
          </div>
        </form>
      </section>
    </>
  );
}
