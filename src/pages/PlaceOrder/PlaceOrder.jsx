import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const{getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order flex items-start justify-between gap-[50px] mt-[70px]'>
      <div className="left-place-order w-[100%] max-w-[max(30%,500px)]">

        <p className='title text-[30px] font-medium mb-[50px]'>Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>

        <input type="email" placeholder='email address' />
        <input type="text" placeholder='Street' />

        <div className="multi-fields">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='zip code' />
          <input type="text" placeholder='country' />
        </div>

        <input type="text" placeholder='phone' />

      </div>

      <div className="right w-[100%] max-w-[max(40%,500px)]">

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
          <button className='border-none text-white bg-[tomato] w-[max(15vw,200px)] py-[12px] mx-0 rounded-[4px] cursor-pointer mt-[30px]'>Proceed to payment</button>
        </div>

      </div>

    </form>
  )
}

export default PlaceOrder