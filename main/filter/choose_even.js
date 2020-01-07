"use strict";

function choose_even(collection) {
  return collection.filter(even => 0 === even % 2);
}

module.exports = choose_even;
