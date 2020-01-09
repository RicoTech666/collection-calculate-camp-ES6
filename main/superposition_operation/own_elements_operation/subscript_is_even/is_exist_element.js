"use strict";
var is_exist_element = function(collection, element) {
  let eventhIndexArr = collection.filter((elem, index) => 0 === index % 2);
  return eventhIndexArr.some(elem => elem === element); //TODO: 直接链式写，不需要eventhIndexArr，因为filter的返回值还是个数组
};

module.exports = is_exist_element;
