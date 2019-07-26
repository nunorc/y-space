
import React, { Component } from 'react'

class Lead extends Component {
  render() {
    return (
      <div className='text-center text-white container' style={{fontSize: '1.6em', fontWeight: '400', paddingTop: '4%'}}>
        <video playsInline autoPlay muted loop id="App-video">
          <source src="milky-way.mp4" type="video/mp4" />
        </video>

        <div className="row">
          <div className="col-sm">
            <img src={'imgs/logo-full-white.png'} alt='banner' />
          </div>
        </div>

        <div className="row" style={{borderTop: '1px solid white', padding: '10px', margin: '10px'}}>
          <div className="col-sm">
            <p className="lead">Datasets, web-services, models, tools, and other assorted resources<br/>about the universe.</p>
          </div>
        </div>

        <div className="row" style={{paddingBottom: '10px'}}>
          <div className="col-sm" style={{margin: '12px'}}>
            <a href="exoplanets" role="button" className="btn btn-block" style={{backgroundColor: '#FF9800'}}>
              <span className="text-uppercase" style={{color:'white', fontSize:'1.3em'}}>Exoplanets</span>
            </a>
          </div>
          <div className="col-sm" style={{margin: '12px'}}>
            <a href="messier" role="button" className="btn btn-block" style={{backgroundColor: '#4caf50'}}>
              <span className="text-uppercase" style={{color:'white', fontSize:'1.3em'}}>Messier</span>
            </a>
          </div>
          <div className="col-sm" style={{margin: '12px'}}>
            <a href="api" role="button" className="btn btn-block" style={{backgroundColor: '#2196F3'}}>
              <span className="text-uppercase" style={{color:'white', fontSize:'1.3em'}}>API</span>
            </a>
          </div>
        </div>

        <div className="row" style={{fontSize: '1.0em', borderTop: '1px solid white', padding: '10px', margin: '10px'}}>
          <div className="col-sm">
            <a href='https://github.com/orgs/y-space/dashboard'><i style={{color: 'white', fontSize: '1.6em', padding: '10px'}} className="fa fa-github"></i></a>
          </div>
        </div>

      </div>
    )
  }
}

export default Lead
