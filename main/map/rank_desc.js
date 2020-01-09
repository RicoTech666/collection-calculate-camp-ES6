"use strict";
var rank_desc = function(collection) {
  return collection.sort((leftNum, rightNum) => {
    return leftNum - rightNum; // TODO：直接箭头函数，不需要return
  });
};

module.exports = rank_desc;
