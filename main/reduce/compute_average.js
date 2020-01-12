"use strict";

function compute_average(collection) {
  return collection.reduce((sum, elem) => sum + elem) / collection.length;
}

module.exports = compute_average;
