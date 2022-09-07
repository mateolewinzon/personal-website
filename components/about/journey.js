import { Container, Row } from "react-bootstrap";
import text from "../../config/text";
import { typewriter } from "../../styles/typing-effect.module.css";

function Skills() {
  const { my_journey_paragraphs, my_journey} = text["en"];

  return (
    <Row className="pt-5 pb-5">
      <span className='semititle pb-4'>{my_journey}</span>
        {my_journey_paragraphs.map((text)=> <p>{text}</p>)}
    </Row>
  );
}

export default Skills;
