
import React, { Component } from 'react'

class API extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="App-c3">API</h1>

       <h2 id="exoplanets">Exoplanets</h2>
       <table class="table">
         <tbody>
           <tr>
             <td colspan="2">
               <code>http://api.y-space.pw/exoplanets</code>
             </td>
           </tr>
           <tr>
             <td><code>/rand/:n</code></td>
             <td>Get <code>n</code> random exoplanets</td>
           </tr>
           <tr>
             <td><code>/list</code></td>
             <td>Get the list of identifiers for all the available objects</td>
           </tr>
           <tr>
             <td><code>/id/:pl_name</code></td>
             <td>Get full data for exoplanet identified by <code>pl_name</code>.</td>
           </tr>
           <tr>
             <td><code>/hostname/:hs_name</code></td>
             <td>Get list of exoplanets for host <code>hs_name</code></td>
           </tr>
           <tr>
             <td><code>/stats</code></td>
             <td>Get a collection of statistics about the dataset.</td>
           </tr>
        </tbody>
      </table>

      <h2 id="messier">Messier</h2>
       <table class="table">
         <tbody>
           <tr>
             <td colspan="2">
               <code>http://api.y-space.pw/messier</code>
             </td>
           </tr>
           <tr>
             <td><code>/rand/:n</code></td>
             <td>Get <code>n</code> random objects</td>
           </tr>
           <tr>
             <td><code>/list</code></td>
             <td>Get the list of identifiers for all the available objects</td>
           </tr>
           <tr>
             <td><code>/id/:m_name</code></td>
             <td>Get full data for the object identified by <code>m_name</code>.</td>
           </tr>
        </tbody>
      </table>

      <h2 id="tess">TESS</h2>
      <p>Coming soon ..</p>

      <h2 id="messier">Sunspots</h2>
       <table class="table">
         <tbody>
           <tr>
             <td colspan="2">
               <code>http://api.y-space.pw/sunspots</code>
             </td>
           </tr>
           <tr>
             <td><code>/daily</code></td>
             <td>Get daily number of sunspots.</td>
           </tr>
           <tr>
             <td><code>/monthly</code></td>
             <td>Get monthly average of the number of sunspots.</td>
           </tr>
        </tbody>
      </table>


      </div>
    )
  }
}

export default API
