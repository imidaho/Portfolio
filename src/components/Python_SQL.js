import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import tempRangePic from '../img/python-sql/Conclusion-temp-range-graph.jpg'
import weekendListFunctionPic from '../img/python-sql/WeekendListFunction.jpg'
import requestLoopPic from '../img/python-sql/requestLoopPic.jpg'
import PrecipCountGraph from '../img/python-sql/Conclusion-Precip-History.jpg'

const PythonSQL = () => {
    return (
        <div className='article'>
            <h1>'Best Party Days' Project</h1>
            <div className='section'>
                <div className='text'>
                    <h2>Goal:</h2>
                    <p>Inspired by my experience in planning my wedding, I created a project to determine the most historically reliable weekend (including long holiday weekends) to host an outdoor party.  </p>
                    <h2>Solution:</h2>
                    <p>
                        Using Python, Jupyter Notebooks, SQL, and the Dark Sky API for 10 years of weather history, I built a series of customizable functions to create a reusable tool to determine the best chances for comfortable and dry outdoor party.
                </p>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/imidaho/Best-Party-Days'>Check Out The Source Code</a>
                </div>
                <div className='section-pic'>
                    <img src={tempRangePic}></img>
                </div>
            </div>
            <div className='section'>
                <div className='text'>
                    <h2>Project Highlight :</h2>
                    <p>I created a function that built out a list of a given year's weekend dates, and included the following (weekend adjacent) holidays:</p>
                    <ul>
                        <li>President's Day</li>
                        <li>Memorial Day</li>
                        <li>Labor Day</li>
                        <li>Columbus Day</li>
                        <li>Veterans Day</li>
                    </ul>
                    <p>Some code worth noting:</p>
                    <ul>
                        <li>Given that the above holidays always occur on a specified pattern (ex. 1st Monday of September), I built in some `if` logic into the loop to account for the above holidays</li>
                    </ul>

                </div>
                <div className='section-pic'>
                    <img src={weekendListFunctionPic}></img>
                </div>
            </div>
            <div className='section'>
                <div className='text'>
                    <h2>Project Highlight :</h2>
                    <p>I created another function that used the dark sky API to pull down a customizeable number of years of data down for each of the dates in my weekend list, appended it to a dataframe, and converted that datarame into a SQL Database.  Some code worth noting:
                    </p>
                    <ul>
                        <li>The `request_loop()` function was built with future use and changing API limitations in mind</li>
                    </ul>

                </div>
                <div className='section-pic'>
                    <img src={requestLoopPic}></img>
                </div>
            </div>
            <div className='section'>
                <div className='text'>
                    <h2>Project Highlight :</h2>
                    <p>With the data needed for the project now stored safely inside a SQL Database, the remaining code was written to manipulate the data and reach a useful conclusion</p>
                    <h5>Manipulation steps:</h5>
                    <ol>
                        <li>Create a panda table that consisted of the weekend dates and the number of precipitation events that have occured over the past (as determined by the `request loop()` `years_back` parameter, which by default is 10 years).</li>
                        <li>Create another table with the historical average high and average low temperatures on the targeted weekend days</li>
                        <li>Merge those tables together</li>
                        <li>Filter the table to only include the dates where the Average high and low temperatures are within the 'desired' range (defaults set to 80° and 50°)</li>
                        <li>use Matplotlib to create a two tables</li>
                        <ul>
                            <li>One showing all days that on average will be the most comforable outdoor party days</li>
                            <li>One showing the history of precipitation events on those days</li>
                        </ul>
                    </ol>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/imidaho/Best-Party-Days'>Check Out The Source Code</a>
                </div>
                <div className='section-pic'>
                    <img src={tempRangePic}></img>
                    <img src={PrecipCountGraph}></img>

                </div>
            </div>
        </div>
    );
}

export default PythonSQL;