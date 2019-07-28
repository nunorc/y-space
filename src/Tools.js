
import React, { Component } from 'react'

class Tools extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="App-c4">Tools</h1>

        <div className="card-deck">

            <div className="card">
              <img src="imgs/python.jpg" class="card-img-top" alt="exoplanets" />
              <div className="card-body">
                <h5 className="card-title">yspacepy</h5>
                <p className="card-text">Python package with utilities and interface to the y-space API.</p>
              </div>  
              <div className="card-footer">
                <a href="https://github.com/y-space/yspacepy" className="card-link">GitHub</a>
                <a href="https://pypi.org/project/yspacepy/" className="card-link">PyPi</a>
              </div>
            </div>

            <div className="card">
              <img src="imgs/github.jpg" class="card-img-top" alt="messier" />
              <div className="card-body">
                <h5 className="card-title">GitHub</h5>
                <p className="card-text">The y-space orgaztion on GitHub hosts everything.</p>
              </div>
              <div className="card-footer">
                <a href="https://github.com/y-space" className="card-link">GitHub</a>
              </div>
            </div>

            <div className="card invisible">
              <img src="imgs/tess.jpg" class="card-img-top" alt="tess" />
              <div className="card-body">
                <h5 className="card-title">todo</h5>
                <p className="card-text">todo</p>
              </div>
              <div className="card-footer">
              </div>
            </div>

        </div>
      </div>
    )
  }
}

export default Tools
