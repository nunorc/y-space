
import React, { Component } from 'react'
import './App.css'
import { Route, Switch, withRouter } from 'react-router-dom'
import Nav from './Nav'
import Lead from './Lead'
import Footer from './Footer'
import Exoplanets from './Exoplanets'
//import Exoplanet from './Exoplanet'
//import Messiers from './Messiers'
//import Messier from './Messier'
import API from './API'

class App extends Component {
  render() {
    if (this.props.location.pathname === '/') {
      return(
        <Lead />
      )
    }
    else {
      return (
        <div className="d-flex flex-column h-100">
          <Nav />
          <main className="flex-shrink-0" style={{paddingTop: '100px'}}>
            <Switch>
              <Route path='/exoplanets' component={Exoplanets} />
              <Route path='/api' component={API} />
            </Switch>
          </main>
          <Footer />
        </div>
      )
    }
  }
}

export default withRouter(App)
