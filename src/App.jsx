import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard/MovieCard'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'

const API_URL='https://www.omdbapi.com/?apikey=b6003d8a';

function App() {
  const [searchTerm,setSearchTerm]=useState("");
  const [movies,setMovies]=useState([]);

  useEffect(()=>{
    searchMovies("all");
  },[]);

  const searchMovies=async (title)=>{
    const response =await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();

    setMovies(data.Search);
  }

  return (
    <div className="App">
      {/* <Navbar/> */}
      <p className='logo'>MovieLand</p>

      <div className='search'>
        <input
          className='input-search'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          placeholder='Search For Movies'
        />

        <i 
          className="fa-solid fa-magnifying-glass icon-search"
          alt="search"
          onClick={()=>searchMovies(searchTerm)} 
        ></i>
      </div>

      {movies?.length>0 ? (
        <div className='container'>
          {movies.map((movie,i)=>(
            <MovieCard key={i}  movie={movie}/>
          ))}
        </div>
      ):(
        <div className='empty'>
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  )
}

export default App
