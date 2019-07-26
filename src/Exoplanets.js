
import React, { Component } from 'react'
import Exoplanet from './Exoplanet'

class Exoplanets extends Component {
  state = {
    planets: []
  }

  componentDidMount() {
    fetch('http://api.y-space.pw/exoplanets/rand/6', {
          headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        })
        .then((resp) => { return resp.json() })
        .then((data) => {
          let requests = data.map((id) => fetch('http://api.y-space.pw/exoplanets/id/' + id) )

          Promise.all(requests)
            .then(responses => 
              Promise.all(responses.map(res => res.json()))
                .then(data => { this.setState({planets: data}) })
            )
        })
  }

  render() {
    return (
      <div className="container">
        <h1 className="App-c1">Exoplanets</h1>

        <div className="row">
          {this.state.planets.map((p) => (
            <div key={p.pl_name} className="col-sm-4" style={{padding: '10px'}}>
            <Exoplanet
              planet = {p}
              item   = {true}
            />
            </div>
          ))}
        </div>

        <h6 style={{ textAlign: 'center', padding: '20px' }}>
          <a href="/exoplanets">Show me more ..</a>
        </h6>

      </div>
    )
  }
}

export default Exoplanets
