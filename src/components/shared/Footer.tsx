import React from 'react'
import * as Pi from 'react-icons/pi'
type Props = {}

function Footer({}: Props) {
  return (
    <div>

<div className="bg-[#fed700]  px-[12%] py-4">
               
                    <div className="flex flex-col md:flex-row items-center justify-between space-x-4">
                            <div className="flex flex-row items-center space-x-8 justify-between">
                                <div className="flex flex-row items-center">
                                    <Pi.PiTelegramLogoDuotone  className='text-6xl text-black/80'/>
                                    <h2 className="font-size-20 mb-0 ml-3 text-2xl font-thin">Sign up to Newsletter</h2>
                                </div>
                                <div className="col my-4 my-md-0">
                                    <h5 className="font-size-15 ml-4 mb-0">...and receive <strong>$20 coupon for first shopping.</strong></h5>
                                </div>
                            </div>
                        
                    
                        
                            <form className='w-[50%]'>
                                <div className="flex flex-row justify-end">
                                    <input type="email" className="rounded-l-full px-6 form-control border-0 h-12 w-[70%]" name="email" id="subscribeSrEmail" placeholder="Email address" aria-label="Email address" aria-describedby="subscribeButton" required data-msg="Please enter a valid email address."/>
                                    <div className="input-group-append">
                                        <button type="submit" className="bg-[#333e48] outline-0 outline h-12 py-2 px-10 rounded-r-full text-white font-bold hover:shadow-lg" id="subscribeButton">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                  
                </div>
            </div>



            <div className="pt-8 pb-4 bg-gray-50">
                <div className="container mt-1">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="mb-6">
                                <a href="#" className="d-inline-block">
                                    <svg version="1.1" x="0px" y="0px" width="156px" height="37px" viewBox="0 0 175.748 42.52" enable-background="new 0 0 175.748 42.52">
                                        <ellipse fill-rule="evenodd" clip-rule="evenodd" fill="#FDD700" cx="170.05" cy="36.341" rx="5.32" ry="5.367"></ellipse>

                                    </svg>
                                </a>
                            </div>
                            <div className="mb-4">
                                <div className="row no-gutters">
                                    <div className="col-auto">
                                        <i className="ec ec-support text-primary font-size-56"></i>
                                    </div>
                                    <div className="col pl-3">
                                        <div className="font-size-13 font-weight-light">Got questions? Call us 24/7!</div>
                                        <a href="tel:+80080018588" className="font-size-20 text-gray-90">(800) 8001-8588, </a><a href="tel:+0600874548" className="font-size-20 text-gray-90">(0600) 874 548</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h6 className="mb-1 font-weight-bold">Contact info</h6>
                                <address className="">
                                    17 Princess Road, London, Greater London NW1 8JR, UK
                                </address>
                            </div>
                            <div className="my-4 my-md-4">
                                <ul className="list-inline mb-0 opacity-7">
                                    <li className="list-inline-item mr-0">
                                        <a className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" href="#">
                                            <span className="fab fa-facebook-f btn-icon__inner"></span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                        <a className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" href="#">
                                            <span className="fab fa-google btn-icon__inner"></span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                        <a className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" href="#">
                                            <span className="fab fa-twitter btn-icon__inner"></span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                        <a className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" href="#">
                                            <span className="fab fa-github btn-icon__inner"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-12 col-md mb-4 mb-md-0">
                                    <h6 className="mb-3 font-weight-bold">Find it Fast</h6>
                              
                                    <ul className="list-group list-group-flush list-group-borderless mb-0 list-group-transparent">
                                        <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Laptops &amp; Computers</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Cameras &amp; Photography</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Smart Phones &amp; Tablets</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Video Games &amp; Consoles</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">TV &amp; Audio</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Gadgets</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Car Electronic &amp; GPS</a></li>
                                    </ul>
                                
                                </div>

                                <div className="col-12 col-md mb-4 mb-md-0">
                              
                                    <ul className="list-group list-group-flush list-group-borderless mb-0 list-group-transparent mt-md-6">
                                        <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Printers &amp; Ink</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Software</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Office Supplies</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Computer Components</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Accesories</a></li>
                                    </ul>
                                   
                                </div>

                                <div className="col-12 col-md mb-4 mb-md-0">
                                    <h6 className="mb-3 font-weight-bold">Customer Care</h6>
                                   
                                    <ul className="list-group list-group-flush list-group-borderless mb-0 list-group-transparent">
                                        <li><a className="list-group-item list-group-item-action" href="../shop/my-account.html">My Account</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../shop/track-your-order.html">Order Tracking</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../shop/wishlist.html">Wish List</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../home/terms-and-conditions.html">Customer Service</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../home/terms-and-conditions.html">Returns / Exchange</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../home/faq.html">FAQs</a></li>
                                        <li><a className="list-group-item list-group-item-action" href="../home/terms-and-conditions.html">Product Support</a></li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Footer