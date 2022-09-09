import { useI18n } from "next-localization";
import { Row } from "react-bootstrap";
import { typewriter } from "../../styles/typing-effect.module.css";

function AboutMe() {
  const i18n = useI18n()

  return (
    <Row className='top-section'>
      <Row className="pb-4">
        <span className='title'>
          <span>{i18n.t('about.about')}</span>{" "}
          <span className={`${typewriter} titleBlue`}>{i18n.t('about.me')}</span>
        </span>
      </Row>
      <Row className="pb-4"><hr className="hr"/></Row>
      <Row>
        <span className="secondaryText">{i18n.t('about.about_description')}</span>
      </Row>
    </Row>
  );
}

export default AboutMe;
