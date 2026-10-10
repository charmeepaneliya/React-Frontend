import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

const Contact = ({ id }) => {
  /* ── Form state ── */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
     * NOTE: No backend is connected yet.
     * When you add a backend (e.g., EmailJS, Formspree, or your own API),
     * replace this block with your actual submission logic.
     * The form structure, validation, and state are all ready to use.
     */

    const { name, email, message } = formData;

    // Basic client-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    // Placeholder: show success feedback
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section" id={id}>
      <Container>
        {/* Page heading */}
        <p className="section-eyebrow">get in touch</p>
        <h1 className="section-title">
          Let&apos;s <span>Connect</span>
        </h1>
        <span className="gradient-line" aria-hidden="true"></span>
        <p className="section-desc">
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you. Send a message or reach out directly.
        </p>

        <Row className="g-5">
          {/* ── Left: Contact Info ── */}
          <Col lg={5} md={12} className="contact-info-col">
            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-item__icon" aria-hidden="true">📧</span>
                <div>
                  <p className="contact-info-item__label">Email</p>
                  <p className="contact-info-item__value">
                    <a href="mailto:charmee@example.com">
                      charmee@example.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-item__icon" aria-hidden="true">📍</span>
                <div>
                  <p className="contact-info-item__label">Location</p>
                  <p className="contact-info-item__value">India</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-item__icon" aria-hidden="true">⚡</span>
                <div>
                  <p className="contact-info-item__label">Status</p>
                  <p className="contact-info-item__value" style={{ color: "var(--accent-primary)" }}>
                    Available for opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <p className="contact-socials-title">// Find me online</p>
            <div className="contact-socials">
              <a
                href="https://github.com/charmeepaneliya"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="GitHub profile"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/charmee-paneliya-19552538a/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            </div>
          </Col>

          {/* ── Right: Contact Form ── */}
          <Col lg={7} md={12}>
            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">
                <span>// send_message.js</span>
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} noValidate>
                <Row className="g-3">
                  <Col sm={6}>
                    <div className="form-group">
                      <label className="form-label-custom" htmlFor="contact-name">
                        Name <span style={{ color: "var(--accent-primary)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        className="form-control-custom"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>
                  </Col>

                  <Col sm={6}>
                    <div className="form-group">
                      <label className="form-label-custom" htmlFor="contact-email">
                        Email <span style={{ color: "var(--accent-primary)" }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        className="form-control-custom"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>
                  </Col>

                  <Col sm={12}>
                    <div className="form-group">
                      <label className="form-label-custom" htmlFor="contact-subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        className="form-control-custom"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>

                  <Col sm={12}>
                    <div className="form-group">
                      <label className="form-label-custom" htmlFor="contact-message">
                        Message <span style={{ color: "var(--accent-primary)" }}>*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-control-custom"
                        rows={5}
                        placeholder="Tell me about your project or idea..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>
                  </Col>
                </Row>

                <button
                  type="submit"
                  className="btn-neon"
                  style={{ marginTop: "8px", width: "100%" }}
                  aria-label="Send message"
                >
                  Send Message →
                </button>

                {/* Status feedback */}
                {status === "success" && (
                  <p className="form-status form-status--success" role="alert">
                    ✓ Message noted! I&apos;ll be in touch soon.
                    {" "}(Connect a backend to actually send emails.)
                  </p>
                )}
                {status === "error" && (
                  <p className="form-status form-status--error" role="alert">
                    Please fill in all required fields (Name, Email, Message).
                  </p>
                )}
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
