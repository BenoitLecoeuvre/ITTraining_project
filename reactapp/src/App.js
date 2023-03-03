import './App.css';
import HeaderComponents from './components/headerComponents/headerComponents';
import FooterComponents from './components/footerComponents/footerComponents';
import NavbarComponents from './components/navbarComponents/navbarComponents';
import React, { useState } from 'react'
import axios from 'axios';


function App() {

  const [formationList, setFormationList] = useState([]);

  const client = axios.create({ baseURL: "https://localhost:7083" });

  React.useEffect(() => {
    async function getFormationList() {
      const response = await client.get("/formations");
      setFormationList(response.data);
    }
    getFormationList();
  }, []);

  async function deleteFormation(id) {
    await client.delete('/admin/' + id);
    const response = await client.get("/formations");
    setFormationList(response.data);
  }

  async function postFormation(newFormation) {
    try {
      await client.post("/admin/formations", newFormation);
      const response = await client.get("/formations");
      setFormationList(response.data);
    }
    catch (error) { console.error(error); }

  }

  async function putFormation(id, updatedFormation) {
    await client.put("/admin/formations/" + id, updatedFormation);
    const response = await client.get("/formations");
    setFormationList(response.data);
  }


  // State pour les droits des utilisateurs ( 0= guest, 1= stagiaire, 2= formateur, 3=admin)
  const [userStatus, setUserStatus] = useState(0);
  const [userName, setUserName] = useState('');
  const [name, setName] = useState("")
  const [firstname, setFirstname] = useState("")
  const [firm, setFirm] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")


  return (
    <div className="App">
      <HeaderComponents userStatus={userStatus} setUserStatus={setUserStatus} userName={userName} setUserName={setUserName} />
      <NavbarComponents
        userStatus={userStatus} setUserStatus={setUserStatus} userName={userName} setUserName={setUserName} name={name} setName={setName} firstname={firstname} setFirstname={setFirstname} firm={firm} setFirm={setFirm} mail={mail} setMail={setMail} phone={phone} setPhone={setPhone} message={message} setMessage={setMessage}
        formationList={formationList} setFormationList={setFormationList}
        deleteFormation={deleteFormation}
        postFormation={postFormation}
        putFormation={putFormation}
      />
      <FooterComponents />
    </div>
  );
}

export default App;