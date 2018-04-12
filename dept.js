console.log('Hello, there');

var toiletriesDept = {name : 'toiletries', total: 5007};
    groceriesDept = {name : 'groceries', total: 11089};
    pharmacyDept = {name: 'pharmacy', total: 7321};
    bakeryDept = {name: 'bakery', total: 10073};
    butcheryDept = {name: 'butchery', total: 9053};

/*console.log(toiletriesDept.name);
console.log(groceriesDept.name);
console.log(pharmacyDept.name);
console.log(bakeryDept.name);
console.log(butcheryDept.name);
*/
var depts = [];

depts.push(toiletriesDept);
depts.push(groceriesDept);
depts.push(pharmacyDept);
depts.push(bakeryDept);
depts.push(butcheryDept);
for(var i=0; i<depts.length; i++){
   console.log(depts[i].total);
}

function grandTotal(depts){
  var parts = [];

  for(var i=0; i<depts.length; i++){
    parts.push(depts);
    console.log(parts[i].total);
  }
}
