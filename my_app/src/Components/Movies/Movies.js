import React from "react";
import "./Movies.css";

export default function Movies(movie) {
  return (
    <>
      <div className='movies-box'>
          <ul>
              <li className="movies-box-list">
                  <div className="movies-image">
                  <img src={movie.Poster} alt='movie poster' />
                  </div>
                  <div className="movie-text-box">
                  <h3>{movie.Title}</h3>
                  <p>Year: {movie.Year}</p>
                  <div className="fav-add">
                      <button >Add favorite</button>
                  </div>
                  </div>
              </li>
          </ul>
        </div>
    </>
  );
}
