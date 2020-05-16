import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css'


class Navbar extends React.Component {

    render = () => {
        return (
            <nav className={styles.nav}>
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

export default Navbar;
