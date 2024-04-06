import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download mx-auto my-auto text-[max(3vw,20px)] text-center font-medium' id='app-download'>
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className="app-download-platforms flex justify-center gap-[max(2vw,10px)] mt-[40px]">
            <img src={assets.play_store} alt="" className='w-[max(30vw,120px)] max-w-44 duration-500 cursor-pointer hover:scale-105'/>
            <img src={assets.app_store} alt="" className='w-[max(30vw,120px)] max-w-44 duration-500 cursor-pointer hover:scale-105'/>
        </div>
    </div>
  )
}

export default AppDownload