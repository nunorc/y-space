
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <ul>
          <li style={{textAlign: 'left'}}>
            <Link to='/'><img id="App-logo" src={'/imgs/logo.png'} alt="logo" /></Link>
          </li>
          <li style={{textAlign: 'right'}}>
            <i style={{fontSize: '28px', paddingTop: '4px'}} className='fa fa-bars'></i>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
