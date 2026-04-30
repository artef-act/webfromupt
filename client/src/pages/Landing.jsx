import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';


export default function Landing() {
    const token = localStorage.getItem("token"); 
    return (
        
        // <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        //     <Row className="w-100">
        //         <Col md={8} lg={6} className="mx-auto text-center">
        //             <h1 className="display-4 mb-4">Welcome to Our Site</h1>
        //             <p className="lead mb-4">
        //                 This is a simple landing page built with React and Bootstrap.
        //             </p>
        //             <Button variant="primary" size="lg" className="me-3">
                        
        //             </Button>
        //             <Button variant="outline-secondary" size="lg">
        //                 Learn More
        //             </Button>
        //         </Col>
        //     </Row>
        // </Container>
        <>
      {/* HERO */}
      <section className="min-vh-100 d-flex align-items-center bg-light border-bottom">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            
            {/* Text */}
            <div className="col-lg-6 text-center text-lg-start">
              <span className="badge bg-primary mb-3 px-3 py-2">
                UPT Komputer
              </span>

              <h1 className="fw-bold display-4 mb-3">
                Sistem Informasi <br />
                UPT Komputer
              </h1>

              <p className="text-secondary fs-5 mb-4">
                Tempat pengelolaan layanan komputer, informasi kegiatan,
                dokumentasi, dan pelayanan digital kampus.
              </p>

              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <button className="btn btn-primary px-4 py-2 rounded-3">
                  {!token ? "Ayo Daftar" : "Lihat Pemberitahuan"}
                </button>

                <a href="#pengenalan" className="btn btn-outline-dark px-4 py-2 rounded-3">
                  Tentang Kami
                </a>
              </div>
            </div>

            {/* Illustration */}
            <div className="col-lg-6 text-center">
              <div
                className="mx-auto shadow rounded-4 d-flex align-items-center justify-content-center"
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "350px",
                  background:
                    "linear-gradient(135deg, #0d6efd 0%, #6ea8fe 100%)",
                }}
              >
                <div className="text-white">
                  <div style={{ fontSize: "5rem" }}>💻</div>
                  <h3 className="fw-bold">UPT Komputer</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PENGENALAN */}
      <section id="pengenalan" className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            
            <div className="col-md-5 text-center">
              <div
                className="rounded-4 shadow-sm mx-auto"
                style={{
                  width: "250px",
                  height: "250px",
                  background:
                    "linear-gradient(135deg,#dee2e6,#f8f9fa)",
                }}
              ></div>
            </div>

            <div className="col-md-7">
              <h2 className="fw-bold mb-3">Pengenalan</h2>

              <p className="text-secondary">
                UPT Komputer merupakan unit pelayanan teknologi informasi yang
                mendukung kegiatan akademik maupun administrasi kampus.
              </p>

              <p className="text-secondary">
                Kami menyediakan layanan laboratorium komputer, pengembangan
                sistem informasi, jaringan, dan dukungan teknis lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEGIATAN */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Kegiatan</h2>
            <p className="text-secondary">
              Dokumentasi aktivitas dan kegiatan terbaru ✨
            </p>
          </div>

          <div className="row g-4">
            
            {[1, 2, 3].map((item) => (
              <div className="col-md-4" key={item}>
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                  
                  <div
                    style={{
                      height: "220px",
                      background:
                        "linear-gradient(135deg,#adb5bd,#dee2e6)",
                    }}
                  ></div>

                  <div className="card-body">
                    <h5 className="fw-bold">Kegiatan {item}</h5>

                    <p className="text-secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <button className="btn btn-sm btn-primary rounded-3">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOTO RANDOM */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Galeri</h2>
            <p className="text-secondary">
              Beberapa dokumentasi pilihan 📸
            </p>
          </div>

          <div className="row g-3">
            {[1, 2, 3, 4].map((item) => (
              <div className="col-6 col-md-3" key={item}>
                <div
                  className="rounded-4 shadow-sm"
                  style={{
                    height: "220px",
                    background:
                      "linear-gradient(135deg,#ced4da,#f1f3f5)",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">
            © 2026 UPT Komputer. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
    );
}