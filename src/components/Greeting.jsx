import React from 'react';
import styles from '../css/Greeting.module.css'



class Greeting extends React.Component {

  render = () => {
    return (
       <div className={styles.greeting}>
           Привет бро, меня зовут <span className={styles.name}>{this.props.person.name}</span>,
           мне <span className={styles.age}>{this.props.person.age}</span> год
           и я живу в городе <span className={styles.city}>{this.props.person.city}</span>.
       </div>
    );
  }
}

export default Greeting;
