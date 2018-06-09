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
    <tr>
      <td data-label="Description" className="product-name">
        {toTitleCase(Description)}
      </td>
      <td data-label="ID">#{ID}</td>
      <td data-label="Price">{Price}</td>
      <td data-label="Last Sold">{lastSold}</td>
      <td data-label="Shelf Life">{ShelfLife}</td>
      <td data-label="Department">{Department}</td>
      <td data-label="Unit">{Unit}</td>
      <td data-label="xFor">{xFor}</td>
      <td data-label="Cost">{Cost}</td>
    </tr>
  );
}

function toTitleCase(string) {
  return string.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default ResultsListItem;
