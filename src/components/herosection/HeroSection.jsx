import React from 'react';
// import men from '../../images/men.png'
const HeroSection = () => {
  return (
      <section className='px-10 grid grid-cols-1 sm:grid-cols-2 pt-3 '>
          <div className='w-full h-full sm:col-span-1  flex flex-col justify-center'>
            <p className='text-base  text-current'>New Collection</p>
            <h2 className='text-3xl mt-4 mb-2 sm:text-3xl leading-none md:text-4xl lg:text-5xl 2xl:text-6xl'>Style For Every <br/> Adventure</h2>
            <p className='mb-3 text-sm sm:text-basetext-text-gray'>Stay confortable and stylish when adventuring and stylish when adventuring and stylish when adventuring and stylish when adventuring and stylish when adventuring</p>
            <button className='mb-5 sm:mb-0 px-8 py-3 bg-current text-white rounded-sm w-1/2 sm:text-sm sm:py-2 sm:px-4'>Shop Now</button>
          </div>
          <div className='md:pr-10 sm:col-span-1 '>
              <img src='https://cdn.vox-cdn.com/thumbor/o-W1VkHt0dIxOmKuolWPSF3Xh8A=/0x0:7999x4000/1570x883/filters:focal(3361x1361:4639x2639):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69333291/GettyImages_1043605040.0.jpg' alt='MenImage' className=' w-full h-full rounded-md shadow-lg' />
          </div>
      </section>
  )
};

export default HeroSection;
