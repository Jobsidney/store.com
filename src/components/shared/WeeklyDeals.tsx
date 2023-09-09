import React from 'react'
import ProductCardSolid from './ProductCardSolid'

type Props = {}

function WeeklyDeals({}: Props) {
  return (
    <div className="bg-gray-50  px-[12%] py-24 w-screen">
                <div className="container">
                    <div className="flex flex-row space-x-6">
                        <div className="w-[20%] lg:w-30% ">
                            <div className="min-w-[244px]">
                                <div className="border-b border-[#fed700] mb-3">
                                    <h3 className="text-gray-600 mb-0 pb-2 text-2xl font-light">Week Deals limited, Just now</h3>
                                </div>
                                <div className="mb-3 mb-md-2 text-center text-md-left">
                                    <h1 className="text-9xl font-medium mb-2 text-lh-1">%</h1>
                                    <h6 className="text-gray-2 mb-2">Hurry Up! Offer ends in:</h6>
                                    <div className="flex flex-row mx-2 justify-content-center " >
                                        <div className="text-lh-1 px-2 text-center">
                                            <div className="bg-white rounded-md border-2 border-[#fed700] py-2 px-2 min-width-46">
                                                <div className="text-gray-800 font-medium text-2xl mb-1">
                                                    <span className="js-cd-hours">00</span>
                                                </div>
                                                <div className="text-gray-600 text-sm text-center">HOURS</div>
                                            </div>
                                        </div>
                                        <div className="text-lh-1 px-2 text-center">
                                        <div className="bg-white rounded-md border-2 border-yellow-400 py-2 px-2 min-width-46">
                                                <div className="text-gray-2 font-size-20 mb-2">
                                                    <span className="js-cd-minutes">00</span>
                                                </div>
                                                <div className="text-gray-2 font-size-8 text-center">MINS</div>
                                            </div>
                                        </div>
                                        <div className="text-lh-1 px-2 text-center">
                                            <div className="bg-white rounded-md border-2 border-yellow-400 py-2 px-2 min-width-46">
                                                <div className="text-gray-2 font-size-20 mb-2">
                                                    <span className="js-cd-seconds">00</span>
                                                </div>
                                                <div className="text-gray-2 font-size-8 text-center">SECS</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" w-[80%] lg:w-[85%]">
                            <div className="flex flex-row space-x-4 pt-2 px-1 w-fill scrollbar-none scrollbar overflow-scroll" >
                                
                                            <ProductCardSolid/>
                                            <ProductCardSolid/>
                                            <ProductCardSolid/>
                                            <ProductCardSolid/>
                                            <ProductCardSolid/>
                                            <ProductCardSolid/>
                                            <ProductCardSolid/>
                                            <ProductCardSolid/>
                                            <ProductCardSolid/>
                                            <ProductCardSolid/>
                                            <ProductCardSolid/>
                                            <ProductCardSolid/>
                                  
                                    </div>
                                 
                                <ul className="js-pagination text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 pt-1"  role="tablist">
                                    <li className="" role="presentation"><span></span></li>
                                    <li role="presentation" className="slick-active-right slick-active slick-current"><span></span></li>
                                    <li role="presentation" className=""><span></span></li>
                                    <li role="presentation"><span></span></li>
                                    <li role="presentation"><span></span></li>
                                    </ul></div>
                                    </div>
                            </div>
                        
       
            </div>
  )
}

export default WeeklyDeals