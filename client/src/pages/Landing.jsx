import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


export default function Landing() {
    const token = localStorage.getItem("token");
    return (
        
        <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100">
                <Col md={8} lg={6} className="mx-auto text-center">
                    <h1 className="display-4 mb-4">Welcome to Our Site</h1>
                    <p className="lead mb-4">
                        This is a simple landing page built with React and Bootstrap.
                    </p>
                    <Button variant="primary" size="lg" className="me-3">
                        {!token ? "Ayo Daftar" : "Lihat Pemberitahuan"} 
                    </Button>
                    <Button variant="outline-secondary" size="lg">
                        Learn More
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}