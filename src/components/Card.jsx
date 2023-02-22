import React from 'react'

const Card = ({ summary }) => {
  return (
    <div className={`flex justify-between px-4  py-3 rounded-lg ${summary.color}`}>
      <div className='flex gap-2'>
        <img src={summary.icon} alt={summary.category} />
        <p>{summary.category}</p>
      </div>
      <p className='text-zinc-400 font-bold'><span className='text-black'>{summary.score}</span>/100</p>
    </div >
  )
}

export default Card