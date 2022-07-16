import React from 'react';

import star from '../images/Star 1.png'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="card--photo" />
            <div className='card--stats'>
                <img src={star} className="star" />
                <span>{props.star}</span>
                <span className="gray">({props.num}) . </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title1">{props.title}</p>
            <p className="card--price1"><span className="bold">From ${props.price}</span> / Person</p>
        </div>
    )
}
