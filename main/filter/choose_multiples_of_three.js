"use strict";

function choose_multiples_of_three(collection) {
  var threeCollection = [];
  while (collection.length > 0) {
    var num = collection.shift();
    if (0 === num % 3) {
      threeCollection.push(num);
    }
  }
  return threeCollection;
}

module.exports = choose_multiples_of_three;
