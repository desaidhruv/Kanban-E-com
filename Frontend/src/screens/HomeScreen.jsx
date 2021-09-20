import products from '../products';
import Product from '../components/Product';
import { React} from 'react';
import { Box, Image, SimpleGrid, } from '@chakra-ui/react';

function HomeScreen() {
  console.log(products);
  return (
    <>
      <SimpleGrid pt="20px" spacing="100px" columns={[1, 2, 3, 4]}>
      {products.map(product => (
        <Product product={product} />
      ))}
      </SimpleGrid>
    </>
  );
}

export default HomeScreen;
