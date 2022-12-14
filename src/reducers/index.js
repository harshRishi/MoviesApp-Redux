import { ADD_MOVIES } from "../actions/index";

const initialMovieState = {
  list: [],
  fav: [],
};

export default function movies(state = initialMovieState, action) {
  if (action.type === ADD_MOVIES) {
    // spread the old state and override the list from the old state
    return { ...state, list: action.movies };
  }
  return state;
}
