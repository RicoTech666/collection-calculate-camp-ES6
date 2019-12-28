function create_updated_collection(collection_a, object_b) {
  var collectionACounted = count_same_elements(collection_a);
  for (var i = 0; i < collectionACounted.length; i++) {
    for (var j = 0; j < object_b.value.length; j++) {
      if (collectionACounted[i].key === object_b.value[j]) {
        collectionACounted[i].count -= Math.floor(collectionACounted[i].count / 3);
      }
    }
  }
  return collectionACounted;
}

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

module.exports = create_updated_collection;
