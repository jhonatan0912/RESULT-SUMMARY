import React, { useState } from 'react'
import Result from './components/Result';
import SummaryList from './components/SummaryList'
import data from "./data";

const App = () => {
  const [summarys, setSummarys] = useState(data)
  return (
    <div>
      <Result />
      <SummaryList summarys={summarys} />
    </div>
  )
}

export default App