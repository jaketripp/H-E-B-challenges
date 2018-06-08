import React, { Component } from "react";
import axios from "axios";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      category: "",
      formError: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    // dont allow empty searches
    if (!this.state.searchTerm) {
      return;
    }
    // handle if user selects category
    let category = !this.state.category
      ? ""
      : `&category=${this.state.category}`;

    axios
      .get(
        `http://localhost:8080/search?term=${this.state.searchTerm}${category}`
      )
      .then(response => {
        if (response.data.length === 0) {
          this.setState({
            formError: `"${
              this.state.searchTerm
            }" returned 0 results. Try something else?`,
            searchTerm: ""
          });
          this.props.passData([]);
        } else {
          this.setState({ formError: "", searchTerm: "" });
          this.props.passData(response.data);
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          formError: "Something went wrong, please try again later."
        });
        this.props.passData([]);
      });
  };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onSelectChange = e => {
    this.setState({ category: e.target.value });
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
          <select
            name="category"
            onChange={this.onSelectChange}
            value={this.state.category}
          >
            <option value="">All Categories</option>
            <option value="ID">ID</option>
            <option value="Description">Description</option>
            <option value="lastSold">Last Sold</option>
            <option value="ShelfLife">Shelf Life</option>
            <option value="Department">Department</option>
            <option value="Price">Price</option>
            <option value="Unit">Unit</option>
            <option value="xFor">xFor</option>
            <option value="Cost">Cost</option>
          </select>
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
