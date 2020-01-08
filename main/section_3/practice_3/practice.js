function create_updated_collection(collection_a, object_b) {
  let collectionACounted = count_same_elements(collection_a);
  for (let i = 0; i < collectionACounted.length; i++) {
    for (let j = 0; j < object_b.value.length; j++) {
      if (collectionACounted[i].key === object_b.value[j]) {
        collectionACounted[i].count -= Math.floor(
          collectionACounted[i].count / 3
        );
      }
    }
  }
  return collectionACounted;
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
