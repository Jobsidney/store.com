import React from 'react'
import * as Md from 'react-icons/md'
import * as Bs from 'react-icons/bs'
type Props = {}

const ProductCard = (props: Props) => {
  return (
    <div className='group h-[300px]'>
    <div className="w-full border-r  border-black/10 hover:border-transparent  hover:shadow-2xl lg:px-4 p-3 group-hover:divide-y-2 group-hover:z-50 ">
        <div className=" ">
            <div className="mb-2">
                <a href="../shop/product-categories-7-column-full-width.html" className="text-[15px] text-gray-600 font-thin">Speakers</a>
            </div>
            <h5 className="mb-1 text-ellipsis h-[20px]">
                <a href="../shop/single-product-fullwidth.html" className="text-blue-600 font-bold text-ellipsis">Wireless Audio System Multiroom 360 degree Full base audio</a>
                </h5>
            <div className="mb-2">
                <a href="../shop/single-product-fullwidth.html" className="d-block text-center">
                    <img className="img-fluid" src="https://transvelo.github.io/electro-html/2.0/assets/img/212X200/img1.jpg" alt="Image Description"/>
                </a>
            </div>
            <div className="flex flex-row justify-between mb-1 items-center">
                <div className="prodcut-price">
                    <div className="text-black/90 text-[1.25038rem] font-semibold">$685,00</div>
                </div>
                <div className="items-center p-2 bg-[#fed700] rounded-full hover:animate-pulse">
                    <a href="../shop/single-product-fullwidth.html" className="">
                        <Md.MdOutlineAddShoppingCart size={18} color='white'/>
                    </a>
                </div>
            </div>
        </div>
        <div className="">
            <div className="hidden group-hover:block pt-2 flex-wrap">
               
                <a href="" className="text-gray-400 font-size-13 flex fex-row space-x-2 items-center hover:text-black "><Bs.BsHeart size={20} /> <span>Wishlist</span> </a>
            </div>
        </div>
    </div></div>
  )
}

export default ProductCard