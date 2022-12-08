import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import HeaderComponents from './components/headerComponents/headerComponents';
import FooterComponents from './components/footerComponents/footerComponents';
import NavbarComponents from './components/navbarComponents/navbarComponents';


function App() {

const [name, setName] = useState("")
const [firstname, setFirstname] = useState("")
const [firm, setFirm] = useState("")
const [mail, setMail] = useState("")
const [phone, setPhone] = useState("")
const [message, setMessage] = useState("")

  return (
    <div className="App">
      <HeaderComponents/>
      <NavbarComponents name={name} setName={setName} firstname={firstname} setFirstname={setFirstname} firm={firm} setFirm={setFirm} mail={mail} setMail={setMail}/>
      <FooterComponents/>
    </div>
  );
}

export default App;
