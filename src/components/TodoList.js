import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text) {
            return;
        }
        const newTodo = [todo, ...todos];
        setTodos(newTodo);
        console.log(newTodo);
    };

    const completeTodo = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const removeTodo = (id) => {
        const newTodo = todos.filter((todo) => todo.id !== id);
        setTodos(newTodo);
    };

    const editTodo = (id, editValue) => {
        if (!editValue.id) {
            return;
        }
        setTodos((todo) =>
            todo.map((item) => (item.id === id ? editValue : item))
        );
    };

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <div className="todo-container">
                <Todo
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                />
            </div>
        </div>
    );
}

export default TodoList;
