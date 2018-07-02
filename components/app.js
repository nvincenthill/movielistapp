import "../main.css";
import React from "react";
import ReactDOM from "react-dom";
import MovieList from "./MovieList";
import Search from "./Search";
import { unwatchFile } from "fs";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { title: "Mean Girls" },
        { title: "Hackers" },
        { title: "The Grey" },
        { title: "Sunshine" },
        { title: "Ex Machina" }
      ],
      oldMovies: [
        { title: "Mean Girls" },
        { title: "Hackers" },
        { title: "The Grey" },
        { title: "Sunshine" },
        { title: "Ex Machina" }
      ],
      input: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.search = this.search.bind(this);
  }

  handleInput(event) {
    console.log(event);
    this.setState({ input: event.target.value });
  }

  search() {
    let filtered = this.state.oldMovies.map(movie => {
      if (movie.title.toLowerCase().includes(this.state.input.toLowerCase())) {
        return movie;
      }
    });
    console.log(filtered);
    let cleaned = [];
    filtered.forEach(movie => {
      if (movie != undefined) {
        cleaned.push(movie);
      }
    });
    this.setState({ movies: cleaned });
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Search handleInput={this.handleInput} search={this.search} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
