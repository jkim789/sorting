function split(wholeArray) {
  var half = Math.ceil(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, half);
  var secondHalf = wholeArray.slice(half);

  return [firstHalf, secondHalf];
}


function merge (arr1, arr2) {
  var sortedArray = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sortedArray.push(arr1.shift());
    } else {
      sortedArray.push(arr2.shift());
    }
  }
  return sortedArray.concat(arr1.length ?  arr1 : arr2);
}
