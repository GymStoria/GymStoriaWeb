import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

import logo from "/logo.png"


const NavbarComponent = () => {
  const [changeColor, setCangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10){
      setCangeColor(true);
    } else {
      setCangeColor(false);
    }
  }
  
  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });
  
  return (
    <div>
      {" "}
      <Navbar expand="lg" className={changeColor? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img 
            src={logo} 
            width="120"
            height="50"
            alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline fw-bold">Masuk</button>
            </div>
            <div className="text-center">
              <button className="btn btn-outline rounded-3 bg-light fw-bold">
                Daftar
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
