import React from 'react'

const CardFilms = (props) => {
    return (
        <div className='Cards'>
            <div className = 'Card'>
                <img className= 'displayCard' src = {props.image} alt={props.title}/>
                <p>{props.title}</p>
            </div>
        </div>
    )}

export default CardFilms;