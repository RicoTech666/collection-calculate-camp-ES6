"use strict";

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(value =>
    collection_b.some(item => !(value % item))
  );
}

module.exports = choose_divisible_integer;
