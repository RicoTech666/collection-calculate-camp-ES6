"use strict";

function choose_even(collection) {
  var evenCollection = [];
  while (collection.length > 0) {
    var num = collection.shift();
    if (0 === num % 2) {
      evenCollection.push(num);
    }
  }
  return evenCollection;
}

module.exports = choose_even;
