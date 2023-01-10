let c = 0;

let id = setInterval(() => {
    console.log(c++);
    ++c;
}, 200);

setTimeout(() => {
    clearInterval(id);
}, 2000)