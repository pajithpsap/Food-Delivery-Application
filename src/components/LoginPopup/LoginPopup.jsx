import React, { useState } from 'react'
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up");
    return (
        <div className='login-popup absolute z-[1] size-[100%] bg-[#00000090] grid'>
            <form className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] flex flex-col gap-[25px] bg-white py-[25px] px-[30px] rounded-[8px] text-[14px] duration-300 animate-fadein">
                <div className="login-popup-title flex justify-between items-center text-black">
                    <h2 className='font-medium text-lg'>{currState}</h2>
                    <img className='w-[16px] cursor-pointer' src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} />
                </div>
                <div className="login-popup-ip flex flex-col gap-[20px]">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required className='outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]'/>}
                    <input type="email" placeholder='Your email' required className='outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]'/>
                    <input type="password" placeholder='Password' required className='outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]'/>
                </div>
                <button className='border-none p-[10px] text-white rounded-[4px] bg-[tomato] text-[15px] cursor-pointer'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition flex items-start gap-[8px] mt-[-15px]">
                    <input type="checkbox" required className='mt-[5px]'/>
                    <p >By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ? <p>Create a new account? <span className='text-[tomato] font-medium cursor-pointer' onClick={() => setCurrState("Sign Up")}>Click Here</span></p> : <p>Already have an account? <span className='text-[tomato] font-medium cursor-pointer' onClick={() => setCurrState("Login")}>Login here</span></p>}


            </form>
        </div>
    )
}

export default LoginPopup