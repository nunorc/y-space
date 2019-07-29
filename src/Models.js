
import React, { Component } from 'react'

class Models extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="App-c2">Models</h1>

        <div className="card-deck">

            <div className="card">
              <img src="imgs/galaxy-convnet.jpg" className="card-img-top" alt="galaxy-convnet" />
              <div className="card-body">
                <h5 className="card-title">galaxy-convnet</h5>
                <p className="card-text">Image based galaxies morphology classification using convolutional neural networks.</p>
              </div>  
              <div className="card-footer">
                <a href="https://medium.com/@nunorc/galaxies-morphology-classification-using-convolutional-neural-networks-ed5d7d82fbf" className="card-link">Medium</a>
                <a href="https://github.com/nunorc/galaxy-convnet" className="card-link">GitHub</a>
              </div>
            </div>

            <div className="card">
              <img src="imgs/pulsars.jpg" className="card-img-top" alt="pulsars" />
              <div className="card-body">
                <h5 className="card-title">Predicting Pulsars</h5>
                <p className="card-text">Predicting pulsars using neural networks.</p>
              </div>
              <div className="card-footer">
                <a href="https://medium.com/@nunorc/predicting-pulsar-stars-using-neural-networks-ecb3a527336b" className="card-link">Medium</a>
                <a href="https://www.kaggle.com/nunorc/predicting-pulsar-stars-using-a-neural-network" className="card-link">Kernel</a>
              </div>
            </div>

            <div className="card invisible">
              <img src="imgs/pulsars.jpg" className="card-img-top" alt="pulsars" />
              <div className="card-body">
                <h5 className="card-title">Predicting Pulsars</h5>
                <p className="card-text">Predicting pulsars using neural networks.</p>
              </div>
              <div className="card-footer">
                <a href="https://medium.com/@nunorc/predicting-pulsar-stars-using-neural-networks-ecb3a527336b" className="card-link">Medium</a>
                <a href="https://www.kaggle.com/nunorc/predicting-pulsar-stars-using-a-neural-network" className="card-link">Kernel</a>
              </div>
            </div>

        </div>
      </div>
    )
  }
}

export default Models
