import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

export const Context = createContext();

const initialState = {
  MoviesList: [],
  MoviesListFolders: [],
};

export const Provider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addMoviesList = (movie) => {
    dispatch({ type: "ADD_MOVIES_LIST", payload: movie });
  };

  const removeMoviesList = (id) => {
    dispatch({ type: "REMOVE_MOVIES_LIST", payload: id });
  };

  const addListFolders = (list, movies) => {
    dispatch({
      type: "ADD_MOVIES_LIST_FOLDERS",
      payload: { listName: list, movies: movies },
    });
  };

  return (
    <Context.Provider
      value={{
        MoviesList: state.MoviesList,
        MoviesListFolders: state.FavoritesFolders,
        addMoviesList,
        removeMoviesList,
        addListFolders,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
