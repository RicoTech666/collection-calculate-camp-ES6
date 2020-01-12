function create_updated_collection(collection_a, object_b) {
  let collectionACounted = count_same_elements(collection_a);
  return collectionACounted.map(elem => {
    if (object_b.value.includes(elem.key)) {
      elem.count -= Math.floor(elem.count / 3);
    }
    return elem;
  });
}

function count_same_elements(collection) {
  let countedObjFromCollection = countArrToObj(collection);
  return countObjToObjArray(countedObjFromCollection);
}

function countArrToObj(arr) {
  return arr.reduce((allElems, elem) => {
    if (elem in allElems) {
      allElems[elem]++;
    } else {
      allElems[elem] = 1;
    }
    return allElems;
  }, {});
}

function countObjToObjArray(countedObj) {
  let objArray = [];
  for (let key in countedObj) {
    objArray.push({ key: key, count: countedObj[key] });
  }
  return objArray;
}

module.exports = create_updated_collection;
