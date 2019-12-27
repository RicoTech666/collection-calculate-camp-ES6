"use strict";
var rank_asc = function(collection) {
  return collection.sort(function(leftNum,rightNum) {
    return rightNum-leftNum;
  });
};

module.exports = rank_asc;
