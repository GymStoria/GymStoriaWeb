import { Container, Row, Col } from "react-bootstrap";

import bannerImg from "../assets/img/banner/banner.svg";

const ReservasiPage = () => {
  return (
    <div className="reservasiPage min-vh-100">
      <header className="">
        <Container>
          <Row>
            <Col>
              <h1>RESERVASI</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <div>
        <Container>
          <Row className="banner">
            <img src={bannerImg} alt="" />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ReservasiPage;
