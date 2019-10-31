import React from 'react'
import './Header.css'
import HeaderPicture from '../../../img/header.jpg'

export default class Navbar extends React.Component {
    render() {
        return (
            <div className = "halloWeed">
                <nav className = "halloHead">
                <h1 className = "halloBrand"><a href = "https://i.ytimg.com/vi/rjAebQmHGJI/maxresdefault.jpg"></a>FEAR HALLOWEEN</h1>
                </nav>
                <div className = 'draw'>
                <img className = "supper" src = {HeaderPicture} alt = 'scene' />
                </div>
            </div>
        )
    }
}