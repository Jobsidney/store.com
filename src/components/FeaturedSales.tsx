import React, { useState } from 'react'
import { AvatarBadge, Badge, Box, Button, Flex, Link, Skeleton, SkeletonCircle, SkeletonText, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import * as Lu from 'react-icons/lu'
import * as Li from 'react-icons/lia'
import ProductCard from './shared/ProductCard'

type Props = {

}

const FeaturedSales = () => {
    const data = [
        {
          label: 'Featured',
          content: 'Perhaps the greatest dish ever invented.',
        },
        {
          label: 'On Sale',
          content:
            'Perhaps the surest dish ever invented but fills the stomach more than rice.',
        },
        {
          label: 'Top Rated',
          content:
            'Perhaps the surest dish ever invented but fills the stomach more than rice.',
        },
      ]
    return(
        <div className='px-[12%]'>
            <Tabs>
                <TabList>
                    <div className='flex flex-row justify-center w-full'>
                {data.map((tab, index) => (
                    <Tab key={index} _selected={{color:'red',font:'bold'}} color={'gray.500'}><p className=' text-xl'> {tab.label}</p></Tab>
                ))}</div>
                </TabList>
                <TabPanels>
                   {data.map((tab, index) => (
                            <TabPanel p={4} key={index}> 
                            <div className='flex flex-row justify-between w-full'>
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                            </div>
                            </TabPanel>
                            
                        ))}   
                </TabPanels>
            </Tabs>
        </div>
)
}



export default FeaturedSales