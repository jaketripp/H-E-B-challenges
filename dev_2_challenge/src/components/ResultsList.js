import React, { Component } from "react";
import ResultsListItem from "./ResultsListItem";

class ResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   // You don't have to do this check first, but it can help prevent an unneeded render
  //   if (nextProps.results !== this.state.results) {
  //     this.setState({ results: nextProps.results });
  //   }
  // }

  render(props) {
    console.log(this.state.results);
    return (
      <div className="results-list">
        {this.props.results.map((product, i) => {
          // let selectedPersonName = props.selectedPersonInfo.name;
          return (
            <ResultsListItem
              key={i}
              {...props}
              product={product}
            />
          );
        })}
      </div>
    );
  }
}

export default ResultsList;
