function split(wholeArray) {
  var half = Math.ceil(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, half);
  var secondHalf = wholeArray.slice(half);

  return [firstHalf, secondHalf];
}


function merge (arr1, arr2) {
  var sortedArray = [];
  var index1 = 0;
  var index2 = 0;
  while (arr1.length > index1 || arr2.length > index2) {
    if (arr1[index1] < arr2[index2] || !arr2[index2]) {
      sortedArray.push(arr1[index1]);
      index1++;
    } else {
      sortedArray.push(arr2[index2]);
      index2++;
    }
  }
  return sortedArray;
}


function mergeSort(array) {
  if (array.length > 2) return array;
  var splitArr = split(array);
  return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
}
