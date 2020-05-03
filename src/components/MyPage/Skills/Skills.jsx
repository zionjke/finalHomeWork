import React from 'react';
import styles from './Skills.module.css'

class Skills extends React.Component {
  render = () => {
      let skillsList = this.props.skills.map((s,index) => {return ( <li key={index}  className={styles.skill}>{s.skill}</li>)});
    return (
       <div className={styles.skills}>
            <p className={styles.text}>
                Наверное ты хочешь узнать меня немного больше? :)<br/>
                Тогда вот тебе три качевства которыми я обладаю:
            </p>
           <ul className={styles.list}>
               {skillsList}
           </ul>
       </div>
    );
  }
}

export default Skills;
