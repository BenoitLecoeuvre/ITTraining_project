import React, { useState } from "react";
import "./LoginComponent.css";

const LoginComponent = ({ setUserStatus, setUserName }) => {
  // States pour le login
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

  // Render du message d'erreur
  const renderErrorMessage = (name) => {
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  };

  return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="username" required />
            {renderErrorMessage("username")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
  );
};

export default LoginComponent;
