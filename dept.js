//console.log('Hello, there');

var toiletriesDept = {name : 'toiletries', total: 5007};
    groceriesDept = {name : 'groceries', total: 11089};
    pharmacyDept = {name: 'pharmacy', total: 7321};
    bakeryDept = {name: 'bakery', total: 10073};
    butcheryDept = {name: 'butchery', total: 9053};

var depts = [];
depts.push(toiletriesDept);
depts.push(groceriesDept);
depts.push(pharmacyDept);
depts.push(bakeryDept);
depts.push(butcheryDept);

function grandTotal(){
  var empty = [];

  for(var i=0; i<depts.length; i++){
    var eachT = depts[i].total
    // console.log(eachT);
    empty.push(eachT)
    console.log(empty[i]);
  }
}
grandTotal();















// console.log('Hello, there');
//
// var toiletriesDept = {name : 'toiletries', total: 5007};
//     groceriesDept = {name : 'groceries', total: 11089};
//     pharmacyDept = {name: 'pharmacy', total: 7321};
//     bakeryDept = {name: 'bakery', total: 10073};
//     butcheryDept = {name: 'butchery', total: 9053};
//
// /*console.log(toiletriesDept.name);
// console.log(groceriesDept.name);
// console.log(pharmacyDept.name);
// console.log(bakeryDept.name);
// console.log(butcheryDept.name);
// */
// var depts = [];
//
// depts.push(toiletriesDept);
// depts.push(groceriesDept);
// depts.push(pharmacyDept);
// depts.push(bakeryDept);
// depts.push(butcheryDept);
// for(var i=0; i<depts.length; i++){
//    console.log(depts[i].total);
// }
//
// function grandTotal(depts){
//   var partments = [];
//
//   for(var i=0; i<depts.length; i++){
//     partments.push(depts);
//     console.log(partments[i].total);
//   }
// }
