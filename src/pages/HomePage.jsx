import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="home ">
      <header className="min-vh-100 w-100">
        <Container>
          <Row>
            <Col className="text-white ">
              <h1>Lokasi saya sekarang</h1>
              <p>Indonesia, Jawa Tengah</p>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="banner min-vh-100 w-100">
        <Container>
          <Row>
            <Col>
              <img src="/banner.png" alt="banner image" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>REKOMENDASI</h1>
            </Col>
          </Row>
          <Row className="fitur rounded-3">
            <Col>
              <h1 className="text-white">TERDEKAT</h1>
            </Col>
            <Col><h1>POPULER</h1></Col>
            <Col><h1>PROMO</h1></Col>
            <Col><h1>BUKA 24 JAM</h1></Col>
          </Row>
          <Row>
            <Col>
              <h1>produk</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
