const uniquePaths = (m,n) => {
  const table = Array.from({length: m}, () => new Array(n));
  console.log(table);
  console.log(table[0]);
  for(let i =0; i < table.length; i++) table[i][0] = 1
  for(let i =0; i <table[0].length; i++) table[0][i] = 1;

  for(let i = 1; i< table.length; i++) {
    for(let j = 1; j < table[i].length; j++) {
      table[i][j] = table[i-1][j] + table[i][j-1];
    }
  }
  
  console.log(table);
  return table[m-1][n-1];
}
console.log(uniquePaths(3,3));
