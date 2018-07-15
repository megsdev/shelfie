import React, { Component } from 'react'
import Product from './../Product/Product'
import axios from 'axios'
import '../../App.css';


const BASE_URL = 'http://localhost:4000'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inventoryList: [],
            selectedProduct: {}
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

    componentDidUpdate = () => {
        this.getProducts()
    }

    deleteProduct = ( id ) => {
        axios({
            method: 'DELETE',
            url: BASE_URL + '/api/product/' + id
        }).then(response => {
            this.getProducts()
        })
    } 

    render() {

        return (
            <div className="dash-container">
                <Product inventoryList={this.state.inventoryList} deleteProduct={this.deleteProduct} productSelected={this.state.productSelected} />    
            </div>
        )
    }
}