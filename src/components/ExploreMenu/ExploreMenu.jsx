import React from 'react'
import { assets, menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
    return (
        <div className='explore-menu max-lg:max-w-[100%] max-lg:text-[14px] flex flex-col gap-5' id='explore-menu'>
            <h1 className='text-[#262626] font-medium text-4xl'>Explore our menu</h1>
            <p className='explore-menu-text'>Choose from a diverse meunu featuring a delectable array of dishes. Our mission is to serve</p>
            <div className="explore-menu-list flex justify-between
             items-center gap-[30px] text-center m-[20px 0px] overflow-x-scroll hide-scrollbar" >
                {
                    menu_list.map((item, index) => {
                        return (
                            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className=''>

                                <img src={item.menu_image} alt="" className={category===item.menu_name?'w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] duration-200 border-[4px] border-solid border-red-600 p-[2px]':""}/>

                                <p className='mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr className='m-[10px 0px] h-[2px] bg-[#e2e2e2] border-none'/>
        </div>
    )
}

export default ExploreMenu