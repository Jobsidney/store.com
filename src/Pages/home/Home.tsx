import { Box } from '@chakra-ui/react'
import React, { Component } from 'react'
import NavBar from '../../components/shared/NavBar'
import HeroSection from '../../components/HeroSection'
import FeaturedSales from '../../components/FeaturedSales'
import WeeklyDeals from '../../components/shared/WeeklyDeals'

type Props = {}

const Home = (props: Props) => {

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <FeaturedSales />
      <WeeklyDeals/>
    </>
    
  )
}

export default Home