"use strict";
var calculate_average = function(collection) {
  return (
    collection
      .filter((val, index) => index % 2)
      .reduce((pre, cur) => pre + cur) /
    (collection.length / 2)
  );
};
module.exports = calculate_average;
