import React, { Component } from "react";
import Loading from "./Loading";

class ResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      loading: false
    };
  }

  componentWillUpdate() {
    this.setState({ loading: true });
  }

  render() {
    return (
      <div className="results">
        {this.state.loading && <Loading/>}
      </div>
    );
  }
}

export default ResultsList;
