import React from "react";
import MovieListItem from "./MovieListItem";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.movies.map((movie, index) => {
      return (movie = (
        <MovieListItem key={movie.title} movie={this.props.movies[index]} />
      ));
    });
    return (
      <div>
        <ul className="movie-list">{items}</ul>
        {this.props.movies.length === 0 ? <p> No movies found </p> : null}
      </div>
    );
  }
}

export default MovieList;
