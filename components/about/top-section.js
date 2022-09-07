import { Row } from "react-bootstrap";
import text from "../../config/text";
import { typewriter } from "../../styles/typing-effect.module.css";

function AboutMe() {
  const { about, me, about_description } = text["en"];

  return (
    <Row className='top-section'>
      <Row className="pb-4">
        <span className='title'>
          <span>{about}</span>{" "}
          <span className={`${typewriter} titleBlue`}>{me}</span>
        </span>
      </Row>
      <Row className="pb-4"><hr className="hr"/></Row>
      <Row>
        <span className="secondaryText">{about_description}</span>
      </Row>
    </Row>
  );
}

export default AboutMe;
