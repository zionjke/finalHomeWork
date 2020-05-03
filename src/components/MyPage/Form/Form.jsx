import React from 'react';
import styles from './Form.module.css'
import Button from "../Button/Button";
import Input from "../Input/Input";

class Form extends React.Component {

    state = {
        value: ""
    }

    onAddFriendButtonClick = () => {
        if (this.state.value === "") {
            alert("Введи свое имя")
        } else {
            alert("Привет" + " " + this.state.value)
            this.props.addFriend(this.state.value);
            this.setState({
                value: ""
            })
        }

    };

    changeInputValue = (e) => {
        this.setState({
            value: e.currentTarget.value
        })
    }

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddFriendButtonClick()
        }
    };

    render = () => {

        let friendsList = this.props.friends.map((f,index) => {
            return (<li key={index}>{f.friend}</li>)
        });

        let buttonDisabled = !this.state.value

        return (
            <div className={styles.form}>
                <p>
                    Ну что, пришло время познакомится? :)
                </p>
                <Input onChange={this.changeInputValue}
                       value = {this.state.value}
                       onKeyPress={this.onKeyPress}
                       placeholder="Введи свое имя:"/>
                <Button onClick={this.onAddFriendButtonClick}
                        disabled={buttonDisabled}/>
                <p>
                    Список друзей самураев:
                </p>
                <ul className={styles.friendsList}>
                    {friendsList}
                </ul>
            </div>
        );
    }
}

export default Form;
