import './App.css';
import Routes from './routes'
import {CircleArrow} from "react-scroll-up-button";
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
        <CircleArrow
          EasingType="linear"
          ShowAtPosition={100} />
        <Routes/>
        <Footer/>

    </div>
  );
}

export default App;
