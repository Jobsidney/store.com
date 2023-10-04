import { AvatarBadge, Badge, Button, ButtonGroup, CloseButton, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Link, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import * as Lu from 'react-icons/lu'
import * as Li from 'react-icons/lia'
import * as Ci from 'react-icons/ci'
import LoginSIgnUp from '../credentials/LoginSIgnUp'

type Props = {}

function NavBar({}: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [user,setuser]=useState(false);
    const [placement, setPlacement] =useState('right');
    const [size,setSize] = useState('')
    const [signIn,setSignIN]=useState(false);

    useEffect(()=>{
if (user) {
        setPlacement('right'); 
        setSize('xs');

    } else{
        setPlacement('left');
        setSize('sm')
    }
    },[])


      return (
          <div>
              <nav className=' bg-[#fed700]'>
                  <div className=" lg:mx-[12%] md:mx-[2%] flex flex-row justify-between items-center py-3 space-x-4">
                      <div className='hidden lg:block font-bold text-2xl'>Shop.com</div>
  
                      {/* search area */}
  
                      <div className='flex flex-row w-[70%] md:space-x-4'>
                        {user?
                          <button id='user' onClick={onOpen}>
                              <Lu.LuMenu size={32} color='black'/>    
                          </button>
                          :""}
                          <div className='hidden lg:flex flex-row items-center bg-white w-full rounded-r-full rounded-l-full  '>
                          {/*  */}
                              <input  placeholder='search for products' className='py-3 w-full rounded-l-full px-6'/>
                              <div className='bg-[#333e48] cursor-pointer h-full flex flex-row items-center px-4 rounded-r-full'>
                                  <Lu.LuSearch color='white' size={24}/>
                              </div>
                          </div>
                      </div>
  
                      {/* cart and other  */}
                      <div className='flex flex-row items-center md:space-x-4 space-x-3'>
                          <button>
                              <Li.LiaHeart size={26}/>
                          </button>
                      
                          

                          <Popover size={'sm'}>
                            
                            <PopoverTrigger>
                            <button className='flex flex-row items-end space-x-2 pr-2 md:space-x-5'>
                              <Li.LiaShoppingBagSolid size={26} className=" "/>
                          </button>
                            </PopoverTrigger>
                            <div className='border-t-3 bg-red-900'>
                            <Portal >
                                <PopoverContent >
                                <PopoverBody>
                                    <ul className="space-y-2 p-2 divide-y ">
                                        <li className="flex flex-row space-x-4 py-2">
                                                <img className="img-fluid h-[70px]" src="https://transvelo.github.io/electro-html/2.0/assets/img/564X520/img2.jpg" alt="Image Description"/>
                                                <div className='flex flex-col space-y-2'>
                                                     <h5 className="text-blue-600 font-size-14 font-bold">Ultra Wireless S50 Headphones S50 with Bluetooth</h5>
                                                    <span className="text-[13px]">1 × $1,100.00</span>
                                                </div>
                                               
                                        </li>
                                        <li className="flex flex-row space-x-4 py-2">
                                                <img className="img-fluid h-[70px]" src="https://transvelo.github.io/electro-html/2.0/assets/img/564X520/img2.jpg" alt="Image Description"/>
                                                <div className='flex flex-col space-y-2'>
                                                     <h5 className="text-blue-600 font-size-14 font-bold">Ultra Wireless S50 Headphones S50 with Bluetooth</h5>
                                                    <span className="text-[13px]">1 × $1,100.00</span>
                                                </div>
                                               
                                        </li>
                                        <div className="flex flex-row text-sm space-x-2 pt-6">
                                            <button type="button" className="w-full bg-[#77838f]/10 hover:bg-[#77838f] hover:text-white rounded-full text-base  font-normal   py-3 ">View cart</button>
                                            <a href="../shop/checkout.html" className="w-full hover:bg-[#333e48] bg-[#fed700] text-black text-center  md:px-2 rounded-full py-3 font-bold   hover:text-white">checkout</a>
                                        </div> 
                                            
                                    </ul>
                                   
                                </PopoverBody>
                                
                                </PopoverContent>
                            </Portal></div>
                            </Popover>
                          
                          
                          {user? 
                          "":
                          <button id='register' onClick={onOpen} className='flex flex-row items-end text-black/70 space-x-1 border-l border-l-white pl-2 text-sm'>
                              <Li.LiaUser size={24} className=" "/>
                              <div className='font-thin'>Sign in</div>

                          </button>
                          }
                      </div>
                  </div>
              </nav>
  
              <div className='hidden lg:flex flex-row  items-center px-[12%] text-md shadow-b-500/50 shadow py-3'>
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
              
              
            <Drawer placement={user?'left':'right'}   onClose={onClose} isOpen={isOpen} size={user?'xs':'sm'}>
                {user?
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
                :
                <DrawerContent className='shadow-r shadow-md bg-red-900 '>
                    <DrawerHeader borderBottomWidth='1px'>
                        <div className='flex flex-row justify-end'>
                            
                            <CloseButton className="text-black/30 hover:bg-transparent hover:text-black/70" onClick={onClose} size={'lg'} />
                        </div>
                    </DrawerHeader>
                    <DrawerBody>
                       <LoginSIgnUp/>
                    </DrawerBody>
                </DrawerContent>}
            </Drawer>
          </div>
      )
    }
  

export default NavBar