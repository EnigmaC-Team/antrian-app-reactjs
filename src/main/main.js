import { Login } from "./login/login";
import { Loket1 } from "./loket/loket1";
import { Loket2 } from "./loket/loket2";
import "./main.css";

export function Main() {
  return (
    <div class="height-100 bg-dark d-flex align-items-end justify-content-center">
      <div class="container-loket bg-loket w-100 d-flex flex-column align-items-center px-4">
        <div class="row">
          <h1 class="text-center mt-4">HALAMAN LOKET</h1>
          <div class="hr-loket"></div>
        </div>
        <div class="col-12 px-3">
          <div class="row mt-lg-4">
            <div class="col-md-6 px-3">
              <div className="col-12 box-loket d-flex align-items-center justify-content-center bg-light">
                <Login/>
              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center justify-content-around">
              <div class="col-md-5 my-1 mx-2 bg-white box-loket">
                <Loket1/>
              </div>
              <div class="col-md-5 my-1 bg-white box-loket">
                <Loket2/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
