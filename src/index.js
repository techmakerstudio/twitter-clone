import Web3 from 'web3'
import { ethereum } from 'aleph-js'
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const connectWeb3 = async (e) => {
  if (e)
    e.preventDefault()

  var web3, alephAccount;

  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Accounts now exposed
      console.log("Web 3 Connected...")
    } catch (error) {
      console.error(error)
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    // Use Mist/MetaMask's provider.
    web3 = window.web3;
    console.log("Injected web3 detected.");
  }

  if (window.ethereum.isConnected()) {
    try {
      alephAccount = await ethereum.from_provider(window['ethereum'])
    } catch(error) {
      console.error(error)
    }
  }

  return {
    alephAccount: alephAccount,
    web3: web3
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App connectWeb3={connectWeb3} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
