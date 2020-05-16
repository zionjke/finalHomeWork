import React from 'react';
import styles from './MyTodo.module.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./Form/AddNewItemForm";
import {restoreState, saveState} from "../../localStorage";

class MyTodo extends React.Component {

    state = {
        todolists: [],
    }
    newTodoId = 0

    saveTodo = () => {
        saveState("todo-state", this.state)
    };

    restoreTodo = () => {
        let state =  restoreState("todo-state",this.state)
        this.setState(state, () => {
            this.state.todolists.forEach(tl => {
                if (tl.id >= this.newTodoId) {
                    this.newTodoId = tl.id +1
                }
            })
        });
    };

    addTodoList = (title) => {
        let newTodolist = {
            id: this.newTodoId,
            title: title
        };
        this.newTodoId++;
        let newTodolists = [...this.state.todolists, newTodolist];
        this.setState({
            todolists: newTodolists,
        },() => { this.saveTodo()})
    };

    componentDidMount() {
        this.restoreTodo()
    };

    render = () => {

        const todolists = this.state.todolists.map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title}/>)

        return (

            <div>
                <div className={styles.addTodo_form}>
                    <AddNewItemForm placeholder="New TodoList name"
                                    addItem={this.addTodoList}
                                    buttonName="Add ToDo"/>
                </div>
                <div className={styles.myTodo}>
                    {todolists}
                </div>
            </div>
        );
    }
}

export default MyTodo;

