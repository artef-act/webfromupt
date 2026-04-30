import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:3001/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (response.ok) {
        navigate("/");
      } else {
        alert(data.message);
      }
      
    } catch (error) {

      console.log(error);

      alert("Server error");

    }
  };

  return (
    <div className="container mt-5">

      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">

          <label>Nama</label>

          <input
            type="text"
            name="nama"
            className="form-control"
            onChange={handleChange}
          />

        </div>

        <div className="mb-3">

          <label>NIM</label>

          <input
            type="text"
            name="email"
            className="form-control"
            onChange={handleChange}
          />

        </div>

        <div className="mb-3">

          <label>Password</label>

          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
          />

        </div>

        <button className="btn btn-primary">
          Register
        </button>

      </form>

    </div>
  );
}
