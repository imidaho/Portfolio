import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// Photo imports
import CFA_page_fmsp_map from '../img/ux/CFA-page-fmsp-map.jpg'
import CFA_page_fmsp_map_w_layers from '../img/ux/CFA-page-fmsp-map-with-layers-menu.jpg'
import jotFormConditionalLogic from '../img/ux/jot-form conditional logic.jpg'
import pinIconStyling from '../img/ux/pin icon styling.jpg'
import selectedMarket from '../img/ux/selected market.jpg'
import tableExample from '../img/ux/Table Example.jpg'
import fmspCountyMap from '../img/ux/FMSP Counties 2019.jpg'

const UX = () => {
    return (
        <div className="article">
            <h1>FMSP Map</h1>
            <h2>The Problem</h2>

            <div className="section">
                <img src={fmspCountyMap}></img>
                <ul>
                    <p>Community Farm Alliance and the Farmers Market Support Program needed an easy way to provide customers with an outlet to find markets using Kentucky Double Dollars.&nbsp; It needed to be organized in such a way that:</p>
                    <li>It is easy to navigate</li>
                    <li>It is easy to filter out by day</li>
                    <li>Allowed for multiple market locations operating under the same name</li>
                    <li>Free of cost for CFA to build and share</li>
                    <li>Can be embedded into CFA&rsquo;s website to receive potential customers activated by facebook ads.</li>
                </ul>
            </div>
            <div className="section">
                <img src={CFA_page_fmsp_map}></img>
                <div className="text">
                    <h2>The Solution:</h2>
                    <p>Google&rsquo;s MyMaps offers significant value, with a few shortcomings.&nbsp;</p>
                    <ul>
                        <h4>Why it solves this need:</h4>

                        <li>It can be embedded into CFA&rsquo;s WordPress powered site using iframes</li>
                        <li>It allows for layering, which is a helpful tool to build out different contexts that customers may be seeking</li>
                        <li>It&rsquo;s easily shareable with other teammates</li>
                        <li>It tracks views</li>
                        <li>It offers styling options that can enhance user experience</li>
                        <li>It&rsquo;s free!</li>
                    </ul>

                    <ul>
                        <h4>Where it could be better</h4>
                        <li>There&rsquo;s no way for a user to set a radius around their preferred location</li>
                        <li>It&rsquo;s not perfectly obvious how to navigate the menu</li>
                        <li>There&rsquo;s no way to create a layer that is a filtered view of locations between multiple layers without created a negative point of UX.</li>
                    </ul>
                </div>


            </div>

            <div className="section">
                <img src={tableExample}></img>
                <div className="text">
                    <h2>Execution</h2>
                    <h3>2019 Application Data Table</h3>
                    <p>All data was sourced by the Survey Monkey powered application process.&nbsp;</p>
                    <p>Market locations, hours and days of operation were recorded in the application.</p>
                    <p>The data was then separated out into 7 &nbsp;tables representing the days of the week.</p>
                    <ul>
                        <h4>Columns for Imported Table</h4>
                        <li>Market Name</li>
                        <li>Market location</li>
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
                </div>
            </div>
            <div className="section">
                <img src={selectedMarket}></img>
                <h5>Challenges</h5>
                <ul>
                    <p>Data inputs in application were not tightly structured</p>
                    <p>Variability in data created issues with location data</p>
                    <p>And structurers for &lsquo;hours&rsquo; column</p>
                    <p>Market listings included market hours that repeated at different rates (ex. Every other week, every second Tuesday)</p>
                    <p>Markets operating under the same name on multiple days of the week, and/or at multiple locations (ex. Lexington Farmers Markets)</p>
                </ul>
                <ul>
                    <h5>Solution</h5>
                    <p>Normalization of opening and closing times</p>
                    <p>All markets operating on multiple days of the week were given a [&lsquo;dayoftheweek&rsquo;] tag in the Market Name column (ex. &lsquo;Lexington FM [Tues]&rsquo;, or &lsquo;Estill County FM [2nd Tues of Month&rsquo;)</p>
                </ul>
            </div>
            <div className="section">
                <img src={pinIconStyling}></img>
                <h3>Visualization</h3>
                <ul>
                    <h5>Challenges</h5>
                    <p>Markets operating in the same location multiple days of the week did not show multiple pins in that location, as one was layered over the other.&nbsp;</p>
                    <p>There isn&rsquo;t an adequate pin icon for &lsquo;farmers market&rsquo;</p>
                    <h5>Solution</h5>
                    <p>Default pin styling was the same between every layer added.&nbsp; Each pin had to be restyled individually, one click at a time.&nbsp;</p>
                    <p>Each day of the week was assigned a color, and all market pins in that table were restyled to that color.</p>
                </ul>
            </div>
            <div className="section">

                <h3>Embedding into website</h3>
                <ul>
                    <h5>Challenges</h5>
                    <li>Menu accessing the layers feature was not adequately &lsquo;obvious&rsquo; to users.</li>
                    <li>Default iframe sizing was small, and could potentially drive people away from our site to view the larger format</li>
                </ul>
                <ul>
                    <h5>Solution</h5>
                    <li>Instructions provided to explain how to use the map just above the iframe, as well as in the description of the map</li>
                    <li>Iframe was resized using the html editor inside WordPress to create a larger window.&nbsp; However it still suffers from sizing constraints by the gutters of the WordPress template CFA uses.&nbsp;</li>
                </ul>
            </div>
            <div className="section">
                <img src={jotFormConditionalLogic}></img>
                <h3>Solving for 2020</h3>
                <ul>
                    <h5>Jot form </h5>
                    <p>We migrated our application process to Jot Form, which allows for greater conditional logic.&nbsp; This enabled us to create an application that better fit each individual market&rsquo;s required inputs, without populating an application with questions/data fields that are only needed for some markets</p>
                    <h5>Data solutions integrated into application</h5>
                    <p>Jot form allowed for greater data input variability, so that the FMSP team could retrieve the data in more precise structures.&nbsp; This will save time for the next iteration of the 2020 FMSP Map.</p>
                </ul>
            </div>
        </div >
    )
}

export default UX;