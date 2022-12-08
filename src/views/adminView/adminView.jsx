import React from "react";
import AddFormationComponent from "../../components/AddFormationComponent/AddFormationComponent";

const AdminView = () => {
  return (
    <div>
      <header id="header_admin">
        <div>
          <img class="logo_elco" src="#" alt="logo elco" />
        </div>
        <div id="admin_nav">
          <div>
            <a href="/">
              <img src="#" class="logo_home" alt="home" />
            </a>
          </div>
          <div>
            <h3>Panneau d'administration</h3>
          </div>
        </div>
      </header>

    <h4>Formulaire d'ajout de formation</h4>
    <div>
      <AddFormationComponent/>
    </div>

    </div>
  );
};

export default AdminView;
