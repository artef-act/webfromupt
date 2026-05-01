import { useLocation } from "react-router-dom";
import IdentityCard from "../../components/Identity";

export default function AfterRegister() {

  const location = useLocation();
  const data = location.state || {
    nama: "Arif Placeholder",
    nim: "25.240.0027",
    semester: "2",
    kelas: "Pinginnya 2P41, tapi gabisa jadi 2M41",
    alasan: "gak tw",
    foto: "/foto.jpg",
    transkrip: "/transkrip.pdf",
    formulir: "/formulir.pdf",
    email: "NIM kamu kalau udah daftar",
    password: "Kalau gak ganti yaa NIM kamu, kecuali kamu ganti setelah daftar P.S. Hubungi Anggota UPT kalau lupa password",
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Formulir Berhasil Dikirim!</h2>
      <p className="text-secondary mb-5">
        Terima kasih telah mengirimkan formulir. Berikut adalah data yang Anda kirimkan:
      </p>

      <IdentityCard
        data={data}
        showCredential={true}
      />
    </div>
  );
}
