"use strict";

function average_uneven(collection) {
  return (
    collection.filter(val => val % 2).reduce((pre, cur) => pre + cur) /
    (collection.length / 2)
  );
}

module.exports = average_uneven;
