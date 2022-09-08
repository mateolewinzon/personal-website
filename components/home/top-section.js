import { Container, Row } from "react-bootstrap";
import text from "../../config/text";
import { typewriter } from "../../styles/typing-effect.module.css";
import Button from "../common/Button";

function TopSection() {
  const { subtitle, title, welcome_text, learn_more } = text["es"];

  return (
    <Row className="top-section">
      <Row className="pb-4">
        <span className="title">{title}</span>
        <span className={`titleBlue title ${typewriter}`}>
          <span>{subtitle}</span>
        </span>
      </Row>
      <Row className="pb-4">
        <hr className="hr" />
      </Row>
      <Row className="pb-4">
        <span className="secondaryText">{welcome_text}</span>
      </Row>
      <Row className="pb-4">
        <Button className="btn" href={"about"}>
          {learn_more}
        </Button>
      </Row>
    </Row>
  );
}

export default TopSection;
