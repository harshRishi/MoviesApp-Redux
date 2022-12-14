import React from "react";
import { data } from "../data";
import { Navbar, MovieCard } from "./index";

import { addMovies } from "../actions";

class App extends React.Component {
  // use life cycle method
  componentDidMount() {
    // make an API call
    const { store } = this.props; // check app to see we're getting store as an props in app component
    // {2}
    store.subscribe(() => {
      this.forceUpdate(); // forcefully re-render the component
    });
    // dispatch action {1}
    store.dispatch(addMovies(data));
  }

  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => {
              return <MovieCard movie={movie} key={`movies-${index}`} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
