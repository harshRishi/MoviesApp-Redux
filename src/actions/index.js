/*{
    type: 'ADD_MOVIES",
    movies: [m1, m2, m3 ...]
}
*/

// action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const SET_SHOW_FAV = "SET_SHOW_FAV";
//action creaters
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addFav(movie) {
  return {
    type: ADD_FAV,
    movie,
  };
}
export function removeFav(movie) {
  return {
    type: REMOVE_FAV,
    movie,
  };
}

// val can true or false
export function setShowFav(val) {
  return {
    type: SET_SHOW_FAV,
    val,
  };
}
