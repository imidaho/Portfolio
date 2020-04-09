import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const CollectorOfHobbies = () => {

    let slides = document.querySelectorAll('#slides .slide');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 2000);

    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
    }
    return (
        <div className="article">
            <ul id="slides">
                <li className="slide showing">Slide 1</li>
                <li className="slide">Slide 2</li>
                <li className="slide">Slide 3</li>
                <li className="slide">Slide 4</li>
                <li className="slide">Slide 5</li>
            </ul>
        </div>
    );
}

export default CollectorOfHobbies;