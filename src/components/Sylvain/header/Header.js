import React from 'react'
import './Header.css'
import HeaderPicture from '../../../img/header.jpg'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fontActive: true,
        };
      }
    render() {
        return (
            <div className = "halloWeed">
                <nav className = "halloHead">
                <h1 className={this.state.fontActive ? 'isActive' : 'isNotActive'}
              onClick={() => {
                this.setState({ fontActive: !this.state.fontActive });
              }}>FEAR <span className='active'>H</span>ALLOWE<span className='active'>EN</span><span className='notActive'>D</span></h1>
                </nav>
                <div className = 'draw'>
                <img className = "supper" src = {HeaderPicture} alt = 'scene' />
                </div>
            </div>
        )
    }
}