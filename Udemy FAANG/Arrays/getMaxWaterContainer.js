const heights1 = [4, 8, 1, 2, 3, 9];
const heights2 = [7, 1, 2, 3, 9];

// Brute Force Solution
const getMaxWaterContainer = (heights) => {
  let maxArea = 0;
  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};


// Optimized Solution
const getMaxWaterContainerOptimized = (heights) => {
  let maxArea = 0;
  let p1 = 0;
  let p2 = heights.length - 1;
  // console.log(p1,p2,maxArea);
  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (p1 <= p2) {
      p1 += 1;
    } else {
      p2 -= 1;
    }
  }
  return maxArea;
};


console.log(getMaxWaterContainer(heights1));
console.log(getMaxWaterContainer(heights2));
console.log(getMaxWaterContainerOptimized(heights1));
console.log(getMaxWaterContainerOptimized(heights2));


