"use strict";

function compute_chain_median(collection) {
  const arr = getArrayFromChain(collection);
  let sortedArr = sortArrAsc(arr);
  return getMedianFromArr(sortedArr);
}

function getArrayFromChain(strChain) {
  return strChain.split("->").map(Number); // TODO：这个map写的优秀
}

function sortArrAsc(arrUnsorted) {
  return arrUnsorted.sort((leftNum, rightNum) => {
    return rightNum - leftNum; // TODO：直接箭头函数，不需要return
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
