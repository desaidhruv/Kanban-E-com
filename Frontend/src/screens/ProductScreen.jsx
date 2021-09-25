import {React, useState, useEffect} from 'react';
import products from '../products';
import {
  Link,
  Box,
  Stack,
  Center,
  Image,
  Divider,
  Button,
  Table,
  VStack,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

import { Link as ReLink } from 'react-router-dom';
import axios from 'axios'

function ProductScreen({ match }) {
  const [product, setProduct] = useState([])
  console.log(products);
  useEffect(() => {

    async function fetchProduct(){
      const { data } = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()

  }, [])
  // const product = products.find(p => p._id === match.params.id);
  
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
      <Stack as={Center} direction={['column', 'row']}>
        <Box shadow="md" w={['360px', '450px']}>
          <Image src={product.image}></Image>
        </Box>
        <Box shadow="md" as={Center} h="300px" w="250px">
          <VStack>
            <Box>{product.name}</Box>
            <Divider />
            <Box>{product.price}</Box>
            <Divider />
            <Box>{product.description}</Box>
          </VStack>
        </Box>
        <Box shadow="md" as={Center}>
          <Table variant="striped">
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
              </Tr>
              <Tr>
                <Td as={Center}>
                  <Button>Add to cart</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Stack>

      <Center >
        <Link as={ReLink} to="/">
          Go Back
        </Link>
        <br />
        Hello {product.name}
      </Center>
    </>
  );
}

export default ProductScreen;
