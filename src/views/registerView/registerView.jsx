import React from "react";
import "./registerView.css";

const RegisterView = () => {
  return (
    <div id="register">
      <section id="contact_header">
        <h1>Vous souhaitez nous rejoindre ? Inscrivez-vous ! </h1>
        <div className="shadow">
          <div></div>
        </div>

        <div className="form_submit">
          <div>
            <button type="button">Je suis stagiaire</button>
          </div>
          <div>
            <button type="button" className="button2">
              Je suis formateur
            </button>
          </div>
        </div>
      </section>

      <section id="contact_form" class="register">
        <form action="" method="post">
          <div class="formflex">
            <div>
              <label for="name">E-mail</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label for="firstname">Nom d'utilisateur</label>
              <input type="text" id="firstname" name="first_name" required />
            </div>
            <div>
              <label for="firm">Mot de passe</label>
              <input id="firm" name="firm" type="text" />
            </div>
          </div>

          <div className="form_submit">
            <div>
              <button type="submit" className="register_button">
                S'inscrire
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterView;
