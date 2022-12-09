import React, { useState } from "react";
import AddEditFormationComponent from "../../components/AddEditFormationComponent/AddEditFormationComponent";
import ArrayFormationComponent from "../../components/ArrayFormationComponent/ArrayFormationComponent";
import TodoListDisplayComponent from "../../components/TodoListDisplayComponent/TodoListDisplayComponent";
import AdminHistoriqueFormationDisplay from "../../components/AdminHistoriqueFormationDisplay/AdminHistoriqueFormationDisplay";
import FormationList from '../../datas/FormationList.json';
import AdminBoutonsComponent from "../../components/AdminBoutonsComponent/AdminBoutonsComponent";

const AdminView = () => {

  // States pour les boutons
  const [addFormation, setAddFormation] = useState(false)
  const [displayFormation, setDisplayFormation] = useState(false)
  const [todoList, setTodoList] = useState(false)
  const [history, setHistory] = useState(false)

// State pour set la liste de formation
  const [listformation, updateFormationList] = useState(FormationList);

  // State pour passer en mode edit formation
  const [modifFormation, setModifFormation] = useState(false)

  // States pour recup les datas de la formation à modifier
  const [formationName, setFormationName]=useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionDetail, setDescriptionDetail] = useState('');
  const [duree, setDuree] = useState('');
  const [price, setPrice] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [lieux, setLieux] = useState('');
  const [dates, setDates] = useState('');


  // Function pour passer la formation à modifier dans le formulaire
  function editFormation(index) {
    setModifFormation(!modifFormation);
    setFormationName(listformation[index].formationName)
    console.log(formationName)
  }
  

  return (
    <div>
      <AdminBoutonsComponent
        addFormation={addFormation} displayFormation={displayFormation} todoList={todoList} history={history}
        setAddFormation={setAddFormation} setDisplayFormation={setDisplayFormation} setTodoList={setTodoList} setHistory={setHistory} />

      {addFormation ?
        <AddEditFormationComponent listformation={listformation} updateFormationList={updateFormationList} modifFormation={modifFormation} setModifFormation={setModifFormation} />
        : null}

      {displayFormation ?
        <ArrayFormationComponent listformation={listformation} updateFormationList={updateFormationList} editFormation={editFormation}
          modifFormation={modifFormation} setModifFormation={setModifFormation} />
        : null}

      {todoList ?
        <TodoListDisplayComponent /> : null}

      {history ?
        <AdminHistoriqueFormationDisplay /> : null}
    </div>
  );
};

export default AdminView;
