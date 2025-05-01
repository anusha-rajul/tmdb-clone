import React, { useEffect, useState } from 'react'
import genreIds from '../utility/genre'

export default function WatchList({ watchList , setWatchList, removeFromList}) {
  
  const [search, setSearch] = useState('')
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currGenre, setCurrGenre]= useState('All Genres')
  
  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function sortIncreased() {
    let sortedInc=watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    })
    setWatchList([...sortedInc])
  }

  function sortDecreased() {
    let sortedDec = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    })
    setWatchList([...sortedDec])
  }

  function handleFilter(genre){
       setCurrGenre(genre)
  }
 
  useEffect(() => {
    let tmp = watchList.map((movie) => {
      return genreIds[movie.genre_ids[0]]
    })
    tmp = new Set(tmp)
    setGenreList(['All Genres', ...tmp])
    console.log(tmp)
  },[watchList])

  return (
    <>
      <div className='flex justify-center flex-wrap'>
        {genreList.map((genre) => {
          return <div onClick={() => handleFilter(genre)} className={currGenre==genre?'bg-blue-400 px-8 py-2 rounded-xl text-white mx-3 hover:cursor-pointer':'bg-gray-400 px-8 py-2 rounded-xl text-white mx-3 hover:cursor-pointer'}>{genre}</div>
        })}
        
    
       

      </div>


    <div className='flex justify-center m-3'>
        <input type='text' onChange={handleSearch} value={search} className='bg-gray-200 outline-none p-1.5' placeholder='Search for movies'/>
    </div>

      
      <div className='m-5 overflow-auto rounded-lg border border-gray-300'>
        <table className='min-w-full text-sm md:text-base'>
          <thead className='border-b-5 border-gray-300'>
            <tr>
              <th>Name</th>
              <th className='flex justify-center'>
                <div onClick={sortIncreased}><i className="fa-solid fa-arrow-up"></i></div>
                <div className='mx-4'>Ratings</div>
                <div onClick={sortDecreased}><i className="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          
          <tbody>
            {watchList.filter((movie) => {
              if (currGenre == 'All Genres') {
                return true
              }
              else {
                return genreIds[movie.genre_ids[0]] == currGenre;
              }
            }).filter((movie) => {
              return movie.original_title.toLowerCase().includes(search.toLowerCase())
            }).map((movie) => {
              return <tr className='border-b-2 border-gray-300 text-center'>
              <td className='flex flex-col md:flex-row items-center p-3'>
                <img className='h-25 w-30' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                <div className='mx-10 '>{movie.original_title}</div>
              </td>
              
              <td>{movie.vote_average}</td>
                <td>{movie.popularity}</td>
              <td>{genreIds[movie.genre_ids[0]]}</td>
              <td className='text-red-800 hover:cursor-pointer' onClick={()=>{removeFromList(movie)}}>Delete</td>
            </tr>
            })}
            
          </tbody>


        </table>
      </div>
      
    </>
  )
}
