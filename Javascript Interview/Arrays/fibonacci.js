
const fibonacciMaster = () => {
    calcs = 0;
    let cache = {};
    return fib = (n) => {
        calcs++
        if (n in cache) {
            return cache[n];
        } else {
            if (n <2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2)
                return cache[n];
            }
        }
    } 
}

callfib = fibonacciMaster();
console.log(calcs)
console.log(callfib(12))
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144