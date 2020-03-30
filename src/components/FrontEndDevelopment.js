import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cl_React from './multiuse sections/cl_react';
import ThisSite from './multiuse sections/this_site';
import CFAHomePage from '../img/fewd/CFA_Home_Page.jpg'


const FrontEndDevelopment = () => {
    return (
        <div>
            <div className='article'>
                <h1>CFA Home Page Prototype</h1>
                <div className='section'>
                    <div className='text'>
                        <h2>Goal</h2>
                        <p> Build a scaleable webpage using Html, CSS, and a javascript function </p>
                        <h2>Solution:</h2>
                        <p>Landing page features:</p>
                        <ul>
                            <li>Scaleable navbar</li>
                            <li>Completely responsive and scaleable 'hero image'</li>
                            <li>Javascript powered feedback form</li>
                        </ul>
                    </div>
                    <div className='section-pic'>
                        <img src={CFAHomePage}></img>
                    </div>
                </div>
                {/* <div className='section'>
                    <div className='text'>
                        <h2>Solution:</h2>
                        <p>Landing page features:</p>
                        <ul>
                            <li>Scaleable navbar</li>
                            <li>cCmpletely responsive and scaleable 'hero image'</li>
                            <li>javascript powered feedback form</li>
                        </ul>

                    </div>
                    <div className='section-pic'>

                    </div>

                </div> */}
            </div>
            <Cl_React />
            <ThisSite />
        </div>
    );
}

export default FrontEndDevelopment;

