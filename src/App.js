import './App.css';
import Routes from './routes'
import ScrollButton from './components/ScrollButton';
import Footer from 'components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Routes/>
      <ScrollButton/>
      <Footer/>
    </div>
  );
}

export default App;
