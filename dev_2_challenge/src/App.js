import React, { Component } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  passData = data => {
    this.setState({ results: data });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <SearchBar passData={this.passData} />
          <ResultsList results={this.state.results} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
