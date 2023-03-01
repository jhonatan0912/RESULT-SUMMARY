import React, { useState } from 'react'
import Result from './components/Result';
import SummaryList from './components/SummaryList'
import data from "./data";

const App = () => {
  const [summarys, setSummarys] = useState(data)
  return (
    <div className='w-screen h-screen sm:flex justify-center items-center'>
      <div className='grid sm:grid-cols-2 sm:items-stretch bg-white drop-shadow-xl md:w-10/12 sm:rounded-3xl lg:w-8/12 xl:w-7/12 2xl:w-5/12'>
        <Result />
        <SummaryList summarys={summarys} />
      </div>
    </div>
  )
}

export default App