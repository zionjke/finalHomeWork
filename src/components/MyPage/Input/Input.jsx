import React from 'react';
import styles from './Input.module.css'

class Input extends React.Component {

  render = () => {
    return (
        <input className={styles.input}
               placeholder={this.props.placeholder}
               value = {this.props.value}
               onChange={this.props.onChange}
               onKeyPress={this.props.onKeyPress}
                />
    );
  }
}

export default Input;
