import React from 'react'

type Props = {}

function ProductDetails({}: Props) {
  return (
    <div className="px-[12%] py-16">
                    <div className="grid grid-cols-[40%,60%] gap-12 ">
                        <div className="flex flex-col items-center">
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
                        <div className="col-md-7 mb-md-6 mb-lg-0">
                            <div className="mb-2">
                                <div className="border-bottom mb-3 pb-md-1 pb-3">
                                    <a href="#" className="font-size-12 text-gray-5 mb-2 d-inline-block">Headphones</a>
                                    <h2 className="font-size-25 text-lh-1dot2">Ultra Wireless S50 Headphones S50 with Bluetooth</h2>
                                    <div className="mb-2">
                                        <a className="d-inline-flex align-items-center small font-size-15 text-lh-1" href="#">
                                            <div className="text-warning mr-2">
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="far fa-star text-muted"></small>
                                            </div>
                                            <span className="text-secondary font-size-13">(3 customer reviews)</span>
                                        </a>
                                    </div>
                                    <div className="d-md-flex align-items-center">
                                        <a href="#" className="max-width-150 ml-n2 mb-2 mb-md-0 d-block">
                                            <img className="w-[90px]" src="https://transvelo.github.io/electro-html/2.0/assets/img/720X660/img1.jpg" alt="Image Description"/></a>
                                        <div className="ml-md-3 text-gray-9 font-size-14">Availability: <span className="text-green font-weight-bold">26 in stock</span></div>
                                    </div>
                                </div>
                                <div className="flex-horizontal-center flex-wrap mb-4">
                                    <a href="#" className="text-gray-6 font-size-13 mr-2"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                    <a href="#" className="text-gray-6 font-size-13 ml-2"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                </div>
                                <div className="mb-2">
                                    <ul className="font-size-14 pl-3 ml-1 text-gray-110">
                                        <li>4.5 inch HD Touch Screen (1280 x 720)</li>
                                        <li>Android 4.4 KitKat OS</li>
                                        <li>1.4 GHz Quad Core™ Processor</li>
                                        <li>20 MP Electro and 28 megapixel CMOS rear camera</li>
                                    </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <p><strong>SKU</strong>: FW511948218</p>
                                <div className="mb-4">
                                    <div className="d-flex align-items-baseline">
                                        <ins className="font-size-36 text-decoration-none">$1,999.00</ins>
                                        <del className="font-size-20 ml-2 text-gray-6">$2,299.00</del>
                                    </div>
                                </div>
                                <div className="border-top border-bottom py-3 mb-4">
                                    <div className="d-flex align-items-center">
                                        <h6 className="font-size-14 mb-0">Color</h6>
                                        
                                        <div className="dropdown bootstrap-select js-select dropdown-select ml-3"><select className="js-select selectpicker dropdown-select ml-3" data-style="btn-sm bg-white font-weight-normal py-2 border" >
                                            <option value="one" selected>White with Gold</option>
                                            <option value="two">Red</option>
                                            <option value="three">Green</option>
                                            <option value="four">Blue</option>
                                        </select><button type="button" className="btn dropdown-toggle btn-sm bg-white font-weight-normal py-2 border" data-toggle="dropdown" role="button" title="Green" aria-expanded="false">
                                            <div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Green</div></div> </div></button>
                                            <div className="dropdown-menu" role="combobox" ><div className="inner show" role="listbox" aria-expanded="false" >
                                                <ul className="dropdown-menu inner show"><li className="selected active"><a role="option" className="dropdown-item selected active" aria-disabled="false" aria-selected="true">
                                                    <span className=" bs-ok-default check-mark"></span><span className="text">White with Gold</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false"  aria-selected="false"><span className=" bs-ok-default check-mark"></span><span className="text">Red</span></a></li><li className="selected active"><a role="option" className="dropdown-item selected active" aria-disabled="false"  aria-selected="true"><span className=" bs-ok-default check-mark"></span>
                                                    <span className="text">Green</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false"  aria-selected="false"><span className=" bs-ok-default check-mark"></span><span className="text">Blue</span></a></li></ul></div></div></div>
                                       
                                    </div>
                                </div>
                                <div className="d-md-flex align-items-end mb-3">
                                    <div className="max-width-150 mb-4 mb-md-0">
                                        <h6 className="font-size-14">Quantity</h6>
                           
                                        <div className="border rounded-pill py-2 px-3 border-color-1">
                                            <div className="js-quantity row align-items-center">
                                                <div className="col">
                                                    <input className="js-result form-control h-auto border-0 rounded p-0 shadow-none" type="text" value="1"/>
                                                </div>
                                                <div className="col-auto pr-1">
                                                    <a className="js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" href="javascript:;">
                                                        <small className="fas fa-minus btn-icon__inner"></small>
                                                    </a>
                                                    <a className="js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" href="javascript:;">
                                                        <small className="fas fa-plus btn-icon__inner"></small>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                     
                                    </div>
                                    <div className="ml-md-3">
                                        <a href="#" className="btn px-5 btn-primary-dark transition-3d-hover"><i className="ec ec-add-to-cart mr-2 font-size-20"></i> Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default ProductDetails