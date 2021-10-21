import { useEffect, useState } from "react";
import axios from 'axios';
import "./loket.css";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export function Loket() {
  const semuaLokets = {
    total : 0,
    isi :[
      {
        loket: "Loket 1",
        nama: "Bidang Kemahasiswaan",
        jumlah: 0,
        isi: [
          {
            nama: "Konsul Laporan Beasiswa",
            jumlah: 0,
          },
          {
            nama: "Buka Blokir Rekening",
            jumlah: 0,
          },
          {
            nama: "Surat Keterangan PDPT",
            jumlah: 0,
          },
          {
            nama: "Surat Aktif Kuliah",
            jumlah: 0,
          },
        ],
      },
      {
        loket: "loket 2",
        nama: "Bidang Akademik",
        jumlah: 0,
        isi: [
          {
            nama: "Bebas Akademik",
            jumlah: 0,
          },
          {
            nama: "Pengambilan Ijazah",
            jumlah: 0,
          },
          {
            nama: "Cuti Kuliah",
            jumlah: 0,
          },
          {
            nama: "Pengambilan KRS",
            jumlah: 0,
          },
        ],
      },
    ]
  };

  const [semuaLoket, setSemuaLoket] = useState(semuaLokets)

  useEffect(() => {
    axios
      .get("https://antrian-api.herokuapp.com/loket")
      .then(response => setSemuaLoket(response.data));
  }, []);

  return (
    <div className="container">
      <div className="border-2 border-bottom border-secondary width-60 mx-auto">
        <h1 className="text-center pt-4">STATUS LOKET</h1>
        <h6 className="fw-light text-center">
          Data ini dihitung berdasarkan jumlah akumulasi seluruh loket dalam satu
          hari
        </h6>
      </div>
      <div className="container">
        <div className="container mt-2">
          <div className="row px-1 px-lg-0">
            <div className="col-lg-6 bg-login bg-light text-dark mx-auto rounded-2 all-center flex-column">
              <h1 className="font-counter mt-2 mt-lg-0 fs-1">
                <CountUp end={semuaLoket.total} duration={1} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <h6 className="fw-light mb-4 mb-lg-2 fs-6">JUMLAH ANTRIAN</h6>
            </div>
          </div>
        </div>
        <div className="container mt-2 mt-lg-0">
          <div className="row px-1 all-center">
            {semuaLoket.isi.map((loket) => {
              return (
                <div className="col-lg-3 bg-login bg-light text-dark rounded-2 all-center flex-column mx-lg-3 my-2">
                  <div className="border-2 border-bottom w-100 text-center mb-2">
                    <h6 className="fw-bold fs-5 mt-2 text-uppercase">{loket.loket}</h6>
                    <h6 className="fw-light fs-3">
                      <CountUp end={loket.jumlah} duration={1} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h6>
                    <h6 className="fw-normal fs-6 mt-2 text-uppercase">{loket.nama}</h6>
                  </div>
                  {loket.isi.map((isi) => {
                    return(
                      <dl className="row w-100 rounded-1 bg-info text-dark">
                        <dt className="col-10 d-flex align-items-center text-start border-light border-2 border-end font-sub-loket">
                          {isi.nama}
                        </dt>
                        <dd className="col-2 pt-2 all-center">
                          <CountUp end={isi.jumlah} duration={1} redraw={true}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                  <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                          </dd>
                      </dl>
                    )
                  })}
                </div>
              );
            })}
          </div>
          <div className="d-flex">
            <button className="btn btn-warning mx-auto">
              AMBIL NOMOR ANTRIAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
