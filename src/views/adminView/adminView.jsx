import React from "react";
import AddFormationComponent from "../../components/AddFormationComponent/AddFormationComponent";
import ArrayFormationComponent from "../../components/ArrayFormationComponent/ArrayFormationComponent";

const AdminView = () => {

  return (
    <div>
      <h1>AdminView</h1>
      <AddFormationComponent/>
      <h2 style={{textAlign: 'center' , margin: '40px 0px'}}>Liste des formations</h2>
      <ArrayFormationComponent/>
    </div>
  );
};

export default AdminView;
