
import React, { useState } from 'react'
import { AvatarBadge, Badge, Box, Button, Flex, Link, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import * as Lu from 'react-icons/lu'
import * as Li from 'react-icons/lia'
import HeroThumbNailCard from './shared/HeroThumbNailCard'

type Props = {}

const HeroSection = (props: Props) => {
    const [isLoaded,setLoaded] = useState<any>(true);
    return (
        <div className='px-[12%] py-6'>
          <Box   bg='white'>
            <Flex >
                <Box flex={3} pr={4}>
                    <Skeleton height='450px' isLoaded={isLoaded} bg='#f5f5f5' color='white' fadeDuration={1}>
                    <div className="flex-row flex text-black height-full md:py-7 px-[7%] bg-[url('https://transvelo.github.io/electro-html/2.0/assets/img/1920X422/img1.jpg')] bg-cover py-0 mx-0">
                                            
                                            <div className=" mt-8 space-y-3">
                                                <h1 className="text-6xl  font-extralight" data-scs-animation-in="fadeInUp" >
                                                    THE NEW<br /><span className="">STANDARD</span>
                                                </h1>
                                                <h6 className="text-md font-bold mb-3" data-scs-animation-in="fadeInUp" data-scs-animation-delay="200" >UNDER FAVORABLE SMARTWATCHES
                                                </h6>
                                                <div className="mb-4" data-scs-animation-in="fadeInUp" data-scs-animation-delay="300" >
                                                    <span className="font-thin pb-4">FROM</span>
                                                    <div className="text-5xl font-bold">
                                                        <sup className="">$</sup>749<sup className="">99</sup>
                                                    </div>
                                                </div>
                                                <Button bg={'#fed700'} data-scs-animation-in="fadeInUp" data-scs-animation-delay="400" px={16} py={4} fontWeight={'light'} >
                                                    Start Buying
                                                </Button>
                                            </div>
                                            <div className="flex align-items-center ml-auto " data-scs-animation-in="zoomIn" data-scs-animation-delay="500" >
                                                <img className="img-fluid" src="https://transvelo.github.io/electro-html/2.0/assets/img/500X380/img3.png" alt="Image Description"/>
                                            </div>
                                        </div>
                    
                    </Skeleton>
                </Box>
                
                <div className="flex-1 space-y-2 flex flex-col justify-between"  >
                    <HeroThumbNailCard isLoaded={isLoaded}/>
                    <HeroThumbNailCard isLoaded={isLoaded}/>
                    <HeroThumbNailCard isLoaded={isLoaded}/>
                </div>
            </Flex>
          </Box>
         
        </div>
      )
}


export default HeroSection

