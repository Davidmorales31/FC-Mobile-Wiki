import './App.css';
import './css/header.css'
import './css/menu.css'
import'./images/DInamicImage1.png';
import'./images/DInamicImage2.png';
import'./images/DInamicImage3.png';
import'./images/DInamicImage4.png';
import Header from './components/header';
import Menu from './components/menu';
import Imagendinamica from './components/imagendinamica';

function App() {
  return (
    <div className="App">
      <Imagendinamica />
      <Header />
      <Menu />
    </div>
    
  );
}

export default App;
