
import React, { Component } from 'react'
import Messier from './Messier'

class Messiers extends Component {
  state = {
    messiers: []
  }

  componentDidMount() {
    fetch('http://api.y-space.pw/messier/rand/6', {
          headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        })
        .then((resp) => { return resp.json() })
        .then((data) => {
          let requests = data.map((id) => fetch('http://api.y-space.pw/messier/id/' + id) )

          Promise.all(requests)
            .then(responses => 
              Promise.all(responses.map(res => res.json()))
                .then(data => { this.setState({ messiers: data }) })
            )
        })
  }

  render() {
    return (
      <div>
        <h1>Messier Objects</h1>
        <div id="App-catalog">
          {this.state.messiers.map((m) => (
            <Messier
              messier = {m}
              item    = {true}
            />
          ))}
        </div>
        <h3 className='text-center'>
          <a href="/messiers">Show me more ..</a>
        </h3>
      </div>
    )
  }
}

export default Messiers
