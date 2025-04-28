import React from 'react'
import Logo from '../Logo.jpg'
import {Link} from 'react-router'

export default function Navbar() {
  return (
    <div className='flex border border-white'>
          <img src={Logo} className='w-13' ></img>
          <Link to='/' className='m-3 text-xl text-blue-700 font-bold'>Movies</Link>
          <Link to='WatchList' className='m-3 text-xl text-blue-700 font-bold'>WatchList</Link>
    </div>
  )
}
