function mostProfitable (list){
  var total = [];
  
 // console.log(list);
  for(var i=0; i<list.length; i++){
   	total.push(list[i].total)
    var max = Math.max.apply(null, total);
    if(max === list[i].total){
      var department = list[i].name;
    }
  }
  return department;
}
