import React from 'react'
import * as Bs from 'react-icons/bs'
import * as Bi from 'react-icons/bi'
import * as Md from 'react-icons/md'
import ProductDetailsTab from '../../components/ProductDetails/ProductDetailsTab'
import TopCategoryWeek from '../../components/shared/TopCategoryWeek'

type Props = {}

function ProductDetails({}: Props) {
  return (
    <>

    <div className="px-[12%] py-16">
                    <div className="grid grid-cols-[40%,60%] gap-12 ">
                        <div className="flex flex-col ">
                            <div className="">
                                <div className="" >
                                    <img className="img-fluid" src="https://transvelo.github.io/electro-html/2.0/assets/img/720X660/img1.jpg" alt="Image Description"/>
                                </div>   
                            </div>

                            <div id="sliderSyncingNav" className="js-slick-carousel u-slick mb-2 slick-initialized slick-slider" >
                                <div className="js-prev d-none d-lg-inline-block u-slick__arrow-classNameic u-slick__arrow-centered--y rounded-circle fas fa-arrow-left u-slick__arrow-classNameic-inner u-slick__arrow-classNameic-inner--left ml-lg-2 ml-xl-4 slick-arrow" ></div>
                                <div className="slick-list draggable">
                                    <div className="flex flex-row mb-3 space-x-3 ">

                                        {/* start here  */}
                                        
                                    <div className="group w-[90px] border-2 relative cursor-pointer">
                                        <a className="">
                                                <img className="" src="https://transvelo.github.io/electro-html/2.0/assets/img/720X660/img2.jpg" alt="Image Description"/>

                                            </a>                    
                                    </div>
                                    <div className="group w-[90px] border-2 relative cursor-pointer">
                                        <a className="">
                                                <img className="" src="https://transvelo.github.io/electro-html/2.0/assets/img/720X660/img2.jpg" alt="Image Description"/>

                                            </a>                    
                                    </div>
                                    <div className="group w-[90px] border-2 relative cursor-pointer">
                                        <a className="">
                                                <img className="" src="https://transvelo.github.io/electro-html/2.0/assets/img/720X660/img2.jpg" alt="Image Description"/>

                                            </a>                    
                                    </div>
                                    <div className="group w-[90px] border-2 relative cursor-pointer">
                                        <a className="">
                                                <img className="" src="https://transvelo.github.io/electro-html/2.0/assets/img/720X660/img2.jpg" alt="Image Description"/>

                                            </a>                    
                                    </div>
                                    <div className="group w-[90px] border-2 relative cursor-pointer">
                                        <a className="">
                                                <img className="" src="https://transvelo.github.io/electro-html/2.0/assets/img/720X660/img2.jpg" alt="Image Description"/>

                                            </a>                    
                                    </div>

                                    {/* end here */}






                               </div>
                               </div>
                               </div>

                            
                        </div>
                        <div className="">
                            <div className="mb-2 text-gray-500">
                                <div className="border-b mb-3  pb-3 space-y-5">
                                    <a href="#" className="text-[15px] text-gray-500 font-thin">Headphones</a>
                                    <h2 className="mb-0 pb-2 text-3xl text-black/70 font-light">Ultra Wireless S50 Headphones S50 with Bluetooth</h2>
                                    <div className="mb-2">
                                        <div  className="flex flex-row items-center space-x-2">
                                            <div className="flex flex-row items-center text-[18px] space-x-1">
                                                <Bs.BsStarFill color='#fed700'/>
                                                <Bs.BsStarFill color='#fed700'/>
                                                <Bs.BsStarFill color='#fed700'/>
                                                <Bs.BsStarFill color='#fed700'/>
                                                <Bs.BsStar className='text-gray-300'/>
                                            </div>
                                            <span className="text-[15px] text-gray-500 ">(3 customer reviews)</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row  items-center">
                                        <a href="#" className="max-width-150 ml-n2 mb-2 mb-md-0 d-block">
                                            <img className="w-[90px]" src="https://transvelo.github.io/electro-html/2.0/assets/img/720X660/img1.jpg" alt="Image Description"/></a>
                                        <div className="ml-3 text-[16px] text-gray-500 ">Availability: <span className="text-[#4daa4d] font-bold">26 in stock</span>
                                        </div>
                                    </div>
                                </div>
                                {/* whish list */}
                                <div className=" mb-4">
                                    <a href="" className="text-gray-400 font-size-13 flex fex-row space-x-2 items-center hover:text-black "><Bs.BsHeart size={20} /> <span>Wishlist</span> </a>
                                   
                                </div>
                                <div className="mb-4">
                                    <ul className="list-disc font-thin space-y-1 pl-3 ml-1">
                                        <li>4.5 inch HD Touch Screen (1280 x 720)</li>
                                        <li>Android 4.4 KitKat OS</li>
                                        <li>1.4 GHz Quad Core™ Processor</li>
                                        <li>20 MP Electro and 28 megapixel CMOS rear camera</li>
                                    </ul>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

                                    <p className='my-10'><span className='font-bold text-gray-700 '>SKU</span>:   FW511948218</p>
                                </div>

                                <div className="mb-4">
                                    <div className="flex flex-row items-baseline ">
                                        <p className="text-5xl text-black/60">$1,999.00</p>
                                        <del className="text-xl ml-2 font-medium text-gray-500">$2,299.00</del>
                                    </div>
                                </div>
                                <div className="border-y py-4 mb-4">
                                    <div className="flex flex-row items-center">
                                        <h6 className="font-size-14 mb-0">Color</h6>
                                        
                                        <div className=" mx-3">
                                            <select className=" bg-white pr-2 hover:bg-[#77838f] border  hover:text-white rounded-full text-base mb-3 font-normal px-8 min-w-[150px] py-3 outline-none" data-style=" bg-white font-weight-normal py-2 border px-1" >
                                            <option value="one" className='bg-white text-gray-600 ' selected>White with Gold</option>
                                            <option value="one" className='bg-white text-gray-600' selected>White with Red</option>
                                            <option value="one" className='bg-white text-gray-600' selected>White with Blue</option>
                                            <option value="one" className='bg-white text-gray-600' selected>White with Pink</option>
                                            
                                        </select>
                                        
                                           </div>
                                       
                                    </div>
                                </div>
                                
                                    <div className="">
                                        <h6 className="font-size-14 mb-2">Quantity</h6>
                           
                                       <div className="flex flex-row space-x-6">
                                        <div className="border rounded-full py-2 w-[170px] px-4  text-[#333e48]">
                                                <div className="justify-between items-center flex flex-row">
                                                                
                                                        <input className=" outline-none w-full"  type="number" value={1} />
                                                                
                                                    <div className="flex flex-row space-x-1">
                                                        <div className="rounded-full hover:bg-[#333e48] hover:text-white p-2 cursor-pointer" >
                                                            <Bi.BiMinus size={16}/>
                                                        </div>
                                                        <div className="rounded-full hover:bg-[#333e48] hover:text-white p-2 cursor-pointer" >
                                                            <Bi.BiPlus size={16}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <div className="">
                                                <div className="bg-[#fed700] hover:bg-[#333e48] cursor-pointer min-w-[150px] flex-row space-x-2 flex justify-center items-center py-3 px-10 transition translate-y-1 hover:scale-110 rounded-3xl text-white font-semibold">
                                                    <div>
                                                        <Md.MdOutlineAddShoppingCart size={24} color='white'/>
                                                    </div>
                                                    <div>
                                                            <i className=""></i> Add to Cart</div>
                                                </div>
                                        </div>
                                    </div>
                                </div>               
                            </div>
                        </div>
                    </div>
                    <ProductDetailsTab/>
                    
    </div>
    <TopCategoryWeek/>
    </>
  )
}

export default ProductDetails