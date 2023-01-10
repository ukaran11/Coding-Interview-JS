const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3));

const curryUnaryFunction = a => b => c => a+b+c;
curryUnaryFunction(1);
curryUnaryFunction(1)(2);
curryUnaryFunction(1)(2)(3);

console.log(curryUnaryFunction(1)(2)(3));