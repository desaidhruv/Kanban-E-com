import React from 'react';
import { Box, HStack, Grid, Flex, useColorModeValue } from '@chakra-ui/react';

function Product({ product }) {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="md"
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box
          w={1 / 3}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
          }}
        ></Box>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          {/* <Image src={product.imageUrl} alt={product.imageAlt} /> */}
          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {product.name}
            </Box>
            <Box>{product.price}</Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Product;
