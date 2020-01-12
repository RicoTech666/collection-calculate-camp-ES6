"use strict";
var even_asc_odd_desc = function(collection) {
  return rankAsc(collection.filter(val => !(val % 2))).concat(
    rankAsc(collection.filter(val => val % 2)).reverse()
  );
};

function rankAsc(collection) {
  return collection.sort((leftNum, rightNum) => leftNum - rightNum);
}

module.exports = even_asc_odd_desc;
