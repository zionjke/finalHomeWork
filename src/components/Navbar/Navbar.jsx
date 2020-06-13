import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css'
import {connect} from "react-redux";



class Navbar extends React.Component {

    render = () => {

        let theme = this.props.style

        return (
            <nav className={`${styles.nav} ${styles[theme]}`}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_list_item}>
                        <NavLink  className={styles.nav_list_item_link}  to="/monday">Monday</NavLink>
                    </li>
                    <li className={styles.nav_list_item}>
                        <NavLink className={styles.nav_list_item_link}  to="/tuesday">Tuesday</NavLink>
                    </li>
                    <li className={styles.nav_list_item}>
                        <NavLink className={styles.nav_list_item_link} to="/wednesday">Wednesday</NavLink>
                    </li>
                    <li className={styles.nav_list_item}>
                        <NavLink className={styles.nav_list_item_link} to="/thursday">Thursday</NavLink>
                    </li>
                    <li className={styles.nav_list_item}>
                        <NavLink className={styles.nav_list_item_link} to="/friday">Friday</NavLink>
                    </li>
                    <li className={styles.nav_list_item}>
                        <NavLink className={styles.nav_list_item_link} to="/counter">Counter</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        style: state.settings.style
    }
}

export default connect(mapStateToProps,null)(Navbar);
