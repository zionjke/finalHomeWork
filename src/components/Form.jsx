import React from 'react';
import styles from '../css/Form.module.css'

class Form extends React.Component {
    newFriendNameRef = React.createRef();
    onAddFriendButtonClick = () => {
        let newName = this.newFriendNameRef.current.value;
        if (this.newFriendNameRef.current.value===""){
            alert("Введи свое имя бро ;)")
        } else {
            alert("Будем знакомы " + newName + " " + "," +"я добавлю тебя в список друзей");
            this.newFriendNameRef.current.value = "";
            this.props.addFriend(newName)
        }
    };
    render = () => {
        let friendsElement = this.props.friends.map(f => {
            return (<li>{f.name}</li>)
        });
        return (
            <div className={styles.form}>
                <p className={styles.form_text}>Ну что, пришло время познакомится? :)</p>
                <input className={styles.input} ref={this.newFriendNameRef} onChange={this.props.buttonChange}  placeholder={"Имя:"}/>
                <button className={styles.button} onClick={this.onAddFriendButtonClick} disabled={this.props.disabled}  >Отправить</button>
                <p className={styles.form_text}>Список друзей самураев:</p>
                <ul className={styles.friendsList}>
                    {friendsElement}
                </ul>
            </div>


        );
    }
}

export default Form;
