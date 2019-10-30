import React from 'react'

const CardFilms = (props) => {
    return (
    <div className = 'Card'>
        <img src = {props.image} />
        <p>{props.title}</p>
    </div>
    )}

export default CardFilms;