import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css';
import {Link} from 'react-router-dom'



const BASE_URL = 'http://localhost:4000'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageUrl: '',
            productName: '',
            productPrice: '',
            editing: null,
            selectedProductId: 0
        }
    }

    componentDidUpdate = (prevProps) => {
        if(this.props !== prevProps) {
            this.setState({
                productName: this.props.selectedProduct.name,
                productPrice: this.props.selectedProduct.price,
                imageUrl: this.props.selectedProduct.image,
                selectedProductId: this.props.selectedProduct.id,
                editing: !this.state.editing
            })
            
        }
    }

    editOne = (id) => {
        axios({
            method: 'GET',
            url: BASE_URL + '/api/inventory/' + id
        }).then(response => {
            this.setState({
                imageUrl: response.data.image,
                productName: response.data.name,
                productPrice: response.data.price
            })
        })
    }

    componentDidMount = (id) => {
        this.editOne(id)
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
        this.setState({ 
            imageUrl: '', 
            productName: '', 
            productPrice: '',
            editing: null
        })
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


    editProduct = id => {
        axios({
            method: 'PUT',
            url: BASE_URL + '/api/product/' + id,
            data: {
                name: this.state.productName,
                price: this.state.productPrice,
                imageUrl: this.state.imageUrl
            }
        }).then(this.props.getProducts()).then(this.resetState())
    }

    render() {
        console.log('this is props on form', this.props)
        console.log('this is state on form', this.state)

        return ( 
            <div>
                {this.state.editing 
                    ?
                    <div className="form-container">
                        <h3>Product Name: </h3>
                        <input value={this.state.productName} onChange={ event => this.updateName( event.target.value )}/>
                        <h3>Price: </h3>
                        <input value={this.state.productPrice} onChange={ event => this.updatePrice( event.target.value )}/>
                        <h3>Image URL: </h3>
                        <input value={this.state.imageUrl} onChange={ event => this.updateImage( event.target.value )}/>
                        <div className="row-container">
                            <Link to='/'><button>Cancel</button></Link>
                            <Link to='/'><button>Save Changes</button></Link>
                        </div>
                    </div>
                    :
                    <div className="form-container">
                        <h3>Product Name: </h3>
                        <input placeholder="product name" onChange={ event => this.updateName( event.target.value )}/>
                        <h3>Price: </h3>
                        <input placeholder="product price" onChange={ event => this.updatePrice( event.target.value )}/>
                        <h3>Image URL: </h3>
                        <input placeholder="product image URL" onChange={ event => this.updateImage( event.target.value )}/>
                        <div className="row-container">
                            <Link to='/'><button>Cancel</button></Link>
                            <Link to='/'><button>Add to inventory</button></Link>
                        </div>
                    </div>
                }
            </div>
        )
    }
}