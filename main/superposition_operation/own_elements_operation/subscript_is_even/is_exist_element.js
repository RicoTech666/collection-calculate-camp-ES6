"use strict";
var is_exist_element = function(collection, element) {
  let eventhIndexArr = collection.filter((elem, index) => 0 === index % 2);
  return eventhIndexArr.some(elem => elem === element);
};

module.exports = is_exist_element;
