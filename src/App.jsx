import React, { useState } from 'react'
import Result from './components/Result';
import SummaryList from './components/SummaryList'
import data from "./data";

const App = () => {
  const [summarys, setSummarys] = useState(data)
  return (
    <div className='w-screen h-screen flex justify-center sm:items-center'>
      <div className='sm:w-5/12 sm:flex '>
        <Result />
        <SummaryList summarys={summarys} />
      </div>
    </div>
  )
}

export default App