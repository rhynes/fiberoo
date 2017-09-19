function fib() {
  const arr = [0, 1];
  for (let i = 2; i < 100; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
}

function numsToStrings(arr) {
  return _.map(arr, n => n.toString());
}

function numEvenNums(arr) {
  return _.reduce(_.filter(arr, a => (a % 2 === 0)), a => (a + 1), 0);
}

console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
