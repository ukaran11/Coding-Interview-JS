const makeAddition = (x) => {
  // parameter 'x' is an inner variable 
  // inner func 'add()' uses 'x', so
  // it has a closure over 'x'
  const add = y => {
    return y + x;
  }
  return add;
} 

const plusOne = makeAddition(1);  // x is 1, plusOne has a reference to add(y) 
const plusTen = makeAddition(10); // x is 10
console.log(plusOne);
console.log(plusTen);

console.log(plusOne(10));
console.log(plusTen(10));