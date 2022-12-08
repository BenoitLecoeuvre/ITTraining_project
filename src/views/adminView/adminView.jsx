import React from "react";
import ContactComponent from "../../components/contactComponent/contactComponent";

const AdminView = ({name, setName, firstname, setFirstname, firm, setFirm, mail, setMail, phone, setPhone, message, setMessage}) => {
  return (
    <div>
      <h1>AdminView</h1>
      <ContactComponent name={name} setName={setName} firstname={firstname} setFirstname={setFirstname} firm={firm} setFirm={setFirm} mail={mail} setMail={setMail} phone={phone} setPhone={setPhone} message={message} setMessage={setMessage}/>
    </div>
  );
};

export default AdminView;
