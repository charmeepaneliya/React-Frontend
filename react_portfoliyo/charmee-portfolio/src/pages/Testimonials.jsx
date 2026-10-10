import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import vaishaliImage from "../assets/testimonials-image/vaishali.jpg";
import tishaImage from "../assets/testimonials-image/Tisha-Italiya.jpg";
import dishaImage from "../assets/testimonials-image/disha-mehta.jpg";
import bhoomiImage from "../assets/testimonials-image/Bhoomi-Sadhvani.png";
import "./Testimonials.css";

const testimonials = [
  {
    id: "vaishali",
    name: "Vaishali",
    role: "Full Stack Developer",
    image: vaishaliImage,
    text: "Working with Charmee has been a great experience. She is dedicated, eager to learn, and always tries to find better solutions. Her interest in web development and her positive attitude make her a great person to work with.",
  },
  {
    id: "tisha-italiya",
    name: "Tisha Italiya",
    role: "UI/UX Designer",
    image: tishaImage,
    text: "Charmee is creative, hardworking, and always open to new ideas. She pays attention to details and puts effort into making her work better. Her willingness to learn and improve is truly admirable.",
  },
  {
    id: "disha-mehta",
    name: "Disha Mehta",
    role: "Web Developer",
    image: dishaImage,
    text: "Charmee has a strong interest in web development and keeps working to improve her skills. She approaches tasks with patience and dedication. I appreciate her enthusiasm for learning new technologies and building projects.",
  },
  {
    id: "bhoomi-sadhvani",
    name: "Bhoomi Sadhvani",
    role: "[Full Stack Developer]",
    image: bhoomiImage,
    text: "Charmee is a dedicated learner who enjoys exploring new technologies and improving her development skills. She is enthusiastic, supportive, and willing to take on new challenges. I wish her success in her full stack development journey.",
  },
];

const Testimonials = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex + 1) % testimonials.length
    );
  };

  return (
    <section className="testimonials-section" id={id}>
      <Container>
        <p className="section-eyebrow">testimonials</p>
        <h1 className="section-title">
          What People <span>Say</span>
        </h1>
        <span className="gradient-line" aria-hidden="true"></span>
        <p className="section-desc">
          Feedback from peers, collaborators, and mentors I&apos;ve had the
          pleasure of working with.
        </p>

        <div
          className="testimonials-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
        >
          <Row className="justify-content-center">
            <Col xs={12} xl={10}>
              <article
                className="testimonial-card"
                aria-roledescription="slide"
                aria-label={`${activeIndex + 1} of ${testimonials.length}: ${activeTestimonial.name}`}
                key={activeTestimonial.id}
              >
                <div className="testimonial-card__portrait">
                  <img
                    className="testimonial-card__image"
                    src={activeTestimonial.image}
                    alt={`${activeTestimonial.name}`}
                  />
                </div>

                <div className="testimonial-card__content">
                  <span className="testimonial-card__quote-mark" aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className="testimonial-card__text">
                    {activeTestimonial.text}
                  </p>
                  <div className="testimonial-card__author">
                    <p className="testimonial-card__name">
                      {activeTestimonial.name}
                    </p>
                    <p className="testimonial-card__role">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            </Col>
          </Row>

          <div className="testimonial-controls">
            <button
              className="testimonial-controls__arrow"
              type="button"
              onClick={showPrevious}
              aria-label="Show previous testimonial"
            >
              <span aria-hidden="true">&larr;</span>
            </button>

            <div
              className="testimonial-controls__pagination"
              role="group"
              aria-label="Choose a testimonial"
            >
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  className={`testimonial-controls__dot${index === activeIndex ? " is-active" : ""}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}: ${testimonial.name}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>

            <button
              className="testimonial-controls__arrow"
              type="button"
              onClick={showNext}
              aria-label="Show next testimonial"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
          <p className="testimonial-counter" aria-live="polite">
            {activeIndex + 1} / {testimonials.length}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
