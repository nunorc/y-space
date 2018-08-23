
import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './Header'
import Lead from './Lead'
import Catalog from './Catalog'
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
        <Header />
        
        <Route exact path='/' render={() => (
          <div>
            <Lead />
            <Catalog />
          </div>
        )}/>

        <Route exact path='/exoplanets' render={() => (
          <Exoplanets />
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
          <API />
        )}/>

        <Footer />
      </div>
    )
  }
}

export default App;
