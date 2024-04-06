import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer-food text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]' id='footer'>
        <div className="footer-content max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-[35px] w-[100%] grid grid-cols-4">
            <div className="footer-content-left col-span-2 flex flex-col items-start gap-[20px]">
                <img src={assets.logo} alt="" />
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <div className="footer-social-icons flex gap-3">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center flex flex-col items-start gap-[20px]">
                <h2 className='font-medium text-white text-2xl'>COMPANY</h2>
                <ul className='cursor-pointer'>
                    <li className='mb-[10px]'>Home</li>
                    <li className='mb-[10px]'>About Us</li>
                    <li className='mb-[10px]'>Delivery</li>
                    <li className='mb-[10px]'>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right flex flex-col items-start gap-[20px]">
                <h2 className='font-medium text-white text-2xl'>GET IN TOUCH</h2>
                <ul>
                    <li>+1-22-333-4444</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-[100%] h-[2px] my-[20px] mx-0 bg-gray-50 border-none'/>
        <p className='copy-right-tomato max-[750px]:text-center'>Copyright 2024 © Tomato.com All Rights Reserved</p>
    </div>
  )
}

export default Footer