import React from 'react';
import styles from '../css/Form.module.css'
import Button from "./Button";
import Input from "./Input";

class Form extends React.Component {

    onAddFriendButtonClick = () => {
        let newName = this.props.newFriendNameRef.current.value;
            alert("Будем знакомы " + newName + " " + "," +"я добавлю тебя в список друзей");
            this.props.newFriendNameRef.current.value = "";
            this.props.addFriend(newName);
    };

    render = () => {
        let friendsElement = this.props.friends.map((f,name) => {
            return (<li key={name}>{f.name}</li>)
        });
        return (
            <div className={styles.form}>
                <p className={styles.form_text}>Ну что, пришло время познакомится? :)</p>
                <Input newFriendNameRef={this.props.newFriendNameRef}
                       buttonChange={this.props.buttonChange}
                       placeholder={"Имя:"}
                       />
                <Button onAddFriendButtonClick={this.onAddFriendButtonClick}
                        disabled={this.props.disabled}/>
                <p className={styles.form_text}>Список друзей самураев:</p>
                <ul className={styles.friendsList}>
                    {friendsElement}
                </ul>
            </div>
        );
    }
}

export default Form;
