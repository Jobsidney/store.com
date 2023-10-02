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
        <div className='px-[12%] space-y-10 my-2'>
            <Tabs>
                <TabList>
                    <div className='flex flex-row justify-center w-full'>
                {data.map((tab, index) => (
                    <Tab key={index} _selected={{color:'black',fontWeight:'bold',borderBottom:'2px solid #fed700'}} color={'gray.500'}><p className='text-xl'>{tab.label}</p></Tab>
                ))}</div>
                </TabList>
                <TabPanels>
                   {data.map((tab, index) => (
                            <TabPanel  key={index}> 
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

            <div className="pb-10">
                    <a href="." className=" text-gray-500 ">
                        <div className=" py-5 bg-[url('https://transvelo.github.io/electro-html/2.0/assets/img/1400X143/img1.png')] object-fill">
                            <div className=" p-4 pt-4 pt-md-5 lg:pt-6 xl:pt-5 lg:pb-4 xl:px-14 lg:px-6">
                                <div className="flex-row flex items-center overflow-auto overflow-md-visble">
                                    <p className=" text-3xl font-thin mb-0 flex flex-wrap ">SHOP AND <strong className='font-extrabold text-black mx-1'> SAVE BIG </strong> ON HOTTEST TABLETS</p>
                                    <div className=" ml-4 flex-shrink-0">
                                        <div className=" rounded-lg px-16 py-2 bg-[#fed700] space-y-1">
                                            <em className="text-[14px] font-light">STARTING AT</em>
                                            <div className="text-4xl font-bold text-black">
                                                <sup className=" font-thin text-gray-600 ">$</sup>79<sup className="font-thin text-gray-600 text-sm">99</sup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
)
}



export default FeaturedSales