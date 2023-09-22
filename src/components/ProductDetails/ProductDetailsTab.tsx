import React from 'react'
import { AvatarBadge, Badge, Box, Button, Flex, Link, Skeleton, SkeletonCircle, SkeletonText, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import ProductCard from '../shared/ProductCard'
import Description from './Description'
type Props = {}

function ProductDetailsTab({}: Props) {
    const data = [
        {
          label: 'Description',
          content: <Description/>,
        },
        {
          label: 'Specification',
          content:
            'Perhaps the surest dish ever invented but fills the stomach more than Specifications',
        },
        {
          label: 'Reviews',
          content:
            'Perhaps the surest dish ever invented but fills the stomach more than Reviews',
        },
      ]
  return (
    <div className='lg:my-24'>
        <Tabs variant={'unstyled'}>
                <TabList>
                    <div className='flex flex-row justify-center space-x-4 w-full'>
                {data.map((tab, index) => (
                    <Tab key={index}  _selected={{color:'black',fontWeight:'bold',borderBottom:'4px solid #fed700'}}  color={'gray.500'}><p className='text-xl'>{tab.label}</p></Tab>
                ))}</div>
                </TabList>
                <div className='border rounded-2xl p-8'>
                <TabPanels _selected={{color:'black',fontWeight:'bold',borderBottom:'1px solid red'}} color={'gray.500'}>
                   {data.map((tab, index) => (
                            <TabPanel  key={index}> 
                            <div className='flex flex-row justify-between '>
                                {tab.content}
                            </div>
                            </TabPanel>
                            
                        ))}   
                </TabPanels></div>
            </Tabs>
    </div>
  )
}

export default ProductDetailsTab