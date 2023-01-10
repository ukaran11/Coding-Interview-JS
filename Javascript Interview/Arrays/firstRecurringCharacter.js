const firstRecurringCharacter = (input) => {
    let map = {};
    for (let i=0; i< input.length; i++){
        // if(map[input[i]] !== undefined){
        if(input[i] in map){
            console.log(map)
            return input[i];
        } else {
            map[input[i]] = i;
        }
    }
    console.log(map)
    return undefined;
}



// VER1
const firstRecurringCharacter1 = (input) => {
    for (let i=0; i < input.length; i++){
        for (let j=i+1; j < input.length; j++){
            if(input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
}

console.log(firstRecurringCharacter([2,5,5,2,3]));

