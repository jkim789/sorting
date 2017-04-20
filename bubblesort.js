function bubbleSort(array){

 for (var j = array.length; j > 0 ;j--){
    var swapped = false;
    for (var i = 0; i < j - 1; i++){
        if (array[i] > array[i + 1]){
            swapped = true;
            bubbleSort.swap(array, i);
        }
    }
    if (!swapped) break;
 }
return array;
}

bubbleSort.swap = function(array, i){
    var firstElem = array[i];
    array[i] = array[i + 1];
    array[i + 1] = firstElem;
};
