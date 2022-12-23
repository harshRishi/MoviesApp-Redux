import React from "react";
import { data } from "../data";
import { Navbar, MovieCard } from "./index";

import { addMovies, setShowFav } from "../actions";

class App extends React.Component {
  // use life cycle method
  componentDidMount() {
    // make an API call
    const { store } = this.props; // check app to see we're getting store as an props in app component
    // {2} --> takes function as an argument
    store.subscribe(() => {
      this.forceUpdate(); // forcefully re-render the component
    });
    // dispatch action {1}
    store.dispatch(addMovies(data));
  }
  isMovieFav = (movie) => {
    const { fav } = this.props.store.getState();
    const index = fav.indexOf(movie);
    if (index !== -1) {
      return true; // movie found
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFav(val));
  };

  render() {
    const { list, fav, showFav } = this.props.store.getState();
    // console.log(this.store);
    const displayScreen = showFav ? fav : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFav ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFav ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          {/*  display there is no movie if length of the display array is zero */}
          {displayScreen.length === 0 ? (
            <div className="no-movies">No Movies to display!</div>
          ) : (
            <div className="list">
              {displayScreen.map((movie, index) => {
                return (
                  <MovieCard
                    movie={movie}
                    key={`movies-${index}`}
                    dispatch={this.props.store.dispatch}
                    isMovieFav={this.isMovieFav(movie)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
