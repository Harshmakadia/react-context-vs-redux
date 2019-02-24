import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalState from './context/globalState';
import ProductsPage from './pages/product';
import CartPage from './pages/cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/cart" component={CartPage} exact />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    );
  }
}

export default App;
