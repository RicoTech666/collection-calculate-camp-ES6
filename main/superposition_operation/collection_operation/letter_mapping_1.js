"use strict";

function even_to_letter(collection) {
  return collection.reduce(function(letterArr, collectionElem) {
    if (0 === collectionElem % 2) {
      letterArr.push(String.fromCharCode(collectionElem + 96));
    }
    return letterArr;
  }, []);
}

module.exports = even_to_letter;
