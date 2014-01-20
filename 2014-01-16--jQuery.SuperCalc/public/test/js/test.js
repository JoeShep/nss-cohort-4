test( "containsChar", function() {
 deepEqual( containsChar("mouse", "u"), true, "The letter U is in 'mouse'" );
 deepEqual( containsChar("mouse", "z"), false, "The letter Z is not in 'mouse'");
});


