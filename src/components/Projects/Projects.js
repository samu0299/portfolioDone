import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ihome from "../../Assets/Projects/i-home.PNG";
import bigbasket from "../../Assets/Projects/bigbasket.PNG";
import bluefly from "../../Assets/Projects/bluefly.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ihome}
              isBlog={false}
              title="Intern theory"
              description="This is a working clone of the intern-theory website,Working on this project helps to learn a lot of new things that goes into building a website. 
              Techstack-HTML,CSS,JavaScript"
              linkc="https://github.com/samu0299/intern_theory_unit-4_group_project"
              linkp="https://mellow-sherbet-b5955b.netlify.app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigbasket}
              isBlog={false}
              title="Bigbasket"
              description="This is a working clone of the Bigbasket website. Working on this project helps to learn a lot of new things that goes into building a website.
              Techstack-HTML,CSS,JavaScript"
              linkc="https://github.com/vattsalbhatt/bigbasket"
              linkp="https://bigbasket-u2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bluefly}
              isBlog={false}
              title="Bluefly"
              description="A web application to order Clothing ,accessories and fashion products. First team project in Masai School on the Bluefly website clone.
              Techstack-HTML,CSS,JavaScript"
              linkc="https://github.com/samu0299/bluefly"
              linkp="https://bluefly-148uya0vu-samu0299.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
