import React from "react";
import './Favorites.css';

export default function Favorites() {
  return (
    <>
      <div className="fav-box">
        <div className="fav-box-inp">
          <input type="text" placeholder="New List" />
        </div>
        <div className="fav-box-list">
          <ul>
            <li className="fav-movie">
              <div>

              </div>
              <div className="fav-movie-delete">
                <button className="fav-movie-delete-btn">x</button>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <button type="button" className="fav-save-list">
            Save the list
          </button>
        </div>
      </div>
    </>
  );
}
