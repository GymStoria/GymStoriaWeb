import { Container, Row, Col } from "react-bootstrap";
import logoTentang from "../assets/img/logo/imgTentangKami.svg";

const TentangPage = () => {
  return (
    <div className="tentangKami min-vh-100">
      <Container>
        <Row>
          <Col className="hero">
            <img src={logoTentang} alt="" />
          </Col>
          <Col className="hero">
            <div className="descKami">
              <h1 className="fw-bold">About Us</h1>
              <p className="nama fw-bold">Welcome To GYM Storia</p>
              <p>
                Di GYM Storia, kami berkomitmen untuk membantu Anda menemukan
                tempat gym & fitness yang sempurna sesuai kebutuhan dan gaya
                hidup Anda. Kami memahami bahwa setiap individu memiliki tujuan
                kebugaran yang unik, dan itulah sebabnya kami hadir untuk
                memudahkan perjalanan Anda menuju hidup yang lebih sehat.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="ourTeam">
          <h1 className="fw-bold d-flex justify-content-center">Our Team</h1>
        </Row>
      </Container>
      <div className="timKami">
            <p>kabib</p>
        </div>
    </div>
  );
};

export default TentangPage;
