import Product from '../components/Product';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { React, useEffect } from 'react';
import { SimpleGrid, AlertIcon } from '@chakra-ui/react';
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
        : error ? <Message status="error"><AlertIcon />{error}</Message>
          : <SimpleGrid pt="20px" spacing="50px" columns={{ sm: 1, md: 2, lg: 3 }}>
            {products.map(product => (
              <Product product={product} key={product._id} />
            ))}
          </SimpleGrid>
      }
    </>
  );
}

export default HomeScreen;
