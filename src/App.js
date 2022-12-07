import './App.css';
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
