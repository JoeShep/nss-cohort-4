function add(x,y) {
  return x + y;
}

function sum(array) {
  var total = 0
  for(var i=0; i < array.length; i++) {
    total += array[i];
  }
    return total;
}

function makeCatWithName(name) {
   return {name:name};
}
