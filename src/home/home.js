import "./home.css";

export function Home() {
  return (
    <div class="container-fluid height-100" id="background-home">
      <div class="row text-light h-100 bg-opacity-75 bg-primary px-lg-5 d-lg-flex justify-content-center flex-column">
        <div class="col-lg-10 ms-lg-5">
          <h1 class="fw-bolder">SELAMAT DATANG</h1>
          <h2 class="fw-normal">
            Di <b>SI</b>stem <b>R</b>eservasi <b>A</b>ntrian <b>M</b>ahasiswa <b>B</b>erbasis <b>O</b>nline
          </h2>
          <h6 class="fw-normal mt-lg-3 fst-italic">
            Klik Pendaftaran {'>'} Pilih Pelayanan {'>'} Tentukan Tanggal Layanan {'>'}
            Simpan Struk Antrian
          </h6>
          <div></div>
          <button class="btn btn-outline-light border border-2 border-light mt-4 me-3 fs-5 rounded-4">
            DAFTAR SEKARANG
          </button>
          <button class="btn btn-outline-light border-2 border-light mt-4 fs-5">
            BUTUH BANTUAN
          </button>
        </div>
      </div>
    </div>
  );
}
