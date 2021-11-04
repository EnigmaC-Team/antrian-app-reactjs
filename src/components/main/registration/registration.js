import { useState, useContext } from "react";
import { UserContext } from "../../shared/Context/userContext";
import "./registration.css";
import loginLogo from "../../../assets/images/register.jpg";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-scroll";

export function Registration() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const { isAccountOn, setIsAccountOn } = useContext(UserContext);
  const [errors, setErrors] = useState();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(undefined);
    axios
      .post("signin", form)
      .then((response) => {
        sessionStorage.setItem("user", JSON.stringify(response.data));
        setIsAccountOn(true);
        setLoading(false);
      })
      .catch((e) => {
        setErrors("NIM atau password salah");
        setLoading(false);
      });
  };

  return (
    <div className="container-fluid mt-auto registration-container bg-light all-center">
      <div className="container-md">
        <div className="all-center">
          <span className="text-center mb-4 border-bottom-title-regist font-title">
            HALAMAN MASUK
          </span>
        </div>
        <div className="all-center"></div>
        <div className="row px-lg-5">
          <div className="col-lg-6 all-center">
            <div className="height-50 bg-login w-100 m-1 py-2 px-1 px-lg-2 all-center flex-column">
              <img src={loginLogo} alt="login" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 all-center">
            <div className="height-50 bg-login w-100 m-1 py-1 px-1 px-lg-2 all-center flex-column">
              {!isAccountOn ? (
                <div>
                  <h3 className="text-center">MASUKKAN AKUN</h3>
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
                        isInvalid={errors}
                        required
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="mb-1">Password</Form.Label>
                      <Form.Control
                        type="password"
                        onChange={(e) => setField("password", e.target.value)}
                        isInvalid={errors}
                        required
                      />
                      {errors ? (
                        <Form.Control.Feedback type="invalid">
                          {errors}
                        </Form.Control.Feedback>
                      ) : (
                        <div className="pb-4"></div>
                      )}
                    </Form.Group>

                    <Button
                      type="submit"
                      className="mt-3 px-3 float-end btn-masuk-registration"
                      style={{ width: "120px" }}
                      disabled={loading}
                    >
                      {loading ? (
                        <div
                          className="spinner-border spinner-border-sm"
                          role="status"
                        />
                      ) : (
                        <span>MASUK</span>
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
          <Button
            className="btn btn-warning col-10 col-sm-4 mt-4"
            disabled={!isAccountOn}
          >
            <Link to="loket" smooth={true} duration={100} offset={-10}>
              LANJUT KE TAHAP BERIKUTNYA
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
