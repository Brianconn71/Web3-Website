import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Web3 from 'web3';

class App extends Component {
  async componentWillMount(){
    // Load web3
    let web3 = new Web3("https://mainnet.infura.io/v3/356f0b7cc76a469ba6a981f0bc2e45ad")
    // fetch latest block
    let latestBlock = await web3.eth.getBlock('latest')
    console.log('Latest Block', latestBlock)
    this.setState({
      blockNumber: latestBlock.number,
      difficulty: latestBlock.difficulty,
    })
    // fetch gas price
    let gasPrice = await web3.eth.getGasPrice()
    console.log(gasPrice)
    this.setState({
      gasPrice: gasPrice
    })

    // fetch latest 10 blocks
    let block
    let latestBlocks = []
    for (let i =0; i < 10; i++){
      block = await web3.eth.getBlock(latestBlock.number - i)
      console.log(block)
      latestBlocks.push(block)
    }

    this.setState({
      latestBlocks: latestBlocks
    })
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
              <div className="content mr-auto ml-auto" style={{ width: '800px' }}>
                <h4>Ethereum Blockchain Explorer</h4>
                <div className="row">
                  <div className="col-4">
                    <div className="bg-light pt-4 pb-3 m-1">
                      <h5>Latest Block</h5>
                      <p>{this.state.blockNumber}</p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="bg-light pt-4 pb-3 m-1">
                      <h5>Difficulty</h5>
                      <p>{this.state.difficulty}</p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="bg-light pt-4 pb-3 m-1">
                      <h5>Gas Price</h5>
                      <p>{this.state.gasPrice}</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 mt-3">
                    <div className="bg-light pt-4 pb-3 m-1">
                      <h5>Latest Blocks</h5>
                    </div>
                    <div className="card-body">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>

              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
