
import React, { Component } from 'react'

class Datasets extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="App-c1">Datasets</h1>

        <div className="card-deck">

            <div className="card">
              <img src="imgs/exoplanets.jpg" class="card-img-top" alt="exoplanets" />
              <div className="card-body">
                <h5 className="card-title">exoplanets</h5>
                <p className="card-text">Collection of identified exoplanets and their proprieties.</p>
              </div>  
              <div className="card-footer">
                <a href="https://github.com/y-space/y-s-datasets" className="card-link">GitHub</a>
                <a href="api#exoplanets" className="card-link">API</a>
              </div>
            </div>

            <div className="card">
              <img src="imgs/messier.jpg" class="card-img-top" alt="messier" />
              <div className="card-body">
                <h5 className="card-title">messier</h5>
                <p className="card-text">Collection of Messier astronomical objects.</p>
              </div>
              <div className="card-footer">
                <a href="https://github.com/y-space/y-s-datasets" className="card-link">GitHub</a>
                <a href="api#messier" className="card-link">API</a>
              </div>
            </div>

            <div className="card">
              <img src="imgs/tess.jpg" class="card-img-top" alt="tess" />
              <div className="card-body">
                <h5 className="card-title">tess</h5>
                <p className="card-text">Collection of source files for TESS.</p>
              </div>
              <div className="card-footer">
                <a href="https://github.com/y-space/y-s-datasets" className="card-link">GitHub</a>
                <a href="api#tess" className="card-link">API</a>
              </div>
            </div>

        </div>

      </div>
    )
  }
}

export default Datasets
