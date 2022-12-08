import './App.css';
import HeaderComponents from './components/headerComponents/headerComponents';
import FooterComponents from './components/footerComponents/footerComponents';
import NavbarComponents from './components/navbarComponents/navbarComponents';
import {useState} from 'react'


function App() {

  // State pour les droits des utilisateurs ( 0= guest, 1= stagiaire, 2= formateur, 3=admin)
  const [userStatus, setUserStatus] = useState(0);
  const [userName, setUserName] = useState('');



  return (
    <div className="App">
      <HeaderComponents userStatus={userStatus} setUserStatus={setUserStatus} userName={userName} setUserName={setUserName}/>
      <NavbarComponents userStatus={userStatus}/>
      <FooterComponents/>
    </div>
  );
}

export default App;
