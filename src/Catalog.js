
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Catalog extends Component {
  render() {
    return (
      <div id="App-catalog" className='text-center'>
        <div className="App-catalog-item">
          <div className="App-catalog-inner">
            <div className="App-catalog-title" style={{backgroundColor: "#FF9800"}}><h3>Exoplanets</h3></div>
            <div className="App-catalog-body">
              <p>Browse the catalog of confirmed exoplanets identified by different
              methods and missions.</p>
              <div className="App-catalog-links">
                <Link to='/exoplanets'><i className="fa fa-rocket"></i></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="App-catalog-item">
          <div className="App-catalog-inner">
            <div className="App-catalog-title" style={{backgroundColor: "#4caf50"}}><h3>Messier Objects</h3></div>
            <div className="App-catalog-body">
              <p>Browse the collection of Messier astronomical objects.</p>
              <div className="App-catalog-links">
                 <Link to='/messiers'><i className="fa fa-rocket"></i></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="App-catalog-item">
          <div className="App-catalog-inner">
            <div className="App-catalog-title" style={{backgroundColor: "#2196F3"}}><h3>API</h3></div>
            <div className="App-catalog-body">
              <p>Read the documentation to use the web REST API to explore the available data.</p>
              <div className="App-catalog-links">
                <Link to='/api'><i className="fa fa-rocket"></i></Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Catalog
