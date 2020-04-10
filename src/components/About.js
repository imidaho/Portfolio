import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeekeeperJames from '../img/collector of hobbies/BeekeeperJames.jpg'
import ricePaddyJames from '../img/collector of hobbies/ricePaddyJames.jpg'

const About = () => {
    return (
        <div className="article">
            <h1>A Little Bit About Me:</h1>
            <div className="section">
                <div className="text">
                    <p>I am pursuing new career opportunities that can better utilize my digital and web skillset.  For the past 5 years, I have been Kentucky’s statewide Farmers Market Support Program Manager with Community Farm Alliance.  In February of 2015, I inherited a program with 15 participating markets, a paper application process, and a basic and unambitious structure for the year.  Since then, I developed the ‘Farmer’s Market Matters’ webinar series, an online annual application process, created networking spaces for Kentucky Farmers market leaders online, and have grown the program to support 58 Farmers Markets (just over 1/3 of all registered markets in KY), with a team of 4 additional part-time regional staff providing technical support. And on the side, I spearheaded the passage of House Bill 468, which expanded the list of allowable items that could be sold to the public from home kitchens.  Like you, I have also concluded that utilizing and embracing technology is an essential ingredient for small and medium farms to not only compete with ‘Big Ag’, but to work towards reversing the trend of ever-shrinking profit margins.  </p>
                    <p>I’ve always been the ‘tech guy’ at my respective places of employment.  Additionally, in the past 18 months I have completed the Front End Web Development (HTML, CSS, JavaScript), Python/SQL, and React.js courses offered by Code Louisville.  I have supported the CFA Communications Manager with the Community Farm Alliance web page, including inserting an interactive map on the Farmers Market Support Program page, and setting up landing pages and registrations for CFA and FMSP Events.  I’ve also volunteered time and web development support to Louisville New Roots, the Louisville Community Grocery, and recently began volunteering with thefarmboard.com, a web based project to connect buyers with what’s in season on participating farms.  </p>
                    <p>Through all of my development work, UX has been the work I enjoy the most, and creating the code base to make, improve and refine that experience has proven to be one of my favorite development tasks.  In my career, I’ve worked closely and professionally with farmers, customers, administrators, government officials, foundations, entrepreneurs, religious officials, and medical professionals, to name a few.  Having been exposed to so many different perspectives and goals, has taught me how important it is the shape the conversations and interactions with people to get the most valuable and useful responses.  My degree in anthropology sent me down a path towards understanding the core principles that motivate behavior in all humans and how that behavior might change under different circumstances, and that has stayed with me ever since. </p>
                    <p>Prior to moving to Louisville, I was the San Francisco Peninsula Regional Manager for Pacific Coast Farmers Market Association, overseeing 18 farmers markets in 3 counties.  I worked for nearly eight years in the farmers market business in Northern California. I have an intimate knowledge of the agricultural seasons, food producers, food safety, and the requirements of operating a farmers market from its infancy to its full capacity. </p>
                    <p>I’ve become familiar with the Agile process with thefarmboard.com, am confident in my decision-making abilities, and am comfortable communicating my choices in potentially difficult situations.  In my time in the farmers market industry, I gained a deep and profound respect for the importance of monitoring the details of the work while never losing sight of the big picture: making farmers and small businesses money.</p>

                </div>
                <div className='section-pic'>
                    <img src={BeekeeperJames} ></img>
                    <img src={ricePaddyJames}></img>
                </div>
            </div>
        </div>

    );
}

export default About;