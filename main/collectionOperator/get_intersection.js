"use strict";

function get_intersection(collection_a, collection_b) {
  var intersectionArr = [];
  for (var i = 0; i < collection_b.length; i++) {
    for (var j = 0; j < collection_a.length; j++) {
      if (collection_b[i] === collection_a[j]) {
        intersectionArr.push(collection_b[i]);
      }
    }
  }
  return intersectionArr;
}

module.exports = get_intersection;
