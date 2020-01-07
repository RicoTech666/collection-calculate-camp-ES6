"use strict";

function collect_all_even(collection) {
  return collection.filter(even => 0 === even % 2);
}

module.exports = collect_all_even;
