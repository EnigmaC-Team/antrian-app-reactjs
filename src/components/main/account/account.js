import "./account.css";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function Account() {
  const [form, setForm] = useState({gender: "laki-laki"});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { NIM, password, name, phoneNumber, email } = form;
    const newErrors = {};
    // NIM errors
    if (!NIM || NIM === "") newErrors.NIM = "harap tidak dikosongkan!";
    // password errors
    if (!password || password === "") newErrors.password = "harap tidak dikosongkan!";
    else if (password.length < 8) newErrors.password = "minimal 8 karakter"
    // name errors
    if (!name || name === "") newErrors.name = "harap tidak dikosongkan!";
    else if (name.length > 20) newErrors.name = "nama melebihi 20 karakter";
    // phone number errors
    if (!phoneNumber || phoneNumber === "") newErrors.phoneNumber = "harap tidak dikosongkan!";

    const re = /\S+@\S+\.\S+/;
    if (!email || email === "") newErrors.email = "harap tidak dikosongkan!";
    else if (!re.test(email)) newErrors.email = "format email tidak sesuai";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      alert("Silahkan Login");
    }
  };

  return (
    <div className="width-account bg-light d-flex flex-column align-items-center py-4 overflow-auto rounded-2">
      <h1>DAFTAR AKUN</h1>
      <Form className="w-75" onSubmit={handleSubmit}>
        <hr></hr>

        <Form.Group>
          <Form.Label className="mb-1">Nomor Induk Mahasiswa</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setField("NIM", e.target.value)}
            isInvalid={!!errors.NIM}
          />
          {errors.NIM ? (
            <Form.Control.Feedback type="invalid">
              {errors.NIM}
            </Form.Control.Feedback>
          ) : (
            <div className="pb-4"></div>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label className="mb-1">Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setField("password", e.target.value)}
            isInvalid={!!errors.password}
          />
          {errors.password ? (
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          ) : (
            <div className="pb-4"></div>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label className="mb-1">Nama Lengkap</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setField("name", e.target.value)}
            isInvalid={!!errors.name}
          />
          {errors.name ? (
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          ) : (
            <div className="pb-4"></div>
          )}
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label className="mb-1">Pilih Jenis Kelamin</Form.Label>
          <Form.Control 
            as="select"
            onChange={(e) => setField("gender", e.target.value)}
            >
            <option value="laki-laki">Laki-Laki</option>
            <option value="perempuan">Perempuan</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className="mb-1">Nomor Telepon</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setField("phoneNumber", e.target.value)}
            isInvalid={!!errors.phoneNumber}
          />
          {errors.phoneNumber ? (
            <Form.Control.Feedback type="invalid">
              {errors.phoneNumber}
            </Form.Control.Feedback>
          ) : (
            <div className="pb-4"></div>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label className="mb-1">Alamat Email</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
          />
          {errors.email ? (
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          ) : (
            <div className="pb-4"></div>
          )}
        </Form.Group>

        <Button type="submit" className="btn btn-warning mb-3 mt-1 w-100">
          DAFTAR
        </Button>
      </Form>
    </div>
  );
}
