import React from 'react'
import ProductCard from './ProductCard'

type Props = {}

function CategoryGroupedItems({}: Props) {
  return (
    <div className="container">
              
                <div className="mb-6  px-[12%] py-24 w-screen">
                 
                    <div className="position-relative text-center z-index-2">
                        <div className="flex flex-row justify-between border-b border-color-1 md:border-y-0 ">
                            <h3 className="section-title mb-0 pb-2 font-size-22">Smartphones &amp; Tablets</h3>

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
                  
                    <div className="flex flex-row">
                        <div className="">
                            <div className="min-w-[200px] ">
                                <ul className="list-group list-group-flush flex-nowrap flex-xl-wrap flex-row flex-xl-column overflow-auto overflow-xl-visble mb-3 mb-xl-0">
                                    <li className="border-color-1 list-group-item border-lg-down-0 flex-shrink-0 flex-xl-shrink-1"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Featured Phones</a></li>
                                    <li className="border-color-1 list-group-item border-lg-down-0 flex-shrink-0 flex-xl-shrink-1"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Mobile Phones</a></li>
                                    <li className="border-color-1 list-group-item border-lg-down-0 flex-shrink-0 flex-xl-shrink-1"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Unlocked Phone</a></li>
                                    <li className="border-color-1 list-group-item border-lg-down-0 flex-shrink-0 flex-xl-shrink-1"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">4G LTE Smartphone</a></li>
                                    <li className="border-color-1 list-group-item border-lg-down-0 flex-shrink-0 flex-xl-shrink-1"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Tablet PCs</a></li>
                                    <li className="border-color-1 list-group-item border-lg-down-0 flex-shrink-0 flex-xl-shrink-1"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Tablet Accessories</a></li>
                                    <li className="border-color-1 list-group-item border-lg-down-0 flex-shrink-0 flex-xl-shrink-1"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Featured Tablets</a></li>
                                    <li className="border-color-1 list-group-item border-lg-down-0 flex-shrink-0 flex-xl-shrink-1"><a className="hover-on-bold py-1 px-3 text-gray-90 d-block" href="../shop/product-categories-7-column-full-width.html">Mobiles Accesories</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="min-w-[25%]">
                            <a href="../shop/shop.html" className=" ">
                                <img className=" h-[700px] border hover:border  hover:shadow-lg" src="https://transvelo.github.io/electro-html/2.0/assets/img/360X616/img1.jpg" alt="Image Description"/></a>
                        </div>
                        <div className="pl-0 ">
                           
                            <div className="space-y-1" id="Bpills-tabContent">
                                <div className="pt-2 active show" >
                                    <ul className="flex flex-row mb-0  space-x-2">
                                 
                                        <ProductCard/>
                                        <ProductCard/>
                                        <ProductCard/>
                                        <ProductCard/>
  
                                    </ul>
                                </div>
                               
                                <div className="tab-pane fade pt-2 active show" >
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
         
             
             
            </div>
  )
}

export default CategoryGroupedItems