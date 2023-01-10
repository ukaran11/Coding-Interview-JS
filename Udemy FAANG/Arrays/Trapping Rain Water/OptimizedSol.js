const trap = (heights) => {
  let left = 0;
  let right = heights.length - 1;
  totalWater = 0;
  maxLeft = 0;
  maxRight = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }
      right--;
    }
  }
  return totalWater;
};

const heights = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(heights));