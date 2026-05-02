import React, { useState } from "react";

export default function IdentityCard({
  data,
  showCredential = false,
  showStatus = false,
}) {

  const [previewFile, setPreviewFile] = useState(null);
  const user = data;
  const BASE_URL = "http://localhost:3001";
  return (
    <>
      <div className="card border-0 shadow-sm rounded-4 compact-card">

        <div className="card-body p-4">

          <div className="row g-4 align-items-start">

            {/* LEFT */}
            <div className="col-lg-8">

              <div className="identity-grid">

                <div className="identity-row">
                  <span>Nama</span>
                  <strong>{user.nama}</strong>
                </div>

                <div className="identity-row">
                  <span>NIM</span>
                  <strong>{user.nim}</strong>
                </div>

                <div className="identity-row">
                  <span>Semester</span>
                  <strong>{user.semester}</strong>
                </div>

                <div className="identity-row">
                  <span>Kelas</span>
                  <strong>{user.kelas}</strong>
                </div>

              </div>

              {/* ALASAN */}
              <div className="mt-4">

                <div className="small text-secondary mb-2">
                  Alasan
                </div>

                <div className="alasan-box">
                  {user.alasan}
                </div>

              </div>

              {/* CREDENTIAL */}
              {showCredential && (
                <div className="credential-box mt-4">

                  <div className="mb-3">
                    <div className="small text-secondary">
                      Email
                    </div>

                    <div className="fw-semibold">
                      {user.email}
                    </div>
                  </div>

                  <div>
                    <div className="small text-secondary">
                      Password
                    </div>

                    <div className="fw-semibold">
                      {user.password}
                    </div>
                  </div>

                </div>
              )}

              {/* STATUS */}
              {showStatus && (
                <div className="mt-4">
                  <span className="badge bg-success px-3 py-2 rounded-pill">
                    {user.status}
                  </span>
                </div>
              )}

            </div>

            {/* RIGHT */}
            <div className="col-lg-4">

              <div className="d-flex flex-column gap-3">

                {/* FOTO */}
                <div className="file-card">

                  <div className="small text-secondary mb-2">
                    Foto
                  </div>

                  <img
                    src="`${BASE_URL}/user.foto`"
                    alt="Foto"
                    className="mini-photo"
                    onClick={() =>
                      setPreviewFile({
                        type: "image",
                        src: user.foto,
                      })
                    }
                  />
                </div>

                {/* FORMULIR */}
                <div className="file-card">

                  <div className="small text-secondary mb-2">
                    Formulir
                  </div>

                  <button
                    className="btn btn-outline-primary btn-sm rounded-pill w-100"
                    onClick={() =>
                      setPreviewFile({
                        type: "pdf",
                        src: user.formulir,
                      })
                    }
                  >
                    Preview PDF
                  </button>

                </div>

                {/* TRANSKRIP */}
                <div className="file-card">

                  <div className="small text-secondary mb-2">
                    Transkrip
                  </div>

                  <button
                    className="btn btn-outline-primary btn-sm rounded-pill w-100"
                    onClick={() =>
                      setPreviewFile({
                        type: "pdf",
                        src: user.transkrip,
                      })
                    }
                  >
                    Preview PDF
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

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
                title="Preview"
                className="preview-pdf"
              />
            )}

          </div>
        </div>
      )}

      <style>
        {`
          .compact-card {
            background: white;
          }

          .identity-grid {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .identity-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 10px;
            border-bottom: 1px solid #e5e7eb;
          }

          .identity-row span {
            color: #64748b;
            font-size: 0.9rem;
          }

          .alasan-box {
            background: #f8fafc;
            border-radius: 18px;
            padding: 16px;
            min-height: 100px;
            line-height: 1.7;
          }

          .credential-box {
            background: #eff6ff;
            border-radius: 18px;
            padding: 18px;
          }

          .file-card {
            background: #f8fafc;
            border-radius: 18px;
            padding: 14px;
            text-align: center;
          }

          .mini-photo {
            width: 100px;
            height: 130px;
            object-fit: cover;
            border-radius: 14px;
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
          }

          .preview-overlay {
            position: fixed;
            inset: 0;
            background: rgba(15,23,42,0.75);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
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

            .identity-row {
              flex-direction: column;
              align-items: start;
              gap: 4px;
            }

            .mini-photo {
              width: 90px;
              height: 120px;
            }
          }
        `}
      </style>
    </>
  );
}
