"use strict";

function find_first_even(collection) {
  var evenArr = findEvenSubArr(collection);
  return evenArr[0];
}

function findEvenSubArr(collection) {
  return collection.reduce(function(evenArr, elem) {
    if (0 === elem % 2) {
      evenArr.push(elem);
    }
    return evenArr;
  }, []);
}

module.exports = find_first_even;
