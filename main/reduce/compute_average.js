"use strict";

function compute_average(collection) {
  return collection.reduce((avg, elem, index, collection) => {
    avg += elem;
    if (index === collection.length - 1) {
      avg = avg / collection.length;
    }
    return avg;
  });

  //TODO: return collection.reduce((pre, cur) => pre + cur) / collection.length;
}

module.exports = compute_average;
