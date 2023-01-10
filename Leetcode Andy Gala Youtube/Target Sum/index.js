const findTargetSumWays = (nums, target) => {
  // global result
  let result = 0;

  const dfs = (i, nums, target, runningSum) => {
    // base case
    if(i === nums.length) {
      if (runningSum === target) {
        result++;
      }
      return;
    }

    // dfs recursive helper

    //include positive
    runningSum += nums[i];
    dfs(i + 1, nums, target, runningSum);
    runningSum -= nums[i];

    // include negative
    runningSum -= nums[i];
    dfs(i + 1, nums, target, runningSum);
    runningSum += nums[i];
  }

  dfs(0, nums, target, 0);
  return result;
}

console.log(findTargetSumWays([1,1,1,1,1], 3))