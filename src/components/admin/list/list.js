import axios from "axios";
import { useEffect, useState } from "react";
import "./list.css";
import listJSON from "../../json/list-antrian.json";

export function List() {
  const [listAntrian, setListAntrian] = useState(listJSON);

  useEffect(() => {
    axios
      .get("admin/list/loket/user")
      .then((response) => setListAntrian(response.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="all-center flex-column w-100">
      <h1 className="mt-4">LIST ANTRIAN</h1>
      <table className="table table-bordered w-75">
        <thead>
          <tr>
            <th scope="col">Nomor</th>
            <th scope="col">Nama</th>
            <th scope="col">Keperluan</th>
            <th scope="col">Tanggal</th>
          </tr>
        </thead>
        {sessionStorage.getItem("admin") ? (
          <tbody>
          {listAntrian.map((list, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{list.name}</td>
                <td>{list.necessity}</td>
                <td>{list.date}</td>
              </tr>
            );
          })}
        </tbody>
        ) : (
          <tbody>
            <tr>
              <td colspan="4" className="text-center">DATA TIDAK ADA</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}
