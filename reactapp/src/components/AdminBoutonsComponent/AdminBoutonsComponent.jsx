import React, {useState} from 'react';
import './AdminBoutonsComponent.css';

const AdminBoutonsComponent = ({ contact, setContact, addFormation, setAddFormation, displayFormation, setDisplayFormation, userList, setUserList, formateurList, setFormateurList, todoList, setTodoList, history, setHistory }) => {

    // States
  const [addForm, setAddForm] = useState(false);
  const [listForm, setListForm] = useState(false);
  const [listUser, setListUser] = useState(false);
  const [listTodo, setListTodo] = useState(false);
  const [historyForm, setHistoryForm] = useState(false);
  const [mailbox, setMailbox] = useState(false);

    return (
        <div className='admin_buttons'>
            <div className='button_div'>
                <button onMouseOver={() => setAddForm(true)} onMouseOut={() => setAddForm(false)} 
                title='Ajouter une formation' type="button" className='admin_button admin_add' onClick={() => setAddFormation(!addFormation)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M450 776h60V606h170v-60H510V376h-60v170H280v60h170v170ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z" /></svg>
                </button>
                {
                (addForm) ?
                <p>Add Formation</p> :
                <span></span>
                }       
            </div>

            <div className='button_div'>
                <button onMouseOver={() => setListForm(true)} onMouseOut={() => setListForm(false)}
                title='Liste des formations' type="button" className='admin_button admin_display' onClick={() => setDisplayFormation(!displayFormation)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M149.825 776Q137 776 128.5 767.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137 606 128.5 597.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137 436 128.5 427.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5ZM290 776v-60h550v60H290Zm0-170v-60h550v60H290Zm0-170v-60h550v60H290Z" /></svg>
                </button>
                {
                (listForm) ?
                <p>Formations</p> :
                null
                }   
            </div>

            <div className='button_div'>
                <button onMouseOver={() => setListUser(true)} onMouseOut={() => setListUser(false)}
                title='Liste des utilisateurs' type="button" className='admin_button admin_user' onClick={() => { setUserList(!userList); setFormateurList(!formateurList) }} >
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M38 896v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358 636q62 0 120 14t131 46q32 14 50.5 42.5T678 802v94H38Zm700 0v-94q0-63-32-103.5T622 633q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519 568q24-25 36.5-61.5T568 425q0-45-12.5-79.5T519 282q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98 836h520v-34q0-16-9.5-31T585 750q-72-32-121-43t-106-11q-57 0-106.5 11T130 750q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448 425q0-39-25.5-64.5T358 335q-39 0-64.5 25.5T268 425q0 39 25.5 64.5T358 515Zm0 321Zm0-411Z" /></svg>
                </button>
                {
                (listUser) ?
                <p>Utilisateurs</p> :
                null
                }   
            </div>

            <div className='button_div'>
                <button onMouseOver={() => setListTodo(true)} onMouseOut={() => setListTodo(false)}
                title='To do list' type="button" className='admin_button admin_todo' onClick={() => setTodoList(!todoList)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M222 842 80 700l42-42 100 99 179-179 42 43-221 221Zm0-320L80 380l42-42 100 99 179-179 42 43-221 221Zm298 244v-60h360v60H520Zm0-320v-60h360v60H520Z" /></svg>
                </button>
                {
                (listTodo) ?
                <p>To-do list</p> :
                null
                }   
            </div>

            <div className='button_div'>
                <button onMouseOver={() => setHistoryForm(true)} onMouseOut={() => setHistoryForm(false)}
                title='Historique des formations' type="button" className='admin_button admin_formhistory' onClick={() => setHistory(!history)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 996q-78-69-170.5-106T120 853V424q94 0 186.5 43T480 587q81-77 173.5-120T840 424v429q-97 0-189.5 37T480 996Zm3-552q-65 0-109.5-44.5T329 290q0-65 44.5-109.5T483 136q65 0 109.5 44.5T637 290q0 65-44.5 109.5T483 444Z" /></svg>
                </button>
                {
                (historyForm) ?
                <p>Historique</p> :
                null
                }   
            </div>

            <div onMouseOver={() => setMailbox(true)} onMouseOut={() => setMailbox(false)}
            className='button_div'>
                <button title='Messagerie' type="button" className='admin_button admin_contacthistory' onClick={() => setContact(!contact)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M240 657h313v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM80 976V236q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880 236v520q0 23-18.5 41.5T820 816H240L80 976Z" /></svg>
                </button>
                {
                (mailbox) ?
                <p>Messagerie</p> :
                null
                }   
            </div>
        </div>
    );
}

export default AdminBoutonsComponent;
