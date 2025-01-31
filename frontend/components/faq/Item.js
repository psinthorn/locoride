import React from 'react'

const Item = ({question, answer}) => {
  return (
    <div>
      <div className='flex justify-between items-center p-3 bg-slate-200 rounded-lg'>
        <h2>{question}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className='p-3 bg-slate-100 rounded-lg'>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Item