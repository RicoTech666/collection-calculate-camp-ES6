"use strict";

function average_uneven(collection) {
  var oddCount = 0;
  var oddSum = 0;
  for (let i = 0; i < collection.length; i++) {
    if (0 !== collection[i] % 2) {
      oddSum += collection[i];
      oddCount++;
    }
  }
  return oddSum / oddCount;
}

module.exports = average_uneven;
