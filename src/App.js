import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/FontAwesomeIcon";
import { Home } from "./home/home";
import { Header } from "./header/header";
// import { Main } from "./main/main";

function App() {

  useEffect(() => {
    async function getData() {
      const url = "https://antrian-api.herokuapp.com/myTicket?uid=2c9086ee7c83b242017c83b259490000";
      try {
        console.log(await axios.get(url));
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  });

  return (
    <div>
      <Header />
      <div className="height-100" id="background-home">
        <div className="h-100 bg-opacity-75 bg-primary">
          <div className="container-md h-100 d-flex justify-content-center flex-column px-4">
            <Home />
            {/* <Main /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
