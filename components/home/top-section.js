import { useI18n } from "next-localization";
import Image from 'next/image'
import { Col, Container, Row,  } from "react-bootstrap";
import { typewriter } from "../../styles/typing-effect.module.css";
import Button from "../common/Button";

function TopSection() {
  const i18n = useI18n();

  return (
    <Row className="top-section">
      <Col className="d-none d-lg-inline" lg='4' xl='3' xxl='3'>
        <Image width={300} height={300} src="/images/mateo_mountains.jpg" />
      </Col>
      <Col xs='12' lg='8' xl='9' xxl='9'>
        <Row className="pb-4">
          <span className="title">{i18n.t("home.title")}</span>
          <span className={`titleBlue title ${typewriter}`}>
            <span>{i18n.t("home.subtitle")}</span>
          </span>
        </Row>

        <Row className="pb-4">
          <span className="secondaryText">{i18n.t("home.welcome_text")}</span>
        </Row>
        <Row className="pb-4">
          <Button className="btn" href={"/about"}>
            {i18n.t("home.learn_more")}
          </Button>
        </Row>
      </Col>
    </Row>
  );
}

export default TopSection;
