import React, {useState} from "react";
import AddFormationComponent from "../../components/AddFormationComponent/AddFormationComponent";
import ArrayFormationComponent from "../../components/ArrayFormationComponent/ArrayFormationComponent";
import TodoListDisplayComponent from "../../components/TodoListDisplayComponent/TodoListDisplayComponent";
import AdminHistoriqueFormationDisplay from "../../components/AdminHistoriqueFormationDisplay/AdminHistoriqueFormationDisplay";
import FormationList from '../../datas/FormationList.json';

const AdminView = () => {

  const [listformation , updateFormationList] = useState (FormationList);

  return (
    <div>
      <h1>AdminView</h1>
      <AddFormationComponent listformation={listformation} updateFormationList={updateFormationList} />
      <h2 style={{ textAlign: 'center', margin: '40px 0px' }}>Liste des formations</h2>
      <ArrayFormationComponent listformation={listformation} updateFormationList={updateFormationList}/>
      <TodoListDisplayComponent />
      <h2>Historique des formations</h2>
      <AdminHistoriqueFormationDisplay />
    </div>
  );
};

export default AdminView;
