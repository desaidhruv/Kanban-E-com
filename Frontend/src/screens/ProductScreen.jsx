import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Stack,
  Center,
  Image,
  Divider,
  Button,
  Table,
  VStack,
  Tr,
  Tbody,
  Td,
  Spacer,
  Heading,
  Text,
} from '@chakra-ui/react';

import { listProductDetails, } from '../actions/productActions'
import { Link as ReLink } from 'react-router-dom';
import axios from 'axios'
import Rating from '../components/Rating';

function ProductScreen({ match }) {
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [])
  return (
    <>
      {/* '_id': '1',
    'name': 'Airpods Wireless Bluetooth Headphones',
    'image': '/images/airpods.jpg',
    'description':
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    'brand': 'Apple',
    'price': 89.99,
    'countInStock': 10,
     */}
      <Button colorScheme="teal" as={ReLink} mt="10px" to="/">
        Go Back
      </Button>

      <Stack as={Center} direction={['column', 'column', 'column', 'row']} mt="40px">
        <Box shadow="md" w={['360px', '450px']}>
          <Image src={product.image}></Image>
        </Box>

        <Spacer />

        <Box as={Center} h="300px" w={['90vw', '90vw', '90vw', '30vw']}>
          <VStack>
            <Box><Heading size="lg" fontSize="30px">{product.name} </Heading></Box>
            <Divider />
            <Box>
              <Text align="left" size="md" >
                Price : ${product.price}
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="lg">
                Description: {product.description}
              </Text>
            </Box>
          </VStack>
        </Box>

        <Spacer />

        <Box shadow="md" as={Center}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>Price:</Td>
                <Td>${product.price}</Td>
              </Tr>
              <Tr>
                <Td>Status:</Td>
                <Td>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Td>
              </Tr>
              <Tr>
                <Td>Review:</Td>
                <Td>
                  <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Button disabled={product.countInStock === 0} size="md" colorScheme="teal">Add to cart</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </>
  );
}

export default ProductScreen;
