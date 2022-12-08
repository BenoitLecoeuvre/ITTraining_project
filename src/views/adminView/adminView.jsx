import React from "react";
import ContactComponent from "../../components/contactComponent/contactComponent";
import ArrayFormationComponent from "../../components/ArrayFormationComponent/ArrayFormationComponent";
import AddFormationComponent from "../../components/AddFormationComponent/AddFormationComponent";

const AdminView = ({ name, setName, firstname, setFirstname, firm, setFirm, mail, setMail, phone, setPhone, message, setMessage }) => {
  return (
    <div>
      <h1>AdminView</h1>
      <AddFormationComponent />
      <h2 style={{ textAlign: 'center', margin: '40px 0px' }}>Liste des formations</h2>
      <ArrayFormationComponent />
      <ContactComponent name={name} setName={setName} firstname={firstname} setFirstname={setFirstname} firm={firm} setFirm={setFirm} mail={mail} setMail={setMail} phone={phone} setPhone={setPhone} message={message} setMessage={setMessage} />
    </div>
)}
export default AdminView;
