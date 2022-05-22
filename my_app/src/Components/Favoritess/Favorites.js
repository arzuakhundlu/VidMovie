import React, { useContext, useState } from "react";

import { Context } from "../../context/Context";

import "./Favorites.css";

export default function Favorites() {
  const { MoviesList, addListFolders, removeMoviesList } = useContext(Context);

  const [inputValue, setInputValue] = useState("");

  var disabledButton = true;

  inputValue !== "" && MoviesList.length > 0
    ? (disabledButton = false)
    : (disabledButton = true);

  function onChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <div className="fav-box">
        <div className="fav-box-inp">
          <input
            onChange={onChange}
            value={inputValue}
            type="text"
            placeholder="New List"
          />
        </div>
        <div className="fav-box-list">
          <ul>
            {MoviesList.map((movie) => {
              return (
                <div className="fav-container" key={movie.imdbID}>
                  <li className="fav-movie">
                    <div className="favorite-img">
                      <img src={movie.Poster} alt={movie.Poster} />
                    </div>
                    {movie.Title}{" "}
                    <b>
                      <i>{movie.Year}</i>
                    </b>
                  </li>
                  <div className="fav-movie-delete">
                    <button
                      onClick={() => {
                        removeMoviesList(movie.imdbID);
                      }}
                      className="fav-movie-delete-btn"
                      type="button"
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
        <div>
          <button
            onClick={() => {
              setInputValue("");
              addListFolders(inputValue, MoviesList);
            }}
            type="button"
            disabled={disabledButton}
            className="fav-save-list"
          >
            Save the list
          </button>
        </div>
      </div>
    </>
  );
}
