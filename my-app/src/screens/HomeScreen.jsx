import React from 'react'
import products from '../products'
import Product from '../components/Product'

function HomeScreen() {
    return (
        <div>
            <h1>Latest Products</h1>
            {products.map(product => (
                <Product product={product} />
            ))}
        </div>
    )
}

export default HomeScreen
