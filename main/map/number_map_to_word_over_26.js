"use strict";
var number_map_to_word_over_26 = function(collection) {
  var letterLen = 26;
  return collection.map(function(elem) {
    if (elem <= letterLen) {
      return String.fromCharCode(elem + 96);
    } else if (elem <= letterLen * 2) {
      return "a" + String.fromCharCode(elem + 96 - letterLen);
    }
  });
};

module.exports = number_map_to_word_over_26;
