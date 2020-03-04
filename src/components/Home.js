import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Intro from './Home Component/Intro'



const Home = () => {
    return (
        <div className="hero-img">
            <Intro />
        </div>
    );
}

export default Home;