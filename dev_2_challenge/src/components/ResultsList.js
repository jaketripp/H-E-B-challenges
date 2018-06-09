import React from "react";
import ResultsListItem from "./ResultsListItem";

const ResultsList = props => {
  return (
    <div id="results-list">
      {props.results[0] && (
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>ID</th>
              <th>Price</th>
              <th>Last Sold</th>
              <th>Shelf Life</th>
              <th>Department</th>
              <th>Unit</th>
              <th>xFor</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map((product, i) => {
              return <ResultsListItem key={i} {...props} product={product} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResultsList;
