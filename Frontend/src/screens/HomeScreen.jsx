import products from '../products';
import Product from '../components/Product';
import { React, useRef } from 'react';
import {
  
  Image,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';

function HomeScreen() {
  console.log(products);
  return (
    <>
      <SimpleGrid pt="20px" spacing="100px" columns={[1, 2, 3, 4]}>
        {products.map(product => (
        <Box
          key={product._id}
          w="300px" 
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
        >
          <Box position="relative" w="100%">
            <Image src={product.image}></Image>
          </Box>
          <Box pl="20px">
            <Box
              pt="20px"
              mt="1"
              fontWeight="bold"
              fontSize="25px"
              lineHeight="tight"
            ></Box>
            <Box>{product.name}</Box>
            <Box> $ {product.price}</Box>
            <Box> {product.rating}</Box>
          </Box>
        </Box>
      ))}
      </SimpleGrid>
    </>
  );
}

export default HomeScreen;
