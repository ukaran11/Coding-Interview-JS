const welcome = (name) => {
  const greetingInfo = msg => {
    console.log(name + ' ' + msg);
  }
  return greetingInfo;
}


const myfunc = welcome('utsav')
console.log(myfunc);

const msg = myfunc('hello')
// console.log(msg);