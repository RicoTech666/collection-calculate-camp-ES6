"use strict";
var single_element = function(collection) {
  let eventhArr = collection.filter((elem, index) => 0 !== index % 2);
  return findDistinctElems(eventhArr);
};

function findDistinctElems(arr) {
  let arrDinstinct = [];
  arr.forEach(elem => {
    if (arr.indexOf(elem) === arr.lastIndexOf(elem)) {
      arrDinstinct.push(elem);
    }
  });
  return arrDinstinct;
}

module.exports = single_element;
