import { Col, Container, Row } from "react-bootstrap";
import Button from "../components/common/Button";
import SecondarySection from "../components/home/secondary-section";
import TopSection from "../components/home/top-section";
import text_file from "../config/text";

function Home() {
  return (
    <Container fluid>
      <TopSection/>
      <SecondarySection/>
    </Container>
  );
}

export default Home;
