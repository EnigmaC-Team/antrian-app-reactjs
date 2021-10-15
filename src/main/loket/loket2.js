import "./loket.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Loket2() {
  return (
    <div class="d-flex align-items-center flex-column h-100 p-1 m-2">
      <h4 class="mt-2">LOKET 2</h4>
      <div class="height-40 border-top w-100 text-center">
        <h6 class="fw-lighter mt-2">
          TOTAL KESELURUHAN<FontAwesomeIcon icon="info-circle" className="status-icon ms-1"/>
        </h6>
        <div class="fw-normal counter-loket">3</div>
      </div>
      <div class="h-25 border-top w-100 text-center loket-font-size">
        <div class="row h-75 mt-3 mb-2 px-2">
          <div class="col-6 h-100 border">
            <div class="h-50 fs-4">3</div>
            <div class="h-50 d-flex align-items-center justify-content-center">
              BEBAS AKADEMIK
            </div>
          </div>
          <div class="col-6 h-100 border">
            <div class="h-50 fs-4">0</div>
            <div class="h-50 d-flex align-items-center justify-content-center">
              PENGAMBILAN IJAZAH
            </div>
          </div>
        </div>
        <div class="row h-75 mb-2 px-2">
          <div class="col-6 h-100 border">
            <div class="h-50 fs-4">0</div>
            <div class="h-50 d-flex align-items-center justify-content-center">
              CUTI KULIAH
            </div>
          </div>
          <div class="col-6 h-100 border">
            <div class="h-50 fs-4">0</div>
            <div class="h-50 d-flex align-items-center justify-content-center">
              PENGEMBALIAN KRS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
