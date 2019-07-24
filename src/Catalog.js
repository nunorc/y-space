
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Catalog extends Component {
  render() {
    return (
      <div id="App-catalog" className='text-center'>
        <div className="App-catalog-item">
          <div className="App-catalog-inner">
            <div className="App-catalog-title" style={{backgroundColor: "#FF9800"}}><h3>Exoplanets</h3></div>
          </div>
        </div>

        <div className="App-catalog-item">
          <div className="App-catalog-inner">
            <div className="App-catalog-title" style={{backgroundColor: "#4caf50"}}><h3>Messier Objects</h3></div>
          </div>
        </div>

        <div className="App-catalog-item">
          <div className="App-catalog-inner">
            <div className="App-catalog-title" style={{backgroundColor: "#2196F3"}}><h3>API</h3></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Catalog
