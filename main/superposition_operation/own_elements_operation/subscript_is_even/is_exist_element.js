"use strict";
var is_exist_element = function(collection, element) {
  return collection
    .filter((elem, index) => 0 === index % 2)
    .some(elem => elem === element);
};

module.exports = is_exist_element;
