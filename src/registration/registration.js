import "./registration.css";
import loginLogo from "../assets/images/register.jpg";

export function Registration() {
  return (
    <div className="container-fluid mt-auto registration-container bg-light">
      <div className="container-md">
        <h1 className="text-center mt-3 mb-2">HALAMAN REGISTRASI</h1>
        <div className="all-center">
          <h6 className="text-center mb-4 fw-light col-lg-10">
            Pastikan anda sudah memiliki akun untuk dapat melakukan pendaftaran
            pada setiap loket yang anda inginkan. Jika anda belum memiliki akun,
            anda dapat langsung menekan tombol{" "}
            <strong className="text-dark fw-bold">
              belum memiliki akun
            </strong>{" "}
            pada bagian bawah halaman
          </h6>
        </div>
        <div className="row px-lg-5">
          <div className="col-lg-6 all-center">
            <div className="height-50 bg-login w-100 m-1 all-center">
              <img src={loginLogo} alt="login" />
            </div>
          </div>
          <div className="col-lg-6 all-center">
            <div className="height-50 bg-login w-100 my-1 py-1 px-5 all-center flex-column">
              <h2 className="text-center">MASUK</h2>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Nomor Induk Mahasiswa
                  </label>
                  <input
                    class="form-control"
                  />
                </div>
                <div class="mb-2">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <h6 className="text-end mb-3 mt-1"><a href=" " className="text-decoration-none text-dark">Lupa Password?</a></h6>
                <button type="submit" class="btn btn-primary float-end">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row all-center">
          <div className="btn btn-warning col-6 col-lg-3 mt-4 shadow">
            BELUM MEMILIKI AKUN
          </div>
        </div>
      </div>
    </div>
  );
}
