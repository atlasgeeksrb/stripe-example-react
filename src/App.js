import './App.css';
import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PaymentComplete from './components/paymentComplete';
import Checkout from './components/checkout';
import NotFound from './components/notFound';

class App extends Component {
  render () {
    return (
      <div className="container">        
        <BrowserRouter>
          <Routes>
            <Route 
              path="/"
              element={<div>
                  <h1>Stripe Checkout Example</h1>
                  <p><a href="/checkout" title="try checkout example">check out</a></p>
                </div>
              }
            />

            <Route
              path="/paymentComplete" 
              element={
                <PaymentComplete />
              }
            />

            <Route
              path="/checkout" 
              element={
                <Checkout />
              }
            />

            <Route path="/*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>  

      </div>
    );
    }
  }

export default App;
