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
  return oddSum / oddCount; //TODO: 与上个类似
}

module.exports = average_uneven;
