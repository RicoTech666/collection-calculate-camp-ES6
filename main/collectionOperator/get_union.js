"use strict";

function get_union(collection_a, collection_b) {
  var unionArr = collection_a.slice(0);
  for (var i = 0; i < collection_b.length; i++) {
    if (-1 === unionArr.indexOf(collection_b[i])) {
      unionArr.push(collection_b[i]);
    }
  }
  return unionArr;
}

module.exports = get_union;
