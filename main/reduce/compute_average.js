"use strict";

function compute_average(collection) {
  return collection.reduce(function(avg, elem, index, collection) {
    avg += elem;
    if (index === collection.length - 1) {
      avg = avg / collection.length;
    }
    return avg;
  });
}

module.exports = compute_average;
