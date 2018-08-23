
import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div id='App-last' className='text-center'>
          <a href='https://github.com/orgs/y-space/dashboard'>
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div id="App-footer">
          <span>&copy; 2018 All rights reserved.</span>
        </div>
      </footer>
    )
  }
}

export default Footer
