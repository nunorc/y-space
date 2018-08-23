
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
      <div>
        <h1>Exoplanets</h1>
        <div id="App-catalog">
          {this.state.planets.map((p) => (
            <Exoplanet
              planet = {p}
              item   = {true}
            />
          ))}
        </div>
        <h3 style={{ textAlign: 'center' }}>
          <a href="/exoplanets">Show me more</a>
        </h3>
      </div>
    )
  }
}

export default Exoplanets
