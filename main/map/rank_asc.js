"use strict";
var rank_asc = function(collection) {
  return collection.sort((leftNum, rightNum) => {
    return rightNum - leftNum; // TODO：直接箭头函数，不需要return
  });
};

module.exports = rank_asc;
