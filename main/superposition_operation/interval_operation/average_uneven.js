"use strict";

function average_uneven(collection) {
  let oddCount = 0;
  let oddSum = 0;
  for (let i = 0; i < collection.length; i++) {
    if (0 !== collection[i] % 2) {
      oddSum += collection[i];
      oddCount++;
    }
  }
  return oddSum / oddCount;
}

module.exports = average_uneven;
