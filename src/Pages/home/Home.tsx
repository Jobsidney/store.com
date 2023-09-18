import { Box } from '@chakra-ui/react'
import React, { Component } from 'react'
import NavBar from '../../components/shared/NavBar'
import HeroSection from '../../components/HeroSection'
import FeaturedSales from '../../components/FeaturedSales'
import WeeklyDeals from '../../components/shared/WeeklyDeals'
import CategoryGroupedItems from '../../components/shared/CategoryGroupedItems'
import TopCategoryWeek from '../../components/shared/TopCategoryWeek'
import Footer from '../../components/shared/Footer'

type Props = {}

const Home = (props: Props) => {

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <FeaturedSales />
      <WeeklyDeals/>
      <CategoryGroupedItems/>
      <TopCategoryWeek/>
      <Footer/>
    </>
    
  )
}

export default Home