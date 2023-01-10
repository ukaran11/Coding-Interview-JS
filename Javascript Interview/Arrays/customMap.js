const array = [1, 4, 9, 16];

const kvArray = [
    {key: 1, value:10},
    {key: 2, value:20},
    {key: 3, value:30},
];

Array.prototype.customMap  = function(cb) {
    let newArr = [];
    for(let i=0; i< this.length; i++){
        newArr.push(cb(this[i], i))
    }

    return newArr;
}

let newArray = array.customMap((x) => x *2);

console.log(newArray);