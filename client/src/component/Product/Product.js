import React, { Component } from 'react'
import '../../App.css';


const Product = (props) => {
    console.log('this is props', this.props)
        return (
            <div>
                {props.inventoryList.map( (product) => (
                    <div key={product.id} className="product-container">
                        <img src={ product.image } alt="" />
                        <div className="row-container">
                            <h3>{product.name}</h3>
                            <h3>${product.price}</h3>
                        </div>
                        <button onClick={() => props.deleteProduct(product.id)} >Delete</button>
                    </div>
                ) )}
            </div>
        )
}

export default Product 