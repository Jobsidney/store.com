
import React, { useState } from 'react'
import { AvatarBadge, Badge, Box, Button, Flex, Link, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
type Props = {}

const HeroSection = (props: Props) => {
    const [isLoaded,setLoaded] = useState<any>(false);
    return (
        <div className='px-[12%] py-6'>
          <Box   bg='white'>
            <Flex >
                <Box flex={3} pr={4}>
                    <Skeleton height='450px' isLoaded={isLoaded} bg='green.500' color='white' fadeDuration={1}>
                    
                    </Skeleton>
                </Box>
                
                <div className="flex-1 space-y-2 flex flex-col justify-between"  >
                    <Skeleton height='140px' isLoaded={isLoaded} color='black'  fadeDuration={1}>
                        
                    </Skeleton>
                    <Skeleton height='140px' isLoaded={isLoaded} color='black'  fadeDuration={1}>hey
                        
                    </Skeleton>
                    <Skeleton height='140px' isLoaded={isLoaded} color='black'  fadeDuration={1}>
                        
                    </Skeleton>
                </div>
            </Flex>
          </Box>
         
        </div>
      )
}


export default HeroSection

