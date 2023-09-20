import React from 'react'
import * as Gi from 'react-icons/gi'
import * as Bi from 'react-icons/bi'
import * as Ri from 'react-icons/ri'
type Props = {}

function Footer({}: Props) {
  return (
    <div>

<div className="bg-[#fed700]  px-[12%] py-4">
               
                    <div className="flex flex-col md:flex-row items-center justify-between space-x-4">
                            <div className="flex flex-row items-center space-x-8 justify-between">
                                <div className="flex flex-row items-center">
                                    <Gi.GiPaperPlane  className='text-6xl text-black/60'/>
                                    <h2 className="font-size-20 mb-0 ml-3 text-2xl font-thin">Sign up to Newsletter</h2>
                                </div>
                                <div className="col my-4 my-md-0">
                                    <h5 className="font-size-15 ml-4 mb-0">...and receive <strong>$20 coupon for first shopping.</strong></h5>
                                </div>
                            </div>
                        
                    
                        
                            <form className='w-[50%]'>
                                <div className="flex flex-row justify-end">
                                    <input type="email" className="rounded-l-full outline-none px-6 form-control border-0 h-12 w-[70%]" name="email" id="subscribeSrEmail" placeholder="Email address" aria-label="Email address" aria-describedby="subscribeButton" required data-msg="Please enter a valid email address."/>
                                    <div className="input-group-append">
                                        <button type="submit" className="bg-[#333e48] outline-0 outline h-12 py-2 px-10 rounded-r-full text-white font-bold hover:shadow-lg" id="subscribeButton">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                  
                </div>
            </div>



            <div className="px-[12%] py-16  bg-gray-50">
                
                    <div className="grid grid-cols-[40%,60%]">
                        <div className="col-lg-5">
                            <div className="mb-6">
                                <a href="#" className="flex flex-row">
                                <div className='font-bold text-3xl'>Shop.com</div>
                                </a>
                            </div>
                            <div className="mb-4">
                                        <i className="ec ec-support text-primary font-size-56"></i>

                                    <div className="col pl-3">
                                        <div className=" font-light">Got questions? Call us 24/7!</div>
                                        <a href="tel:+80080018588" className="text-2xl text-gray-700">(800) 8001-8588, </a>
                                    </div>
                            </div>
                            <div className="mb-4">
                                <h6 className="mb-1 font-bold text-xl">Contact info</h6>
                                <address className="">
                                    17 Princess Road, London, Greater London NW1 8JR, UK
                                </address>
                            </div>
                            <div className="my-4 my-md-4">
                                <ul className="flex flex-row space-x-2">
                                    <li className=" bg-transparent hover:bg-black/60 rounded-full text-black/50 hover:text-white w-[50px] h-[50px] items-center justify-center flex ">
                                        <a className="" href="#">
                                            <Bi.BiLogoFacebook size={28} />
                                        </a>
                                    </li>
                                    <li className=" bg-transparent hover:bg-black/60 rounded-full text-black/50 hover:text-white w-[50px] h-[50px] items-center justify-center flex ">
                                        <a className="" href="#">
                                            <Bi.BiLogoGoogle size={28} />
                                        </a>
                                    </li>
                                    <li className=" bg-transparent hover:bg-black/60 rounded-full text-black/50 hover:text-white w-[50px] h-[50px] items-center justify-center flex ">
                                        <a className="" href="#">
                                            <Bi.BiLogoTwitter size={28} />
                                        </a>
                                    </li>
                                    <li className=" bg-transparent hover:bg-black/60 rounded-full text-black/50 hover:text-white w-[50px] h-[50px] items-center justify-center flex ">
                                        <a className="" href="#">
                                            <Bi.BiLogoGithub size={28} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-12 col-md mb-4 mb-md-0">
                                    <h6 className="mb-3 font-bold text-lg">Find it Fast</h6>
                              
                                    <ul className="space-y-2">
                                        <li><a className="text-gray-600 hover:text-black" href=".#">Laptops &amp; Computers</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".#">Cameras &amp; Photography</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".#">Smart Phones &amp; Tablets</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".#">Video Games &amp; Consoles</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".#">TV &amp; Audio</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".#">Gadgets</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".#">Car Electronic &amp; GPS</a></li>
                                    </ul>
                                
                                </div>

                                <div className="pt-4">
                              
                                    <ul className="space-y-2 mt-md-6">
                                        <li><a className="text-gray-600 hover:text-black" href=".#">Printers &amp; Ink</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".#">Software</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".#">Office Supplies</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".#">Computer Components</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".#">Accesories</a></li>
                                    </ul>
                                   
                                </div>

                                <div className="col-12 col-md mb-4 mb-md-0">
                                    <h6 className="mb-3 font-bold text-lg">Customer Care</h6>
                                   
                                    <ul className="space-y-2">
                                        <li><a className="text-gray-600 hover:text-black" href=".">My Account</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".">Order Tracking</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".">Wish List</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".">Customer Service</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".">Returns / Exchange</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".">FAQs</a></li>
                                        <li><a className="text-gray-600 hover:text-black" href=".">Product Support</a></li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
    
            </div>
            <div className="px-[12%] py-2 bg-black/20 justify-between flex flex-row items-center">
                        <div className="mb-3 mb-md-0">© <a href="#" className="font-weight-bold text-gray-90">Shop.com</a> - All rights Reserved</div>
                        <div className="flex flex-row space-x-2">
                            
                            <span className="d-inline-block bg-white border rounded p-1">
                                <img className="w-[40px]" src="https://transvelo.github.io/electro-html/2.0/assets/img/100X60/img1.jpg" alt="Image Description"/>
                            </span>
                            <span className="d-inline-block bg-white border rounded p-1">
                                <img className="w-[40px]" src="https://transvelo.github.io/electro-html/2.0/assets/img/100X60/img1.jpg" alt="Image Description"/>
                            </span>
                            <span className="d-inline-block bg-white border rounded p-1">
                                <img className="w-[40px]" src="https://transvelo.github.io/electro-html/2.0/assets/img/100X60/img1.jpg" alt="Image Description"/>
                            </span>
                            <span className="d-inline-block bg-white border rounded p-1">
                                <img className="w-[40px]" src="https://transvelo.github.io/electro-html/2.0/assets/img/100X60/img1.jpg" alt="Image Description"/>
                            </span>
                        </div>
                    </div>

    </div>
  )
}

export default Footer