import { useState } from "react";
import "./login.admin.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link as ReactLink } from "react-router-dom";

export function LoginAdmin() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
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
    console.log(form);
    axios
      .post("admin/signin", form)
      .then((response) => {
        sessionStorage.setItem("admin", JSON.stringify(response.data));
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setErrors("username atau password admin salah");
        setLoading(false);
      });
  };
  return (
    <div className="height-admin-login" id="background-home">
      <div className="h-100 bg-purple">
        <div className="h-100 container-lg all-center flex-column">
          <div className="login-admin-container all-center flex-column bg-light rounded-1">
            <h3 className="text-center">HALAMAN ADMIN</h3>
            <Form
              style={{ width: "300px" }}
              className="p-2"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3">
                <Form.Label className="mb-1">Username</Form.Label>
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
              {!sessionStorage.getItem("admin") ? (
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
              ) : (
                <ReactLink
                  to="/admin/list"
                  className="text-decoration-none nav-link active"
                >
                  <Button
                    type="button"
                    className="mt-3 px-3 float-end btn-masuk-registration w-100"
                  >
                    GO TO ADMIN PAGE
                  </Button>
                </ReactLink>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
