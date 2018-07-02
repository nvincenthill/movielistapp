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
    return <ul className="movie-list">{items}</ul>;
  }
}

export default MovieList;
