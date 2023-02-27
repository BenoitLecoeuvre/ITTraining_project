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

  // Fonction logout pour se déconnecter
  const logout = () => {
    setUserStatus(0);
    setDisplayLogin(false);
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

      <div className="container_login">
        {userStatus === 0 ? (
          !displayLogin ? (
            <div className="head_login">
              <button onClick={() => setDisplayLogin(true)}>Login</button>
            </div>
          ) : (
            <LoginComponent setUserStatus={setUserStatus} setUserName={setUserName}/>
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
    </div>
  );
};

export default HeaderComponents;
