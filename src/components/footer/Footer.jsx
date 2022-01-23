import React from 'react';
import logo from '../../images/logo1.png'
const Footer = () => {
  return <div className='px-10 py-5'>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 gap-y-4 w-full items-start'>
            <ul>
                <li><img src={logo} className='w-12' alt='LogoImage' /></li>
                <li><p className='text-sm'>You can use any value defined in your opacity scale, or use arbitrary values if you need to deviate from your design tokens.</p></li>
            </ul>
            <ul className='space-y-2 text-sm ml-10 sm:ml-0'>
                <li><h3 className='font-bold text-lg'>#Product</h3></li>
                <li className='cursor-pointer'>Home</li>
                <li>Contact</li>
                <li>Lower</li>
                <li>Show</li>
            </ul>
            <ul className=''>
            <li><h3 className='font-bold text-lg'>#Product</h3></li>
                <li>Home</li>
                <li>Contact</li>
                <li>Lower</li>
                <li>Show</li>
            </ul>
            <ul className='ml-10 sm:ml-0'>
            <li><h3 className='font-bold text-lg'>#Product</h3></li>
                <li>Home</li>
                <li>Contact</li>
                <li>Lower</li>
                <li>Show</li>
            </ul>

      </div>
  </div>;
};

export default Footer;
