import "./header.css";
import logo from '../assets/images/logo-fix.png';

export function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark px-5 fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand fs-2 fw-lighter" href=" ">
          <img
            src={logo}
            alt="logo-fix"
            class="mb-2 me-2"
            width="50px"
          />
          SI RAMBO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 fw-light">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href=" ">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href=" ">
                Pendaftaran
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href=" ">
                Pengunjung
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href=" ">
                Pelayanan
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href=" ">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
