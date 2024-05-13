import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";


const NavbarComponent = () => {
  return (
    <div>
      {" "}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img 
            src="/logo.png" 
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
