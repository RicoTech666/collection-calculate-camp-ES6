"use strict";

function find_first_even(collection) {
  return collection.find(elem => 0 === elem % 2);
}

module.exports = find_first_even;
