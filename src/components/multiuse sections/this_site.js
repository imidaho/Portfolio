import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ThisSitePic from '../../img/multi/this_site.jpg'
const ThisSite = () => {
    return (
        <div className='article'>
            <h1>This Site</h1>

            <div className='section'>
                <div className='text'>
                    <h2>Goal</h2>
                    <p>Create a single page app showcasing my web development skillset</p>
                    <h2>Solution:</h2>
                    <p>Using create-react-app and github pages, I've built out this site from scratch using the react.js framework and concepts.</p>
                </div>
                <div className='section-pic'>
                    <img src={ThisSitePic}></img>
                </div>

            </div>
            {/* <div className='section'>
                <div className='text'>
                    <h2>Solution:</h2>
                    <p>Using create-react-app and github pages, I've built out this site from scratch using the react.js framework and concepts.</p>
                </div>
                <div className='section-pic'>

                </div>
            </div> */}
        </div>
    );
}

export default ThisSite;