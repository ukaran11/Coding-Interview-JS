const reverse = str => {
  if(!str || typeof str !== 'string' || str.length < 2) {
    return str;
  }

  const backwards = [];
  for(let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

const reverse2 = str => {
  return str.split('').reverse().join();
}

console.log(reverse('?uoy era woh olleh'));
