import React from 'react';

const AdminBoutonsComponent = ({contact, setContact, addFormation, setAddFormation, displayFormation, setDisplayFormation, todoList, setTodoList, history, setHistory }) => {


    return (
        <div>
            <button onClick={()=> setAddFormation(!addFormation)}>Ajouter une formation</button>
            <button onClick={()=> setDisplayFormation(!displayFormation)}>Liste des formations</button>
            <button onClick={()=> setTodoList(!todoList)}>TodoList</button>
            <button onClick={()=> setHistory(!history)}>Historique des formations</button>
            <button onClick={()=> setContact(!contact)}>Historique des messages</button>
        </div>
    );
}

export default AdminBoutonsComponent;
