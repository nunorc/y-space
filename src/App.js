
import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import Lead from './Lead'
import Footer from './Footer'
import Exoplanets from './Exoplanets'
import Exoplanet from './Exoplanet'
import Messiers from './Messiers'
import Messier from './Messier'
import API from './API'

class App extends Component {
  render() {
    return (
      <div id='App-main'>
        
        <Route exact path='/' render={() => (
          <main>
            <Lead />
          </main>
        )}/>

        <Route exact path='/exoplanets' render={() => (
          <main>
            <Nav />
            <Exoplanets />
            <Footer />
          </main>
        )}/>

        <Route path='/exoplanet/:pl_id' render={(props) => (
          <Exoplanet 
            planet = {props.match.params.pl_id}
            item   = {false}
          />
        )}/>

        <Route exact path='/messiers' render={() => (
          <Messiers />
        )}/>

        <Route path='/messier/:m_id' render={(props) => (
          <Messier 
            messier = {props.match.params.m_id}
            item   = {false}
          />
        )}/>
        
        <Route exact path='/api' render={() => (
          <main>
            <Nav />
            <API />
            <Footer />
          </main>
        )}/>

      </div>
    )
  }
}

export default App;
