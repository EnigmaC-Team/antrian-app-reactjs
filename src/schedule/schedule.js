import './schedule.css';

export function Schedule(){
    return(
        <div className="d-flex flex-column text-center px-3">
            <div className="border-2 border-bottom border-secondary width-60 mx-auto">
                <h1>JADWAL PELAYANAN</h1>
            </div>
            <span className="mx-auto mt-3 text-center text-light px-1 rounded-3 fw-normal bg-dark fs-4">SENIN - KAMIS</span>
            <div className="fs-5 fw-light">
                <span className="border-2 pe-2 me-2 border-end border-dark">08.00 - 12.00</span>
                <span>13.15 - 16.30</span>
            </div>
            <span className="mx-auto mt-3 text-center text-light px-1 rounded-3 fw-normal bg-dark fs-4">JUMAT</span>
            <div className="fs-5 fw-light">
                <span className="border-2 pe-2 me-2 border-end border-dark">08.00 - 12.00</span>
                <span>14.00 - 17.00</span>
            </div>
        </div>
    )
}