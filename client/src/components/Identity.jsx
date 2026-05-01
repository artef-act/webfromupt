import React, { useState } from "react";

export default function IdentityCard({
  data,
  showCredential = false,
  showStatus = false,
}) {

  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      <div className="card border-0 shadow rounded-4 h-100">

        {/* HEADER */}
        <div className="card-header bg-primary text-white py-3 rounded-top-4">
          <h5 className="mb-0 fw-bold">
            Identitas Pendaftar
          </h5>
        </div>

        {/* BODY */}
        <div className="card-body">

          {/* FOTO */}
          <div className="text-center mb-4">
            <img
              src={data.foto}
              alt="Foto"
              className="identity-photo"
              onClick={() =>
                setPreviewFile({
                  type: "image",
                  src: data.foto,
                })
              }
            />
          </div>

          {/* DATA */}
          <div className="identity-list">

            <div className="identity-item">
              <span>Nama</span>
              <strong>{data.nama}</strong>
            </div>

            <div className="identity-item">
              <span>NIM</span>
              <strong>{data.nim}</strong>
            </div>

            <div className="identity-item">
              <span>Semester</span>
              <strong>{data.semester}</strong>
            </div>

            <div className="identity-item">
              <span>Kelas</span>
              <strong>{data.kelas}</strong>
            </div>

            <div className="identity-item">
              <span>Alasan</span>
              <strong>{data.alasan}</strong>
            </div>

          </div>

          {/* FILE */}
          <div className="mt-4">

            <button
              className="btn btn-outline-primary w-100 mb-2"
              onClick={() =>
                setPreviewFile({
                  type: "pdf",
                  src: data.transkrip,
                })
              }
            >
              📄 Preview Transkrip
            </button>

            <button
              className="btn btn-outline-primary w-100"
              onClick={() =>
                setPreviewFile({
                  type: "pdf",
                  src: data.formulir,
                })
              }
            >
              📄 Preview Formulir
            </button>
          </div>

          {/* EMAIL & PASSWORD */}
          {showCredential && (
            <div className="mt-4 p-3 rounded-4 bg-light">

              <div className="mb-2">
                <span className="text-secondary small">
                  Email
                </span>

                <div className="fw-semibold">
                  {data.email}
                </div>
              </div>

              <div>
                <span className="text-secondary small">
                  Password
                </span>

                <div className="fw-semibold">
                  {data.password}
                </div>
              </div>

            </div>
          )}

          {/* STATUS */}
          {showStatus && (
            <div className="mt-4">
              <div className="alert alert-success rounded-4 mb-0">
                Status: {data.status}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* PREVIEW MODAL */}
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
          .identity-photo {
            width: 140px;
            height: 180px;
            object-fit: cover;
            border-radius: 20px;
            cursor: pointer;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          }

          .identity-list {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .identity-item {
            padding-bottom: 10px;
            border-bottom: 1px solid #e5e7eb;
          }

          .identity-item span {
            display: block;
            font-size: 0.85rem;
            color: #64748b;
          }

          .preview-overlay {
            position: fixed;
            inset: 0;
            background: rgba(15,23,42,0.75);
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
        `}
      </style>
    </>
  );
}
