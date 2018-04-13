var depts = [
  {name : 'toiletries', total: 5007},
  {name : 'groceries', total: 11089},
  {name: 'pharmacy', total: 7321},
  {name: 'bakery', total: 10073},
  {name: 'butchery', total: 9053}];

describe('grandTotal', function(){
  it('should give you a total of all the departmemts', function(){
    assert.deepEqual(42543, grandTotal(depts));
  });
  it('should give you a total as a number & not a string', function(){
    assert.notDeepEqual('', grandTotal(depts));
  });
  it('Expected 12370 to equal 42543', function(){
    assert.isBelow(12370, grandTotal(depts))
  });
  it('Expected 67343 to equal 42543', function(){
    assert.isAtMost(67343, grandTotal(depts))
  });
});
