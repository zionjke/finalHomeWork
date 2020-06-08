import React from "react";
import './scss/todo_app.scss'
import List from "./components/List";

function TodoApp() {
        return (
            <div className="todo">
                <div className="todo__sidebar">
                    <List/>
                </div>
                <div className="todo__tasks">

                </div>
            </div>
        )
}

export default TodoApp