
import React, { Component } from 'react'

class Resources extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="App-c4">Resources</h1>

        <div className="card-deck">

            <div className="card">
              <img src="imgs/python.jpg" className="card-img-top" alt="exoplanets" />
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
              <img src="imgs/cpp.jpg" className="card-img-top" alt="exopl" />
              <div className="card-body">
                <h5 className="card-title">exopl</h5>
                <p className="card-text">A command line tool to perform pipelined operations on exoplanets data in C++.</p>
              </div>
              <div className="card-footer">
                <a href="https://github.com/nunorc/exopl" className="card-link">GitHub</a>
              </div>
            </div>

            <div className="card">
              <img src="imgs/jupyter.jpg" className="card-img-top" alt="jupyter notebooks" />
              <div className="card-body">
                <h5 className="card-title">Jupyter Notebooks</h5>
                <p className="card-text">Collection of jupyter notebooks with examples of use.</p>
              </div>
              <div className="card-footer">
                <a href="https://github.com/y-space/notebooks" className="card-link">GitHub</a>
              </div>
            </div>

        </div>
      </div>
    )
  }
}

export default Resources
