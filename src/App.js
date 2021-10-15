import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/FontAwesomeIcon';
import { Home } from './home/home';
import { Header } from './header/header';
import { Main } from './main/main';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Main/>
    </div>
  );
}

export default App;
