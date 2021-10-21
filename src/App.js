import './App.css';
import Routes from './routes'
import ScrollButton from './components/ScrollButton';

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
