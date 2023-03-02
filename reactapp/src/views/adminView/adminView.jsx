import React, { useState } from "react";
import AddEditFormationComponent from "../../components/AddEditFormationComponent/AddEditFormationComponent";
import ArrayFormationComponent from "../../components/ArrayFormationComponent/ArrayFormationComponent";
import TodoListDisplayComponent from "../../components/TodoListDisplayComponent/TodoListDisplayComponent";
import AdminHistoriqueFormationDisplay from "../../components/AdminHistoriqueFormationDisplay/AdminHistoriqueFormationDisplay";
import AdminBoutonsComponent from "../../components/AdminBoutonsComponent/AdminBoutonsComponent";
import ContactComponent from "../../components/contactComponent/contactComponent";
import FormationList from "../../../src/datas/FormationList.json";
import FormateurList from "../../../src/datas/formateursList.json";
import UserList from "../../../src/datas/apprenantsList.json";
import UserListComponent from "../../components/UserListComponent/UserListComponent";
import FormateurListComponent from "../../components/FormateurListComponent/FormateurListComponent";


const AdminView = ({
  name,
  setName,
  firstname,
  setFirstname,
  firm,
  setFirm,
  mail,
  setMail,
  phone,
  setPhone,
  message,
  setMessage,
  formationList,
  setFormationList,
  deleteFormation,
  postFormation,
  putFormation,
  stagiaireList, setStagiaireList,
  formateursList, setFormateursList
}) => {

  console.log(formationList);
  console.table(formationList);

  // States pour les boutons
  const [addFormation, setAddFormation] = useState(false);
  const [displayFormation, setDisplayFormation] = useState(false);
  const [todoList, setTodoList] = useState(false);
  const [history, setHistory] = useState(false);
  const [contact, setContact] = useState(false);
  const [formateurList, setFormateurList] = useState(false);
  const [userList, setUserList] = useState(false);

  // State pour set la liste de formation
  const [listformation, updateFormationList] = useState(FormationList);
  const [listformateurs, updateFormateurList] = useState(FormateurList);
  const [listUsers, updateUserList] = useState(UserList);

  // State pour passer en mode edit formation
  const [modifFormation, setModifFormation] = useState(false);

  // States pour recup les datas de la formation à modifier
  const [formationName, setFormationName] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionDetail, setDescriptionDetail] = useState("");
  const [duree, setDuree] = useState("");
  const [price, setPrice] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [lieux, setLieux] = useState("");
  const [dates, setDates] = useState("");
  const [endDate, setEndDate] = useState("");
  const [id, setId] = useState("");

  // Function pour passer la formation à modifier dans le formulaire
  function editFormation(formation) {
    setModifFormation(!modifFormation);
    setFormationName(formation.name);
    setCategory(formation.category);
    setSubCategory(formation.subCategory);
    setDescription(formation.description);
    setDescriptionDetail(formation.descriptionDetail);
    setDuree(formation.duree);
    setPrice(formation.price);
    setDifficulty(formation.difficulty);
    setLieux(formation.lieu);
    setDates(formation.startDate);
    setEndDate(formation.endDate);
    setId(formation.id);
  }

  return (
    <div>
      <div>
        <AdminBoutonsComponent
          addFormation={addFormation}
          displayFormation={displayFormation}
          todoList={todoList}
          history={history}
          setAddFormation={setAddFormation}
          setDisplayFormation={setDisplayFormation}
          setTodoList={setTodoList}
          setHistory={setHistory}
          contact={contact}
          setContact={setContact}
          formateurList={formateurList}
          setFormateurList={setFormateurList}
          userList={userList}
          setUserList={setUserList}
        />

        {addFormation ? (
          <AddEditFormationComponent
            listformation={listformation}
            updateFormationList={updateFormationList}
            modifFormation={modifFormation}
            setModifFormation={setModifFormation}
            formationName={formationName}
            setFormationName={setFormationName}
            category={category}
            setCategory={setCategory}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
            description={description}
            setDescription={setDescription}
            descriptionDetail={descriptionDetail}
            setDescriptionDetail={setDescriptionDetail}
            duree={duree}
            setDuree={setDuree}
            price={price}
            setPrice={setPrice}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            lieux={lieux}
            setLieux={setLieux}
            dates={dates}
            setDates={setDates}
            endDate={endDate}
            setEndDate={setEndDate}
            postFormation={postFormation}
            putFormation={putFormation}
            id={id}
          />
        ) : null}

        {displayFormation ? (
          <ArrayFormationComponent
            formationList={formationList}
            setFormationList={setFormationList}
            editFormation={editFormation}
            modifFormation={modifFormation}
            setModifFormation={setModifFormation}
            deleteFormation={deleteFormation}
          />
        ) : null}


        {userList ? (
          <UserListComponent
            listUsers={listUsers}
            updateUserList={updateUserList}
            stagiaireList={stagiaireList} setStagiaireList={setStagiaireList}
          />
        ) : null}

        {formateurList ? (
          <FormateurListComponent
            listformateurs={listformateurs}
            updateFormateurList={updateFormateurList}
            formateursList={formateursList} setFormateursList={setFormateursList}
          />
        ) : null}

        {todoList ? <TodoListDisplayComponent /> : null}

        {history ? <AdminHistoriqueFormationDisplay formationList={formationList} /> : null}

        {contact ? (
          <ContactComponent
            name={name}
            setName={setName}
            firstname={firstname}
            setFirstname={setFirstname}
            firm={firm}
            setFirm={setFirm}
            mail={mail}
            setMail={setMail}
            phone={phone}
            setPhone={setPhone}
            message={message}
            setMessage={setMessage}
          />
        ) : null}
      </div>
    </div>
  );
};
export default AdminView;
