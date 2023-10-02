import React, { useState } from 'react'
import { AvatarBadge, Badge, Box, Button, Flex, Link, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import * as Lu from 'react-icons/lu'
import * as Li from 'react-icons/lia'

type Props = {
    isLoaded: boolean
}

const HeroThumbNailCard = (props: Props) => {
  return (
    <Skeleton height='140px' className='min-w-[350px]' isLoaded={props.isLoaded} bg='#f5f5f5' color='black'  fadeDuration={1}>
    <div className='flex flex-row justify-around items-center cursor-pointer '>
        <img src="https://transvelo.github.io/electro-html/2.0/assets/img/246X176/img1.jpg" className='w-[50%]' alt="" />
        <div className='w-[50%]'>
            <div className=" pb-1  font-extralight  text-lg">CATCH BIG <strong className='font-bold'>DEALS</strong> ON THE CAMERAS
            </div>
            <div className="cursor-pointer text-gray flex flex-row font-bold"> 
                Shop now
                <Lu.LuChevronRight className="bg-[#fed700] mx-2 p-1 rounded-full" size={24} color='white'/>
                
            </div>
        </div>
    </div>   
</Skeleton>
  )
}

export default HeroThumbNailCard