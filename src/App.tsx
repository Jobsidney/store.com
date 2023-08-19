import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})
function App() {
  return (
    <ChakraProvider theme={theme}>
    
    </ChakraProvider>
  );
}

export default App;
