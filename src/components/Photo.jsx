import React from 'react';
import styles from '../css/Photo.module.css'

class Photo extends React.Component {

  render = () => {
    return (
        <img className={styles.photo} src={this.props.photo} alt="photo"/>
    );
  }
}

export default Photo;
