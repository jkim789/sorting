describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles sorting', function(){
    expect( bubbleSort([4,78,2,1,13,32]) ).toEqual( [1,2,4,13,32,78] );
  });

describe('Swap', function(){
    it('is a function', function(){
        expect( typeof bubbleSort.swap).toBe('function')
    })
    beforeEach(function () {
        spyOn(bubbleSort, 'swap').and.callThrough(); // replace existing `tootsiepop['eat']` method
    });
    it('', function () {
        bubbleSort([2,5,1,50]);
        expect(bubbleSort.swap.calls.count()).toEqual(2);
    });
    
})



});