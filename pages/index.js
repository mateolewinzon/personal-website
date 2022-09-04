import {  Container } from "react-bootstrap";
import SecondarySection from "../components/home/secondary-section";
import TopSection from "../components/home/top-section";

function Home() {
  return (
    <Container fluid>
      <TopSection/>
      <SecondarySection/>
    </Container>
  );
}

export default Home;
