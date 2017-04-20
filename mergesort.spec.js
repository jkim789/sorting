describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    });
  it('is able to split an odd number of elements in the array into two halves', function (){
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [4, 5]]);
  })
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1, 3], [2, 5])).toEqual([1, 2, 3, 5]);
  });
});
