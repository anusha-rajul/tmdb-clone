import React from 'react'
import WatchList from './WatchList'

export default function Moviecard({ poster_path, name, addToList, movie, removeFromList, watchList }) {
  
  function doesContain(movie) {
    for (let i = 0; i < watchList.length; i++){
      if (movie.id == watchList[i].id) {
        return true
      }
    }
    return false
 }

  return (
    <div className='relative m-4 h-60 w-38 bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 ' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

      {doesContain(movie)   ? (<div className='flex justify-end m-3 font-xl' onClick={()=>removeFromList(movie)}>&#x274C;</div> ) 
    :    (<div className='flex justify-end m-3 font-xl' onClick={()=>addToList(movie)}>
      &#x1F9E1;
      </div>)}

   

      <div className='absolute bottom-0 text-white bg-gray-900/60 w-full text-center p-2 '>
        {name}
      </div>

    </div>
  )
}
