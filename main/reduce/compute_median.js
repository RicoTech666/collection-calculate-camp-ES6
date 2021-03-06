"use strict";

function compute_median(collection) {
  let sortedArr = sortArrAsc(collection);
  return getMedianFromArr(sortedArr);
}
function sortArrAsc(arrUnsorted) {
  return arrUnsorted.sort((leftNum, rightNum) => rightNum - leftNum);
}

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

module.exports = compute_median;
