import React from "react";
import heroImg from '../images/Group 77.png';

export default function Hero() {
    return (
        <div className="hero">
            <img
                src={heroImg}
                className="heroImg"
            />
            <h2 className="main-title">Online Experiences</h2>
            <p className="main-para">Join unique interactive activities 
            led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}