let fs = require("fs");

fs.readFile("input.txt", "utf-8", function(err, data) {
  let standardizedData = standardize(data);
  let histogram = buildHistogram(standardizedData);
  let formattedStrings = getAllFormattedStrings(histogram);

  fs.writeFile("output.txt", formattedStrings, function(err) {
    if (err) throw err;
    console.log("Output done!");
  });
});

// remove new lines, carriage returns, and non-alphanumeric characters
// make words lowercase
// returns standardized array of words
function standardize(data) {
  return data
    .replace(/\r?\n|\r/g, " ")
    .split(" ")
    .map(word => {
      return word.replace(/([^A-Z0-9 ])+/gi, "").toLowerCase();
    });
}

// takes in array
// count occurences
// exclude empty strings
// returns object
function buildHistogram(data) {
  return data.reduce((obj, word) => {
    if (word) {
      obj[word] = obj[word] + 1 || 1;
    }
    return obj;
  }, {});
}

// takes in histogram object
// returns max word length
function getMaxWordLength(histogram) {
  return Object.keys(histogram).reduce((prev, curr) => {
    return curr.length > prev.length ? curr : prev;
  }, "").length;
}

// build nested array
  // [number of occurences, formatted string]
// sort greatest to least by number of occurences
// return string of properly formatted strings joined by newlines
function getAllFormattedStrings(histogram) {
  let arr = [];
  let maxWordLength = getMaxWordLength(histogram);

  for (let word in histogram) {
    let formattedString = format(histogram, word, padding(maxWordLength, word));
    arr.push([histogram[word], formattedString]);
  }

  return arr
    .sort((a, b) => {
      return b[0] - a[0];
    })
    .map(miniArr => {
      return miniArr[1];
    })
    .join("\n");
}

// takes in histogram object, word, and padding
function format(obj, word, padding) {
  return `${padding}${word} | ${"=".repeat(obj[word])} (${obj[word]})`;
}

// returns correct number of spaces to format properly
function padding(maxWordLength, word) {
  return " ".repeat(maxWordLength - word.length);
}