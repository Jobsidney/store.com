import React from 'react'
import * as Bs from 'react-icons/bs'
import * as Bi from 'react-icons/bi'
import * as Md from 'react-icons/md'
import { Progress } from '@chakra-ui/react'

type Props = {}

function Reviews({}: Props) {
  return (
    <div>
        <div className="tab-pane fade" id="Jpills-four-example1" role="tabpanel" aria-labelledby="Jpills-four-example1-tab">
                                <div className="grid grid-cols-2 mb-8">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <h3 className="text-2xl mb-6">Based on 3 reviews</h3>
                                            <h2 className="font-bold text-black text-4xl">4.3</h2>
                                            <div className="text-lh-1">overall</div>
                                        </div>

                                        
                                        <ul className="list-unstyled">
                                            <li className="py-1">
                                                <div className="flex flex-row space-x-4 items-center " >
                                                        <div className="col-auto mb-md-0">
                                                        <div className="flex flex-row items-center text-[16px] space-x-1">
                                                            <Bs.BsStarFill color='#fed700'/>
                                                            <Bs.BsStarFill color='#fed700'/>
                                                            <Bs.BsStarFill color='#fed700'/>
                                                            <Bs.BsStarFill color='#fed700'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                        </div>
                                                        </div>
                                                        <div className=" w-[40%]">
                                                            
                                                            <Progress value={80} colorScheme='gray' rounded={100} />
                                                        
                                                        </div>
                                                    <div className="">
                                                        <span className="text-gray-90">205</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-1">
                                                <div className="flex flex-row space-x-4 items-center " >
                                                        <div className="col-auto mb-md-0">
                                                        <div className="flex flex-row items-center text-[16px] space-x-1">
                                                            <Bs.BsStarFill color='#fed700'/>
                                                            <Bs.BsStarFill color='#fed700'/>
                                                            <Bs.BsStarFill color='#fed700'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                        </div>
                                                        </div>
                                                        <div className=" w-[40%]">
                                                            
                                                            <Progress value={50} colorScheme='gray' rounded={100} />
                                                        
                                                        </div>
                                                    <div className="">
                                                        <span className="text-gray-90">55</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-1">
                                                <div className="flex flex-row space-x-4 items-center " >
                                                        <div className="col-auto mb-md-0">
                                                        <div className="flex flex-row items-center text-[16px] space-x-1">
                                                            <Bs.BsStarFill color='#fed700'/>
                                                            <Bs.BsStarFill color='#fed700'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                        </div>
                                                        </div>
                                                        <div className=" w-[40%]">
                                                            
                                                            <Progress value={30} colorScheme='gray' rounded={100} />
                                                        
                                                        </div>
                                                    <div className="">
                                                        <span className="text-gray-90">23</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-1">
                                                <div className="flex flex-row space-x-4 items-center " >
                                                        <div className="col-auto mb-md-0">
                                                        <div className="flex flex-row items-center text-[16px] space-x-1">
                                                            <Bs.BsStarFill color='#fed700'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                        </div>
                                                        </div>
                                                        <div className=" w-[40%]">
                                                            
                                                            <Progress value={0} colorScheme='gray' rounded={100} />
                                                        
                                                        </div>
                                                    <div className="">
                                                        <span className="text-gray-90">0</span>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                        </ul>
                                   
                                    </div>
                                    <div className="w-full">
                                        <h3 className="font-medium text-xl text-black/60 mb-5">Add a review</h3>
                                   
                                        <form className="js-validate w-full space-y-4" >
                                            <div className=" mb-3 grid grid-cols-[20%,70%] items-start gap-4 w-full space-x-4">
                                                
                                                    <label  className="text-black font-bold mb-0">Your Review</label>
                                               
                                                        <div className="flex flex-row items-center text-[16px] space-x-1">
                                                            <Bs.BsStar className='text-gray-300'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                            <Bs.BsStar className='text-gray-300'/>
                                                        </div>
                                            </div>
                                            <div className=" mb-3 grid grid-cols-[20%,70%] items-start gap-4 w-full space-x-4">
                                                
                                                    <label  className="text-black/80 font-bold ">Your Review</label>
                                               
                                                    <textarea className="border-[3px] p-2   outline-blue-600 rounded-2xl"  rows={5}></textarea>
                                                
                                            </div>
                                            <div className=" mb-3 grid grid-cols-[20%,70%] items-start gap-4 w-full space-x-4">
                                               
                                                    <label className="text-black/80 font-bold ">Name <span className="text-red-600">*</span></label>
                                               
                                                    <input type="text" className="border-[3px] p-2   outline-blue-600 rounded-2xl" name="name" id="inputName" />
                                                
                                            </div>
                                            <div className=" mb-3 grid grid-cols-[20%,70%] items-start gap-4 w-full space-x-4">
                                               
                                                    <label  className="text-black/80 font-bold ">Email <span className="text-red-600">*</span></label>
                                               
                                                    <input type="email" className="border-[3px] p-2   outline-blue-600 rounded-2xl" name="emailAddress" id="emailAddress" aria-label="alexhecker@pixeel.com" />
                                                
                                            </div>
                                            <div className=" mb-3 grid grid-cols-[20%,70%] items-start gap-4 w-full space-x-4">
                                                <div></div>
                                                <button type='submit' className="bg-[#fed700] hover:bg-[#333e48] cursor-pointer max-w-[230px] flex-row space-x-2 flex justify-center items-center py-3 px-10 transition translate-y-1 hover:scale-110 rounded-3xl text-white font-semibold">
                                                    <div>
                                                            <i className=""></i> Add Review
                                                    </div>
                                                </button>
                                        </div>
                                        </form>
                                     
                                    </div>
                                </div>


                                <div className='divide-y space-y-6'>
                                
                                {/* start */}
                                    <div className="py-6 mb-4 space-y-4">
                                        <div className="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                                        <div className="flex flex-row items-center text-[16px] space-x-1">
                                                    <Bs.BsStarFill color='#fed700'/>
                                                    <Bs.BsStarFill color='#fed700'/>
                                                    <Bs.BsStarFill color='#fed700'/>
                                                    <Bs.BsStarFill color='#fed700'/>
                                                    <Bs.BsStar className='text-gray-300'/>
                                                </div>
                                        </div>
                                        <p className="text-gray-90">Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.</p>
                                        <div className="mb-2 space-x-2">
                                            <strong className='text-black/80 '>John Doe</strong>
                                            <span className="font-size-13 text-gray-23">- April 3, 2019</span>
                                        </div>
                                    </div>
                                    {/* end */}
                                    {/* start */}
                                    <div className="py-6 mb-4 space-y-4">
                                        <div className="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                                        <div className="flex flex-row items-center text-[16px] space-x-1">
                                                    <Bs.BsStarFill color='#fed700'/>
                                                    <Bs.BsStarFill color='#fed700'/>
                                                    <Bs.BsStarFill color='#fed700'/>
                                                    <Bs.BsStarFill color='#fed700'/>
                                                    <Bs.BsStar className='text-gray-300'/>
                                                </div>
                                        </div>
                                        <p className="text-gray-90">
                                        Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.
                                        Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.
                                        Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.
                                        </p>
                                        <div className="mb-2 space-x-2">
                                            <strong className='text-black/80 '>John Doe</strong>
                                            <span className="font-size-13 text-gray-23">- April 3, 2019</span>
                                        </div>
                                    </div>
                                    {/* end */}
                                    {/* start */}
                                    <div className="py-6 mb-4 space-y-4">
                                        <div className="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                                        <div className="flex flex-row items-center text-[16px] space-x-1">
                                                    <Bs.BsStarFill color='#fed700'/>
                                                    <Bs.BsStarFill color='#fed700'/>
                                                    <Bs.BsStarFill color='#fed700'/>
                                                    <Bs.BsStarFill color='#fed700'/>
                                                    <Bs.BsStar className='text-gray-300'/>
                                                </div>
                                        </div>
                                        <p className="text-gray-90">Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.</p>
                                        <div className="mb-2 space-x-2">
                                            <strong className='text-black/80 '>John Doe</strong>
                                            <span className="font-size-13 text-gray-23">- April 3, 2019</span>
                                        </div>
                                    </div>
                                    {/* end */}
                                </div>
                            </div>
    </div>
  )
}

export default Reviews