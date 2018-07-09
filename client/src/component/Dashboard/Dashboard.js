import React, { Component } from 'react'
import Product from './../Product/Product'
import axios from 'axios'
import '../../App.css';


const BASE_URL = 'http://localhost:4000'


export default class Dashboard extends Component {
    constructor() {
        super()
    }

    deleteProduct = ( id ) => {
        axios({
            method: 'DELETE',
            url: BASE_URL + '/api/product/' + id
        }).then(response => {
            this.props.getProducts()
        })
    } 

    render() {

        return (
            <div>
                <Product inventoryList={this.props.inventoryList} deleteProduct={this.deleteProduct} />    
            </div>
        )
    }
}