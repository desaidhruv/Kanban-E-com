import React from 'react'
import products from '../products';
import {
    Link,
} from '@chakra-ui/react';

function ProductScreen({ match }) {
    const product = products.find((p) => p._id === match.params.id)
    return (
        <div>
            <Link href="/">Go Back</Link><br/>
            Hello {product.name}
        </div>
    )
}

export default ProductScreen
