import { AvatarBadge, Badge, Button, ButtonGroup, CloseButton, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Link, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import * as Lu from 'react-icons/lu'
import * as Li from 'react-icons/lia'
import * as Ci from 'react-icons/ci'
import { sign } from 'crypto'
type Props = {}

function NavBar({}: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] =useState('right');
    const [signIn,setSignIN]=useState(false)
      return (
          <div>
              <nav className=' bg-[#fed700]'>
                  <div className="mx-[12%] flex flex-row justify-between items-center py-3 space-x-4">
                      <div className='font-bold text-2xl'>Shop.com</div>
  
                      {/* search area */}
  
                      <div className='flex flex-row w-[70%] space-x-4'>
                          <button onClick={onOpen}>
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
              
            {/* <Drawer placement='left'   onClose={onClose} isOpen={isOpen}>
                
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
            </Drawer> */}

            <Drawer placement='right' size={'sm'}  onClose={onClose} isOpen={isOpen}>
                
                <DrawerContent className='shadow-r shadow-md bg-red-900 '>
                    <DrawerHeader borderBottomWidth='1px'>
                        <div className='flex flex-row justify-end'>
                            
                            <CloseButton className="text-black/30 hover:bg-transparent hover:text-black/70" onClick={onClose} size={'lg'} />
                        </div>
                    </DrawerHeader>
                    <DrawerBody>

                        <form className='space-y-5'>
                            <div className='text-center pb-8 text-2xl pt-2 text-black/70'>Welcome To Shop.com <p className='text-[16px] text-black/40'>Fill out the form to get started.</p></div>


                            {signIn ? <>
                                        <div className="flex border flex-row items-center  w-full rounded-full ">
                                            <label className="font-bold flex flex-row items-center justify-center capitalize w-[15%] ">
                                                <Ci.CiUser size={24}/>
                                            
                                            </label>
                                            <input type="email" className="border-l py-3 px-3 border-y-none border-r-none outline-none w-full rounded-r-full " name="email" placeholder="email" />
                                        </div>
                                        <div className="flex border flex-row items-center  w-full rounded-full ">
                                            <label className="font-bold flex flex-row items-center justify-center capitalize w-[15%] ">
                                                <Ci.CiLock size={24}/>
                                            
                                            </label>
                                            <input type="password" className="border-l py-3 px-3 border-y-none border-r-none outline-none w-full rounded-r-full " name="Password" placeholder="Password" />
                                        </div>

                                        <div className="text-right mb-4">
                                            <a className="hover:text-[#76808a] text-[#9aa2aa] text-sm underline" href="javascript:;" >Forgot Password?</a>
                                        </div>
                                        <div className="pt-6">
                                            < button type="button"className="hover:bg-[#333e48] bg-[#fed700] text-black text-center text-md  md:px-4 rounded-full py-3 font-bold w-full mb-3  px-8 hover:text-white">
                                                Login
                                            </button>
                                        </div>
                                    </>
                                    : 
                                    <>
                                        <div className="flex border flex-row items-center  w-full rounded-full ">
                                            <label className="font-bold flex flex-row items-center justify-center capitalize w-[15%] ">
                                                <Ci.CiUser size={24}/>
                                            
                                            </label>
                                            <input type="email" className="border-l py-3 px-3 border-y-none border-r-none outline-none w-full rounded-r-full " name="email" placeholder="email" />
                                        </div>
                                        <div className="flex border flex-row items-center  w-full rounded-full ">
                                            <label className="font-bold flex flex-row items-center justify-center capitalize w-[15%] ">
                                                <Ci.CiLock size={24}/>
                                            
                                            </label>
                                            <input type="password" className="border-l py-3 px-3 border-y-none border-r-none outline-none w-full rounded-r-full " name="Password" placeholder="Password" />
                                        </div>
                                        <div className="flex border flex-row items-center  w-full rounded-full ">
                                            <label className="font-bold flex flex-row items-center justify-center capitalize w-[15%] ">
                                                <Ci.CiLock size={24}/>
                                            
                                            </label>
                                            <input type="password" className="border-l py-3 px-3 border-y-none border-r-none outline-none w-full rounded-r-full " name="Password" placeholder="Password" />
                                        </div>
                                    </>}
                            <div className="text-right mb-4 text-[#6b737a] text-sm flex flex-row justify-center">
                                    {signIn? "Do not have an account?" :"Already have an account?"}
                                <div className=" cursor-pointer text-black text-sm underline ml-2" onClick={()=>{setSignIN(!signIn)}} >{signIn ? "register" :"Login"}</div>
                            </div>
                            <div className='flex flex-row justify-center items-center text-sm font-light py-6'>
                                <div className='border mx-3 w-[30px] '></div> OR <div className='border mx-3 w-[30px] '></div>
                            </div>

                            <div className="flex flex-row justify-between space-x-4 text-lg">
                                        
                                   < button type="button"className="hover:bg-[#3b5998] bg-[#3b5998]/10 text-black text-center text-md  md:px-4 rounded-full py-3 font-bold w-full mb-3  px-8 hover:text-white">
                                        Facebook
                                    </button>

                                    < button type="button"className="hover:bg-[#d14130] bg-[#d14130]/10 text-[#d14130] text-center text-md  md:px-4 rounded-full py-3 font-bold w-full mb-3  px-8 hover:text-white">
                                        Google
                                    </button>        
                                        
                            </div>
                        </form>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
          </div>
      )
    }
  

export default NavBar