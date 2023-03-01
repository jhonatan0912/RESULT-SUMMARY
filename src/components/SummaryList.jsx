import React from 'react'
import Card from "./Card";

const SummaryList = ({ summarys }) => {
  return (
    <div className='m-auto mt-8 sm:mt-0 w-full p-3 sm:rounded-r-3xl'>
      <p p className='mb-4'>Summary</p>
      <div className='flex flex-col gap-3'>
        {
          summarys.map(summary => <Card key={summary.category} summary={summary} />)
        }
      </div>
      <button className='btn p-4 mt-7 rounded-full'>Continue</button>
    </div >
  )
}

export default SummaryList