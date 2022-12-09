import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import './TodoLineComponent.css'

const TodoLineComponent = ({ checkedTodo, deleteTodo, todoList, setTodoList, todo, index }) => {

    const [todoEdit, settodoEdit] = useState(true)

    // Function pour éditer/enlever le formulaire à la place du tableau
    function toggleForm() {
        settodoEdit(!todoEdit)
    }

    // Function pour modifier une todo p2
    function editTodo(updateTodo) {
        let tmpTodo = [];
        for (let todo of todoList) {
            if (todo.id === updateTodo.id) {
                todo.id = updateTodo.id;
                todo.todo = updateTodo.todo;
                todo.detail = updateTodo.detail;
                tmpTodo.push(todo)
            } else tmpTodo.push(todo)
        }
        console.log(tmpTodo)
        setTodoList(tmpTodo)
    }

    // Function pour modifier une todo p1
    function validEdit(index) {
        if (window.confirm("Etes-vous sur de vouloir modifier la tâche n°" + todo.id)) {
            let id = index + 1;
            let todo = document.getElementById('todo').value;
            let detail = document.getElementById('detail').value;
            const modifTodo = { id, todo, detail };
            editTodo(modifTodo)
            toggleForm();
        }
    }


    return todoEdit ?
        (
            <React.Fragment key={index}>
                {todo.completed === true ?
                    <tr key={index} style={{ color: 'green' }}>
                        <td>{todo.id}</td>
                        <td>{todo.todo}</td>
                        <td>{todo.detail}</td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} onClick={() => checkedTodo(index)} />
                            <FontAwesomeIcon icon={faPen} onClick={() => toggleForm()} />
                            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(index)} /></td>
                        <td>{todo.date.date}</td>
                    </tr>
                    :
                    <tr key={index} >
                        <td>{todo.id}</td>
                        <td>{todo.todo}</td>
                        <td>{todo.detail}</td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} onClick={() => checkedTodo(index)} />
                            <FontAwesomeIcon icon={faPen} onClick={() => toggleForm()} />
                            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(index)} /></td>
                    </tr>}
            </React.Fragment>
        )
        :
        (
            <React.Fragment>
                <td id="id" defaultValue={todo.id}>{todo.id}</td>
                <td><input type="text" placeholder="Tâche à réaliser" name="todo" id="todo" defaultValue={todo.todo} /></td>
                <td><input type="text" placeholder="Détail" name="detail" id="detail" defaultValue={todo.detail} /></td>
                <td>
                    <FontAwesomeIcon icon={faCheck} onClick={() => validEdit(index)} /></td>
            </React.Fragment>
        )
}

export default TodoLineComponent;
