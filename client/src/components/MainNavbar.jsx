import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function MainNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [scrolled, setScrolled] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
    navigate("/", { replace: true });
    window.location.reload();
  };

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
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={`${navbarClass} py-3`}
      >
        <Container>

          {/* LOGO */}
          <Navbar.Brand
            href="/"
            className="fw-bold fs-4 d-flex align-items-center gap-2"
          >
            <div
              className="d-flex align-items-center justify-content-center rounded-3"
              style={{
                width: "42px",
                height: "42px",
                background:
                  "linear-gradient(135deg,#2563eb,#60a5fa)",
                color: "white",
                fontWeight: "bold",
              }}
            >
              💻
            </div>

            <span>WebForm</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">

            {/* MENU */}
            <Nav className="ms-auto align-items-lg-center gap-lg-2">

              <Nav.Link href="/" className="fw-semibold">
                Home
              </Nav.Link>

              <Nav.Link href="/#pengenalan" className="fw-semibold">
                About
              </Nav.Link>

              <Nav.Link href="/activity" className="fw-semibold">
                Activity
              </Nav.Link>

              <Nav.Link href="/gallery" className="fw-semibold">
                Gallery
              </Nav.Link>

              {!token ? (
                <>
                  <Nav.Link href="/login" className="fw-semibold">
                    Login
                  </Nav.Link>

                  <Button
                    href="/register"
                    className="rounded-pill px-4 fw-semibold"
                  >
                    Register
                  </Button>
                </>
              ) : (
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  className="rounded-pill px-4 fw-semibold"
                >
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

      {/* STYLE */}
      <style>
        {`
          .navbar-transparent {
            background: transparent;
            transition: all 0.3s ease;
          }

          .navbar-transparent .nav-link,
          .navbar-transparent .navbar-brand {
            color: white !important;
          }

          .navbar-scrolled {
            background: rgba(255,255,255,0.85);
            backdrop-filter: blur(12px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
          }

          .navbar-scrolled .nav-link,
          .navbar-scrolled .navbar-brand {
            color: #111827 !important;
          }

          .navbar-general {
            background: white;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          }

          .navbar-general .nav-link,
          .navbar-general .navbar-brand {
            color: #111827 !important;
          }

          .nav-link {
            position: relative;
            transition: 0.3s;
          }

          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0%;
            height: 2px;
            background: #2563eb;
            transition: 0.3s;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-link:hover {
            color: #2563eb !important;
          }

          .navbar-toggler {
            border: none;
            box-shadow: none !important;
          }
        `}
      </style>
    </>
  );
}

export default MainNavbar;
