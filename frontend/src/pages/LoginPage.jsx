import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import iconFacebook from "../assets/img/icon/facebook.png"
import iconGoogle from "../assets/img/icon/google.png"
import heroLogin from "../assets/img/logo/herologin.png"

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-box">
        <Container>
          <Row>
            <Col md={6} className="left-col">
              <h2>Selamat Datang Di</h2>
              <h1>Gym Storia</h1>
              <img src={heroLogin} alt="" />
            </Col>
            <Col md={6} className="right-col">
              <form>
                <h3>Masuk</h3>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <p>-----Atau masuk dengan-----</p>
                <div className="social-icons">
                  <img src={iconGoogle} alt="icongoogle" />
                  <img src={iconFacebook} alt="iconfacebook" />
                </div>
                <p>
                  Belum punya akun? <a href="/daftar">Daftar</a>
                </p>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <footer>Copyright © 2020. All rights reserved.</footer>
    </div>
  );
};

export default LoginPage;
