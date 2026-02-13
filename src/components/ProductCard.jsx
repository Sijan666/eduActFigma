import React from 'react'
import Images from './Images'
import Button from './Button'

const ProductCard = ({className , productImg , productTitle ,productofferPrice , productPrice , productRating }) => {
    return (
        <div className={`hover:shadow-newMade3 border border-[#E4E4E4] ${className} rounded-2xl overflow-hidden duration-300 group relative text-center`}>
            <Images imgSrc={productImg} className="w-full" /> 
            <div className="absolute bottom-7.5 left-1/2 -translate-x-1/2 text-center mx-auto">
                <h4 className='text-primaryTwo font-semibold text-[20px] pb-4'>{productTitle}</h4>
                <div className="flex pb-4 gap-x-2 justify-center">
                    <h4 className='text-[#697585] font-semibold text-[20px]'>{productofferPrice}</h4>
                    <h4 className='text-[#697585] font-semibold text-[20px] line-through'>{productPrice}</h4>
                </div>
                <div className="pb-6">
                    <Images imgSrc={productRating} className={'mx-auto'}/>
                </div>
                <div className="btn mx-auto w-[149px]">
                    <Button btnText={'Add to Cart'} className={'px-8 py-[14.5px] text-[#697585] font-bold text-base bg-[#F6F6F6] rounded-md group-hover:bg-secondarys group-hover:text-white'}/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard