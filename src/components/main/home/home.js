import "./home.css";
import { Link } from "react-scroll";

export function Home() {
  return (
    <div className="container">
      <div className="row text-light">
        <div className="col-lg-9 ms-lg-5">
          <h1 className="fw-bolder big-text text-shadow">SELAMAT DATANG</h1>
          <h2 className="fw-normal medium-text text-shadow">
            Di <b>SI</b>stem <b>R</b>eservasi <b>A</b>ntrian <b>M</b>ahasiswa{" "}
            <b>B</b>erbasis <b>O</b>nline
          </h2>
          <span className="fw-normal mt-lg-3 small-text">
            Klik Pendaftaran {">"} Pilih Pelayanan {">"} Tentukan Tanggal
            Layanan {">"} Simpan Struk Antrian
          </span>
          <div></div>
          <Link to="registration" smooth={true} duration={100} offset={40}>
            <button className="btn btn btn-outline-light shadow-sm border border-3 border-light mt-4 fs-4 me-3 rounded-4 py-2">
              DAFTAR SEKARANG
            </button>
          </Link>
          <Link to="schedule" smooth={true} duration={100}>
            <button className="btn btn btn-outline-light shadow-sm border border-3 border-light mt-4 fs-4 me-3 rounded-4 py-2">
              BUTUH BANTUAN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
