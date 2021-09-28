import './App.css';
import Routes from './routes'
import {CircleArrow} from "react-scroll-up-button";

function App() {

  return (
    <div className="App">
        <CircleArrow 
          EasingType="linear"
          ShowAtPosition={100}
          AnimationDuration={100} />
        <Routes/>

    </div>
  );
}

export default App;
