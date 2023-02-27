import React from "react";
import "./contactView.css";

const ContactView = ({setName, setFirstname, setFirm, setMail, setPhone, setMessage}) => {

  return (
    <section id="contact_form">
      <h1>Des questions ? Contactez-nous ! </h1>
      <div className="shadow">
        <div></div>
      </div>

      <form action="" method="post">
        <div className="formflex">
          <div>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="firstname">Prénom</label>
            <input type="text" id="firstname" name="first_name" onChange={(e) => setFirstname(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="firm">Société</label>
            <input id="firm" name="firm" type="text" onChange={(e) => setFirm(e.target.value)}/>
          </div>
        </div>
        <div className="formflex_mail">
          <div>
            <label htmlFor="mail">E-Mail</label>
            <input type="email" id="mail" name="mail" onChange={(e) => setMail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="phone">Téléphone</label>
            <input id="phone" name="phone" type="tel" onChange={(e) => setPhone(e.target.value)} required />
          </div>
        </div>
        <div className="formflex_message">
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="10" onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
        </div>
        <div className="form_submit">
          <div>
            <button type="submit">Envoyer</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactView;
