"use strict";

function compute_chain_median(collection) {
  let arr = getArrayFromChain(collection);
  let sortedArr = sortArrAsc(arr);
  return getMedianFromArr(sortedArr);
}

function getArrayFromChain(strChain) {
  return strChain.split("->").map(Number);
}

function sortArrAsc(arrUnsorted) {
  return arrUnsorted.sort((leftNum, rightNum) => {
    return rightNum - leftNum;
  });
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

module.exports = compute_chain_median;
