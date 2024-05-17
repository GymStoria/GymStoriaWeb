import { Container, Row, Col } from "react-bootstrap";

import logoGym from "/logo.png";
import kartu from "../assets/img/icon/kartu.png";
import user from "../assets/img/icon/user.png";
import jam from "../assets/img/icon/jam.png";
import thejade from "../assets/img/gym/thejade.png";

const MembershipPage = () => {
  return (
    <div className="membershipPage min-vh-100">
      <Container>
        <Row>
          <Col className="">
            <div className="member">
              <div className="jenis">
                <img src={logoGym} alt="" />
                <h1 className="fw-bold">CLASSIC</h1>
              </div>
              <div className="anggota">
                <h1 className="">Muhammad Akbar</h1>
                <h1>TJG234923264</h1>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Informasi Keanggotaan</h1>
          </Col>
        </Row>
        <Row>
          <Col className="img-member">
            <div className="kartu">
              <img src={kartu} alt="" />
              <h3>No.Kartu</h3>
            </div>
            <div className="jam">
              <img src={jam} alt="" />
              <h3>Masa Aktif</h3>
            </div>
            <div className="user">
              <img src={user} alt="" />
              <h3>Jenis Keanggotaan</h3>
            </div>
          </Col>
          <Col className="isi-member">
            <h3>TJG234923264</h3>
            <h3>30/12/2025</h3>
            <h3>Classic</h3>
          </Col>
          <Col>
            <div className="img-gym">
              <img src={thejade} alt="" />
              <h3 className="fw-semibold">The Jade</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="fitur-member">
            <p>Perpanjang Keanggotaan</p>
            <p>Upgrade Keanggotaan</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Keanggotaan Lainnya</h1>
          </Col>
        </Row>
      </Container>
      <div className="bg-light min-vh-100"></div>
    </div>
  );
};

export default MembershipPage;
