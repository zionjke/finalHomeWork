import React from 'react';
import styles from './AddNewItemForm.module.css'

class AddNewItemForm extends React.Component {

    state = {
        error: false,
        title: ""
    }

    onAddItemClick = () => {
        let newTitle = this.state.title.trim()
        if (newTitle === "") {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                error: false,
                title: ""
            });
            this.props.addItem(newTitle)
        }

    };

    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        });
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddItemClick();
        }
    }

    render = () => {

        let classForInput = this.state.error ? styles.error : styles.form_input

        return (
                <div className={styles.form}>
                    <input
                           className={classForInput}
                           onChange={this.onTitleChanged}
                           onKeyPress={this.onKeyPress}
                           value={this.state.title}
                           type="text"
                           placeholder={this.props.placeholder}
                    />
                    <button className={styles.form_button} onClick={this.onAddItemClick}>{this.props.buttonName}</button>
                </div>

        );
    }
}

export default AddNewItemForm;

