import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const UX = () => {
    return (
        <div className="article">
            <h1>FMSP Map</h1>
            <h2>The Problem</h2>
            <p>Community Farm Alliance and the Farmers Market Support Program needed an easy way to provide customers with an outlet to find markets using Kentucky Double Dollars.&nbsp; It needed to be organized in such a way that:</p>
            <ul>
                <li>It is easy to navigate</li>
                <li>It is easy to filter out by day</li>
                <li>Allowed for multiple market locations operating under the same name</li>
                <li>Free of cost for CFA to build and share</li>
                <li>Can be embedded into CFA&rsquo;s website to receive potential customers activated by facebook ads.</li>
            </ul>
            <h2>The Solution</h2>
            <   h3>Google My Maps</h3>
            <h4>Google&rsquo;s MyMaps offers significant value, with a few shortcomings.&nbsp;</h4>
            <h5>Why it solves this need:</h5>
            <ul>
                <li>It can be embedded into CFA&rsquo;s WordPress powered site using iframes</li>
                <li>It allows for layering, which is a helpful tool to build out different contexts that customers may be seeking</li>
                <li>It&rsquo;s easily shareable with other teammates</li>
                <li>It tracks views</li>
                <li>It offers styling options that can enhance user experience</li>
                <li>It&rsquo;s free!</li>
            </ul>
            <h5>Where it could be better</h5>
            <ul>
                <li>There&rsquo;s no way for a user to set a radius around their preferred location</li>
                <li>It&rsquo;s not perfectly obvious how to navigate the menu</li>
                <li>There&rsquo;s no way to create a layer that is a filtered view of locations between multiple layers without created a negative point of UX.</li>
            </ul>
            <h2>Execution</h2>
            <h3>Data Table</h3>
            <h4>2019 Applications</h4>
            <h5>All data was sourced by the Survey Monkey powered application process.&nbsp;</h5>
            <h5>Market locations, hours and days of operation were recorded in the application</h5>
            <h4>The data was then separated out into 7 &nbsp;tables representing the days of the week</h4>
            <h4>Each line of those tables had the following columns</h4>
            <ul>
                <li>Market Name</li>
                <ul>Market location</ul>
                <li>Day of the week</li>
                <li>Hours</li>
                <li>Season Dates</li>
                <li>Credit/Debit Accepted</li>
                <li>SNAP Accepted</li>
                <li>Senior FMNP Accepted</li>
                <li>WIC FMNP Accepted</li>
                <li>KDD SNAP Fruit &amp; Veg Offered</li>
                <li>KDD SNAP Meat, Eggs, &amp; Dairy Offered</li>
                <li>KDD WIC Offered</li>
                <li>KDD SFMNP Offered</li>
                <li>Facebook</li>
                <li>Website</li>
            </ul>

            <h3>Challenges</h3>
            <p>Data inputs in application were not tightly structured</p>
            <p>Variability in data created issues with location data</p>
            <p>And structurers for &lsquo;hours&rsquo; column</p>
            <p>Market listings included market hours that repeated at different rates (ex. Every other week, every second Tuesday)</p>
            <p>Markets operating under the same name on multiple days of the week, and/or at multiple locations (ex. Lexington Farmers Markets)</p>
            <h3>Solution</h3>
            <h4>Normalization of opening and closing times</h4>
            <h4>All markets operating on multiple days of the week were given a [&lsquo;dayoftheweek&rsquo;] tag in the Market Name column (ex. &lsquo;Lexington FM [Tues]&rsquo;, or &lsquo;Estill County FM [2nd Tues of Month&rsquo;)</h4>
            <h3>Visualization</h3>
            <h4>Challenges</h4>
            <h5>Markets operating in the same location multiple days of the week did not show multiple pins in that location, as one was layered over the other.&nbsp;</h5>
            <h5>There isn&rsquo;t an adequate pin icon for &lsquo;farmers market&rsquo;</h5>
            <h4>Solution</h4>
            <h5>Default pin styling was the same between every layer added.&nbsp; Each pin had to be restyled individually, one click at a time.&nbsp;</h5>
            <h5>Each day of the week was assigned a color, and all market pins in that table were restyled to that color.</h5>
            <h3>Embedding into website</h3>
            <h4>Challenges</h4>
            <h5>Menu accessing the layers feature was not adequately &lsquo;obvious&rsquo; to users.</h5>
            <h5>Default iframe sizing was small, and could potentially drive people away from our site to view the larger format</h5>
            <h4>Solution</h4>
            <h5>Instructions provided to explain how to use the map just above the iframe, as well as in the description of the map</h5>
            <h5>Iframe was resized using the html editor inside WordPress to create a larger window.&nbsp; However it still suffers from sizing constraints by the gutters of the WordPress template CFA uses.&nbsp;</h5>
            <h3>Solving for 2020</h3>
            <h4>Jot form [link (get/make a copy?)]</h4>
            <h5>We migrated our application process to Jot Form, which allows for greater conditional logic.&nbsp; This enabled us to create an application that better fit each individual market&rsquo;s required inputs, without populating an application with questions/data fields that are only needed for some markets</h5>
            <h4>Data solutions integrated into application</h4>
            <h5>Jot form allowed for greater data input variability, so that the FMSP team could retrieve the data in more precise structures.&nbsp; This will save time for the next iteration of the 2020 FMSP Map.</h5>
        </div>
    )
}

export default UX;