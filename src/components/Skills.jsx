import React from 'react';
import styles from '../css/Skills.module.css'

class Skills extends React.Component {
  render = () => {
      let skillsElement = this.props.skills.map((s,skill) => {return ( <li key={skill}  className={styles.skill}>{s.skill}</li>)});
    return (
       <div className={styles.skills}>
            <p className={styles.text}>
                Наверное ты хочешь узнать меня немного больше? :)<br/>
                Тогда вот тебе три качевства которыми я обладаю:
            </p>
           <ul className={styles.list}>
               {skillsElement}
           </ul>
       </div>
    );
  }
}

export default Skills;
