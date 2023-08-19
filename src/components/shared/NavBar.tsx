import { AvatarBadge, Badge, Button, Link } from '@chakra-ui/react'
import React, { Component } from 'react'
import * as Lu from 'react-icons/lu'
type Props = {}

type State = {}

class NavBar extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className=' flex flex-row lg:pl-[15%] bg-[#5d6e70]'>
        
        <div className='flex text-white flex-row text-2xl font-bold mx-2 py-5'>
            <Link>Shop.com</Link>
        </div>

        <div className=' bg-[#525252]'>
            <ul className='flex flex-row space-x-3 text-lg  bg-[#525252] text-white  '>
                <li className="px-5  ">
                    <div className='flex flex-row space-x-2 items-center py-5'>
                        <Lu.LuSearch size={24}></Lu.LuSearch>
                        <input type="text" className='bg-transparent w-[400px]' placeholder='search'/>
                    </div>
                </li>
                <li className=" px-5  "><div className='cursor-pointer py-5'>Home</div> </li>
                <li className=" px-5  "><div className='cursor-pointer py-5'>Links</div> </li>
                <li className=" px-5  "><div className='cursor-pointer py-5'>Products</div> </li>
                <li className=" px-5  "><div className='cursor-pointer py-5'>Contact US</div> </li>
                <li className="  bg-[#5d6e70] ">
                    <div className='px-10 cursor-pointer  py-5'>
                        <Lu.LuUser size={24}></Lu.LuUser>
                    </div>
                </li>
                <li className=" px-5"><div className='cursor-pointer flex-row flex w-[100px] py-5'>
                    
                        <Lu.LuShoppingCart size={24}/>
                        <Badge borderColor='papayawhip' bg='#a5a9a8'   boxSize='1.25em' ></Badge>
                   </div> </li>
                
            </ul>
        </div>

        

      </div>
    )
  }
}

export default NavBar