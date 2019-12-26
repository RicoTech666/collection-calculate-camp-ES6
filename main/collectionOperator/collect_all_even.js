"use strict";

function collect_all_even(collection) {
  var evenCollection = [];
  for (var i = 0; i < collection.length; i++) {
    if (0 === collection[i] % 2) {
      evenCollection.push(collection[i]);
    }
  }
  return evenCollection;
}

module.exports = collect_all_even;
