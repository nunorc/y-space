
import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

class Exoplanet extends Component {
  state = {
    planet: {}
  }

  componentDidMount() {
    if (!this.props.item) {
      fetch('http://api.y-space.pw/exoplanets/id/' + this.props.planet)
        .then((resp) => { return resp.json() })
        .then((data) => {
          let curr = data.st_dist * 10
          let dists = []
          while (curr > 600) {
            dists.push(600)
            curr = curr - 600
          }
          dists.push(curr)
          fetch('http://api.y-space.pw/exoplanets/hostname/' + data.pl_hostname)
            .then((resp) => { return resp.json() })
            .then((data2) => {
              this.setState({ planet: data, dists: dists, system: data2 })
            })
        })
    }
  }

  render() {
    const {planet, item} = this.props

    if (item) {
      return (
        <div className='card'>
          <div className='card-body'>
            <h4 className="card-title">{ planet.pl_name }</h4>
            <div className='App-catalog-body'>
              Declination: { planet.dec_str }<br />
              Right ascension: { planet.ra_str }<br />
              Discovered by: { planet.pl_discmethod }<br />
              Distance: { planet.st_dist }<br />
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
      <div>
        <h1>{ this.state.planet.pl_name }</h1>
        <ul className='App-list'>
          <li><span>Declination:</span> { this.state.planet.dec_str }</li>
          <li><span>Right ascension:</span> { this.state.planet.ra_str }</li>
          <li><span>Discovery method:</span> { this.state.planet.pl_discmethod }</li>
          <li><span>Orbital period:</span> { this.state.planet.pl_orbper }</li>
        </ul>

        <div class="App-2c">
          <div>
            <h2>Radius</h2>
            <ul className='App-list'>
              <li><span>Stellar radius:</span> { this.state.planet.st_rad }</li>
            </ul>
            <svg height="100" width="300">
              <circle cx="50" cy="50" r="20" stroke="black" strokeWidth="1" fill="yellow" />
              <text x="40" y="90" fill="black">Sun</text>
              <circle cx="250" cy="50" r={ 20 * this.state.planet.st_rad } stroke="black" strokeWidth="1" fill='red' />
              <text x="215" y="90" fill="black">{ this.state.planet.pl_name }</text>
            </svg>
          </div>

          <div>
          <h2>Mass</h2>
          <ul className='App-list'>
            <li><span>Stellar mass:</span> { this.state.planet.st_mass }</li>
          </ul>
          <svg height="100" width="300">
            <circle cx="50" cy="50" r="20" stroke="black" strokeWidth="1" fill="yellow" />
            <text x="40" y="90" fill="black">Sun</text>
            <circle cx="250" cy="50" r={ 20 * this.state.planet.st_mass } stroke="black" strokeWidth="1" fill='red' />
            <text x="215" y="90" fill="black">{ this.state.planet.pl_name }</text>
          </svg>
          </div>
        </div>

        <h2>Distance</h2>
        <svg height="200" width="620">
          <line x1="10" y1="30" x2={ 10 + (10 * 1.34) } y2="30" style={{stroke: 'black', strokeWidth: '1'}} />
          <circle cx="10" cy="30" r="4" stroke="black" strokeWidth="1" fill="yellow" />
          <circle cx={ 10 + (10 * 1.34) } cy="30" r="4" stroke="black" strokeWidth="1" fill="DeepSkyBlue" />
          <text x="5" y="20" fill="black">Sun &rarr; Alpha Centauri (1.34 parsecs)</text>

          {this.state.dists && this.state.dists.map((d,i) => (
            <line x1="10" y1={ 80 + (20*i) } x2={ 10 + d } y2={ 80 + (20*i) } style={{stroke: 'black', strokeWidth: '1'}} />
          ))}
          <circle cx="10" cy="80" r="4" stroke="black" strokeWidth="1" fill="yellow" />
          {this.state.dists &&
<circle cx={ 10 + this.state.dists[this.state.dists.length - 1] } cy={ 80 + (this.state.dists.length - 1)*20 } r="4" stroke="black" strokeWidth="1" fill="red" />
          }
          <text x="5" y="70" fill="black">Sun &rarr; {this.state.planet.pl_name } ({ this.state.planet.st_dist } parsecs)</text>
        </svg>

        <h2>Host System</h2>
        <ul className='App-list'>
          <li><span>Number of planets in system:</span> { this.state.planet.pl_pnum }</li>
        </ul>
        <svg height="100" width="620">
          <circle cx="50" cy="50" r="20" stroke="black" strokeWidth="1" fill="yellow" />
          <text x="40" y="90" fill="black">{ this.state.planet.pl_hostname }</text>
          {this.state.system && this.state.system.map((p, i) => (
            <g>
            <circle cx={150 + (100*i) } cy="50" r={ 20 * this.state.planet.st_rad } stroke="black" strokeWidth="1" fill='red' />
            <text x={120 + (100*i) } y="90" fill="black">{ p.pl_name }</text>
            </g>
          ))}
        </svg>

        {/*
          <hr />
          <ul>
            {Object.keys(this.state.planet).map((k) => (
              <li key={ k }>{ k }: { this.state.planet[k] }</li>
            ))}
          </ul>
        */}
        </div>
      )
    }
  }
}

export default Exoplanet
