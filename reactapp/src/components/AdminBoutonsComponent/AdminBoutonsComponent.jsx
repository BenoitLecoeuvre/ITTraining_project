import React from 'react';
import './AdminBoutonsComponent.css';

const AdminBoutonsComponent = ({contact, setContact, addFormation, setAddFormation, displayFormation, setDisplayFormation, todoList, setTodoList, history, setHistory }) => {


    return (
        <div className='admin_buttons'>
            <div className='button_div'>
            <button type="button" className='admin_button admin_add' onClick={()=> setAddFormation(!addFormation)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M450 776h60V606h170v-60H510V376h-60v170H280v60h170v170ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z"/></svg>
            </button>
            <p className='display_txt'>Ajouter une formation</p>
            </div>

            <div className='button_div'>
            <button type="button" className='admin_button admin_display' onClick={()=> setDisplayFormation(!displayFormation)}></button>
            <p>Liste des formations</p>
            </div>

            <div className='button_div'>
            <button type="button" className='admin_button admin_todo' onClick={()=> setTodoList(!todoList)}></button>
            <p>TodoList</p>
            </div>

            <div className='button_div'>
            <button type="button" className='admin_button admin_formhistory' onClick={()=> setHistory(!history)}></button>
            <p>Historique des formations</p>
            </div>

            <div className='button_div'>
            <button type="button" className='admin_button admin_contacthistory' onClick={()=> setContact(!contact)}></button>
            <p>Historique des messages</p>
            </div>
        </div>
    );
}

export default AdminBoutonsComponent;
