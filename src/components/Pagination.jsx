import React from 'react'

export default function Pagination({forward , backward , pageNo}) {
  return (
      <div className='text-white bg-gray-900/60 p-3 flex justify-center'>
          <div onClick={backward} className='px-8 hover:cursor-pointer'><i className="fa-solid fa-arrow-left"></i></div> 
          <div>{pageNo}</div>
          <div onClick={forward} className='px-8 hover:cursor-pointer'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}
