"use strict";

function find_last_even(collection) {
  return collection.reverse().find(elem => 0 === elem % 2);
}

module.exports = find_last_even;
