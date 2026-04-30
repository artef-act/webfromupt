import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [accessToken, setAccessToken] = useState(""); (database token)

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "123") {

      localStorage.setItem("token", "admin-login");

      navigate("/admin/dashboard");

    } else if (username === "user" && password === "123") {
        localStorage.setItem("token", "user-login");
        navigate("/user/pendaftar");
    } else {
      alert("Username atau password salah");
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col md={5} lg={4} className="mx-auto">

          <Card className="shadow border-0 rounded-4">
            <Card.Body className="p-4">

              <div className="text-center mb-4">
                <h2 className="fw-bold">Login</h2>
                <p className="text-muted">
                  Masuk ke dashboard admin
                </p>
              </div>

              <Form onSubmit={handleLogin}>

                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Masukkan username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="dark"
                  className="w-100 rounded-3"
                >
                  Login
                </Button>

              </Form>

              <div className="text-center mt-4 text-muted small">
                demo login:
                <br />
                admin / 123
              </div>

            </Card.Body>
          </Card>

        </Col>
      </Row>
    </Container>
  );
}
