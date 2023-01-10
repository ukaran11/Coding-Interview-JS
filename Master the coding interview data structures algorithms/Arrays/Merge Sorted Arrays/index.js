const mergeSortedArrays = (array1, array2) => {
  const mergedArray = [];

  if(array1.length === 0) {
    return array2;
  }
  
  if(array2.length === 0) {
    return array1;
  }

  // let array1Item = array1[0]
  // let array2Item = array2[0]
  let i = 0, j =0;
console.log(array1.length);
  while(array1[i] !== null && array2[j] !== null) {
    if(array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
      
    }
  }
  while(array1[i] !== null){
    mergedArray.push(array1[i]);
    i++;
  }
  console.log(array2[j] !== null);
  while(array2[j]){
    mergedArray.push(array2[j]);
    j++;
  }

  return mergedArray;
}
console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));
