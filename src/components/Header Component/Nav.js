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
                <a className="nav-item" href="#">About</a>
                <a className="nav-item" href="#">Front End Development</a>
                <a className="nav-item" href="#">Python/SQL</a>
                <a className="nav-item" href="#">React.js</a>
                <a className="nav-item" href="#">UX</a>
                <a className="nav-item" href="#">Collector of Hobbies</a>
                <a className="nav-item" href="#">Contact</a>
            </nav>
        </div>
    );
}
export default NavBar;