"use strict";
var even_asc_odd_desc = function(collection) {
  let evenSubAsc = rankAsc(getElems(collection, "even"));
  let oddSubDesc = rankAsc(getElems(collection, "odd")).reverse();
  let evenAscOddDesc = evenSubAsc;
  while (0 !== oddSubDesc.length) {
    evenAscOddDesc.push(oddSubDesc.shift());
  }
  return evenAscOddDesc;
};

function getElems(arr, str) {
  let returnedArr = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (0 === elem % 2 && "even" === str) {
      returnedArr.push(elem);
    } else if (0 !== elem % 2 && "odd" === str) {
      returnedArr.push(elem);
    }
  }
  return returnedArr;
}

function rankAsc(collection) {
  return collection.sort((leftNum, rightNum) => {
    return leftNum - rightNum;
  });
}

function rankDesc(collection) {
  return collection.sort((leftNum, rightNum) => {
    return rightNum - leftNum;
  });
}

module.exports = even_asc_odd_desc;
