import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, ChakraProvider, Skeleton, SkeletonCircle, SkeletonText, Stack, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})
function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <ChakraProvider >
      
    </ChakraProvider>
  );
}

export default App;
