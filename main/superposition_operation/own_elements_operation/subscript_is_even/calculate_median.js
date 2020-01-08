"use strict";
var calculate_median = function(collection) {
  let evenElemsArr = collection.filter(elem => 0 === elem % 2);
  return getMedianFromArr(evenElemsArr);
};

function getMedianFromArr(arrSorted) {
  let arrLen = arrSorted.length;
  let medianOfArr;
  if (0 === arrLen % 2) {
    medianOfArr = (arrSorted[arrLen / 2] + arrSorted[arrLen / 2 - 1]) / 2;
  } else {
    medianOfArr = arrSorted[(arrLen - 1) / 2];
  }
  return medianOfArr;
}

module.exports = calculate_median;
