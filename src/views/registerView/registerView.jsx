import React, {useState} from "react";
import "./registerView.css";

const RegisterView = () => {

  const [changeForm, setChangeForm] = useState('apprenant');

  return (
    <div id="register">
      <section id="contact_header">
        <h1>Vous souhaitez nous rejoindre ? Inscrivez-vous ! </h1>
        <div className="shadow">
          <div></div>
        </div>

          <div><p>Déjà inscrit ? <a href="#">Connectez-vous</a></p></div>
        <div className="form_submit">
          <div>
            <button onClick={() => setChangeForm("apprenant")}>Je suis stagiaire</button>
          </div>
          <div>
            <button className="button2" onClick={() => setChangeForm("formateur")}>
              Je suis formateur
            </button>
          </div>
        </div>
      </section>

      <section id="contact_form" class={changeForm} >
        <form action="" method="post">
          <div className="formflex">
            <div>
              <label htmlFor="name">E-mail</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="firstname">Entreprise</label>
              <input type="text" id="firm" name="firm" required />
            </div>
            <div>
              <label htmlFor="firstname">Nom d'utilisateur</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div>
              <label htmlFor="firm">Mot de passe</label>
              <input id="password" name="password" type="password" />
            </div>
          </div>

          <div className="form_submit">
            <div>
              <button type="submit" className="register_button">
                S'inscrire comme {changeForm}
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterView;
