import React, { Component } from 'react'


const Product = (props) => {
    console.log('this is props', this.props)
        return (
            <div>
                <p>this is product</p>
                {props.inventoryList.map( (product) => (
                    <div key={product.id}>
                        <img src={ product.image } alt="" />
                        <h3>{product.name}</h3>
                        <h3>${product.price}</h3>
                        <button onClick={() => props.deleteProduct(product.id)} >Delete</button>
                    </div>
                ) )}
            </div>
        )
}

export default Product 