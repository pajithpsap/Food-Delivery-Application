import React from 'react'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className=' max-lg:h-[38vw] header h-[34vw] my-[30px] mx-auto bg-[url(././assets/header_img.png)] bg-no-repeat bg-contain relative'>
        <div className="header-content max-md:max-w-[65%] max-lg:max-w-[45%] absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadein ">
            <h2 className='font-medium text-white text-[max(4.5vw,22px)]'>Order your favourite food here</h2>
            <p className='max-md:hidden text-white text-[1vw]'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <button className='max-md:px-[4vw] max-md:py-[2vw] border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw, 13px)] rounded-[50px]'>View Menu</button>
        </div>
    </div>
  )
}

export default Header