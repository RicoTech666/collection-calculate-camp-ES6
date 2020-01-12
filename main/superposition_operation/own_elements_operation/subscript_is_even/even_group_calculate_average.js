"use strict";

var even_group_calculate_average = function(collection) {
  let eventhArr = collection.filter((elem, index) => 0 !== index % 2);
  let evenElemsArr = eventhArr.filter(elem => 0 === elem % 2);
  if (0 === evenElemsArr.length) {
    return [0];
  } else {
    let arrReallocated = reallocateByNumberLength(evenElemsArr);
    let avgArr = calculate2DArrAverage(arrReallocated);
    return avgArr;
  }
};

function reallocateByNumberLength(arr) {
  let reallocatedArr = [[], [], []];
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (1 === elem.toString().length) {
      reallocatedArr[0].push(elem);
    } else if (2 === elem.toString().length) {
      reallocatedArr[1].push(elem);
    } else if (3 === elem.toString().length) {
      reallocatedArr[2].push(elem);
    }
  }
  return reallocatedArr;
}

function calculate2DArrAverage(twoDArr) {
  let avgArr = [];
  if (0 === twoDArr[0].length && 0 === twoDArr[1].length) {
    avgArr[0] = calculate1DArrAvg(twoDArr[2]);
  } else {
    avgArr = twoDArr.map(elem => {
      return calculate1DArrAvg(elem);
    });
  }
  return avgArr;
}

function calculate1DArrAvg(oneDArr) {
  return oneDArr.reduce((pre, cur) => pre + cur) / oneDArr.length;
}

module.exports = even_group_calculate_average;
