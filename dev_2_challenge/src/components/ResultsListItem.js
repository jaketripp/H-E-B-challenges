import React from "react";

function ResultsListItem(props) {
  let { product } = props;
  let { Description, Price, xFor, Unit } = product;
  return (
    <li>
      <div>{toTitleCase(Description)}</div>
      <div>{Price} | {xFor} {Unit}</div>
    </li>
  );
}

function toTitleCase(string) {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default ResultsListItem;
