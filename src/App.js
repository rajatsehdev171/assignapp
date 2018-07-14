import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ProductListPage from './components/ProductListPage';
import ProductDetailPage from './components/ProductDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
      <Route path="/" exact strict component={ ProductListPage }/>
      <Route path="/itemDetails/:_id" exact strict component={ ProductDetailPage }/>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
