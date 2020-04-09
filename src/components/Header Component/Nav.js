import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="nav-container">
            {/* <!-- This checkbox will give us the toggle behavior, it will be hidden, but functional --> */}
            <input id="toggle" type="checkbox" />

            {/* <!-- IMPORTANT: Any element that we want to modify when the checkbox state changes go here, being "sibling" of the checkbox element -->

                <!-- This label is tied to the checkbox, and it will contain the toggle "buttons" --> */}
            <label className="toggle-container" for="toggle">
                {/* <!-- If menu is open, it will be the "X" icon, otherwise just a clickable area behind the hamburger menu icon --> */}
                <span className="button button-toggle"></span>
            </label>
            <nav className="nav">

                <Link className="nav-item" to="/"><span>Home</span></Link>
                <Link className="nav-item" to="/About"><span>About</span></Link>
                <Link className="nav-item" to="/FEWD"><span>Front End Development</span></Link>
                <Link className="nav-item" to="/Python-SQL"><span>Python/SQL</span></Link>
                <Link className="nav-item" to="/React-JS"><span>React.js</span></Link>
                <Link className="nav-item" to="/Ux"><span>UX</span></Link>
                {/* <Link className="nav-item" to="/Collector-of-Hobbies"><span>Collector of Hobbies</span></Link> */}
                <Link className="nav-item" to="/Contact"><span>Contact</span></Link>
            </nav>
        </div>
    );
}
export default NavBar;
