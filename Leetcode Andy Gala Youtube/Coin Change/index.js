const coinChange = (coins, amount) => {
  const table = new Array(amount + 1).fill(Infinity);
  // console.log('table', table);
  table[0] = 0;

  for(let coin of coins) {
    for(let i=0; i < table.length; i++) {
      console.log('coin', coin);
      console.log('i', i);
      if(coin <= i) {
        let idx = i - coin;
        let potentialAmt = table[idx] + 1;
        table[i] = Math.min(potentialAmt, table[i]);
      }  
      console.log('table', table);
    }
  }
  return table[table.length - 1] === Infinity ? -1: table[table.length - 1];
}

console.log(coinChange([1,3,4,5], 7));