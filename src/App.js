import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import HeaderComponents from './components/headerComponents/headerComponents';
import FooterComponents from './components/footerComponents/footerComponents';
import NavbarComponents from './components/navbarComponents/navbarComponents';


function App() {
  return (
    <div className="App">
      <HeaderComponents/>
      <NavbarComponents/>
      <FooterComponents/>
    </div>
  );
}

export default App;
