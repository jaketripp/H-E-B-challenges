import React from "react";
import ResultsListItem from "./ResultsListItem";

const ResultsList = props => {
  return (
    <div className="results-list-container">
      <div className="results-list">
        {props.results.map((product, i) => {
          return <ResultsListItem key={i} {...props} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ResultsList;
