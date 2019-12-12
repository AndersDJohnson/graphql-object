const graphql = (object, document) => {
  const agg = {};

  const recurse = (field, path = []) => {
    if (field.selectionSet) {
      for (const sel of field.selectionSet.selections) {
        const name = sel.name.value;
        const newPath = [...path, name];

        let host = object;
        let target = agg;
        for (const p of path) {
          host = host[p] || {};
          target = target[p] || {};
        }

        // leaf
        if (!sel.selectionSet) {
          const value = host[name];
          target[name] = value;
        }
        // not leaf
        else {
          target[name] = {};
        }

        recurse(sel, newPath);
      }
    }
  };

  recurse(document.definitions[0]);

  return agg;
};

export { graphql };

export default graphql;
