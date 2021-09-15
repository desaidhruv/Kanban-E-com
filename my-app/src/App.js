import React from 'react';
import {
  ChakraProvider,
  theme,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="container.xl">
        <HomeScreen />
        {/* <Card /> */}
      </Container>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
