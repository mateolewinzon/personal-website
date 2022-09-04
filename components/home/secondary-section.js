import { Row, Col, Container } from "react-bootstrap";
import Button from "../common/Button";
import text from "../../config/text";
import styles from "../../styles/Home.module.css";

function SecondarySection() {
  const { recent_posts, learn_more } = text["es"];

  return (
    <Row className={styles.secondRow}>
      <Col xs="12" md="4" lg="5" className="text-center text-md-end  p-xl-4">
        <Button className={styles.btn} href={"about"}>
          {learn_more}
        </Button>
      </Col>
      <Col md="5" lg="6" className="p-xl-4">
        <Row>
          <Row>
            <div className={styles.blogsTitle}>{recent_posts}</div>
          </Row>
          <Row>
            {Array(5)
              .fill({
                name: "This blog will load really fast. But why?",
                date: "2022-03-09",
              })
              .map((post, key) => (
                <span key={key} className={styles.blogsItem}>
                  {post.date} {post.name}
                </span>
              ))}
          </Row>
        </Row>
      </Col>
    </Row>
  );
}

export default SecondarySection;
