import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const autoFocus = useRef(null);

    useEffect(() => {
        autoFocus.current.focus();
    });

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input,
        });

        setInput("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Update todo here..."
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={autoFocus}
                    />
                    <button className="add-button">Update</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Add a todo here..."
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={autoFocus}
                    />
                    <button className="add-button">Add todo</button>
                </>
            )}
        </form>
    );
}

export default TodoForm;
