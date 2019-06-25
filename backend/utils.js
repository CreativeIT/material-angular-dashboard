export function sampleDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function sorting(query) {
  let condition = [];
  if ('sortColumn' in query && 'order' in query) {
    if (+query.order === 1) {
      condition.push([query['sortColumn'], 'ASC']);
    }
    if (+query.order === -1) {
      condition.push([query['sortColumn'], 'DESC']);
    }
  } else {
    condition.push(['id', 'DESC']);
  }
  return condition;
}

export function countBy(collection, key) {
  return collection.reduce(
    (counter, current) => ({
      ...counter,
      [current[key]]: (counter[current[key]] || 0) + 1,
    }),
    {},
  );
}
