"use strict";

function average_to_letter(collection) {
  return String.fromCharCode(getAverage(collection) + 96);
}

function getAverage(collection) {
  let sum = collection.reduce((average, collectionElem) => {
    average += collectionElem;
    return average;
  });
  return Math.ceil(sum / collection.length);
}

module.exports = average_to_letter;
