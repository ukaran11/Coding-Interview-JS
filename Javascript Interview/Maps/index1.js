const myArray = [1,2,3,4,5, 5, 5, 1, 2]
const mySet = new Set(myArray);

console.log(myArray);
console.log(mySet);

const uniqueArray = [...mySet];

console.log(uniqueArray);