import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css';


const Product = (props) => {
        return (
            <div>
                {props.inventoryList.map( (product) => (
                    <div key={product.id} className="product-container">
                        <img src={ product.image } alt="" />
                        <div className="row-container">
                            <h3 className="product-description">{product.name} </h3>
                            <br />
                            <h3 className="product-description">${product.price}</h3>
                        </div>
                        <div className="row-container">
                            <Link to={`/edit/${product.id}`}><button className="green-btn">Edit</button></Link>
                            <button onClick={() => props.deleteProduct(product.id)} className="green-btn">Delete</button>
                        </div>
                    </div>
                ) )}
            </div>
        )
}



export default Product 