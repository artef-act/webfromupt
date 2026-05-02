import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [semester, setSemester] = useState("");
  const [kelas, setKelas] = useState("");
  const [alasan, setAlasan] = useState("");

  const [foto, setFoto] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);

  const [transkrip, setTranskrip] = useState(null);
  const [formulir, setFormulir] = useState(null);

  const [previewFile, setPreviewFile] = useState(null);

  const [showConfirm, setShowConfirm] = useState(false);
  const [missingFields, setMissingFields] = useState([]);


  const handleFotoChange = (file) => {
    if (file) {
      setFoto(file);
      setFotoPreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    handleFotoChange(file);
  };

  const handleCheckForm = (e) => {
    e.preventDefault();

    const missing = [];

    if (!nama) missing.push("Nama");
    if (!nim) missing.push("NIM");
    if (!semester) missing.push("Semester");
    if (!kelas) missing.push("Kelas");
    if (!alasan) missing.push("Alasan");
    if (!foto) missing.push("Foto PAS");
    if (!transkrip) missing.push("Transkrip Nilai");
    if (!formulir) missing.push("Formulir");

    setMissingFields(missing);
    setShowConfirm(true);
  };
  const handleSubmitToServer = async () => {
    try {
      const formData = new FormData();

      formData.append("nama", nama);
      formData.append("email", nim); // NIM as email for server
      formData.append("password", nim); // Add default password

      formData.append("nim", nim);
      formData.append("semester", semester);
      formData.append("kelas", kelas);
      formData.append("alasan", alasan);

      if (foto) formData.append("foto", foto);
      if (transkrip) formData.append("transkrip", transkrip);
      if (formulir) formData.append("formulir", formulir);

      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setShowConfirm(false);
        // Navigate to success page with data
        navigate("/after-register", {
          state: {
            nama,
            nim,
            semester,
            kelas,
            alasan,
            foto: foto ? URL.createObjectURL(foto) : null,
            transkrip: transkrip ? URL.createObjectURL(transkrip) : null,
            formulir: formulir ? URL.createObjectURL(formulir) : null,
            email: nim,
            password: nim,
          },
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };



  return (
    <>
      <section
        className="register-section d-flex align-items-center"
      >
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-xl-11">

              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                {/* HEADER */}
                <div className="register-header text-white">
                  <h2 className="fw-bold mb-1">
                    Form Pendaftaran
                  </h2>

                  <p className="mb-0 opacity-75 small">
                    Lengkapi data diri dan dokumen pendukung
                  </p>
                </div>

                {/* BODY */}
                <div className="card-body register-body">

                  <form>

                    <div className="row">

                      {/* LEFT SIDE */}
                      <div className="col-lg-7">

                        {/* NAMA */}
                        <div className="mb-3">
                          <label className="form-label fw-semibold small">
                            Nama
                          </label>

                          <input
                            type="text"
                            className="form-control compact-input"
                            placeholder="Masukkan nama lengkap"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                          />
                        </div>

                        {/* NIM */}
                        <div className="mb-3">
                          <label className="form-label fw-semibold small">
                            NIM
                          </label>

                          <input
                            type="text"
                            className="form-control compact-input"
                            placeholder="Masukkan NIM"
                            value={nim}
                            onChange={(e) => setNim(e.target.value)}
                          />
                        </div>

                        {/* SEMESTER + KELAS */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label fw-semibold small">
                              Semester
                            </label>

                            <select className="form-select compact-input" value={semester} onChange={(e) => setSemester(e.target.value)}  >
                              <option>Pilih Semester</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                            </select>
                          </div>

                          <div className="col-md-6 mb-3">
                            <label className="form-label fw-semibold small">
                              Kelas
                            </label>

                            <input
                              type="text"
                              className="form-control compact-input"
                              placeholder="1P41"
                              value={kelas}
                              onChange={(e) => setKelas(e.target.value)}
                            />
                          </div>
                        </div>

                        {/* ALASAN */}
                        <div className="mb-3">
                          <label className="form-label fw-semibold small">
                            Alasan
                          </label>

                          <textarea
                            rows="5"
                            className="form-control rounded-3"
                            placeholder="Tulis alasan..."
                            value={alasan}
                            onChange={(e) => setAlasan(e.target.value)}
                            style={{ height: "150px" }}
                          ></textarea>
                        </div>

                      </div>

                      {/* RIGHT SIDE */}
                      <div className="col-lg-5">

                        {/* FOTO */}
                        <div className="mb-3">
                          <label className="form-label fw-semibold small">
                            Foto PAS
                          </label>

                          <div
                            className="compact-upload"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                          >
                            {!fotoPreview ? (
                              <>
                                <div className="fs-4 mb-1">
                                  🖼️
                                </div>

                                <div className="small text-secondary mb-2">
                                  Drag & Drop
                                </div>

                                <input
                                  type="file"
                                  accept="image/*"
                                  className="d-none"
                                  id="fotoInput"
                                  onChange={(e) =>
                                    handleFotoChange(e.target.files[0])
                                  }
                                />

                                <label
                                  htmlFor="fotoInput"
                                  className="btn btn-sm btn-primary rounded-pill px-3"
                                >
                                  Upload
                                </label>
                              </>
                            ) : (
                              <>
                                <img
                                  src={fotoPreview}
                                  alt="Preview"
                                  className="compact-image"
                                  onClick={() =>
                                    setPreviewFile({
                                      type: "image",
                                      src: fotoPreview,
                                    })
                                  }
                                />

                                <div className="d-flex gap-2 mt-2">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() =>
                                      document
                                        .getElementById("fotoInput")
                                        .click()
                                    }
                                  >
                                    Ganti
                                  </button>

                                  <button
                                    type="button"
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => {
                                      setFoto(null);
                                      setFotoPreview(null);
                                    }}
                                  >
                                    Hapus
                                  </button>
                                </div>

                                <input
                                  type="file"
                                  accept="image/*"
                                  className="d-none"
                                  id="fotoInput"
                                  onChange={(e) =>
                                    handleFotoChange(e.target.files[0])
                                  }
                                />
                              </>
                            )}
                          </div>
                        </div>

                        {/* PDF ROW */}
                        <div className="row">

                          {/* TRANSKRIP */}
                          <div className="col-6">
                            <label className="form-label fw-semibold small">
                              Transkrip
                            </label>

                            <div className="compact-pdf">
                              {!transkrip ? (
                                <>
                                  <input
                                    type="file"
                                    accept=".pdf"
                                    className="d-none"
                                    id="transkripInput"
                                    onChange={(e) =>
                                      setTranskrip(e.target.files[0])
                                    }
                                  />

                                  <label
                                    htmlFor="transkripInput"
                                    className="btn btn-sm btn-outline-primary"
                                  >
                                    Upload
                                  </label>
                                </>
                              ) : (
                                <>
                                  <div className="small text-truncate w-100 mb-2">
                                    {transkrip.name}
                                  </div>

                                  <div className="d-flex flex-column gap-1 w-100">
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-primary"
                                      onClick={() =>
                                        setPreviewFile({
                                          type: "pdf",
                                          src: URL.createObjectURL(transkrip),
                                        })
                                      }
                                    >
                                      Preview
                                    </button>

                                    <button
                                      type="button"
                                      className="btn btn-sm btn-outline-danger"
                                      onClick={() => setTranskrip(null)}
                                    >
                                      Hapus
                                    </button>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          {/* FORMULIR */}
                          <div className="col-6">
                            <label className="form-label fw-semibold small">
                              Formulir
                            </label>

                            <div className="compact-pdf">
                              {!formulir ? (
                                <>
                                  <input
                                    type="file"
                                    accept=".pdf"
                                    className="d-none"
                                    id="formulirInput"
                                    onChange={(e) =>
                                      setFormulir(e.target.files[0])
                                    }
                                  />

                                  <label
                                    htmlFor="formulirInput"
                                    className="btn btn-sm btn-outline-primary"
                                  >
                                    Upload
                                  </label>
                                </>
                              ) : (
                                <>
                                  <div className="small text-truncate w-100 mb-2">
                                    {formulir.name}
                                  </div>

                                  <div className="d-flex flex-column gap-1 w-100">
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-primary"
                                      onClick={() =>
                                        setPreviewFile({
                                          type: "pdf",
                                          src: URL.createObjectURL(formulir),
                                        })
                                      }
                                    >
                                      Preview
                                    </button>

                                    <button
                                      type="button"
                                      className="btn btn-sm btn-outline-danger"
                                      onClick={() => setFormulir(null)}
                                    >
                                      Hapus
                                    </button>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                        </div>

                        {/* BUTTON */}
                        <div className="d-grid mt-4">
                          <button type="button" onClick={handleCheckForm} className="btn btn-primary rounded-pill py-2 fw-semibold" >
                            Kirim Formulir
                          </button>
                        </div>

                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* KONFIRMASI */}
      {showConfirm && (
  <div className="preview-overlay">

    <div
      className="bg-white rounded-4 p-4 shadow"
      style={{
        width: "100%",
        maxWidth: "500px",
      }}
    >
      <h4 className="fw-bold mb-3">
        Konfirmasi Formulir
      </h4>

      {missingFields.length > 0 ? (
        <>
          <div className="alert alert-warning rounded-4">
            <div className="fw-semibold mb-2">
              Field yang belum diisi:
            </div>

            <ul className="mb-0">
              {missingFields.map((field, index) => (
                <li key={index}>
                  {field}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-end">
            <button
              className="btn btn-secondary rounded-pill px-4"
              onClick={() => setShowConfirm(false)}
            >
              Tutup
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="alert alert-success rounded-4">
            Semua data sudah lengkap ✨
          </div>

          <p className="text-secondary">
            Apakah kamu yakin ingin mengirim formulir ini?
          </p>

          <div className="d-flex justify-content-end gap-2">
            <button
              className="btn btn-outline-secondary rounded-pill px-4"
              onClick={() => setShowConfirm(false)}
            >
              Batal
            </button>

            <button
              className="btn btn-primary rounded-pill px-4"
              onClick={handleSubmitToServer}
            >
              Ya, Kirim
            </button>
          </div>
        </>
      )}
    </div>

  </div>
)}

      {/* PREVIEW */}
      {previewFile && (
        <div className="preview-overlay">
          <div className="preview-content">

            <button
              className="btn-close-custom"
              onClick={() => setPreviewFile(null)}
            >
              ✕
            </button>

            {previewFile.type === "image" ? (
              <img
                src={previewFile.src}
                alt="Preview"
                className="preview-image"
              />
            ) : (
              <iframe
                src={previewFile.src}
                title="PDF Preview"
                className="preview-pdf"
              />
            )}
          </div>
        </div>
      )}

      {/* STYLE */}
      <style>
        {`
          .register-section {
            min-height: 100vh;
            padding-top: 80px;
            padding-bottom: 20px;
            background:
              linear-gradient(135deg,#eef2ff 0%,#f8fafc 100%);
          }

          .register-header {
            padding: 12px 22px;
            background:
              linear-gradient(135deg,#2563eb,#3b82f6);
          }

          .register-body {
            padding: 22px;
          }

          .compact-input {
            height: 45px;
            border-radius: 14px;
          }

          .compact-upload {
            border: 2px dashed #cbd5e1;
            border-radius: 20px;
            min-height: 190px;
            padding: 5px;
            background: #f8fafc;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .compact-image {
            width: 150px;
            height: 170px;
            object-fit: cover;
            border-radius: 16px;
            cursor: pointer;
            box-shadow: 0 10px 25px rgba(0,0,0,0.12);
          }

          .compact-pdf {
            border: 2px dashed #dbeafe;
            border-radius: 18px;
            background: #f8fbff;
            min-height: 120px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          textarea.form-control {
            border-radius: 14px;
          }

          .preview-overlay {
            position: fixed;
            inset: 0;
            background: rgba(15,23,42,0.75);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }

          .preview-content {
            position: relative;
            width: 100%;
            max-width: 900px;
            background: white;
            border-radius: 24px;
            overflow: hidden;
          }

          .preview-image {
            width: 100%;
            max-height: 90vh;
            object-fit: contain;
          }

          .preview-pdf {
            width: 100%;
            height: 85vh;
            border: none;
          }

          .btn-close-custom {
            position: absolute;
            top: 15px;
            right: 15px;
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 50%;
            background: rgba(0,0,0,0.7);
            color: white;
            z-index: 10;
          }

          @media (max-width: 991px) {
            .register-section {
              padding-top: 120px;
            }

            .compact-upload {
              min-height: 220px;
            }
          }
        `}
      </style>
    </>
  );
}
