"use strict";
var single_element = function(collection) {
  var eventhArr = getEventhElems(collection);
  var reducedObj = getReducedObj(eventhArr);
  var singleElements = findDistinctElemsFromReducedObj(reducedObj);
  return singleElements;
};
var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
console.log(getEventhElems(collection_a));
function getEventhElems(originalArr) {
  var evenIndexArr = [];
  for (let index = 0; index < originalArr.length; index++) {
    const elem = originalArr[index];
    if (0 !== index % 2) {
      evenIndexArr.push(elem);
    }
  }
  return evenIndexArr;
}

function getReducedObj(arr) {
  return arr.reduce((reducedArr, eachElem) => {
    if (eachElem in reducedArr) {
      reducedArr[eachElem]++;
    } else {
      reducedArr[eachElem] = 1;
    }
    return reducedArr;
  }, {});
}

function findDistinctElemsFromReducedObj(objReduced) {
  var arrDinstinct = [];
  var objKeysArr = Object.keys(objReduced);
  for (let i = 0; i < objKeysArr.length; i++) {
    var currentKey = objKeysArr[i];
    var currentValue = objReduced[currentKey];
    if (1 === currentValue) {
      arrDinstinct.push(currentKey);
    }
  }
  return arrDinstinct;
}

module.exports = single_element;
