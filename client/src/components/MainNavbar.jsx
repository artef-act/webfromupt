import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function MainNavbar() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLanding = location.pathname === "/";

  let navbarClass = "";

  if (isLanding && !scrolled) {
    navbarClass = "navbar-transparent";
  } else if (isLanding && scrolled) {
    navbarClass = "navbar-scrolled";
  } else {
    navbarClass = "navbar-general";
  }

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={navbarClass}
    >
      <Container>
        <Navbar.Brand href="/">
          WebForm
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
