import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "./components/FontAwesomeIcon";
import { Home } from "./home/home";
import { Header } from "./header/header";
import { Registration } from "./registration/registration";

function App() {

  return (
    <div>
      <Header />
      <div className="height-100" id="background-home">
        <div className="h-100 bg-purple">
          <div className="container-lg h-100 d-flex justify-content-center flex-column">
            <Home />
          </div>
        </div>
      </div>
      <div className="height-registration bg-dark d-flex">
        <Registration/>
      </div>
    </div>
  );
}

export default App;
