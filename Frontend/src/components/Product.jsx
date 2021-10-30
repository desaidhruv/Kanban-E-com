import React from 'react';
import { Box, Image, SimpleGrid, Link, Heading } from '@chakra-ui/react';
import {Link as ReLink} from "react-router-dom"

function Product({ product }) {
  return (
    <>
      <Box
        key={product._id}
        w="350px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        h="400px"
      >
        <Link as={ReLink} to={`/product/${product._id}`} >

          <Box position="relative" w="100%">
            <Image src={product.image} h="250px" w="350px"></Image>
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
          <Box><b>{product.name}</b></Box>
          <Box mt="2"> {product.rating} from {product.numReviews} reviews</Box>
          <Box mt="2">
            <Heading size="md">$ {product.price}</Heading></Box><br />

        </Box>
      </Box>
    </>
  );
}

export default Product;
