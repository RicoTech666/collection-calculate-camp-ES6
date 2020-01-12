"use strict";
var rank_asc = function(collection) {
  return collection.sort((leftNum, rightNum) => rightNum - leftNum);
};

module.exports = rank_asc;
