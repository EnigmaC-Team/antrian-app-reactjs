import "./contact-us.css";

export function ContactUs() {
  return (
    <div className="d-flex flex-column">
      <div className="text-center mb-4 border-2 border-bottom border-secondary width-60 mx-auto">
        <h1>HUBUNGI KAMI</h1>
      </div>
      <div className="container-lg">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-3 all-center mt-2">
                <div className="contact-container bg-dark text-light rounded-3 w-100 d-flex justify-content-center flex-column">
                    <div className="border-2 border-bottom border-light mb-3 text-center w-75 mx-auto">
                        <h4>IAKN AMBON</h4>
                    </div>
                    <h6 className="text-center fw-normal">Jl. Dolog, Halong Atas, Ambon-Maluku.</h6>
                    <span className="text-center fw-normal">Telp. 08114711157</span>                    
                </div>
            </div>
            <div className="col-lg-3 all-center mt-2">
                <div className="contact-container bg-dark rounded-3 text-light w-100 d-flex align-items-center px-3">
                    <ul className="list-unstyled font-contact-small">
                        <li><i className="bi bi-youtube me-2"></i>IAKNAMBON</li>
                        <li><i className="bi bi-globe2 me-2"></i>www.iaknambon.ac.id</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
