"use strict";

function choose_divisible_integer(collection_a, collection_b) {
  var divisibleArr = [];
  for (var i = 0; i <= collection_a.length; i++) {
    var isDivisible = false;
    for (var j = 0; j <= collection_b.length; j++) {
      isDivisible = isDivisible || 0 === collection_a[i] % collection_b[j];
    }
    if (isDivisible) {
      divisibleArr.push(collection_a[i]);
    }
  }
  return divisibleArr;
}

module.exports = choose_divisible_integer;
