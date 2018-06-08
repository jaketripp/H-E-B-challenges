import React from "react";

function ResultsListItem(props) {
  let { product } = props;
  let {
    ID,
    Description,
    lastSold,
    ShelfLife,
    Department,
    Price,
    xFor,
    Unit,
    Cost
  } = product;
  return (
    <div className="card">
      <div className="card__header">
        <p className="product-name">{toTitleCase(Description)}</p>
        <p>
          {Price} - {xFor} {Unit}
        </p>
      </div>
      <hr/>
      <div className="card__details">
        <p>ID: #{ID}</p>
        <p>Department: {Department}</p>
        <p>Last Sold: {lastSold}</p>
        <p>Shelf Life: {ShelfLife}</p>
        <p>Cost: {Cost}</p>
      </div>
    </div>
  );
}

function toTitleCase(string) {
  return string.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default ResultsListItem;
