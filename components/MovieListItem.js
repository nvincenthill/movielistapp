import React from "react";

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li className="movie-list-item">{this.props.movie.title}</li>;
  }
}

export default MovieListItem;
