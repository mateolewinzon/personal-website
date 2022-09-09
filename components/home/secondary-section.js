import { useI18n } from "next-localization";
import { Row, Col } from "react-bootstrap";

function SecondarySection() {
  const i18n = useI18n()

  return (
    <Row className="dark-section text-center">
      <Col xs="auto">
        <Row>
          <div className="blogsTitle">{i18n.t('home.recent_posts')}</div>
        </Row>
        <Row>
          {Array(5)
            .fill({
              name: "This blog will load really fast. But why?",
              date: "2022-03-09",
            })
            .map((post, key) => (
              <span key={key} className="blogsItem">
                {post.date} {post.name}
              </span>
            ))}
        </Row>
      </Col>
    </Row>
  );
}

export default SecondarySection;
