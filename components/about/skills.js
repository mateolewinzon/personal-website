import { Row, ProgressBar, Container, Col, Image, Card } from "react-bootstrap";
import skills from "../../config/skills";
import styles from "../../styles/skills.module.css";
import { useI18n } from "next-localization";

function SkillCard({ skill }) {
  return (
    <Card className={styles.skill_card}>
      <Row className="pb-4">
        <Image
          className={styles.skill_image}
          src={`images/skills/${skill.id}.png`}
        />
      </Row>
      <Row className="pt-2">
        <span>{skill.text}</span>
      </Row>
    </Card>
  );
}

function Skills() {
  const i18n = useI18n()
  return (
    <>
      <Row>
        <span className="semititle">{i18n.t('about.my_skills')}</span>
      </Row>
      <Row>
        {skills.map((skill, index) => (
          
          <Col sm="12" md="6" lg="4" xl="4" key={index}>
            <SkillCard skill={{...skill, text: i18n.t(`about.${skill.id}`)}} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Skills;
