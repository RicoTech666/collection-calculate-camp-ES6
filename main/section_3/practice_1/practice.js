function create_updated_collection(collection_a, collection_b) {
  return collection_a.map(elem => {
    if (collection_b.value.includes(elem.key)) {
      elem.count--;
    }
    return elem;
  });
}

module.exports = create_updated_collection;
