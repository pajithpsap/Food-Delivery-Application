import React from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart mt-[100px]'>
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-12 text-[grey] text-[max(1vw,15px)] items-center">
          <p className='col-span-2'>Items</p>
          <p className='col-span-3'>Title</p>
          <p className='col-span-2'>Price</p>
          <p className='col-span-2'>Quantity</p>
          <p className='col-span-2'>Total</p>
          <p className='col-span-1'>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((items, index) => {
          if (cartItems[items._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item text-black grid grid-cols-12 text-[max(1vw,15px)] items-center my-[10px] mx-0'>
                  <div className='col-span-2'>
                    <img src={items.image} alt="" className='w-[50px]' />
                  </div>

                  <p className='col-span-3'>{items.name}</p>
                  <p className='col-span-2'>${items.price}</p>
                  <p className='col-span-2'>{cartItems[items._id]}</p>
                  <p className='col-span-2'>${items.price * cartItems[items._id]}</p>
                  <p onClick={()=>removeFromCart(items._id)} className='col-span-1 cursor-pointer'>x</p>
                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none'/>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom mt-[80px] flex justify-between gap-[max(12vw,20px)] 
      max-[750px]:flex-col-reverse
      ">
        <div className="cart-total flex-1 flex flex-col gap-[20px]">
          <h2>Cart Totals</h2>
          <div>
            <div className="total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px] mx-0'/>
            <div className="total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className='my-[10px] mx-0' />
            <div className="total-details flex justify-between text-[#555]">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className='border-none text-white bg-[tomato] w-[max(15vw,200px)] py-[12px] mx-0 rounded-[4px] cursor-pointer'>Proceed to checkout</button>
        </div>
        <div className="promo-code flex-1 max-[750px]:justify-start">
          <div>
            <p className='text-[#555] '>If you have a promo code, enter it here</p>
            <div className='promo-ip mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
              <input type="text" placeholder='promo code' className='bg-transparent border-none outline-none pl-[10px]'/>
              <button className='w-[max(10vw,150px)] py-[12px] px-[5px] bg-black border-none text-white rounded-[4px]'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart