//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const firstRecurringCharacter = input => {
  let map = {};
  for (let i=0; i < input.length; i++) {
    console.log(map);
    if(map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = true;
    }
  }
  return undefined;
} 
console.log(firstRecurringCharacter([1,5,5,1,3,4,6]));
