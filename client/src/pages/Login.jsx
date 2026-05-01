import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", "user-token");
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("user", JSON.stringify(data.user));

        if (data.user.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/pendaftar");
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <section
      className="min-vh-100 d-flex align-items-center"
      style={{
        paddingTop: "40px",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          
          <div className="col-lg-10">
            <div className="row g-0 shadow-lg overflow-hidden rounded-4 bg-white">

              {/* LEFT SIDE */}
              <div
                className="col-md-6 d-none d-md-flex flex-column justify-content-center p-5 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
                }}
              >
                <div>
                  <div
                    className="mb-4 d-flex align-items-center justify-content-center rounded-circle bg-white text-primary fw-bold"
                    style={{
                      width: "80px",
                      height: "80px",
                      fontSize: "2rem",
                    }}
                  >
                    💻
                  </div>

                  <h1 className="fw-bold mb-3">
                    UPT Komputer
                  </h1>

                  <p className="fs-5 text-light">
                    Sistem informasi pelayanan dan manajemen teknologi kampus.
                  </p>

                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-md-6 p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold">
                    Selamat Datang
                  </h2>

                  <p className="text-secondary">
                    Silakan login untuk melanjutkan
                  </p>
                </div>

                <form onSubmit={handleLogin}>
                  
                  {/* EMAIL */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Email
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Masukkan email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* PASSWORD */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Masukkan password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {/* BUTTON */}
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-lg rounded-3 fw-semibold"
                    >
                      Login
                    </button>
                  </div>
                </form>

                <div className="text-center mt-4 text-secondary small" >
                  <p>
                    Belum punya akun?{' '}
                    <a href="/register" className="text-decoration-underline">
                      Daftar di sini
                    </a>
                  </p>
                </div>

                <div className="text-center mt-4 text-secondary small">
                  © 2026 UPT Komputer
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
