"use strict";

function choose_no_common_elements(collection_a, collection_b) {
  var noCommonArr = [];
  for (var i = 0; i < collection_a.length; i++) {
    if (-1 === collection_b.indexOf(collection_a[i])) {
      noCommonArr.push(collection_a[i]);
    }
  }
  return noCommonArr;
}

module.exports = choose_no_common_elements;
