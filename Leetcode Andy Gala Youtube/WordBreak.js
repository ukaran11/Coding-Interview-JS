const wordBreak = (s, wordDict) => {
  const table = new Array(s.length + 1).fill(false);

  table[0] = true;

  for(let i =0; i < table.length; i++) {
    if (table[i] === false) continue;

    for(let j=i+1; j < table.length; j++) {
      console.log('i',i);
      console.log('j',j);
      console.log('s.slice(i, j)', s.slice(i, j));
      if (wordDict.includes(s.slice(i, j))) {
        table[j] = true;
      }
      console.log('table', table);
    }
  }
  return table[table.length - 1];
}

console.log(wordBreak('leetcode', ['leet', 'code']));