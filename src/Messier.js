
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Messier extends Component {
  state = {
    messier: {}
  }

  componentDidMount() {
    if (!this.props.item) {
      fetch('http://api.y-space.pw/messier/id/' + this.props.messier)
        .then((resp) => { return resp.json() })
        .then((data) => { this.setState({ messier: data }) })
    }
  }

  render() {
    const {messier, item} = this.props

    if (item) {
      return (
        <div className='App-catalog-item'>
          <div className='App-catalog-inner'>
            <div className="App-catalog-title" style={{backgroundColor: '#4caf50'}}>
              <h3>{ messier.m_id }</h3></div>
            <div className='App-catalog-body'>
              Declination: { messier.dec }<br/>
              Right ascension: { messier.ra }<br/>
              Constellation: { messier.con }<br/>
              <div className='App-catalog-links text-center'>
                <Link to={`/messier/${messier.m_id}`}><i className='fa fa-rocket'></i></Link>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
      <div>
        <h1 style={{ textTransform: 'uppercase' }}>{ this.state.messier.m_id }</h1>
        <ul className='App-list'>
          <li><span>Declination:</span> { this.state.messier.dec }</li>
          <li><span>Right ascension:</span> { this.state.messier.ra }</li>
          <li><span>Constellation:</span> { this.state.messier.con }</li>
          <li><span>Type:</span> { this.state.messier.type }</li>
        </ul>
        </div>
      )
    }
  }
}

export default Messier
