import { Container, Row, Col } from "react-bootstrap";
import "./Experience.css";

const education = [
  {
    id: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    org: "Maharaja Krishnakumarsinhji Bhavnagar University",
    date: "2022 - 2025",
    description:
      "Successfully completed BCA with a strong foundation in Programming, Database Management, Web Development, Operating Systems and Software Engineering.",
  },
  {
    id: "msc-it",
    title: "Master of Science in Information Technology (M.Sc. IT)",
    org: "Maharaja Krishnakumarsinhji Bhavnagar University",
    date: "2025 - Present",
    description:
      "Currently pursuing M.Sc. IT while expanding knowledge in Advanced Web Technologies, Software Development and Modern IT Practices.",
  },
  {
    id: "full-stack-training",
    title: "Full Stack Development Course",
    org: "Red & White Skill Education, Bhavnagar",
    date: "June 2025 - Present",
    description:
      "Learning Full Stack Development with HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js and MongoDB by building real-world projects and improving problem-solving skills.",
  },
];

const Experience = ({ id }) => {
  return (
    <section className="experience-section" id={id}>
      <Container>
        <p className="section-eyebrow">my journey</p>
        <h1 className="section-title">
          Experience &amp; <span>Education</span>
        </h1>
        <span className="gradient-line" aria-hidden="true"></span>
        <p className="section-desc">
          My education and full stack development training.
        </p>

        <Row className="g-4">
          {education.map((item) => (
            <Col key={item.id} lg={4} md={6} xs={12}>
              <article className="experience-card h-100">
                <span className="experience-card__date">{item.date}</span>
                <h2 className="experience-card__title">{item.title}</h2>
                <p className="experience-card__institution">{item.org}</p>
                <p className="experience-card__description">{item.description}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
