import React from 'react'
import Card from "./Card";

const SummaryList = ({ summarys }) => {
  return (
    <div className='w-10/12 m-auto mt-8 sm:shadow-2xl sm:rounded-r-2xl sm:p-5 sm:mt-0 sm:bg-white'>
      <p className='mb-4'>Summary</p>
      <div className='flex flex-col gap-5'>
        {
          summarys.map(summary => <Card key={summary.category} summary={summary} />)
        }
      </div>
      <button className='btn p-4 mt-7 rounded-full'>Continue</button>
    </div>
  )
}

export default SummaryList