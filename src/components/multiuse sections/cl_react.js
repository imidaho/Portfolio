import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactProjectPic from '../../img/multi/React_api_calls.jpg'

const Cl_React = () => {
    return (
        <div className='article'>
            <h1>API Calls Using React Framework</h1>

            <div className='section'>
                <div className='text'>
                    <h2>Goal:</h2>
                    <p>Create three separate API Calls while utilizing react framework</p>
                    <h2>Solution:</h2>
                    <p>
                        Using react's state and the fetch method, I created a simple page where users can generate random users, an inspirational quote, and images by keyword.
                </p>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/imidaho/JMC_React_API_Calls'>Check Out The Source Code</a>
                </div>
                <div className='section-pic'>
                    <img src={ReactProjectPic}></img>
                </div>

            </div>
            {/* <div className='section'>
                <div className='text'>
                    <h2>Solution:</h2>
                    <p>
                        Using react's state and the fetch method, I created a simple page where users can generate random users, an inspirational quote, and images by keyword.
                </p>
                </div>
                <div className='section-pic'>

                </div>

            </div> */}
        </div>
    );
}

export default Cl_React;