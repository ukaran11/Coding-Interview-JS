const memoizMultiplication = () => {
  let cache = {};
  return (value) => {
    if(value in cache) {
      console.log('Fetching from cache');
      return cache[value];
    } else {
      console.log('Calculating result');
      let result = fact(value)
      cache[value] = result;
      return result;
    }
  }
}

const fact = n => {
  if(n===1) return 1;

  return n * fact(n-1);
}
const multiplication = memoizMultiplication();
console.log(multiplication(1000));
console.log(multiplication(1000));

