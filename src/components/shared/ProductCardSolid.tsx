import React from 'react'
import * as Md from 'react-icons/md'
type Props = {}

function ProductCardSolid({}: Props) {
  return (
    <div className="  bg-white hover:border-transparent  w-[270px] min-w-[270px]  hover:shadow-2xl lg:px-4 p-3">
        <div className=" bg-white">
            <div className="mb-2">
                <a href="../shop/product-categories-7-column-full-width.html" className="text-[15px] text-gray-600 font-thin">Speakers</a>
            </div>
            <h5 className="mb-1 text-ellipsis h-[20px]">
                <a href="../shop/single-product-fullwidth.html" className="text-blue-600 font-bold text-ellipsis">Wireless Audio System Multiroom 360 degree Full base audio</a>
                </h5>
            <div className="mb-2">
                <a href="../shop/single-product-fullwidth.html" className="d-block text-center">
                    <img className="img-fluid" src="https://transvelo.github.io/electro-html/2.0/assets/img/212X200/img2.jpg" alt="Image Description"/>
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
        <div className="product-item__footer">
            <div className="border-t pt-2 flex-center-between flex-wrap">
                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
            </div>
        </div>
    </div>
  )
}

export default ProductCardSolid