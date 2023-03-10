const subsets = nums => {
  // global result
  const result = [];

  // dfs recursive helper
  const dfs = (i, nums, slate) => {
    // base case
    if(i === nums.length) {
      result.push(slate.slice());
      return;
    }

    // dfs recursive case
    // exclude
    dfs(i+1, nums, slate);

    // include
    slate.push(nums[i]);
    dfs(i+1, nums, slate);
    slate.pop();
  }

  dfs(0, nums, []);
  return result;
}

console.log(subsets([1,2,3]));
