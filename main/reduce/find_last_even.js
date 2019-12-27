"use strict";

function find_last_even(collection) {
  var evenArr = findEvenSubArr(collection);
  return evenArr[evenArr.length - 1];
}

function findEvenSubArr(collection) {
  return collection.reduce(function(evenArr, elem) {
    if (0 === elem % 2) {
      evenArr.push(elem);
    }
    return evenArr;
  }, []);
}

module.exports = find_last_even;
