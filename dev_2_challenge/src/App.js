import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <ResultsList />
        <Footer />
      </div>
    );
  }
}

export default App;
