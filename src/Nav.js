
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container">
        <Link to='/' className="navbar-brand">
          <img id="App-logo" src={'/imgs/logo.png'} alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/api"><i className="fa fa-cog fa-sm"></i> API</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/orgs/y-space"><i className="fa fa-github fa-sm"></i> Gitub</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
  }
}

export default Nav
