import React from 'react';

function Home() {
  return (
    <div className='bg-yellow-200 p-10'>
      <div className='mx-4 md:mx-20 p-4 md:p-32'>
        <h1 className='text-4xl md:text-8xl font-bold'>You Dream And We Build</h1>
        <p className='text-sm md:text-base mt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, rem.
        </p>
        <button className='py-2 px-8 md:py-4 md:px-16 bg-white mt-2 hover:bg-transparent'>Explore More</button>
      </div>
    </div>
  );
}

export default Home;
