import Product from '../components/Product';
import Loading from '../components/Loading';
import { React, useEffect } from 'react';
import { Box, Image, SimpleGrid, Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      {loading ? <Loading /> 
        : error ? <Loading /> 
          : <SimpleGrid pt="20px" spacing="100px" columns={[1, 2, 3, 4]}>
            {products.map(product => (
              <Product product={product} key={product._id}/>
            ))}
            </SimpleGrid>
      }
    </>
  );
}

export default HomeScreen;
