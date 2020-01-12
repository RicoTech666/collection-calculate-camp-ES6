"use strict";

function amount_even(collection) {
  return collection.filter(val => !(val % 2)).reduce((pre, cur) => pre + cur);
}

module.exports = amount_even;
