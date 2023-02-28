import React, {useState} from "react";
import "./registerView.css";

const RegisterView = ({userStatus, setUserStatus, userName, setUserName }) => {


  // States
  const [changeForm, setChangeForm] = useState('apprenant');
  const [displayLogin, setDisplayLogin] = useState(false);

  // Render
  return (
    <main>
    <div id="register">
      <React.Fragment>
      <section id="register_header">
        <h1>Vous souhaitez nous rejoindre ? Inscrivez-vous ! </h1>
        <div className="shadow">
          <div></div>
        </div>

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

      <section id="register_form" class={changeForm} >
        <form action="" method="post">
          <div className="formflex">
            <div className="formflex_sub">
              <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone">Téléphone</label>
                <input type="text" id="phone" name="email" required />
              </div>
              <div>
                <label htmlFor="firm">Entreprise <i>(optionnel)</i></label>
                <input type="text" id="firm" name="firm" required />
              </div>
            </div>
            <div className="formflex_sub formflex_sub2">
              <div>
                <label htmlFor="username">Nom</label>
                <input type="text" id="lastname" name="lastname" required />
              </div>
              <div>
                <label htmlFor="firstname">Prénom</label>
                <input type="text" id="firstname" name="firstname" required />
              </div>
              <div>
                <label htmlFor="password">Mot de passe</label>
                <input id="password" name="password" type="password" />
              </div>
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
      </React.Fragment>
    </div>
  </main>
  );
};

export default RegisterView;
