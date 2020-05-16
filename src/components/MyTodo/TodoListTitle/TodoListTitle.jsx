import React from 'react';
import styles from './TodoListTitle.module.css'

class TodoListTitle extends React.Component {

    render = () => {

        return (
                <h3 className={styles.todoTitle}>
                    {this.props.title}
                </h3>
        );
    }
}

export default TodoListTitle;

