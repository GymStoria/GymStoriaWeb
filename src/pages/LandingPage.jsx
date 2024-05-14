import { Container, Row, Col } from "react-bootstrap";
import logo from "/logo.png";
import app from "/app.png";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4 ">
                Cari Gym & Fitnes Terdekat <br /> Dengan Lokasi Anda Sekarang
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                minus, dicta assumenda voluptate dignissimos optio numquam
                tenetur debitis harum aspernatur?
              </p>
              <button className="btn btn-light btn-lg rounded-3 mb-xs-0 mb-2">
                Get Started Now
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={logo} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="mobile w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="app-box d-flex align-items-center">
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={app} alt="app-img" />
            </Col>
            <Col className="bg">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quae, dicta?
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
