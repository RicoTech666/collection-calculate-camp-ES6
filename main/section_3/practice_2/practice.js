function create_updated_collection(collection_a, collection_b) {
  return collection_a.map(elem => {
    if (collection_b.value.includes(elem.key)) {
      elem.count -= Math.floor(elem.count / 3);
    }
    return elem;
  });
}
module.exports = create_updated_collection;
