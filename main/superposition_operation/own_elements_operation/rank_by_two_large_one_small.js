"use strict";
function rank_by_two_large_one_small(collection) {
  let ascArr = rankAsc(collection);
  let index = 0;
  while (index < ascArr.length - 2) {
    swapElemsInArray(ascArr, index, index + 1);
    swapElemsInArray(ascArr, index + 1, index + 2);
    index += 3;
  }
  return ascArr;
}

function rankAsc(collection) {
  return collection.sort((leftNum, rightNum) => {
    return leftNum - rightNum;
  });
}

function swapElemsInArray(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
}

module.exports = rank_by_two_large_one_small;
