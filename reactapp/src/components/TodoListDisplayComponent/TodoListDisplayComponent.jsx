import React, { useState } from 'react';
import listTodo from '../../datas/Todolist.json';
import TodoLineComponent from '../TodoListLineComponent/TodoLineComponent';

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
        <table>
            <thead>
                <th>N°</th>
                <th>A faire</th>
                <th>Détails</th>
                <th>Actions</th>
                <th>Date</th>
            </thead>
            <tbody>
                {
                    todoList.map((todo, index) =>
                        <TodoLineComponent key={index}
                            checkedTodo={checkedTodo} deleteTodo={deleteTodo} todoList={todoList} setTodoList={setTodoList} todo={todo} index={index} />)}
            </tbody>
        </table>
    );
}

export default TodoList;
