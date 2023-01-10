/*
Recurrence relation:

minCost(i) = cost[i] + min(minCost(i - 1), minCost(i - 2));
minCost(0) = cost[0];
minCost(1) = cost[1];

*/
// import Math from 'Math';

const minCostClimbingStairs = cost => {
  const n = cost.length;
  return Math.min(minCost(n - 1, cost),
    minCost(n - 2, cost));
}

const minCost = (i, cost) => {
  if (i < 0) return 0;
  if (i == 0 || i == 1) return cost[i];
  return cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));
}

console.log(minCostClimbingStairs([4,6,3,5]));