import {
  ADD_FAV,
  ADD_MOVIES,
  REMOVE_FAV,
  SET_SHOW_FAV,
} from "../actions/index";

const initialMovieState = {
  list: [],
  fav: [],
  showFav: false,
};

export default function movies(state = initialMovieState, action) {
  // spread the old state and override the list from the old state
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAV:
      return {
        ...state,
        fav: [action.movie, ...state.fav],
      };
    case REMOVE_FAV:
      const newFav = state.fav.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        fav: newFav,
      };
    case SET_SHOW_FAV:
      return {
        ...state,
        showFav: action.val,
      };
    default:
      return state;
  }
}
