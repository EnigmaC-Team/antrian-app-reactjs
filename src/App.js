import { useState, useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./components/shared/FontAwesomeIcon/index";
import { Home } from "./components/main/home/home";
import { Registration } from "./components/main/registration/registration";
import { Loket } from "./components/main/loket/loket";
import { Header } from "./components/main/header/header";
import { Schedule } from "./components/main/schedule/schedule";
import { ContactUs } from "./components/main/contact-us/contact-us";
import { UserContext } from "./components/shared/Context/userContext";

function App() {
  const [isAccountOn, setIsAccountOn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setIsAccountOn(true);
    } else {
      setIsAccountOn(false);
    }
  }, []);

  return (
    <div>
      <UserContext.Provider value={{isAccountOn, setIsAccountOn}}>
        <Header />
        <div className="height-100" id="background-home">
          <div className="h-100 bg-purple">
            <div className="container-lg h-100 d-flex justify-content-center flex-column">
              <Home />
            </div>
          </div>
        </div>
        <div className="height-registration bg-dark d-flex" id="registration">
          <Registration />
        </div>
        <div className="bg-light">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="rgb(177, 148, 237)"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,170.7C384,213,480,267,576,245.3C672,224,768,128,864,112C960,96,1056,160,1152,165.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="height-loket all-center" id="loket">
          <Loket />
        </div>
        <div className="regis-to-schedule"></div>
        <div className="height-schedule" id="schedule">
          <Schedule />
        </div>
        <div className="height-contact-us" id="contact-us">
          <ContactUs />
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
