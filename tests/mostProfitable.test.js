describe('mostProfitable', function(){
  it('should return the name of the department with the highest value', function(){
    assert.deepEqual('Bakery', mostProfitable(total))
  });
  it('should give you an error message', function(){
    assert.notDeepEqual('Fresh Fruits', mostProfitable(total))
  });
});
