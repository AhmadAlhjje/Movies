import React from 'react'
import './MovieCard.css'

function MovieCard({movie:{imdbID,Year,Poster,Title,Type}}) {
  return (
    <div className='movie' key={imdbID}>
        {/* <div>
            <p>{Year}</p>
        </div>

        <div>
            <img src={Poster !== "N/A" ? Poster:"https://via.placeholder.com/400"} alt={Title} />
        </div>

        <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
        </div> */}

        <div className="card">
        <p className='year'>{Year}</p>
        <img className="card-img-top" src={Poster !== "N/A" ? Poster:"https://via.placeholder.com/400"} alt={Title} />
          <div className="card-body">
            <h5 className="card-title">{Type}</h5>
            <p className="card-text">{Title}</p>
          </div>
        </div>
    </div>
  )
}

export default MovieCard


