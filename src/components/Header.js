import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import NavBar from './Header Component/Nav'
import Ux from './Ux'


const Header = () => {
    return (
        <HashRouter>
            <div>
                <NavBar />
                <Route path="/Ux" component={Ux} />
            </div>
        </HashRouter>
    );
}

export default Header;