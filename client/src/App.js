import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'

const BASE_URL = 'http://localhost:4000'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventoryList: []
    }
  }

getProducts = () => {
  axios({
    method: 'GET',
    url: BASE_URL + '/api/inventory',
  }).then(response => {
    this.setState({ inventoryList: response.data })
  })
}

componentDidMount = () => {
  this.getProducts()
}

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventoryList={this.state.inventoryList} getProducts={this.getProducts}/>
        <Form getProducts={this.getProducts}/>
      </div>
    );
  }
}

export default App;
