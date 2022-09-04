import { Container, Row } from "react-bootstrap";
import text from "../../config/text";
import { typewriter } from "../../styles/typing-effect.module.css";
import styles from "../../styles/Home.module.css";

function TopSection() {
  const { subtitle, title, welcome_text } = text["es"];

  return (
      <Row className={styles.topContainer}>
        <Row className="pb-4">
          <span className={`${styles.title}`}>{title}</span>
          <span className={`${styles.titleBlue} ${styles.title} ${typewriter}`}>
            <span>{subtitle}</span>
          </span>
        </Row>
        <Row className="pb-4">
          <hr className={styles.hr} />
        </Row>
        <Row>
          <span className={styles.welcomeText}>{welcome_text}</span>
        </Row>
      </Row>
  );
}

export default TopSection;
