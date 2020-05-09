import React from 'react';
import './Navbar.css'
import {NavLink} from "react-router-dom";


class Navbar extends React.Component {

    render = () => {
        return (
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink  to="/monday">Monday</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tuesday">Tuesday</NavLink>
                    </li>
                    <li>
                        <NavLink to="/wednesday">Wednesday</NavLink>
                    </li>
                    <li>
                        <NavLink to="/thursday">Thursday</NavLink>
                    </li>
                    <li>
                        <NavLink to="/friday">Friday</NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter">Counter</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
