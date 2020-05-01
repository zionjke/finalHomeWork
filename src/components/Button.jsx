import React from 'react';
import styles from '../css/Button.module.css'

class Button extends React.Component {

  render = () => {
    return (
        <button className={styles.button} onClick={this.props.onClick} disabled={this.props.disabled}  >
            Отправить
        </button>
    );
  }
}

export default Button;
