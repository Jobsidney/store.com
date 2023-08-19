import { Box } from '@chakra-ui/react'
import React, { Component } from 'react'

type Props = {}

type State = {}

class Home extends Component<Props, State> {
  state = {}

  render() {
    return (
      <Box m={2}>
      <div className='bg-red-900 '>Home</div>
      </Box>
    )
  }
}

export default Home