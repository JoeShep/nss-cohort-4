/*
 test("name of test", function(){
  deepEqual(actual, expected, "my test message");
});
*/


test("add", function(){
  deepEqual( add(2,3), 5, "Adding 2 and 3");
  deepEqual( add(9,3), 12, "Adding 9 and 3");
  deepEqual( add(-2,3), 1, "Adding -2 and 3");
  deepEqual( add(90,0), 90, "Adding 90 and 0");
});


test("sum", function(){
  deepEqual(sum([11, 3, 8]), 22, "Summing 11, 3 & 8");
});

test("makeCatWithName", function(){
  deepEqual(makeCatWithName('fluffy').name, "fluffy", "Cat's name should be fluffy");
});
