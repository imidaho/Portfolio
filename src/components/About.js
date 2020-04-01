import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeekeeperJames from '../img/collector of hobbies/BeekeeperJames.jpg'

const About = () => {
    return (
        <div className="article">
            <h1>You can learn much more about me soon!</h1>
            <div className="section">
                <div className="text">
                    <h4> In the meantime, you can reach me via:</h4>
                    <ul>
                        <li><strong>Email:</strong>  &nbsp;   jamesmcochran@gmail.com</li>
                        <li><strong>Cell:</strong>  &nbsp;   301-806-4984</li>
                    </ul>
                </div>
                <div className='section-pic'>
                    <img src={BeekeeperJames} ></img>
                </div>
            </div>
        </div>

    );
}

export default About;