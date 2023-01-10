const lengthOfLongestSubstringKDistinct = (s, k) => {
  let windowStart = 0;
  const soFar = new Map();
  let max = 0;

  for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];

    if(!soFar.get(rightChar)) soFar.set(rightChar, 1);
    else soFar.set(rightChar, soFar.get(rightChar) + 1);

    while(soFar.size > k) {
      leftChar = s[windowStart];

      if(soFar.get(leftChar) > 1) soFar.set(leftChar, soFar.get(leftChar) - 1);
      else soFar.delete(leftChar);

      windowStart++;
    }

    max = Math.max(max, (windowEnd - windowStart) + 1);
  }

  return max;
}

console.log(lengthOfLongestSubstringKDistinct('ebecb', 2));