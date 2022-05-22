export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIES_LIST":
      return {
        ...state,
        MoviesList: [...state.MoviesList, action.payload],
      };

    case "REMOVE_MOVIES_LIST":
      return {
        ...state,
        MoviesList: [
          ...state.MoviesList.filter(
            (movie) => movie.imdbID !== action.payload
          ),
        ],
      };

    case "ADD_MOVIES_LIST_FOLDERS":
      return {
        ...state,
        MoviesListFolders: [...state.MoviesListFolders, action.payload],
        MoviesList: [],
      };

    default:
      return state;
  }
};
