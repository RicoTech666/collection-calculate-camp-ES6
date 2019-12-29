"use strict";
var calculate_average = function(collection) {
  var sum = 0;
  var count = 0;
  for (let i = 0; i < collection.length; i++) {
    if (0 !== i % 2) {
      sum += collection[i];
      count++;
    }
  }
  return sum / count;
};
module.exports = calculate_average;
