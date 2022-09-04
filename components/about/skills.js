import { Row, ProgressBar, Container, Col, Image, Card } from "react-bootstrap";
import skills from "../../config/skills";
import styles from "../../styles/skills.module.css"

import { ReactSVG } from "react-svg";

function SkillCard({ skill }) {
  return (
    <Card className={styles.skill_card}>
      <Row>
      <Image className={styles.skill_image} src={`images/skills/${skill.id}.png`}/>

      </Row>
    </Card>
  );
}

function Skills() {
  return (
    <Row>
      {skills.map((skill, index) => (
        <Col sm='12' md='6' lg='4' xl='4' key={index}>
          <SkillCard skill={skill} />
        </Col>
      ))}
    </Row>
  );
}

export default Skills;
