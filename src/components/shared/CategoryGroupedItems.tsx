import React from 'react'
import ProductCard from './ProductCard'
import BigCard1 from './BigCard1'
import BigCard2 from './BigCard2'

type Props = {}

function CategoryGroupedItems({}: Props) {
  return (
              
                <div className="mb-6  px-[12%] py-24 w-[100vw]">
                 
                    <div className="">
                        <div className="flex flex-row justify-between border-b-2  border-[#dedfe0] ">
                            <div className=''>
                                <h3 className=" mb-0 pb-2 text-2xl">Smartphones &amp; Tablets</h3>
                                <div className='border-b-[3px] border-[#fed700] w-[114px]'></div>
                            </div>

                            <ul className="mb-2 pt-3 lg:pt-0 items-center flex flex-row text-md ">
                                <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                                    <a className="nav-link rounded-pill active" id="Bpills-one-example1-tab" data-toggle="pill" href="#Bpills-one-example1" role="tab" aria-controls="Bpills-one-example1" aria-selected="true">Bestsellers</a>
                                </li>
                                <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                                    <a className="nav-link rounded-pill" id="Bpills-two-example1-tab" data-toggle="pill" href="#Bpills-two-example1" role="tab" aria-controls="Bpills-two-example1" aria-selected="false">17 inch</a>
                                </li>
                                <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                                    <a className="nav-link rounded-pill" id="Bpills-three-example1-tab" data-toggle="pill" href="#Bpills-three-example1" role="tab" aria-controls="Bpills-three-example1" aria-selected="false">15 inch</a>
                                </li>
                                <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                                    <a className="nav-link rounded-pill" id="Bpills-four-example1-tab" data-toggle="pill" href="#Bpills-four-example1" role="tab" aria-controls="Bpills-four-example1" aria-selected="false">12.3 inch</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                  
                    <div className="flex flex-row space-x-6">
                        <div className="">
                            <div className="min-w-[200px] ">
                                <ul className="flex flex-col  mb-3 pt-8 divide-y-2 ">
                                    <li className=" py-2 text-[#333e48] hover:text-[black] hover:font-bold"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Featured Phones</a></li>
                                    <li className=" py-2 text-[#333e48] hover:text-[black] hover:font-bold"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Mobile Phones</a></li>
                                    <li className=" py-2 text-[#333e48] hover:text-[black] hover:font-bold"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Unlocked Phone</a></li>
                                    <li className=" py-2 text-[#333e48] hover:text-[black] hover:font-bold"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">4G LTE Smartphone</a></li>
                                    <li className=" py-2 text-[#333e48] hover:text-[black] hover:font-bold"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Tablet PCs</a></li>
                                    <li className=" py-2 text-[#333e48] hover:text-[black] hover:font-bold"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Tablet Accessories</a></li>
                                    <li className=" py-2 text-[#333e48] hover:text-[black] hover:font-bold"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Featured Tablets</a></li>
                                    <li className=" py-2 text-[#333e48] hover:text-[black] hover:font-bold"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Mobiles Accesories</a></li>
                                </ul>
                            </div>
                        </div>
                        <BigCard2/>
                        <div className="">
                           
                            <div className="space-y-4 pt-4" >
                                <div className=" " >
                                    <ul className="flex flex-row mb-0  space-x-2">
                                 
                                       
                                        <ProductCard/>
                                        <ProductCard/>
                                        <ProductCard/>
                                        <ProductCard/>
  
                                    </ul>
                                </div>
                               
                                <div className=" " >
                                    <ul className="flex flex-row mb-0 space-x-2">
                                 
                                        
                                    
                                        <ProductCard/>
                                        <ProductCard/>
                                        <ProductCard/>
                                        <ProductCard/>
  
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default CategoryGroupedItems