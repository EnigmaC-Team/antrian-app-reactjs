import "./registration.css";
import loginLogo from "../assets/images/register.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export function Registration() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if(sessionStorage.getItem('user')){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  },[])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      try {
        axios
          .post("https://antrian-api.herokuapp.com/signin", form)
          .then((response) => {
            sessionStorage.setItem("user", JSON.stringify(response.data));
            setIsLoggedIn(true);
          });
      } catch (e) {
        console.log(e.message);
        setIsLoggedIn(false);
      }
      setLoading(false)
    }, 1000);
  };

  return (
    <div className="container-fluid mt-auto registration-container bg-light">
      <div className="container-md">
        <h1 className="text-center mt-3 mb-2">HALAMAN REGISTRASI</h1>
        <div className="all-center">
          <h6 className="text-center mb-4 fw-light col-lg-10">
            Pastikan anda sudah memiliki akun untuk dapat melakukan pendaftaran
            pada setiap loket yang anda inginkan. Jika anda belum memiliki akun,
            anda dapat langsung menekan tombol{" "}
            <strong className="text-dark fw-bold">belum memiliki akun</strong>{" "}
            pada bagian bawah halaman
          </h6>
        </div>
        <div className="row px-lg-5">
          <div className="col-lg-6 all-center">
            <div className="height-50 bg-login w-100 m-1 all-center px-1 px-lg-2">
              <img src={loginLogo} alt="login" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 all-center">
            <div className="height-50 bg-login w-100 m-1 py-1 px-1 px-lg-2 all-center flex-column">
              {!isLoggedIn ? (
                <div>
                  <h2 className="text-center">MASUK</h2>
                  <Form
                    style={{ width: "300px" }}
                    className="p-2"
                    onSubmit={handleSubmit}
                  >
                    <Form.Group className="mb-3">
                      <Form.Label className="mb-1">
                        Nomor Induk Mahasiswa
                      </Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => setField("nim", e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="mb-1">Password</Form.Label>
                      <Form.Control
                        type="password"
                        onChange={(e) => setField("password", e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      className="mt-3 px-3 float-end"
                      style={{ width: "120px" }}
                      disabled={loading}
                    >
                      {loading ? (
                        <div
                          className="spinner-border spinner-border-sm"
                          role="status"
                        />
                      ) : (
                        <span>SUBMIT</span>
                      )}
                    </Button>
                  </Form>
                </div>
              ) : (
                <div className="text-center pb-4">
                  <i className="bi bi-check-lg font-superbig"></i>
                  <h5 className="mt-0 fw-normal">SELAMAT</h5>
                  <h5 className="fw-normal">ANDA BERHASIL MASUK</h5>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row all-center">
          <div className="btn btn-warning col-10 col-sm-3 mt-4 shadow">
            BELUM MEMILIKI AKUN
          </div>
        </div>
      </div>
    </div>
  );
}
