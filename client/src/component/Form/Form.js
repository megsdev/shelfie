import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css';


const BASE_URL = 'http://localhost:4000'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageUrl: '',
            productName: '',
            productPrice: '',
        }
    }

    updateImage = ( text ) => {
        this.setState({ imageUrl: text })
    }

    updateName = ( text ) => {
        this.setState({ productName: text })
    }

    updatePrice = ( num ) => {
        this.setState({ productPrice: num })
    }

    resetState = () => {
        this.setState({ imageUrl: '', productName: '', productPrice: ''})
    }

    addProduct = () => {
        axios({
            method: 'POST',
            url: BASE_URL + '/api/product',
            data: {
                name: this.state.productName,
                price: this.state.productPrice,
                imageUrl: this.state.imageUrl
            }
        }).then(this.props.getProducts()).then(this.resetState())
    }


    render() {
        return (
            <div className="form-container">
                {console.log('this is state', this.state)}
                <h3>Product Name: </h3>
                <input placeholder="product name" onChange={ event => this.updateName( event.target.value )}/>
                <h3>Price: </h3>
                <input placeholder="product price" onChange={ event => this.updatePrice( event.target.value )}/>
                <h3>Image URL: </h3>
                <input placeholder="product image URL" onChange={ event => this.updateImage( event.target.value )}/>
                <div className="row-container">
                    <button onClick={ () => this.resetState() }>Cancel</button>
                    <button onClick={ () => this.addProduct()}>Add to inventory</button>
                </div>
            </div>
        )
    }
}