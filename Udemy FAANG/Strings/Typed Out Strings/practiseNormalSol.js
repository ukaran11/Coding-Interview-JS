const string1 = "ab#z";
const string2 = "az#z";

const buildString = str => {
  let temp = [];
  for(let i=0; i<str.length; i++) {
    if(str[i] !== '#'){
      temp.push(str[i]);
    } else {
      temp.pop();
    }
  }
  return temp;
}

const backspaceCompare = (S,T) => {
  const string1 = buildString(S)
  const string2 = buildString(T)

  if(string1.length !== string2.length) {
    return false;
  }

  for(let i=0; i<string1.length; i++) {
    if(string1[i] !== string2[i]){
      return false
    }
  }
  return true;
}

console.log(backspaceCompare(string1, string2));