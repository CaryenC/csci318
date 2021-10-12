import './App.css';
import Routes from './routes'
import ScrollButton from './components/ScrollButton';
//import {CircleArrow} from "react-scroll-up-button";
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Routes/>
      <Footer/>
      <ScrollButton/>
    </div>
  );
}

export default App;
