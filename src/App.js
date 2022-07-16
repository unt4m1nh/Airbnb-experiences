import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import photo1 from './images/image 12.png';
import photo2 from './images/wedding-photography 1.png'
import photo3 from './images/mountain-bike 1.png'

import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards--holder">
        <Card
          image={photo1}
          star="5.0"
          num="6"
          country="USA"
          title="Life lessons with Katie Zaferes"
          price="136"
         />
        <Card
          image={photo2}
          star="5.0"
          num="30"
          country="USA"
          title="Learn wedding photography"
          price="125"
         />
        <Card
          image={photo3}
          star="4.8"
          num="2"
          country="USA"
          title="Group Mountain Biking"
          price="50"
         />
      </div>
    </div>
  );
}


