import { AvatarBadge, Badge, Button, ButtonGroup, CloseButton, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Link, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import * as Lu from 'react-icons/lu'
import * as Li from 'react-icons/lia'
import * as Ci from 'react-icons/ci'

type Props = {}

function LoginSIgnUp({}: Props) {
    const [signIn,setSignIN]=useState(true)
  return (
    <form className='space-y-4'>
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
                                        <div className="pt-3">
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
                                                <Ci.CiPhone size={24}/>
                                            
                                            </label>
                                            <input type="tel" className="border-l py-3 px-3 border-y-none border-r-none outline-none w-full rounded-r-full " name="phone" placeholder="+254 7000 000 00" />
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
                                            <input type="password" className="border-l py-3 px-3 border-y-none border-r-none outline-none w-full rounded-r-full " name="confirm Password" placeholder="Password" />
                                        </div>
                                    </>}
                            <div className="text-right mb-4 text-[#6b737a] text-sm flex flex-row justify-center">
                                    {signIn? "Do not have an account?" :"Already have an account?"}
                                <div className=" cursor-pointer text-black text-sm underline ml-2" onClick={()=>{setSignIN(!signIn)}} >{signIn ? "register" :"Login"}</div>
                            </div>
                            <div className='flex flex-row justify-center items-center text-sm font-light py-4'>
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
  )
}

export default LoginSIgnUp