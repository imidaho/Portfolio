import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cl_React from './multiuse sections/cl_react';
import ThisSite from './multiuse sections/this_site';
//add react componont
const ReactJs = () => {
    return (
        <div>
            <Cl_React />
            <ThisSite />


        </div>
    );
}

export default ReactJs;