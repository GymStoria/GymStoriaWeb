import { Container, Row, Col } from "react-bootstrap";
import bghome from "/bghome.png";

const HomePage = () => {
  return (
    <div className="home min-vh-100">
      <img src={bghome} width="100%" height="550" alt="" />
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center">Home</h1>
            <p className="fw-bold text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
              sint?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
