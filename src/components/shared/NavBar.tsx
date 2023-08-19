import { AvatarBadge, Badge, Button, ButtonGroup, Input, Link } from '@chakra-ui/react'
import React, { Component } from 'react'
import * as Lu from 'react-icons/lu'
import * as Li from 'react-icons/lia'
type Props = {}

type State = {}

class NavBar extends Component<Props, State> {
  state = {}

  render() {
    return (
        <div>
            <nav className=' bg-[#fed700]'>
                <div className="mx-[10%] flex flex-row justify-between items-center py-3 space-x-4">
                    <div className='font-bold text-2xl'>Shop.com</div>

                    {/* search area */}

                    <div className='flex flex-row w-[70%] space-x-4'>
                        <button>
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

            <div className='flex-row flex items-center mx-[10%] py-2'>
                <div className='w-[20%]'>
                    All Departments
                </div>
                <div className='w-[80%] flex-row flex justify-between'>
                    <ul className='flex flex-row items-center space-x-4 w-full'>
                        <li>All</li>
                        <li>New offers</li>
                        <li>Best sell</li>
                    </ul>
                    <div className='w-[30%] flex flex-row justify-end'>
                    Free Shipping on Orders $50+
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default NavBar