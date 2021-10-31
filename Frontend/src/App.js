import React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './screens/LoginScreen';
import productScreen from './screens/ProductScreen';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Container maxW="container.xl">
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/login" component={login} />
            <Route path="/product/:id" component={productScreen} />
          </Switch>
          {/* <HomeScreen /> */}
          {/* <Card /> */}
        </Container>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
