function count_same_elements(collection) {
  var countedObjFromCollection = countArrToObj(collection);
  return countObjToObjArray(countedObjFromCollection);
}

function countArrToObj(arr) {
  return arr.reduce(function(allElems, elem) {
    if (elem in allElems) {
      allElems[elem]++;
    } else {
      allElems[elem] = 1;
    }
    return allElems;
  }, {});
}

function countObjToObjArray(countedObj) {
  var objArray = [];
  for (var key in countedObj) {
    objArray.push({'key':key, 'count':countedObj[key]});
  }
  return objArray;
}

module.exports = count_same_elements;
