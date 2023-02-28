import React from 'react';
import './AdminBoutonsComponent.css';

const AdminBoutonsComponent = ({ contact, setContact, addFormation, setAddFormation, displayFormation, setDisplayFormation, todoList, setTodoList, history, setHistory }) => {


    return (
        <div className='admin_buttons'>
            <div className='button_div'>
                <button title='Ajouter une formation' type="button" className='admin_button admin_add' onClick={() => setAddFormation(!addFormation)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M450 776h60V606h170v-60H510V376h-60v170H280v60h170v170ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z" /></svg>
                </button>
            </div>

            <div className='button_div'>
                <button title='Liste des formations' type="button" className='admin_button admin_display' onClick={() => setDisplayFormation(!displayFormation)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M149.825 776Q137 776 128.5 767.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137 606 128.5 597.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137 436 128.5 427.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5ZM290 776v-60h550v60H290Zm0-170v-60h550v60H290Zm0-170v-60h550v60H290Z" /></svg>
                </button>
            </div>

            <div className='button_div'>
                <button title='To do list' type="button" className='admin_button admin_todo' onClick={() => setTodoList(!todoList)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M222 842 80 700l42-42 100 99 179-179 42 43-221 221Zm0-320L80 380l42-42 100 99 179-179 42 43-221 221Zm298 244v-60h360v60H520Zm0-320v-60h360v60H520Z" /></svg>
                </button>
            </div>

            <div className='button_div'>
                <button title='Historique des formations' type="button" className='admin_button admin_formhistory' onClick={() => setHistory(!history)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 996q-78-69-170.5-106T120 853V424q94 0 186.5 43T480 587q81-77 173.5-120T840 424v429q-97 0-189.5 37T480 996Zm3-552q-65 0-109.5-44.5T329 290q0-65 44.5-109.5T483 136q65 0 109.5 44.5T637 290q0 65-44.5 109.5T483 444Z" /></svg>
                </button>
            </div>

            <div className='button_div'>
                <button title='Messagerie' type="button" className='admin_button admin_contacthistory' onClick={() => setContact(!contact)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M240 657h313v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM80 976V236q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880 236v520q0 23-18.5 41.5T820 816H240L80 976Z" /></svg>
                </button>
            </div>
        </div>
    );
}

export default AdminBoutonsComponent;
