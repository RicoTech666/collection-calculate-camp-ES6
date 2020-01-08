"use strict";

function even_to_letter(collection) {
  return collection
    .filter(elem => 0 === elem % 2)
    .map(elem => String.fromCharCode(elem + 96));
}

module.exports = even_to_letter;
