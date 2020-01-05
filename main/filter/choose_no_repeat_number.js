"use strict";

function choose_no_repeat_number(collection) {
  var noRepeatArr = [collection[0]];
  for (var i = 1; i < collection.length; i++) {
    if (-1 === noRepeatArr.indexOf(collection[i])) {
      noRepeatArr.push(collection[i]);
    }
  }
  return noRepeatArr;
}

module.exports = choose_no_repeat_number;
