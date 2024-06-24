import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import iconFacebook from "../assets/img/icon/facebook.png";
import iconGoogle from "../assets/img/icon/google.png";
import heroLogin from "../assets/img/logo/herologin.png";
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };
  
  return (
    <div className="register">
      <div className="register-box">
        <button className="close-button" onClick={handleClose}>
          <FaTimes />
        </button>
        <Container>
          <Row>
            <Col md={6} className="left-col">
              <h2>Selamat Datang Di</h2>
              <h1>Gym Storia</h1>
              <img src={heroLogin} alt="" />
            </Col>
            <Col md={6} className="right-col">
              <form>
                <h3>Daftar</h3>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                  />
                </div>
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
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <p>-----Atau daftar dengan-----</p>
                <div className="social-icons">
                  <img src={iconGoogle} alt="icongoogle" />
                  <img src={iconFacebook} alt="iconfacebook" />
                </div>
                <p>
                  Sudah punya akun? <a href="/login">Masuk</a>
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

export default RegisterPage;
