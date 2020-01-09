"use strict";

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(elem => includesDivisible(elem, collection_b));
  //TODO: return collection_a.filter((value) => collection_b.some((item) => !(value % item)));
}

function includesDivisible(num, arr) {
  return -1 !== arr.findIndex(elem => 0 === num % elem);
}

module.exports = choose_divisible_integer;
