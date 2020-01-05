"use strict";

function spilt_to_zero(number, interval) {
  var isZero = canBeSplitToZero(number, interval);
  return generateSplitArr(number, interval, isZero);
}

function canBeSplitToZero(number, interval) {
  var numberInt = toInt(number);
  var intervalInt = toInt(interval);
  return 0 === numberInt % intervalInt;
}

function generateSplitArr(number, interval, canBeSplitedToZero) {
  var splitedArr = [];
  var numberInt = toInt(number);
  var intervalInt = toInt(interval);
  if (canBeSplitedToZero) {
    while (numberInt >= 0) {
      splitedArr.push(toFloat(numberInt));
      numberInt -= intervalInt;
    }
  } else {
    while (numberInt > -intervalInt) {
      splitedArr.push(toFloat(numberInt));
      numberInt -= intervalInt;
    }
  }
  return splitedArr;
}

function toInt(num) {
  return parseInt(num.toString().split(".")[1]);
}

function toFloat(num) {
  if (num >= 0) {
    return parseFloat("0." + num.toString());
  } else {
    return parseFloat("-0." + (-num).toString());
  }
}

module.exports = spilt_to_zero;
