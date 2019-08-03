
import React, { Component } from 'react'

class Datasets extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="App-c1">Datasets</h1>

        <div className="card-deck">

            <div className="card">
              <img src="imgs/exoplanets.jpg" className="card-img-top" alt="exoplanets" />
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
              <img src="imgs/messier.jpg" className="card-img-top" alt="messier" />
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
              <img src="imgs/tess.jpg" className="card-img-top" alt="tess" />
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

        <div className="card-deck" style={{padding: '20px 0px'}}>

            <div className="card">
              <img src="imgs/sunspots.jpg" className="card-img-top" alt="exoplanets" />
              <div className="card-body">
                <h5 className="card-title">sunspots</h5>
                <p className="card-text">Total number of sunspots per day since 1818.</p>
              </div>  
              <div className="card-footer">
                <a href="https://github.com/y-space/y-s-datasets" className="card-link">GitHub</a>
                <a href="api#exoplanets" className="card-link">API</a>
              </div>
            </div>

            <div className="card invisible">
              <img src="imgs/messier.jpg" className="card-img-top" alt="messier" />
              <div className="card-body">
                <h5 className="card-title">TODO</h5>
                <p className="card-text">TODO</p>
              </div>
              <div className="card-footer">
              </div>
            </div>

            <div className="card invisible">
              <img src="imgs/tess.jpg" className="card-img-top" alt="tess" />
              <div className="card-body">
                <h5 className="card-title">TODO</h5>
                <p className="card-text">TODO</p>
              </div>
              <div className="card-footer">
              </div>
            </div>

        </div>

      </div>
    )
  }
}

export default Datasets
