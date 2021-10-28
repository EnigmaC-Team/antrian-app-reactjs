import "./header.css";
import logo from "../../../assets/images/logo-fix.png";
import {Link} from 'react-scroll';

export function Header() {

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
    <div className="container px-lg-5">
      <Link className="navbar-brand fw-bold text-decoration-none" href=" " to="background-home" smooth={true} duration={100}>
        <img
          src={logo}
          alt="logo-fix"
          className="me-2 bg-light p-1 rounded-3"
          width="35px"
        />
        IAKN AMBON
      </Link>
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
          <Link className="nav-item text-decoration-none" to="background-home" smooth={true} duration={100}>
            <a className="nav-link active" aria-current="page" href=" ">
              Menu Utama
            </a>
            <div className="underline-animation"></div>
          </Link>
          <Link className="nav-item text-decoration-none" to="registration" smooth={true} duration={100} offset={40}>
            <a className="nav-link active" aria-current="page" href=" ">
              Pendaftaran
            </a>
            <div className="underline-animation"></div>
          </Link>
          <Link className="nav-item text-decoration-none" to="loket" smooth={true} duration={100} offset={-10}>
            <a className="nav-link active" aria-current="page" href=" ">
              Pelayanan
            </a>
            <div className="underline-animation"></div>
          </Link>
          <Link className="nav-item text-decoration-none" to="schedule" smooth={true} duration={100}>
            <a className="nav-link active" aria-current="page" href=" ">
              Jadwal Layanan
            </a>
            <div className="underline-animation"></div>
          </Link>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href=" ">
              Operator
            </a>
            <div className="underline-animation"></div>
          </li>
          <Link className="mt-2 mt-lg-0 text-decoration-none" to="contact-us" smooth={true} duration={100}>
            <a className="text-contact-header" href=" ">
              Hubungi Kami
            </a>
          </Link>
        </ul>
      </div>
    </div>
  </nav>
  );
}
