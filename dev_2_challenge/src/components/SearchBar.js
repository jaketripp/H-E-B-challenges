import React, { Component } from "react";
import axios from "axios";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      formError: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    // dont allow empty searches
    if (!this.state.searchTerm) {
      return;
    }
    axios
      .get(`http://localhost:8080/search?term=${this.state.searchTerm}`)
      .then(response => {
        this.setState({ formError: "", searchTerm: "" });
        this.props.passData(response.data);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          formError: "Something went wrong, please try again later."
        });
      });
  };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="term"
            placeholder="Search for products"
            value={this.state.searchTerm}
            onChange={this.onInputChange}
            autoFocus
          />
          <button>Submit</button>
        </form>
        {this.state.formError && (
          <p className="searchbar__error">{this.state.formError}</p>
        )}
      </div>
    );
  }
}

export default SearchBar;
