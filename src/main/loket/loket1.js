import "./loket.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Loket1() {

  return (
    <div class="d-flex align-items-center flex-column h-100 p-1 m-2">
      <h4 class="mt-2">LOKET 1</h4>
      <FontAwesomeIcon icon="check-square"/>
      <div class="height-40 border-top w-100 text-center">
        <h6 class="fw-lighter mt-2">
          TOTAL KESELURUHAN<FontAwesomeIcon icon="info-circle" className="status-icon ms-1"/>
        </h6>
        <div class="fw-normal counter-loket">0</div>
      </div>
      <div class="h-25 border-top w-100 text-center loket-font-size">
        <div class="row h-75 mt-3 mb-2 px-2">
          <div class="col-6 h-100 border">
            <div class="h-50 fs-4">1</div>
            <div class="h-50 d-flex align-items-center">
              KONSUL LAPORAN BEASISWA
            </div>
          </div>
          <div class="col-6 h-100 border">
            <div class="h-50 fs-4">0</div>
            <div class="h-50 d-flex align-items-center">
              BUKA BLOKIR REKENING
            </div>
          </div>
        </div>
        <div class="row h-75 mb-2 px-2">
          <div class="col-6 h-100 border">
            <div class="h-50 fs-4">0</div>
            <div class="h-50 d-flex align-items-center">
              SURAT KETERANGAN PDPT
            </div>
          </div>
          <div class="col-6 h-100 border">
            <div class="h-50 fs-4">1</div>
            <div class="h-50 d-flex align-items-center">SURAT AKTIF KULIAH</div>
          </div>
        </div>
      </div>
    </div>
  );
}
