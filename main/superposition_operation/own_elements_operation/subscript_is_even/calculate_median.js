"use strict";
var calculate_median = function(collection) {
  var evenElemsArr = getEvenElems(collection);
  return getMedianFromArr(evenElemsArr);
};

function getEvenElems(originalArr) {
  var evenArr = [];
  for (let index = 0; index < originalArr.length; index++) {
    const elem = originalArr[index];
    if (0 !== index % 2) {
      evenArr.push(elem);
    }
  }
  return evenArr;
}

function getMedianFromArr(arrSorted) {
  var arrLen = arrSorted.length;
  var medianOfArr;
  if (0 === arrLen % 2) {
    medianOfArr = (arrSorted[arrLen / 2] + arrSorted[arrLen / 2 - 1]) / 2;
  } else {
    medianOfArr = arrSorted[(arrLen - 1) / 2];
  }
  return medianOfArr;
}

module.exports = calculate_median;
