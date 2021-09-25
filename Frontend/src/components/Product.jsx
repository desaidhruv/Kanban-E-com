import React from 'react';
import { Box, Image, SimpleGrid,Link } from '@chakra-ui/react';
import {Link as ReLink} from "react-router-dom"

function Product({ product }) {
  return (
    <>
      <Box
        key={product._id}
        w="300px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        h="400px"
      >
        <Link as={ReLink} to={`/product/${product._id}`} >

          <Box position="relative" w="100%">
            <Image src={product.image} h="250px" w="300px"></Image>
          </Box>
        </Link>
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
    </>
  );
}

export default Product;
