import "./home.css";

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
          <button className="btn btn btn-outline-light shadow-sm border border-3 border-light mt-4 me-3 medium-text rounded-4 py-2">
            DAFTAR SEKARANG
          </button>
          <button className="btn btn btn-outline-light shadow-sm border-3 border-light mt-4 medium-text abs py-2">
            BUTUH BANTUAN
          </button>
        </div>
      </div>
    </div>
  );
}
