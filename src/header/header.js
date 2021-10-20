import "./header.css";
import logo from "../assets/images/logo-fix.png";

export function Header() {

  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark fixed-top'>
      <div className="container px-lg-5">
        <a className="navbar-brand fs-3 fw-bold" href=" ">
          <img
            src={logo}
            alt="logo-fix"
            className="me-2 bg-light p-1 rounded-3"
            width="35px"
          />
          IAKN AMBON
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-lg-flex align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href=" ">Home</a>
              <div className="underline-animation"></div>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href=" ">Login</a>
              <div className="underline-animation"></div>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href=" ">Registrasi</a>
              <div className="underline-animation"></div>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href=" ">Operator</a>
              <div className="underline-animation"></div>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href=" ">Pengunjung</a>
              <div className="underline-animation"></div>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href=" ">Pelayanan</a>
              <div className="underline-animation"></div>
            </li>
            <li className="mt-2 mt-lg-0">
              <a className="text-contact-header" href=" ">Hubungi Kami</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
