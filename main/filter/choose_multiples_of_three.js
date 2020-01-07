"use strict";

function choose_multiples_of_three(collection) {
  return collection.filter(three => 0 === three % 3);
}

module.exports = choose_multiples_of_three;
