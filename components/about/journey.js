import { Container, Row } from "react-bootstrap";
import text from "../../config/text";

function Skills() {
  const { about, me, about_description } = text["en"];

  return (
        <Row>
          <span className="secondaryText">My Journey</span>
          <span className="description">
            I started developing websites as a hobby in 2020.
          </span>
        </Row>

  );
}

export default Skills;
