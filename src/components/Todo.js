import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, editTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });
    console.log("todos --->", todos);

    const submitUpdate = (updateValue) => {
        editTodo(edit.id, updateValue);
        setEdit({ id: null, value: "" });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => {
        return (
            <div
                className={
                    todo.isCompleted ? "todo-card completed" : "todo-card"
                }
                key={index}
            >
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <RiCloseCircleLine
                        className="remove-icon"
                        onClick={() => removeTodo(todo.id)}
                    />
                    <TiEdit
                        className="edit-icon"
                        onClick={() =>
                            setEdit({ id: todo.id, value: todo.text })
                        }
                    />
                </div>
            </div>
        );
    });
}

export default Todo;
