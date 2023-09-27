import { AvatarBadge, Badge, Button, ButtonGroup, CloseButton, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Link, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import * as Lu from 'react-icons/lu'
import * as Li from 'react-icons/lia'
import * as Ci from 'react-icons/ci'
import LoginSIgnUp from '../credentials/LoginSIgnUp'

type Props = {}

function NavBar({}: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [placement, setPlacement] =useState('right');
    const [signIn,setSignIN]=useState(false);
    const [navLeft,setNavLeft]=useState(true);


      return (
          <div>
              <nav className=' bg-[#fed700]'>
                  <div className="mx-[12%] flex flex-row justify-between items-center py-3 space-x-4">
                      <div className='font-bold text-2xl'>Shop.com</div>
  
                      {/* search area */}
  
                      <div className='flex flex-row w-[70%] space-x-4'>
                          <button id='navLeft' onClick={onOpen}>
                              <Lu.LuMenu size={32} color='black'/>
                              
                          </button>
                          <div className='flex flex-row items-center bg-white w-full rounded-r-full rounded-l-full '>
                          {/*  */}
                              <input  placeholder='search for products' className='py-3 w-full rounded-l-full px-6'/>
                              <div className='bg-[#333e48] cursor-pointer h-full flex flex-row items-center px-4 rounded-r-full'>
                                  <Lu.LuSearch color='white' size={24}/>
                              </div>
                          </div>
                      </div>
  
                      {/* cart and other  */}
                      <div className='flex flex-row items-center space-x-6'>
                          <button>
                              <Li.LiaHeart size={26}/>
                          </button>
                      
                          <button className='flex flex-row items-end space-x-5'>
                              <Li.LiaShoppingBagSolid size={26} className=" "/>
                              <div className='font-semibold'>$1785.00</div>
                          </button>
                          <button id='register' onClick={onOpen} className='flex flex-row items-end text-black/70 space-x-1 border-l border-l-white pl-2 text-sm'>
                              <Li.LiaUser size={24} className=" "/>
                              <div className='font-thin'>Sign in</div>
                          </button>

                      </div>
                  </div>
              </nav>
  
              <div className='flex-row flex items-center px-[12%] text-md shadow-b-500/50 shadow py-3'>
                  <div className='w-[20%]'>
                     <button className='font-bold'>All Departments</button> 
                  </div>
                  <div className='w-[80%] flex-row flex justify-between'>
                      <ul className='flex flex-row items-center space-x-10 w-full font-extralight'>
                          <li className='text-red-500 cursor-pointer'>Super Deals</li>
                          <li className='cursor-pointer'>New offers</li>
                          <li className='cursor-pointer'>Best sell</li>
                      </ul>
                      <div className='w-[30%] flex flex-row justify-end'>
                          <span className='cursor-pointer font-light'> Free Shipping on Orders $50+</span>
                      </div>
                  </div>
              </div>

              {/* side nav bar start here */}
              
            <Drawer placement='left'   onClose={onClose} isOpen={isOpen}>
                
                <DrawerContent className='shadow-r shadow-md bg-red-900 '>
                    <DrawerHeader borderBottomWidth='1px'>
                        <div className='flex flex-row justify-between'>
                            <div className='font-bold text-3xl'>Shop.com</div>
                            <CloseButton className="text-black/30 hover:bg-transparent hover:text-black/70" onClick={onClose} size={'lg'} />
                        </div>
                    </DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Drawer placement='right' size={'sm'}  onClose={onClose} isOpen={isOpen}>
                
                <DrawerContent className='shadow-r shadow-md bg-red-900 '>
                    <DrawerHeader borderBottomWidth='1px'>
                        <div className='flex flex-row justify-end'>
                            
                            <CloseButton className="text-black/30 hover:bg-transparent hover:text-black/70" onClick={onClose} size={'lg'} />
                        </div>
                    </DrawerHeader>
                    <DrawerBody>
                       <LoginSIgnUp/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
          </div>
      )
    }
  

export default NavBar