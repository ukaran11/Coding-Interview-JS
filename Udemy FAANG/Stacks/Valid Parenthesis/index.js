const string = "(()[])";

const parens = {
  '(': ')',
  '{': '}',
  '[': ']'
};

const isValid = s => {
  if(s.length <= 0) return true;

  let stack = [];
  for(let i=0; i< s.length; i++){
    if(parens[s[i]]){
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket]
      if(s[i] !== correctBracket) {
        console.log(s[i]);
        return false;
    }
  }
}
console.log('stack', stack);
  return stack.length === 0;
}

console.log(isValid(string))