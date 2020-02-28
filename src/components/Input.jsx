import React from 'react';
import styles from '../css/Input.module.css'

class Input extends React.Component {

  render = () => {
    return (
        <input className={styles.input}
               ref={this.props.newFriendNameRef}
               onChange={this.props.buttonChange}
               placeholder={this.props.placeholder}
                />
    );
  }
}

export default Input;
