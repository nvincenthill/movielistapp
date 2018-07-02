import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input placeholder="Find a movie" onChange={this.props.handleInput} />
        <button onClick={this.props.search}>Search</button>
      </div>
    );
  }
}

export default Search;
