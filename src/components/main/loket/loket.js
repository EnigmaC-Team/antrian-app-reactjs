import { useContext, useEffect, useState } from "react";
import { UserContext } from '../../shared/Context/userContext';
import "./loket.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { QueueTaker } from "./modals/queueTaker";
import semuaLokets from "../../json/semua-loket.json";
import axios from "axios";

export function Loket() {

  //Value From Main Parent or App for Login Status
  const {isAccountOn} = useContext(UserContext);

  const [loketData, setLoketData] = useState(semuaLokets);

  useEffect(() => {
    try {
      axios.get("loket").then((response) => {
        setLoketData(response.data);
      });
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <div className="container loket-margin-top">
      <div className="all-center">
        <span className="text-center mb-2 border-3 border-bottom border-warning font-title">
          LOKET ANTRIAN
        </span>
      </div>
      <div className="container">
        <div className="container mt-2">
          <div className="row px-1 px-lg-0">
            <div className="col-lg-3 bg-login bg-light text-dark mx-auto rounded-2 all-center flex-column">
              <h1 className="font-counter mt-2 mt-lg-0 fs-1">
                <CountUp end={loketData.total} duration={1}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <h6 className="fw-light mb-lg-2 fs-6">
                TOTAL ANTRIAN HARI INI
              </h6>
              <div className="d-flex my-2 w-100 flex-column">
                <button
                  className="btn btn-sm btn-warning w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#antrianModal"
                  disabled={!isAccountOn}
                >
                  AMBIL NOMOR ANTRIAN
                </button>
                <div className={isAccountOn ? "text-verify-loket d-none" : "text-verify-loket"}>(silahkan login untuk ambil antrian)</div>
                
                {/* MODAL FROM BOOTSTRAP */}
                <UserContext.Provider value={{loketData}}>
                  <QueueTaker/>
                </UserContext.Provider>

              </div>
            </div>
          </div>
        </div>
        <div className="container mt-2 mt-lg-0">
          <div className="row px-1 all-center">
            {loketData.isi.map((loket) => {
              return (
                <div className="col-lg-3 bg-login bg-light text-dark rounded-2 all-center flex-column mx-lg-3 my-2 pb-1">
                  <div className="border-2 border-bottom w-100 text-center mb-2">
                    <h6 className="fw-bold fs-5 mt-2 text-uppercase">
                      {loket.loket}
                    </h6>
                    <h6 className="fw-light fs-3">
                      <CountUp end={loket.jumlah} duration={1}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h6>
                    <h6 className="fw-normal fs-6 mt-2 text-uppercase">
                      {loket.nama}
                    </h6>
                  </div>
                  {loket.isi.map((isi) => {
                    return (
                      <dl className="row w-100 rounded-1 text-dark my-1 sub-loket-counter">
                        <dt className="col-10 d-flex align-items-center text-start font-sub-loket border-count-sub-loket">
                          {isi.nama}
                        </dt>
                        <dd className="col-2 pt-2 all-center">
                          <CountUp end={isi.jumlah} duration={1}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </dd>
                      </dl>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
