import React from 'react'
import Card from "./Card";

const SummaryList = ({ summarys }) => {
  return (
    <div className='w-10/12 m-auto mt-8'>
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