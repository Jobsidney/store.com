import { Box } from '@chakra-ui/react'
import React, { Component } from 'react'
import NavBar from '../../components/shared/NavBar'
import HeroSection from '../../components/HeroSection'

type Props = {}

type State = {}

class Home extends Component<Props, State> {
  state = {}

  render() {
    return (
     <>
      <NavBar/>
      <HeroSection/>
</>
    )
  }
}

export default Home