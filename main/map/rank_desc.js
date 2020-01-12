"use strict";
var rank_desc = function(collection) {
  return collection.sort((leftNum, rightNum) => leftNum - rightNum);
};

module.exports = rank_desc;
