import { Row, ProgressBar, Container, Col, Image, Card } from "react-bootstrap";
import skills from "../../config/skills";
import styles from "../../styles/skills.module.css";

import { ReactSVG } from "react-svg";
import text from "../../config/text";

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
        <span>{text["en"][skill.id]}</span>
      </Row>
    </Card>
  );
}

function Skills() {
  const { my_skills } = text["en"];
  return (
    <>
      <Row>
        <span className="semititle">{my_skills}</span>
      </Row>
      <Row>
        {skills.map((skill, index) => (
          <Col sm="12" md="6" lg="4" xl="4" key={index}>
            <SkillCard skill={skill} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Skills;
