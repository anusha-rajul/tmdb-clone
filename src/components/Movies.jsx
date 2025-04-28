import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import axios from 'axios'
import Pagination from './Pagination'

export default function Movies({addToList,removeFromList,watchList}) {

  const [movies, setMovies] = useState([])

  const [pageNo, setpageNo] = useState(1)
  
  function forward() {
    setpageNo(pageNo+1)
  }

  function backward() {
    if (pageNo === 1) {
      setpageNo(pageNo)
    }
    else {
      setpageNo(pageNo-1)
    }
    
  }

  useEffect(() => {
    axios.get(` https://api.themoviedb.org/3/movie/popular?api_key=f6fb4683539ffb4e1ab92f21300dc4cd&language=en-US&page=${pageNo}`).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results)
    })
  },[pageNo])

  return (
    <div >

      <div className='font-bold text-center text-2xl p-5'>
        Trending Movies
      </div>

      
      <div className='flex flex-row flex-wrap justify-around '>
        {movies.map((movie) => {
          return <Moviecard watchList={watchList} key={movie.id} poster_path={movie.poster_path} name={movie.original_title} addToList={addToList} removeFromList={removeFromList} movie={movie} />
        })}
        </div>
        
      <Pagination forward={forward} backward={backward} pageNo={pageNo} />
  
    </div>
  )
}

// https://api.themoviedb.org/3/movie/popular?api_key=f6fb4683539ffb4e1ab92f21300dc4cd&language=en-US&page=1