
import React, { Component } from 'react'

class Header extends Component {
  render() {
    const navStyle = {
      'backgroundColor': '#000000'
    }

    return (
      <header className="App-header">
        <nav className="navbar navbar-dark" style={navStyle}>
          <a className="navbar-brand" href="/"><img id="App-logo" src={'/imgs/logo.png'} alt="logo" /></a>
         </nav>
      </header>
    )
  }
}

export default Header
