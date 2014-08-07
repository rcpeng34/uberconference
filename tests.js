'use strict';

if (typeof module !== 'undefined') {
  var chai = require('chai');
  var stakeout = require('./stakeout');
}

var expect = chai.expect;


describe ('stakeout', function(){

  it('should satisfy example cases', function(){
    // [ 20, 10, 50, 5, 1 ] should return 71
    expect(stakeout([20,10,50,5,1])).to.equal(71);
    // [ 20, 50, 10, 1, 5 ] should return 51
    expect(stakeout([20,50,10,1,5])).to.equal(55);
  });

  it('should handle arrays of length < 4', function(){
    expect(stakeout([4,4,8])).to.equal(12);
  });
  
  it('should handle arrays of constant value', function(){
    // array of even length, constant value: [3,3,3,3,3,3,3,3] should return 12
    expect(stakeout([3,3,3,3,3,3,3,3])).to.equal(12);
    // array of odd length, constant value: [3,3,3,3,3,3,3] should return 12
    expect(stakeout([3,3,3,3,3,3,3])).to.equal(12);
  });
  
  it('should accept negative values', function(){
    // array with negative values: [2,5,2,-3,7,-4] should return 12
    expect(stakeout([2,5,2,-3,7,-4])).to.equal(12);
    // array with blocks of negative values: [4,2,1,-4,-5,-6,2,6,5] should return 12
    expect(stakeout([4,2,1,-4,-5,-6,2,6,5])).to.equal(12);
  });
  
  it('should work with outlier values', function(){
    expect(stakeout([2,1,5,10,4])).to.equal(12);
  });
  
});
