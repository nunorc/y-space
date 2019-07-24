
import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <span className="text-muted">&copy; 2018 All rights reserved.</span>
          </div>
          <div className="col-sm text-right">
            <a href='https://github.com/orgs/y-space'>
              <i className="fa fa-github fa-lg"></i> GitHub
            </a>
          </div>
        </div>
        </div>
      </footer>
    )
  }
}

export default Footer
