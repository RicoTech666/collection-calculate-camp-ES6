"use strict";

function get_letter_interval(number_a, number_b) {
  var letterInterval = [];
  if (number_a <= number_b) {
    for (var i = number_a; i <= number_b; i++) {
      letterInterval.push(String.fromCharCode(i + 96));
    }
  } else if (number_a > number_b) {
    for (var i = number_a; i >= number_b; i--) {
      letterInterval.push(String.fromCharCode(i + 96));
    }
  }
  return letterInterval;
}

module.exports = get_letter_interval;
