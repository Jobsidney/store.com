import React from 'react'
import * as Md from 'react-icons/md'
import * as Bs from 'react-icons/bs'
type Props = {}

function BigCard2({}: Props) {
  return (
        <div className=" bg-white  hover:shadow-2xl p-3 min-w-[30%] h-[700px]">
            <div className="product-item__body d-flex flex-column">
                <div className="mb-1">
                    <div className="mb-2">
                        <a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a>
                    </div>
                    <h5 className="mb-0 product-item__title">
                        <a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a>
                    </h5>
                </div>
                <div className="mb-1 min-h-[450px]">
                    <a href="../shop/product-categories-7-column-full-width.html" className="d-block text-center my-4 mt-lg-0 mb-xl-5 mb-lg-0 mt-xl-0 mb-xl-0 mt-wd-0 mb-wd-3">
                        <img className="w-full" src="https://transvelo.github.io/electro-html/2.0/assets/img/564X520/img2.jpg" alt="Image Description"/></a>
                   
                    <div className="flex flex-row mb-3 space-x-2">
                    <div className="group w-[70px] border-2 relative cursor-pointer">
                          <a className="">
                                <img className="" src="https://transvelo.github.io/electro-html/2.0/assets/img/564X520/img2.jpg" alt="Image Description"/>

                            </a>
                            <div className="invisible group-hover:visible items-center cursor-pointer flex-col flex justify-center  absolute top-0 left-0 right-0 bottom-0">
                                <div className="  p-2 bg-[#fed700] rounded-full w-fit ">
                                    <Md.MdAdd size={18} color='white'/>
                                </div>
                            </div>
                                                         
                        </div>

                        <div className="group w-[70px] border-2 relative cursor-pointer">
                          <a className="">
                                <img className="" src="https://transvelo.github.io/electro-html/2.0/assets/img/564X520/img2.jpg" alt="Image Description"/>

                            </a>
                            <div className="invisible group-hover:visible items-center cursor-pointer flex-col flex justify-center  absolute top-0 left-0 right-0 bottom-0">
                                <div className="  p-2 bg-[#fed700] rounded-full w-fit ">
                                    <Md.MdAdd size={18} color='white'/>
                                </div>
                            </div>
                                                         
                        </div>

                        <div className="group w-[70px] border-2 relative cursor-pointer">
                          <a className="">
                                <img className="" src="https://transvelo.github.io/electro-html/2.0/assets/img/564X520/img2.jpg" alt="Image Description"/>

                            </a>
                            <div className="invisible group-hover:visible items-center cursor-pointer flex-col flex justify-center  absolute top-0 left-0 right-0 bottom-0">
                                <div className="  p-2 bg-[#fed700] rounded-full w-fit ">
                                    <Md.MdAdd size={18} color='white'/>
                                </div>
                            </div>
                                                         
                        </div>
                        <div className="col"></div>
                    </div>
                                                   
                </div>
                <div className="flex flex-row justify-between mb-2">
                    <div className="prodcut-price">
                        <div className="text-[#343f49] text-[1.5rem]">$685,00</div>
                    </div>
                    <div className="bg-[#fed700] cursor-pointer min-w-[150px] flex-row space-x-2 flex justify-center items-center p-2 transition translate-y-1 hover:scale-110 rounded-3xl text-white font-semibold">
                    <div>
                        <Md.MdOutlineAddShoppingCart size={24} color='white'/>
                    </div>
                        <div>
                            <i className=""></i> Add to Cart</div>
                    </div>
                </div>
            </div>
            <div className="product-item__footer">
             
                    <div className="hidden group-hover:block pt-2 flex-wrap">
                        <a href="" className="text-gray-400 font-size-13 flex fex-row space-x-2 items-center hover:text-black "><Bs.BsHeart size={20} /> <span>Wishlist</span> </a>
                    </div>
           
            </div>
        </div>

                               
                           
  )
}

export default BigCard2