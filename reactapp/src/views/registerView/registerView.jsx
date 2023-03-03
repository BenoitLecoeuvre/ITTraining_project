import React, { useState } from "react";
import "./registerView.css";

const RegisterView = ({ userStatus, setUserStatus, userName, setUserName, postStagiaire, postFormateur }) => {

  function createStagiaire(e) {
    e.preventDefault();
    let nom = e.target['lastname'].value;
    let prenom = e.target['firstname'].value;
    let email = e.target['email'].value;
    let entreprise = e.target['firm'].value;
    let phone = e.target['phone'].value;
    let password = e.target['password'].value;
    let status = "";
    let inscrit = false;
    const newStagiaire = { nom, prenom, email, password, status, phone, inscrit, entreprise };
    postStagiaire(newStagiaire);
    alert('Votre profil Stagiaire a bien été créé');
  }

  function createFormateur(e) {
    e.preventDefault(e);
    let nom = e.target['lastname'].value;
    let prenom = e.target['firstname'].value;
    let email = e.target['email'].value;
    let entreprise = e.target['firm'].value;
    let phone = e.target['phone'].value;
    let password = e.target['password'].value;
    let status = "";
    let anciennete = 0;
    let note = 0;
    let subCategory = "";
    const newFormateur = { nom, prenom, email, password, status, anciennete, note, subCategory, entreprise, phone };
    postFormateur(newFormateur);
    alert('Votre profil formateur a bien été créé');
  }



  // States
  const [changeForm, setChangeForm] = useState('apprenant');

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
          {changeForm === "apprenant" ?
            <section id="register_form" class={changeForm}>
              <form onSubmit={createStagiaire} >
                <div className="formflex">
                  <div className="formflex_sub">
                    <div>
                      <label htmlFor="email">E-mail</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                      <label htmlFor="phone">Téléphone</label>
                      <input type="text" id="phone" name="phone" required />
                    </div>
                    <div>
                      <label htmlFor="firm">Entreprise <i>(optionnel)</i></label>
                      <input type="text" id="firm" name="firm" />
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
                      <input id="password" name="password" type="password" required />
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
            :
            <section id="register_form" class={changeForm}>
              <form onSubmit={createFormateur} >
                <div className="formflex">
                  <div className="formflex_sub">
                    <div>
                      <label htmlFor="email">E-mail</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                      <label htmlFor="phone">Téléphone</label>
                      <input type="text" id="phone" name="phone" required />
                    </div>
                    <div>
                      <label htmlFor="firm">Entreprise <i>(optionnel)</i></label>
                      <input type="text" id="firm" name="firm" />
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
                      <input id="password" name="password" type="password" required />
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
          }
        </React.Fragment>
      </div>
    </main>
  );
};

export default RegisterView;
