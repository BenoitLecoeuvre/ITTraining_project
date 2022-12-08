import React, { useState } from "react";
import LoginComponent from "../LoginComponent/LoginComponent";
import "./headerComponents.css";

const HeaderComponents = ({
  userStatus,
  setUserStatus,
  userName,
  setUserName,
}) => {

  // States pour le login
  const [displayLogin, setDisplayLogin] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // Users en dur
  const userList = [
    {
      username: "benoit",
      password: "pass1",
      status: 3,
    },
    {
      username: "user2",
      password: "pass2",
      status: 1,
    },
  ];

  const errors = {
    username: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    // Empêcher la page de se réinitialiser
    event.preventDefault();

    var { username, pass } = document.forms[0];

    // Voir si l'username existe dans la database
    const userData = userList.find((user) => user.username === username.value);

    // Comparer les mots de passe et noms. Si true = erreur sinon le mot de passe est bon
    if (userData) {
      if (userData.password !== pass.value) {
        // Mot de passe erroné
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmit(true);
        setUserStatus(userData.status);
        setUserName(userData.username);
      }
    } else {
      // Nom d'utilisateur erroné
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  // Fonction logout pour se déconnecter
  const logout = () => {setUserStatus(0);
  setDisplayLogin(false);}

  // Render du message d'erreur
  const renderErrorMessage = (name) => {
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  };

  return (
    <div className="banner">
      <div className="head_logo">
        <img src="./img/ti_training_logo.jpg" alt="Logo-Ti-training" />
      </div>

      <div className="header">
        <h1>IT - Training</h1>
        <span className="credo">
          La formation qui vous aidera à devenir le meilleur !
        </span>
      </div>

      {userStatus === 0 ? (
        !displayLogin ? (
          <div className="head_login">
            <button onClick={() => setDisplayLogin(true)}>Login</button>
          </div>
        ) : (
          // <div className="form">
          //   <form onSubmit={handleSubmit}>
          //     <div className="input-container">
          //       <label>Username </label>
          //       <input type="text" name="username" required />
          //       {renderErrorMessage("username")}
          //     </div>
          //     <div className="input-container">
          //       <label>Password </label>
          //       <input type="password" name="pass" required />
          //       {renderErrorMessage("pass")}
          //     </div>
          //     <div className="button-container">
          //       <input type="submit" />
          //     </div>
          //   </form>
          // </div>
          <LoginComponent/>
        )
      ) : (
        <div className="user_div">
          <div>
            <p className="username_header">Bonjour {userName}</p>
            <p className="userstatus_header">Votre statut: {userStatus}</p>
          </div>
          <div className="logout_button">
            <button onClick={() => logout()}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderComponents;
