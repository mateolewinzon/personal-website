import { Container } from "react-bootstrap";
import TopSection from "../../components/about/top-section";
import Journey from "../../components/about/journey";
import Skills from "../../components/about/skills";

function About() {
  return (
    <div>
      <Container>
        <TopSection />
      </Container>
      <div className="dark-section">
        <Container>
          <Journey />
          <Skills/>
        </Container>
      </div>
    </div>
  );
}

export default About;
