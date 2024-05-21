import { Container, Row, Col } from "react-bootstrap";

import fotoGym from "../assets/img/gym/gym1.jpg";
import iconPeta from "../assets/img/icon/peta.svg";
import iconKalender from "../assets/img/icon/kalender.svg";
import iconToilet from "../assets/img/icon/toilet.svg";
import iconjam from "../assets/img/icon/jam.svg";

const DetailProdukPage = () => {
  return (
    <div className="detailProdukPage min-vh-100">
      <header className="header">
        <Container>
          <Row>
            <Col>
              <h1>INFORMASI DETAIL</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="galery">
        <Container>
          <Row>
            <Col>
              <img src={fotoGym} alt="" />
              <h1>The Jade</h1>
            </Col>
            <Col>
              <img src={fotoGym} alt="" />
              <img src={fotoGym} alt="" />
            </Col>
          </Row>
    
          <Row>
            <Col>
              <div className="icon">
                <img src={iconPeta} alt="" />
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, ut.
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DetailProdukPage;
