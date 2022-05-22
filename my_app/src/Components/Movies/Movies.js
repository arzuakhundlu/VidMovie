import React, { useContext } from "react";
import { Context } from "../../../src/context/Context";
import "./Movies.css";

export default function Movies(movie) {
  const { MoviesList, addMoviesList } = useContext(Context);
  const disabledButton = MoviesList.find(
    (item) => item.imdbID === movie.imdbID
  );

  return (
    <>
      <div className="movies-box">
        <ul>
          <li className="movies-box-list">
            <div className="movies-image">
              <img src={movie.Poster} alt="movie poster" />
            </div>
            <div className="movie-text-box">
              <h3>{movie.Title}</h3>
              <p>Year: {movie.Year}</p>
              <div className="fav-add">
                <button
                  disabled={disabledButton}
                  onClick={() => addMoviesList(movie)}
                >
                  Add favorite
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
