'use strict';
var rank_desc = function(collection){
  return collection.sort(function(leftNum,rightNum) {
    return leftNum - rightNum;
  });
};

module.exports = rank_desc;
