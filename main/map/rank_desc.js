'use strict';
var rank_desc = function(collection){
  return collection.sort(function(leftNum,rightNum) {
    return rightNum-leftNum;
  });
};

module.exports = rank_desc;
