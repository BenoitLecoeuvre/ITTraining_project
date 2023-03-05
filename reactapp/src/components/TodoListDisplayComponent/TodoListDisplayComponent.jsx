import React, { useState } from 'react';
import listTodo from '../../datas/Todolist.json';
import TodoLineComponent from '../TodoListLineComponent/TodoLineComponent';
import './TodoListDisplayComponent.css';

const TodoList = () => {

    const [todoList, setTodoList] = useState(listTodo);

    // Function pour supprimer une todo
    function deleteTodo(index) {
        console.log(index)
        if (window.confirm(`Etes-vous sur de vouloir supprimer la tâche n°${index + 1}? Cette action est irréversible !`)) {
            let newTodoList = todoList.filter((todo) => todo.id - 1 !== index);
            setTodoList(newTodoList)
        }
    }

    // Function pour changer le statut d'une todo
    function checkedTodo(index) {
        let tmpTodo = [];
        for (let todo of todoList)
            if (todo.id -1 === index) {
                let status = !todo.completed
                todo.completed = status
                tmpTodo.push(todo)
                setTodoList(tmpTodo)
            }
            else tmpTodo.push(todo)
    }

    return (
        <div className='Todo'>

            <h2 style={{ textAlign: 'center', margin: '40px 0px' }}>Liste des tâches générales</h2>

            <table className='RenduTodo'>
                <thead>
                    <th>Tâche N°</th>
                    <th>A faire</th>
                    <th>Détails de la tâche</th>
                    <th className='todoValide'>Valider</th>
                    <th className='todoModif'>Modifier</th>
                    <th className='todoSupp'>Supprimer</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    {
                        todoList.map((todo, index) =>
                            <TodoLineComponent key={index}
                                checkedTodo={checkedTodo} deleteTodo={deleteTodo} todoList={todoList} setTodoList={setTodoList} todo={todo} index={index} />)}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;
