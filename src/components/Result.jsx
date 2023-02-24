import React from 'react'

const Result = () => {
  return (
    <div className='first-gradient text-white text-center p-5 rounded-b-3xl flex flex-col gap-7 md:gap-0 sm:rounded-3xl'>

      <p className='md:text-xl text-zinc-300'>Your Result</p>

      <div className='second-gradient rounded-full md:w-32 md:h-32 w-28 h-28 m-auto flex flex-col justify-center items-center'>
        <span className='text-4xl font-bold'>76</span>
        <p className='text-zinc-400'>of 100</p>
      </div>
      <p className=' text-2xl'>Great</p>
      <p className='w-9/12 m-auto'>Your scored higher than 65% of the people who have taken these tests.</p>
    </div>
  )
}

export default Result