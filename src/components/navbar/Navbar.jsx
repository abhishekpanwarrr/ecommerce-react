import React,{useState} from 'react';
import {RiMenu4Fill,RiCloseFill } from 'react-icons/ri'
import logo from '../../images/logo1.png'
const Navbar = () => {
  const [show,setShow] = useState(false)
  return (
      <div className='bg-midnight w-full h-12 flex justify-between px-10 items-center  sticky top-0 z-10'>
          <img src={logo} className='w-12' alt='LogoImage' />
          <RiMenu4Fill size={32} onClick={()=> setShow(show => !show)} className='cursor-pointer text-button' />
            <div className={`items-center h-[100vh] w-[50vw] bg-midnight absolute ${show ? 'right-0' : 'hidden'} top-0 text-center md:w-[30vw] space-y-6 pt-2 flex flex-col`}>
            <RiCloseFill size={32} onClick={()=> setShow(show => !show)} className=' self-end mr-10 my-2 cursor-pointer text-button' />
            <ul className=' w-full text-white z-20'>
              <li className='hover:bg-current max-w-[90%] m-auto transition-all ease-in-out rounded-md py-2 md:py-4 cursor-pointer '>Home</li>
              <li className='hover:bg-current max-w-[90%] m-auto transition-all ease-in-out rounded-md py-2 md:py-4 cursor-pointer '>Catgories</li>
              <li className='hover:bg-current max-w-[90%] m-auto transition-all ease-in-out rounded-md py-2 md:py-4 cursor-pointer '>Gendre</li>
              <li className='hover:bg-current max-w-[90%] m-auto transition-all ease-in-out rounded-md py-2 md:py-4 cursor-pointer '>Products</li>
              <li className='hover:bg-current max-w-[90%] m-auto transition-all ease-in-out rounded-md py-2 md:py-4 cursor-pointer '>About Us</li>
              <li className='text-text-color hover:bg-current max-w-[90%] m-auto transition-all ease-in-out hover:text-white rounded-md md:py-4 cursor-pointer mb-2 py-2 '>Sign Up</li>
              <li className='bg-current px-6 py-3 text-base rounded-sm cursor-pointer w-[90%] m-auto '>Login</li>
            </ul>
            </div>
      </div>
  )
};

export default Navbar;
