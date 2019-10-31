import React from 'react'
import './cardFilm.css'

const CardFilms = (props) => {
    return (
    <div className = 'Card'>
        <img className='displayCard' src = {props.image} alt={props.title}/>
        <p className='displayTitle'>{props.title}</p>
    </div>
   )}

export default CardFilms;