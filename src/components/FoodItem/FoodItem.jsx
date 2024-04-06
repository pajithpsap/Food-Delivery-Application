import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {


    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    return (
        <div className='food-item w-[100%] rounded-[15px] shadow-lg duration-300 animate-fadein'>
            <div className="foot-item-img-container relative ">
                <img src={image} alt="" className='food-item-img w-[100%] rounded-lg' />
                {
                    !cartItems[id] ? <img src={assets.add_icon_white} className='add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={() => addToCart(id)} />
                        : <div className='counter-food absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" className='w-[30px]' />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" className='w-[30px]' />
                        </div>
                }
            </div>
            <div className="food-item-ino p-[20px]">
                <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
                    <p className='text-[20px] font-medium'>{name}</p>
                    <img src={assets.rating_starts} alt="" className='w-[70px]' />
                </div>
                <p className='food-item-desc text-[#676767] text-[12px]'>{description}</p>
                <p className='food-item-price text-[tomato] text-[22px] font-medium m-[10px 0px]'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem