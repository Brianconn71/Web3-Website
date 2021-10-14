import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Web3 from 'web3';

class App extends Component {
  async componentWillMount(){
    let web3 = new Web3("https://mainnet.infura.io/v3/356f0b7cc76a469ba6a981f0bc2e45ad")
    let latestBlock = await web3.eth.getBlock('latest')
    console.log('Latest Block', latestBlock)
    this.setState({
      blockNumber: latestBlock.blockNumber,
      difficulty: latestBlock.difficulty,
    })
    let gasPrice = await web3.eth.getGasPrice()
    console.log(gasPrice)
  }

  constructor(props) {
    super(props);
    this.state = { 
      blockNumber: 0,
      difficulty: 0,
      gasPrice: 0,
      latestBlocks: []
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dapp University
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h1>Dapp University Starter Kit</h1>
                <p>
                  Edit <code>src/components/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LEARN BLOCKCHAIN <u><b>NOW! </b></u>
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
