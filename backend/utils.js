export function sampleDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
