import React from "react";
import { addFav, removeFav } from "../actions";

class MovieCard extends React.Component {
  handleFavClick = () => {
    // console.log(this.props);
    const { movie } = this.props;
    this.props.dispatch(addFav(movie));
  };
  handleUnFavClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFav(movie));
  };
  render() {
    const { movie, isMovieFav } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {!isMovieFav ? (
              <button onClick={this.handleFavClick} className="favourite-btn">
                Favourite
              </button>
            ) : (
              <button
                onClick={this.handleUnFavClick}
                className="unfavourite-btn"
              >
                UnFavourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
