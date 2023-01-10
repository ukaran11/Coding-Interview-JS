const string = "A man, a plan, a canal,: Panama";

const isValidPalindrome = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
 
  // initialize left/right pointers at start and end of string respectively
  let left = 0, right =s.length - 1;

  while (left < right) {
    if(s[left] !== s[right]){
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isValidPalindrome(string));