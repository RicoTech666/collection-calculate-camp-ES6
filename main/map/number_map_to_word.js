"use strict";
var number_map_to_word = function(collection) {
  return collection.map(function(elem) {
    if (elem <= 26) {
      return String.fromCharCode(elem + 96);
    }
  });
};

module.exports = number_map_to_word;
