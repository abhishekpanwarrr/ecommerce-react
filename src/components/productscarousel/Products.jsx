import React from 'react';

const Products = () => {
  return <div className='px-10 mt-10'>
      <div className=' mt-0 ml-auto mr-auto'>
            <h2 className='text-center text-lg uppercase font-semibold text-text-gray my-3'>Popular Products</h2>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
                <div className='shadow-lg px-2 py-3 rounded-md space-y-1 hover:transform hover:scale-105 duration-300 cursor-pointer'>
                    <img src='https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg' alt='PRoductImage' className='rounded  w-full object-cover max-h-full' />
                    <h3 className='font-semibold'>Water Bottle Machine</h3>
                    <p className='text-xs text-text-gray'>Men's shirt</p>
                    <p className='text-current'>$520</p>
                </div>
                <div className='shadow-lg px-2 py-3 rounded-md space-y-1 hover:transform hover:scale-105 duration-300'>
                    <img src='https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='PRoductImage' className='rounded  w-full object-cover max-h-full' />
                    <h3 className='font-semibold'>Water Bottle Machine</h3>
                    <p className='text-xs text-text-gray'>Men's shirt</p>
                    <p className='text-current'>$520</p>
                </div>
                <div className='shadow-lg px-2 py-3 rounded-md space-y-1 hover:transform hover:scale-105 duration-300'>
                    <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='PRoductImage' className='rounded w-full object-cover max-h-full' />
                    <h3 className='font-semibold'>Water Bottle Machine</h3>
                    <p className='text-xs text-text-gray'>Men's shirt</p>
                    <p className='text-current'>$520</p>
                </div>
                <div className='shadow-lg px-2 py-3 rounded-md space-y-1 hover:transform hover:scale-105 duration-300'>
                    <img src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='PRoductImage' className='rounded' />
                    <h3 className='font-semibold'>Water Bottle Machine</h3>
                    <p className='text-xs text-text-gray'>Men's shirt</p>
                    <p className='text-current'>$520</p>
                </div>
                <div className='shadow-lg px-2 py-3 rounded-md space-y-1 hover:transform hover:scale-105 duration-300'>
                    <img src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='PRoductImage' className='rounded' />
                    <h3 className='font-semibold'>Water Bottle Machine</h3>
                    <p className='text-xs text-text-gray'>Men's shirt</p>
                    <p className='text-current'>$520</p>
                </div>
                <div className='shadow-lg px-2 py-3 rounded-md space-y-1 hover:transform hover:scale-105 duration-300'>
                    <img src='https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt='PRoductImage' className='rounded' />
                    <h3 className='font-semibold'>Water Bottle Machine</h3>
                    <p className='text-xs text-text-gray'>Men's shirt</p>
                    <p className='text-current'>$520</p>
                </div>
                <div className='shadow-lg px-2 py-3 rounded-md space-y-1 hover:transform hover:scale-105 duration-300'>
                    <img src='https://images.unsplash.com/photo-1638913662584-731da41f5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='PRoductImage' className='rounded' />
                    <h3 className='font-semibold'>Water Bottle Machine</h3>
                    <p className='text-xs text-text-gray'>Men's shirt</p>
                    <p className='text-current'>$520</p>
                </div>
                <div className='shadow-lg px-2 py-3 rounded-md space-y-1 hover:transform hover:scale-105 duration-300'>
                    <img src='https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='PRoductImage' className='rounded' />
                    <h3 className='font-semibold'>Water Bottle Machine</h3>
                    <p className='text-xs text-text-gray'>Men's shirt</p>
                    <p className='text-current'>$520</p>
                </div>
            </div>
            <div className='text-center'>
                <button className='my-4 px-5 py-1 rounded-md border-2 border-current text-current hover:bg-current hover:text-white hover:ring-1 hover:ring-current hover:ring-offset-1'>See More </button>
            </div>
      </div>
  </div>
};

export default Products;
