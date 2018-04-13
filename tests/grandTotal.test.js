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
  it('Should not give you a number less than 42543', function(){
    assert.isBelow(42543, grandTotal(depts))
  });
  it('Should give you a number morethan the total', function(){
    assert.isAtMost(42543, grandTotal(depts))
  });
});
