
import './App.css'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import WatchList from './components/WatchList'
import Banner from './components/Banner'
import '@fortawesome/fontawesome-free/css/all.min.css';

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";


function App() {

  const [watchList, setWatchList] = useState([])
  
  function addToList(movie) {
    let newWatchList = [...watchList, movie];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  function removeFromList(movie) {
    console.log("Attempting to remove:", movie);
    const filteredList = watchList.filter((movieObj) => {
      return movieObj.id !== movie.id;
    });

    console.log("Updated watchList:", filteredList);
    setWatchList(filteredList);
    localStorage.setItem('moviesApp', JSON.stringify(filteredList))
  }


  useEffect(() => {
    let moviesFromLocalstorage = localStorage.getItem('moviesApp')
    if (!moviesFromLocalstorage) {
      return
    }
    setWatchList(JSON.parse(moviesFromLocalstorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<><Banner  /> <Movies addToList={addToList} removeFromList={removeFromList} watchList={watchList} /> </>} />
 
          <Route path='WatchList' element={<WatchList watchList={watchList} setWatchList={setWatchList} removeFromList={removeFromList} />}/>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
