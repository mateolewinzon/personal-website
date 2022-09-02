import { Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <Container>
      <Row className="">
        <Row
          className={` ${styles.topContainer} ${styles.title} `}
        >
          software developer.
        </Row>
        <Row
          className={` ${styles.titleBlue} ${styles.title}`}
        >
          react, react native
        </Row>
        <Row className={` `}>
          <hr className={styles.hr} />
        </Row>
      </Row>
    </Container>
  );
}

export default Home;
