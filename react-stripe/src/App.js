import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import config from './config/secret';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>      
      <StripeProvider apiKey={config.publicKey}>
        <div className="container">
          <h3 className="my-4">React Stripe Element Sample</h3>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>      
    </div>
  );
}

export default App;
