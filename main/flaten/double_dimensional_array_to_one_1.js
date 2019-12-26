"use strict";

function double_to_one(collection) {
  var oneDimArr = [];
  for (var i = 0; i < collection.length; i++) {
    if ("number" === typeof collection[i]) {
      oneDimArr.push(collection[i]);
    } else if ("object" === typeof collection[i]) {
      for (var j = 0; j < collection[i].length; j++) {
        oneDimArr.push(collection[i][j]);
      }
    }
  }
  return oneDimArr;
}

module.exports = double_to_one;
