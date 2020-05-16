import React from 'react';
import TodoListTask from "./Task/TodoListTask";
import styles from './TodoListTasks.module.css'

class TodoListTasks extends React.Component {
    render = () => {

        let taskEl = this.props.tasks.map ( task => <TodoListTask key={task.id}
                                                                  task={task}
                                                                  changeStatus={this.props.changeStatus}
                                                                  changeTitle={this.props.changeTitle}
                                                                  deleteTask={this.props.deleteTask}
                                                                  changePriority={this.props.changePriority}/>);

        return (
            <div className={styles.todoTasks}>
                {taskEl}
            </div>
        );
    }
}

export default TodoListTasks;

