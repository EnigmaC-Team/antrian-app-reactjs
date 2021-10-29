import "./queueTaker.css";
import Select from "react-select";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../shared/Context/userContext";
import axios from "axios";

export function QueueTaker() {
  const { loketData } = useContext(UserContext);

  const [availableLoket, setAvailableLoket] = useState();
  const [choosenLoket, setChoosenLoket] = useState();

  useEffect(() => {
    let availableLokets = [];
    for (let i = 0; i < loketData.isi.length; i++) {
      const availableLoket = {
        value: i + 1,
        label: loketData.isi[i].nama,
      };
      availableLokets.push(availableLoket);
    }
    setAvailableLoket(availableLokets);
  }, [loketData]);

  const [availableDate, setAvailableDate] = useState();
  const [choosenDate, setChoosenDate] = useState();

  useEffect(() => {
    let availableWeekAfter = [];
    for (let i = 0; i <= 7; i++) {
      availableWeekAfter.push(
        new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() + i
        )
      );
    }
    let selectWeeks = [];
    const days = [
      "Minggu, ",
      "Senin, ",
      "Selasa, ",
      "Rabu, ",
      "Kamis, ",
      "Jumat, ",
      "Sabtu, ",
    ];
    for (let x = 0; x < 7; x++) {
      let selectWeek = {
        value:
          availableWeekAfter[x].getFullYear() +
          "-" +
          (availableWeekAfter[x].getMonth() + 1) +
          "-" +
          availableWeekAfter[x].getDate(),
        label:
          days[availableWeekAfter[x].getDay()] +
          availableWeekAfter[x].getDate() +
          "-" +
          (availableWeekAfter[x].getMonth() + 1) +
          "-" +
          availableWeekAfter[x].getFullYear(),
      };
      if (
        availableWeekAfter[x].getDay() !== 0 &&
        availableWeekAfter[x].getDay() !== 6
      ) {
        selectWeeks.push(selectWeek);
      }
    }
    setAvailableDate(selectWeeks);
  }, []);

  const [choosenLoketOption, setChoosenLoketOption] = useState();
  const [availableLoketOptions, setAvailableLoketOptions] = useState();

  useEffect(() => {
    if (loketData && choosenLoket) {
      let options = [];
      function optionPusher(number) {
        for (let i = 0; i < loketData.isi[0].isi.length; i++) {
          options.push({
            value: loketData.isi[number].isi[i].nama,
            label: loketData.isi[number].isi[i].nama,
          });
        }
      }
      if (choosenLoket.value === 1) {
        optionPusher(0);
      } else {
        optionPusher(1);
      }
      setAvailableLoketOptions(options);
      setChoosenLoketOption(options[0]);
    }
  }, [choosenLoket, loketData]);

  const [availableTime, setAvailableTime] = useState([]);
  const [choosenTime, setChoosenTime] = useState(availableTime[0]);

  useEffect(() => {
    if (choosenDate && choosenLoket) {
      const url =
        "https://antrian-api.herokuapp.com/system/schedule/" +
        choosenDate.value;
      axios
        .get(url)
        .then((response) => {
          console.log("data waktu yang di dapat : ", response.data);
          const currenDate = new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate();
          const timeInNumber = new Date().getHours()*100 + new Date().getMinutes();
          const availableTimeAPI = [];
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].counter === choosenLoket.value) {
              const dateFromAPI = JSON.stringify(response.data[i]).split(" ")[1].substring(0, 5)
              if(response.data[0].date.split(" ")[0] === currenDate){
                if(Number(dateFromAPI.split(":").join("")) > timeInNumber){
                  const dataTime = {
                    value: JSON.stringify(response.data[i]).split(" ")[1].substring(0, 8),
                    label: dateFromAPI
                  };
                  availableTimeAPI.push(dataTime);
                }
              } else {
                const dataTime = {
                  value: JSON.stringify(response.data[i]).split(" ")[1].substring(0, 8),
                  label: dateFromAPI
                };
                availableTimeAPI.push(dataTime);
              }
            }
          }
          setAvailableTime(availableTimeAPI);
        })
        .catch((e) => {
          console.error(e.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choosenDate, choosenLoket]);

  const onSubmit = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      const sendedData = {
        uid: user.id,
        counter: choosenLoket.value,
        date: choosenDate.value + " " + choosenTime.value,
        necessity: choosenLoketOption.value,
      };
      console.log("data yang dikirim : ", sendedData);
      const url = "https://antrian-api.herokuapp.com/ticket";
      axios
        .post(url, sendedData)
        .then((response) => {
          console.log("antrian yang berhasil didaftarkan : ", response.data);
          alert(`Anda berhasil daftar pada loket ${choosenLoket.label} untuk keperluan ${choosenLoketOption.label} pada pukul ${choosenTime.label}`)
        })
        .catch((e) => {
          alert('Mohon maaf, terjadi kesalahan saat pengambilan nomor antrian')
          console.error(e);
        })
    }
  };

  return (
    <div
      className="modal fade"
      id="antrianModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              DAFTAR ANTRIAN
              <h6 className="fw-light mb-0">
                Mohon tentukan hari, tanggal, dan loket terlebih dahulu
              </h6>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <h6 className="mb-0">Nama</h6>
              <h6 className="fw-normal">Deddy Setiawan</h6>
              <h6 className="mb-0">NIM</h6>
              <h6 className="fw-normal">08211740000067</h6>
              <h6 className="mb-1 mt-2">Hari dan Tanggal</h6>
              <Select
                options={availableDate}
                isSearchable={false}
                value={choosenDate}
                onChange={(e) => {
                  setChoosenDate(e);
                  setChoosenTime(null);
                }}
              />
              <h6 className="mb-1 mt-2">Loket</h6>
              <Select
                options={availableLoket}
                isSearchable={false}
                value={choosenLoket}
                onChange={(e) => {
                  setChoosenLoket(e);
                  setChoosenTime(null);
                }}
              />
              <h6 className="mb-1 mt-2">Layanan</h6>
              <Select
                options={availableLoketOptions}
                isSearchable={false}
                value={choosenLoketOption}
                onChange={(e) => setChoosenLoketOption(e)}
              />
              <h6 className="mb-1 mt-2">Waktu</h6>
              <Select
                options={availableTime}
                isSearchable={false}
                value={choosenTime}
                onChange={(e) => setChoosenTime(e)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <div className="row w-100">
              <button
                type="button"
                className="btn btn-primary w-100"
                disabled={!choosenTime}
                onClick={() => onSubmit()}
                data-bs-dismiss="modal"
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
