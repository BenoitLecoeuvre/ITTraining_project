import React, {useState} from "react";
import AddFormationComponent from "../../components/AddFormationComponent/AddFormationComponent";
import ArrayFormationComponent from "../../components/ArrayFormationComponent/ArrayFormationComponent";

const AdminView = () => {

const [listTmp, setListTmp] = useState([])

  return (
    <div>
      <h1>AdminView</h1>
      <AddFormationComponent setListTmp={setListTmp}/>
      <h2 style={{textAlign: 'center' , margin: '40px 0px'}}>Liste des formations</h2>
      <ArrayFormationComponent listTmp={listTmp}/>
    </div>
  );
};

export default AdminView;
