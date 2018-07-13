import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css';


const Product = (props) => {
    console.log('this is props on Product:', props)
        return (
            <div>
                {props.inventoryList.map( (product) => (
                    <div key={product.id} className="product-container">
                        <img src={ product.image } alt="" />
                        <div className="row-container">
                            <h3>{product.name}</h3>
                            <h3>${product.price}</h3>
                        </div>
                        <div className="row-container">
                            <Link to={`/edit/${product.id}`}><button>Edit</button></Link>
                            <button onClick={() => props.deleteProduct(product.id)}>Delete</button>
                        </div>
                    </div>
                ) )}
            </div>
        )
}



export default Product 