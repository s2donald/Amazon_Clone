import Header from './Header';
import Home from './Home.js';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import React from 'react';
import Checkout from './Checkout.js'
import SignIn from './SignIn.js'
function App() {
  return (
    // BEM
    <Router>
    <div className="App">
      
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      
      {/* HOME */}
      {/* Footer */}
    </div>
    </Router>
  );
}

export default App;