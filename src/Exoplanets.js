
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
        <h2>Something</h2>
        <p>An exoplanet (/ˈɛksoʊplænɪt/)[4] or extrasolar planet is a planet outside the Solar System. The first evidence of an exoplanet was noted in 1917, but was not recognized as such.[5] The first scientific detection of an exoplanet was in 1988; it was confirmed to be an exoplanet in 2012. The first confirmed detection occurred in 1992. As of 1 July 2019, there are 4,096 confirmed planets in 3,053 systems, with 664 systems having more than one planet.[6]</p>
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
