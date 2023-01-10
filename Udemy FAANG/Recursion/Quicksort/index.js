const array = [5,3,1,6,4,2];
const kToFind = 4;

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const getPartition = (nums, left, right) => {
  const pivotElement = nums[right];
  let partitionIdx = left;

  for(let j = left; j< right; j++) {
    if(nums[j] <= pivotElement) {
      swap(nums, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(nums, partitionIdx, right);

  return partitionIdx;
}

const quickSort = (nums, left, right) => {
  if(left < right) {
    const partitionIdx = getPartition(nums, left, right);

    quickSort(nums, left, partitionIdx - 1);
    quickSort(nums, partitionIdx+1, right);
  }
}

const findKthLargest = (nums, k) => {
  const indexToFind = nums.length - k;
  quickSort(nums, 0, nums.length -1);
  return nums[indexToFind];
}

console.log(findKthLargest(array, kToFind));