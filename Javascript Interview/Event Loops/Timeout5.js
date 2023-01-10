// Priority 
// microtask >> macrotask
// process.nexttick, promises, async >> settimeout, setinterval, set

setTimeout(() => {
  console.log(1);
}, 0);

console.log(2);

Promise.resolve().then(() => {
  console.log(3);
});

setTimeout(() => {
  console.log(4);
}, 0);

console.log(5);


// Output
// 2
// 5
// 3
// 1
// 4