import React from 'react';

const TwoDiv = () => {
  return <div className='px-10 grid sm:grid-cols-2 my-8 gap-2'>
      <div className='h-[280px] sm:h-[450px] group bg-no-repeat bg-cover bg-center overflow-hidden' style={{backgroundImage:`url('https://www.thestatesman.com/wp-content/uploads/2022/01/Damensch0978-min.jpg')`}}>
          <div className='hidden group-hover:flex w-full h-full bg-text-gray/70 p-2  flex-col justify-center items-center'>
            <h3 className='text-3xl text-white'>MAN</h3>
            <p className='text-white px-2'>This is the start of a collection of technical screening questions for</p>
            <button className='border-2 border-white text-center px-5 py-2 text-white rounded'>Learn More</button>
          </div>
      </div>
      <div className='h-[280px] sm:h-[450px] group bg-no-repeat bg-cover' style={{backgroundImage:`url('https://static.independent.co.uk/2021/08/16/17/Petite%20clothing%20brands%20copy.jpg?width=990&auto=webp&quality=75&crop=982:726,smart')`}}>
      <div className='hidden group-hover:flex w-full h-full  bg-text-gray/70 p-2 flex-col justify-center items-center'>
            <h3 className='text-3xl text-white'>WOMAN</h3>
            <p className='text-white px-2'>This is the start of a collection of technical screening questions for</p>
            <button className='border-2 border-white text-center px-5 py-2 text-white rounded'>Learn More</button>
          </div>
      </div>
  </div>;
};

export default TwoDiv;
