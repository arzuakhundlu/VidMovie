import React from "react";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Favorites from "../../Components/Favorites/Favorites";
import Movies from "../../Components/Movies/Movies";
import SearchBox from "../../Components/SearchBox/SearchBox";
import "./MainPage.css";

export default function MainPage() {
  
  const [movies, setMovies] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const onInputChange = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=98888a79&s=${inputVal}`
    ).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setMovies(data.Search);
      })
    );
  }, [inputVal]);

  return (
    <>
      <Header />
      <div className="main-box-container">
        <section className="main-box-section">
          <div className="main-box-searchbox">
            <SearchBox onInputChange={onInputChange} inputVal={inputVal} />
          </div>
          <div className="main-box-movies">
            {movies === undefined ? (<p>No movie available</p>) : (movies.map((movie) => {
                return (
                  <div >
                    <Movies key={movie.imdbID} movie={movie} {...movie}/>
                  </div>
                );
              })
            )}
          </div>
        </section>
        <aside className="main-box-favorites">
          <Favorites />
        </aside>
      </div>
    </>
  );
}
